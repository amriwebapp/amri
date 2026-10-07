"""Regenera las páginas de receta (carcasa HTML) a partir de recetas/data/<slug>.es.js

Si el archivo tiene «recetas», es un libro: crea la página del libro (recetas/<slug>.html)
y una página por cada receta de dentro (recetas/<slug>--<receta>.html).
También escribe assets/libros.js, el índice de libros que usan la portada y el plugin."""
import os,re,glob,json,subprocess
os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)),'..'))
tpl=open('tools/_head.html',encoding='utf-8').read()

LOGO='<svg class="bwm" viewBox="315 436.5 389 130" role="img" aria-label="AMRI"><path d="M325.5,556L368.5,456L411.5,556M347,523L390,523" fill="none" class="ai" stroke-width="21" stroke-linecap="round" stroke-linejoin="round"/><path d="M445.5,556L445.5,456L493.5,514L541.5,456L541.5,556" fill="none" class="mr" stroke-width="21" stroke-linecap="round" stroke-linejoin="round"/><path d="M577.5,556L577.5,456L611.1,456C648.9,456,648.9,512,611.1,512L577.5,512M612.5,512L647.5,556" fill="none" class="mr" stroke-width="21" stroke-linecap="round" stroke-linejoin="round"/><path d="M674.5,556L674.5,496" fill="none" class="ai" stroke-width="21" stroke-linecap="round" stroke-linejoin="round"/><path class="ais" d="M674.5,447C677.92,462.58 677.92,462.58 693.5,466C677.92,469.42 677.92,469.42 674.5,485C671.08,469.42 671.08,469.42 655.5,466C671.08,462.58 671.08,462.58 674.5,447Z"/></svg>'

def load(f):
    js=(f"global.window={{}};require('./{f}');const p=window.RECIPE.es;delete p.R;"
        "(p.recetas||[]).forEach(r=>{delete r.steps;delete r.apps;delete r.ing});console.log(JSON.stringify(p))")
    return json.loads(subprocess.check_output(['node','-e',js]))

def page(dest,slug,rec,title,metas,ing,q):
    head=re.sub(r'<title>.*?</title>',f"<title>{title} · AMRI</title>",tpl)
    meta=''.join(f'<span>{m}</span>' for m in metas)
    back='Volver al libro' if rec else 'Volver a la plataforma'
    back_href=f'{slug}.html' if rec else '../index.html'
    rattr=f' data-receta="{rec}"' if rec else ''
    body=f'''<body data-slug="{slug}"{rattr}>
<main>
<a class="abrand" href="../index.html"><span class="logo"><img src="../img/brand/amri-monograma.svg" alt="" width="34" height="34"></span>{LOGO} <span class="sub">Plataforma de IA</span></a>
<a class="back" href="{back_href}">← {back}</a>
<h1 id="rh1">{title}</h1>
<div class="meta" id="rmeta">{meta}</div>
<div class="ing"><h2 id="ring">{ing}</h2><ul id="ing"></ul></div>
<p style="margin:0 0 6px"><b id="rq">{q}</b></p>
<div class="pick" role="group"></div>
<div class="custom" id="cu"><textarea id="cx"></textarea>
<div class="yn"><span id="ryn"></span><button class="chip" data-yn="1">Sí</button><button class="chip" data-yn="0">No</button></div>
<div class="tip" id="ryntip"></div></div>
<div class="prog"><div class="bar"><i id="bar"></i></div><div class="pl" id="pt"></div></div>
<div id="steps"></div>
<div class="fin" id="fin"><h2 id="rfinh"></h2><p id="rfin"></p></div>
<h2 class="xt" id="rxt"></h2><p class="xs" id="rxs"></p><div id="extras"></div>
<section id="comunidad" class="comunidad"></section>
<div class="foot"><a class="back" href="{back_href}" style="margin:18px 0 0">← {back}</a><button class="reset" id="reset"></button></div>
<div class="afoot"><a href="../index.html">AMRI</a> · Plataforma abierta de IA · © 2026 AMRI</div>
</main>
<script src="data/{slug}.es.js"></script>
<script src="../assets/libro.js"></script>
<script src="../i18n.js"></script>
<script src="../assets/logos.js"></script>
<script src="../assets/motor.js"></script>
<script src="../assets/plugin-map.js"></script>
<script src="../assets/receta.js"></script>
<script src="../assets/datos.js"></script>
<script src="../assets/guia.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script src="../assets/cuenta.js"></script>
</body>
</html>
'''
    open(dest,'w',encoding='utf-8').write(head+body)

LIBROS={}
for f in sorted(glob.glob('recetas/data/*.es.js')):
    slug=os.path.basename(f)[:-6]
    dest=f'recetas/{slug}.html'
    if os.path.exists(dest) and 'http-equiv="refresh"' in open(dest,encoding='utf-8').read():
        print('skip',slug,'(redirección)')
        continue
    P=load(f)
    page(dest,slug,'',P['title'],P['meta'],P['ing'],P.get('q',''))
    recs=P.get('recetas',[])
    for r in recs:
        page(f"recetas/{slug}--{r['s']}.html",slug,r['s'],r['t'],r.get('meta',[]),r.get('ingT','Ingredientes'),r.get('q',''))
    if recs:
        LIBROS[slug]=[{'s':r['s'],'t':r['t'],'d':r.get('d','')} for r in recs]
    print('ok',slug,f'({len(recs)} recetas)' if recs else '')

# Páginas de recetas que ya no existen en ningún libro
for p in glob.glob('recetas/*--*.html'):
    lib,rec=os.path.basename(p)[:-5].split('--',1)
    if not any(r['s']==rec for r in LIBROS.get(lib,[])):
        os.remove(p); print('borrada',p)

open('assets/libros.js','w',encoding='utf-8').write(
    '/* Generado por tools/shells.py: recetas de cada libro */\nwindow.AMRI_LIBROS='+json.dumps(LIBROS,ensure_ascii=False,separators=(',',':'))+';\n')

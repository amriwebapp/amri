"""Regenera las páginas de receta (carcasa HTML) a partir de recetas/data/<slug>.es.js"""
import os,re,glob,json,subprocess
os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)),'..'))
tpl=open('tools/_head.html',encoding='utf-8').read()
for f in sorted(glob.glob('recetas/data/*.es.js')):
    slug=os.path.basename(f)[:-6]
    P=json.loads(subprocess.check_output(['node','-e',f"global.window={{}};require('./{f}');const p=window.RECIPE.es;delete p.R;console.log(JSON.stringify(p))"]))
    head=re.sub(r'<title>.*?</title>',f"<title>{P['title']} · AMRI</title>",tpl)
    meta=''.join(f'<span>{m}</span>' for m in P['meta'])
    langs=[l for l in ('es','en','ar') if os.path.exists(f'recetas/data/{slug}.{l}.js')]
    data=''.join(f'<script src="data/{slug}.{l}.js"></script>\n' for l in langs)
    body=f'''<body data-slug="{slug}">
<main>
<a class="abrand" href="../index.html"><span class="logo"><img src="../img/brand/amri-monograma.svg" alt="" width="34" height="34"></span><svg class="bwm" viewBox="315 436.5 389 130" role="img" aria-label="AMRI"><path d="M325.5,556L368.5,456L411.5,556M347,523L390,523" fill="none" class="ai" stroke-width="21" stroke-linecap="round" stroke-linejoin="round"/><path d="M445.5,556L445.5,456L493.5,514L541.5,456L541.5,556" fill="none" class="mr" stroke-width="21" stroke-linecap="round" stroke-linejoin="round"/><path d="M577.5,556L577.5,456L611.1,456C648.9,456,648.9,512,611.1,512L577.5,512M612.5,512L647.5,556" fill="none" class="mr" stroke-width="21" stroke-linecap="round" stroke-linejoin="round"/><path d="M674.5,556L674.5,496" fill="none" class="ai" stroke-width="21" stroke-linecap="round" stroke-linejoin="round"/><path class="ais" d="M674.5,447C677.92,462.58 677.92,462.58 693.5,466C677.92,469.42 677.92,469.42 674.5,485C671.08,469.42 671.08,469.42 655.5,466C671.08,462.58 671.08,462.58 674.5,447Z"/></svg> <span class="sub">Academia de IA</span></a>
<a class="back" href="../index.html">← Volver a la academia</a>
<h1 id="rh1">{P['title']}</h1>
<div class="meta" id="rmeta">{meta}</div>
<div class="ing"><h2 id="ring">{P['ing']}</h2><ul id="ing"></ul></div>
<p style="margin:0 0 6px"><b id="rq">{P['q']}</b></p>
<div class="pick" role="group"></div>
<div class="custom" id="cu"><textarea id="cx"></textarea>
<div class="yn"><span id="ryn"></span><button class="chip" data-yn="1">Sí</button><button class="chip" data-yn="0">No</button></div>
<div class="tip" id="ryntip"></div></div>
<div class="prog"><div class="bar"><i id="bar"></i></div><div class="pl" id="pt"></div></div>
<div id="steps"></div>
<div class="fin" id="fin"><h2 id="rfinh"></h2><p id="rfin"></p></div>
<h2 class="xt" id="rxt"></h2><p class="xs" id="rxs"></p><div id="extras"></div>
<section id="comunidad" class="comunidad"></section>
<div class="foot"><a class="back" href="../index.html" style="margin:18px 0 0">← Volver a la academia</a><button class="reset" id="reset"></button></div>
<div class="afoot"><a href="../index.html">AMRI</a> · Academia abierta de IA · © 2026 AMRI</div>
</main>
{data}<script src="../i18n.js"></script>
<script src="../assets/logos.js"></script>
<script src="../assets/motor.js"></script>
<script src="../assets/plugin-map.js"></script>
<script src="../assets/receta.js"></script>
<script src="../assets/datos.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script src="../assets/cuenta.js"></script>
</body>
</html>
'''
    open(f'recetas/{slug}.html','w',encoding='utf-8').write(head+body)
    print('ok',slug,langs)

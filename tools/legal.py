"""Genera las páginas legales (aviso-legal, privacidad, cookies). Edita DATOS y ejecuta: python3 tools/legal.py"""
import os
os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)),'..'))
# ⚠️ Rellena estos datos antes de publicar
DATOS=dict(titular="[Nombre y apellidos o razón social]",nif="[NIF/NIE/CIF]",domicilio="[Dirección completa]",
           email="[correo de contacto]",dominio="amri.es",fecha="1 de octubre de 2026")
head=open('perfil.html',encoding='utf-8').read().split('<body')[0]
def page(slug,title,body):
    h=head.replace('<title>AMRI · Tu perfil</title>',f'<title>{title} · AMRI</title>').replace('<meta name="robots" content="noindex">','')
    return h+f'''<body>
<header class="top scrolled"><div class="nav">
  <a class="brand" href="index.html" aria-label="AMRI"><span class="logo"><img src="img/brand/amri-monograma.svg" alt="" width="34" height="34"></span><svg class="bwm" viewBox="315 436.5 389 130" role="img" aria-label="AMRI"><path d="M325.5,556L368.5,456L411.5,556M347,523L390,523" fill="none" class="ai" stroke-width="21" stroke-linecap="round" stroke-linejoin="round"/><path d="M445.5,556L445.5,456L493.5,514L541.5,456L541.5,556" fill="none" class="mr" stroke-width="21" stroke-linecap="round" stroke-linejoin="round"/><path d="M577.5,556L577.5,456L611.1,456C648.9,456,648.9,512,611.1,512L577.5,512M612.5,512L647.5,556" fill="none" class="mr" stroke-width="21" stroke-linecap="round" stroke-linejoin="round"/><path d="M674.5,556L674.5,496" fill="none" class="ai" stroke-width="21" stroke-linecap="round" stroke-linejoin="round"/><path class="ais" d="M674.5,447C677.92,462.58 677.92,462.58 693.5,466C677.92,469.42 677.92,469.42 674.5,485C671.08,469.42 671.08,469.42 655.5,466C671.08,462.58 671.08,462.58 674.5,447Z"/></svg> <span class="sub" data-i="brand_sub">Academia de IA</span></a>
  <div class="nav-right"></div>
</div></header>
<main class="pg legal">
  <a class="mini" href="index.html" data-i="back" style="display:inline-block;margin-bottom:22px">← Volver a la academia</a>
  <h1>{title}</h1>
  <p class="lead">Última actualización: {DATOS["fecha"]}</p>
  <div class="i18n-legal" data-i="legal_note"></div>
  <div class="card2 legal-body">{body}</div>
  <p class="note" style="margin-top:26px"><a href="aviso-legal.html">Aviso legal</a> · <a href="privacidad.html">Política de privacidad</a> · <a href="cookies.html">Política de cookies</a></p>
</main>
<script src="i18n.js"></script>
</body>
</html>
'''
D=DATOS
aviso=f'''
<h2>1. Titular del sitio web</h2>
<p>En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de que el sitio web <b>{D["dominio"]}</b> (en adelante, «AMRI») es titularidad de:</p>
<ul><li><b>Titular:</b> {D["titular"]}</li><li><b>NIF:</b> {D["nif"]}</li><li><b>Domicilio:</b> {D["domicilio"]}</li><li><b>Correo electrónico:</b> {D["email"]}</li></ul>
<h2>2. Objeto</h2>
<p>AMRI es una academia gratuita y de código abierto que publica guías («recetas») para aprender a usar herramientas de inteligencia artificial. El acceso a los contenidos es libre y no requiere registro. El registro es voluntario y solo sirve para publicar proyectos en la comunidad y guardar el progreso de aprendizaje.</p>
<h2>3. Condiciones de uso</h2>
<p>Quien usa el sitio se compromete a hacerlo de forma lícita y a no publicar contenidos que infrinjan derechos de terceros, sean ilícitos, ofensivos o contengan datos personales de otras personas sin su consentimiento. Los proyectos enviados a la comunidad se revisan antes de publicarse y AMRI puede rechazarlos o retirarlos sin necesidad de aviso.</p>
<h2>4. Propiedad intelectual</h2>
<ul><li>El <b>código fuente</b> del sitio se publica bajo licencia <b>MIT</b>.</li>
<li>Los <b>textos y las ilustraciones propias</b> se publican bajo licencia <b>Creative Commons Reconocimiento-CompartirIgual 4.0 (CC BY-SA 4.0)</b>.</li>
<li>Los proyectos enviados por las personas usuarias siguen siendo de sus autores, que autorizan a AMRI a mostrarlos enlazados en la comunidad mientras no soliciten su retirada.</li></ul>
<h2>5. Marcas de terceros</h2>
<p>AMRI no está afiliada, patrocinada ni respaldada por Anthropic, Slack, GuruSup, Cloudflare, GitHub, Supabase, Canva, Figma, Notion, Google, Higgsfield, Adobe, Blender, Zapier, Chatbase ni por ninguna otra empresa mencionada. Sus nombres y logotipos pertenecen a sus respectivos propietarios y se usan únicamente para identificar las herramientas que se explican.</p>
<h2>6. Responsabilidad</h2>
<p>Los contenidos tienen carácter formativo y orientativo. Las herramientas de terceros cambian con frecuencia (menús, precios, planes y condiciones), por lo que pueden existir diferencias con lo descrito. AMRI no se responsabiliza del uso que se haga de esas herramientas ni de sus condiciones, costes o disponibilidad. Se recomienda revisar siempre la información oficial de cada servicio.</p>
<h2>7. Enlaces</h2>
<p>El sitio contiene enlaces a webs de terceros y a proyectos de la comunidad. AMRI no controla su contenido ni se responsabiliza de él.</p>
<h2>8. Legislación aplicable</h2>
<p>Estas condiciones se rigen por la legislación española. Para cualquier controversia serán competentes los juzgados y tribunales que correspondan conforme a la normativa aplicable, incluida la de protección de consumidores cuando proceda.</p>'''
priv=f'''
<h2>1. Responsable del tratamiento</h2>
<ul><li><b>Responsable:</b> {D["titular"]} · NIF {D["nif"]}</li><li><b>Domicilio:</b> {D["domicilio"]}</li><li><b>Contacto:</b> {D["email"]}</li></ul>
<h2>2. Qué datos tratamos y para qué</h2>
<table class="lt"><tr><th>Cuándo</th><th>Datos</th><th>Finalidad</th><th>Base legal</th></tr>
<tr><td>Crear una cuenta (opcional)</td><td>Nombre de usuario, correo y contraseña (guardada cifrada). Opcionales: nombre completo, fecha de nacimiento y teléfono.</td><td>Gestionar tu cuenta, tu perfil y tu recorrido de aprendizaje.</td><td>Ejecución del servicio que solicitas y tu consentimiento para los datos opcionales.</td></tr>
<tr><td>Enviar un proyecto</td><td>Título, tipo, enlace o PDF y descripción.</td><td>Revisarlo y, si se aprueba, mostrarlo en la comunidad junto a tu nombre de usuario.</td><td>Tu consentimiento al enviarlo.</td></tr>
<tr><td>Suscribirte a la newsletter</td><td>Correo e idioma.</td><td>Avisarte de recetas nuevas.</td><td>Tu consentimiento.</td></tr></table>
<p>En la comunidad solo se muestra tu <b>nombre de usuario</b>. Tu correo y tus datos opcionales no son públicos.</p>
<h2>3. Cuánto tiempo los guardamos</h2>
<p>Mientras mantengas tu cuenta o tu suscripción. Si pides la baja, se eliminan, salvo lo que la ley obligue a conservar durante el plazo legal.</p>
<h2>4. Quién nos ayuda a prestar el servicio (encargados)</h2>
<ul><li><b>Supabase</b>: base de datos, cuentas y archivos. Servidores en la Unión Europea (París).</li>
<li><b>Cloudflare</b>: alojamiento y entrega de la web.</li>
<li><b>jsDelivr</b> y <b>Google Fonts</b>: entrega de una librería y de la tipografía. Al cargarlas, tu navegador comunica tu dirección IP a estos servicios.</li></ul>
<p>Algunos de estos proveedores pueden tratar datos fuera del Espacio Económico Europeo con las garantías previstas en el RGPD (cláusulas contractuales tipo o marco de privacidad UE-EE. UU.). No vendemos ni cedemos tus datos a terceros.</p>
<h2>5. Edad mínima</h2>
<p>Para crear una cuenta debes tener al menos <b>14 años</b> (artículo 7 de la LOPDGDD).</p>
<h2>6. Tus derechos</h2>
<p>Puedes pedir el acceso, la rectificación, la supresión, la oposición, la limitación y la portabilidad de tus datos, y retirar tu consentimiento en cualquier momento, escribiendo a <b>{D["email"]}</b>. Puedes editar tus datos desde tu perfil y borrar tus proyectos tú mismo. Si crees que no hemos atendido bien tu solicitud, puedes reclamar ante la <a href="https://www.aepd.es" target="_blank" rel="noopener">Agencia Española de Protección de Datos</a>.</p>
<h2>7. Seguridad</h2>
<p>Las contraseñas se guardan cifradas, las conexiones van por HTTPS y el acceso a los datos está limitado por reglas de seguridad en la base de datos: cada persona solo puede ver sus propios datos.</p>'''
cook='''
<h2>1. ¿Usamos cookies?</h2>
<p>AMRI <b>no usa cookies publicitarias ni de analítica</b>, ni propias ni de terceros.</p>
<h2>2. Almacenamiento técnico del navegador</h2>
<p>Para que la web funcione guardamos en tu navegador (almacenamiento local) algunos datos técnicos imprescindibles, que no te identifican ante terceros:</p>
<table class="lt"><tr><th>Dato</th><th>Para qué</th><th>Duración</th></tr>
<tr><td><code>amri-lang</code></td><td>Recordar el idioma que elegiste.</td><td>Hasta que lo borres.</td></tr>
<tr><td><code>amri-theme</code></td><td>Recordar el modo claro u oscuro.</td><td>Hasta que lo borres.</td></tr>
<tr><td><code>receta-…</code></td><td>Recordar tu progreso en cada receta.</td><td>Hasta que lo borres.</td></tr>
<tr><td><code>sb-…-auth-token</code></td><td>Mantener tu sesión iniciada (solo si tienes cuenta).</td><td>Hasta que cierres sesión.</td></tr></table>
<p>Al ser estrictamente necesarios para el servicio que pides, no requieren consentimiento (artículo 22.2 de la LSSI-CE).</p>
<h2>3. Servicios externos</h2>
<p>La web carga la tipografía desde Google Fonts y una librería desde jsDelivr. Estos servicios reciben tu dirección IP para poder entregar los archivos. Consulta sus políticas de privacidad para más información.</p>
<h2>4. Cómo borrarlo</h2>
<p>Puedes borrar estos datos en cualquier momento desde la configuración de tu navegador (borrar datos del sitio). Si en el futuro añadimos analítica o cookies no esenciales, te pediremos permiso antes y actualizaremos esta página.</p>'''
for slug,title,body in [("aviso-legal","Aviso legal",aviso),("privacidad","Política de privacidad",priv),("cookies","Política de cookies",cook)]:
    open(slug+'.html','w',encoding='utf-8').write(page(slug,title,body));print('ok',slug)

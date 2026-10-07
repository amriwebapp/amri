/* ==========================================================
   AMRI · cuentas con Supabase (registro, acceso, comunidad)
   La cuenta es opcional: solo sirve para publicar proyectos.
   Seguridad: clave pública + reglas RLS en la base de datos.
   ========================================================== */
(function(){
"use strict";
var SB_URL="https://gmeuxebutmdkiyuvpwip.supabase.co";
var SB_KEY="sb_publishable_QFlupk_50zL-oPwjqmFl9g_YdYNLqV_";
var BASE=/\/recetas\//.test(location.pathname)?"../":"";

var TX={
es:{login:"Entrar",signup:"Crear cuenta",profile:"Mi perfil",logout:"Salir",review:"Revisión",close:"Cerrar",
 a_title:"Tu cuenta en AMRI",a_lead:"Es opcional: todo el contenido es libre. La cuenta sirve para publicar tus proyectos y guardar tu recorrido.",
 email:"Correo electrónico",password:"Contraseña",username:"Nombre de usuario",u_hint:"3–24 caracteres: minúsculas, números y _",
 pw_hint:"Mínimo 8 caracteres, con letras y números",optional:"Opcional",full_name:"Nombre completo",birth:"Fecha de nacimiento",phone:"Teléfono",
 priv:"Tus datos opcionales solo los ves tú. En la comunidad solo aparece tu nombre de usuario.",
 forgot:"¿Olvidaste tu contraseña?",reset_t:"Recupera tu contraseña",send:"Enviar enlace",back:"← Volver",
 reset_ok:"Si el correo existe, te llegará un enlace para crear una contraseña nueva.",
 check:"¡Casi! Revisa tu correo y pulsa el enlace para activar tu cuenta.",
 u_free:"✓ Disponible",u_taken:"Ese usuario ya existe",u_bad:"Solo minúsculas, números y _ (3–24)",
 pw_bad:"La contraseña necesita 8 caracteres, letras y números",
 e_login:"Correo o contraseña incorrectos, o cuenta sin confirmar.",e_gen:"Algo ha fallado. Inténtalo de nuevo en un momento.",e_net:"No hay conexión con el servidor.",
 c_title:"Proyectos de la comunidad",c_sub:"Proyectos reales de personas que han terminado esta receta. Cada uno se revisa antes de publicarse.",
 c_empty:"Todavía no hay proyectos aprobados. ¿Serás el primero?",c_up:"Sube tu proyecto",c_by:"por",c_open:"Ver ↗",
 m_pending:"⏳ Tu proyecto está en revisión. Te avisaremos en tu perfil.",m_approved:"✅ ¡Tu proyecto fue aprobado! Receta completada.",m_rejected:"Tu proyecto no se aprobó: ",
 s_title:"Sube tu proyecto terminado",s_lead:"Comparte el resultado de esta receta. Un administrador lo revisará antes de publicarlo.",
 s_name:"Título del proyecto",s_kind:"¿Qué es?",s_url:"Enlace",s_file:"…o sube tu PDF aquí (máx. 10 MB)",s_note:"Cuéntalo en una frase",s_send:"Enviar a revisión",
 s_ok:"¡Enviado! Verás el estado en tu perfil.",s_need:"Añade un enlace que empiece por https:// o sube un PDF.",s_pdf:"El archivo debe ser un PDF de 10 MB como máximo.",
 kinds:{web:"Web",social:"Redes",pdf:"PDF",doc:"Documento"},
 how:{web:["Publica tu web (por ejemplo, con la receta de Cloudflare).","Copia la dirección completa del navegador: https://tu-web.pages.dev"],
  social:["Abre tu publicación en la red social.","Pulsa Compartir → Copiar enlace.","Comprueba que la publicación o la cuenta sea pública."],
  pdf:["Sube el archivo PDF aquí abajo, o…","compártelo desde Google Drive con «Cualquier persona con el enlace» y pega el enlace."],
  doc:["Abre tu documento (Google Docs, Notion, Canva…).","Pulsa Compartir y activa el acceso público de lectura.","Copia el enlace y pégalo aquí."]},
 consent:'Tengo 14 años o más y acepto la <a href="{p}" target="_blank">política de privacidad</a>.',consent_err:"Para crear la cuenta tienes que aceptar la política de privacidad.",
 how_t:"Cómo conseguir el enlace",rules:"No incluyas datos personales de otras personas ni contenido que no sea tuyo."},
};
var lang=function(){return (window.I18N&&I18N.lang())||"es"};
var t=function(k){var d=TX[lang()]||TX.es;return d[k]!==undefined?d[k]:TX.es[k]};
var esc=function(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})};
var safeUrl=function(u){try{var x=new URL(u);return x.protocol==="https:"?x.href:null}catch(e){return null}};
var KIC={web:"🌐",social:"📱",pdf:"📄",doc:"📝"};

/* ---------- Cliente ---------- */
var sb=null;
if(window.supabase&&supabase.createClient){sb=supabase.createClient(SB_URL,SB_KEY,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}});}
var state={user:null,profile:null,ready:false},subs=[];
function emit(){subs.forEach(function(f){try{f(state)}catch(e){console.error(e)}});}
async function loadProfile(){
  if(!sb||!state.user){state.profile=null;return;}
  var r=await sb.from("profiles").select("id,username,full_name,birth_date,phone,is_admin,created_at").eq("id",state.user.id).maybeSingle();
  state.profile=r.data||null;
  if(state.profile&&state.profile.is_admin){var a=await sb.rpc("is_admin");state.profile.is_admin=!!a.data;}
}
async function refresh(session){state.user=session?session.user:null;await loadProfile();state.ready=true;emit();}
if(sb){
  sb.auth.getSession().then(function(r){refresh(r.data.session)});
  sb.auth.onAuthStateChange(function(ev,session){
    if(ev==="PASSWORD_RECOVERY"){window.AMRI_RECOVERY=true;}
    if(ev==="SIGNED_IN"||ev==="SIGNED_OUT"||ev==="USER_UPDATED"||ev==="PASSWORD_RECOVERY")setTimeout(function(){refresh(session)},0);
  });
}else{state.ready=true;}

/* ---------- Botón de cuenta en la cabecera ---------- */
var pendingCount=0;
function headerBtn(){
  var host=document.querySelector(".nav-right")||document.querySelector(".langbar");if(!host)return;
  var el=document.getElementById("accBtn");
  if(!el){el=document.createElement("span");el.id="accBtn";el.style.display="inline-flex";el.style.gap="8px";host.insertBefore(el,host.firstChild);}
  if(!state.user){el.innerHTML='<button class="acc-btn plain" type="button" data-auth>'+esc(t("login"))+'</button>';return;}
  var u=state.profile?state.profile.username:(state.user.email||"?");
  var adm=state.profile&&state.profile.is_admin?'<a class="acc-btn plain" href="'+BASE+'admin.html">'+esc(t("review"))+(pendingCount?' <span class="acc-badge">'+pendingCount+'</span>':'')+'</a>':'';
  el.innerHTML=adm+'<a class="acc-btn" href="'+BASE+'perfil.html" title="'+esc(t("profile"))+'"><span class="av">'+esc(u.charAt(0))+'</span><span class="nm">@'+esc(u)+'</span></a>';
}
async function countPending(){
  if(!(state.profile&&state.profile.is_admin))return;
  var r=await sb.from("submissions").select("id",{count:"exact",head:true}).eq("status","pending");
  pendingCount=r.count||0;headerBtn();
}
document.addEventListener("click",function(e){if(e.target.closest("[data-auth]")){e.preventDefault();openAuth("login");}});

/* ---------- Ventanas ---------- */
function modal(html,onClose){
  var w=document.createElement("div");w.className="md-wrap";w.setAttribute("role","dialog");w.setAttribute("aria-modal","true");
  w.innerHTML='<div class="md"><button class="x" type="button" aria-label="'+esc(t("close"))+'">×</button>'+html+'</div>';
  var close=function(){w.style.transition="opacity .35s";w.style.opacity="0";setTimeout(function(){w.remove()},350);document.removeEventListener("keydown",k);if(onClose)onClose();};
  var k=function(e){if(e.key==="Escape")close()};document.addEventListener("keydown",k);
  w.addEventListener("mousedown",function(e){if(e.target===w)close()});
  w.querySelector(".x").onclick=close;document.body.appendChild(w);
  var f=w.querySelector("input,select,textarea");if(f)setTimeout(function(){f.focus()},60);
  return {el:w,close:close};
}
function msg(box,type,text){box.className="msg show "+type;box.textContent=text;}
var U_RE=/^[a-z0-9_]{3,24}$/,PW_OK=function(p){return p.length>=8&&/[A-Za-z]/.test(p)&&/[0-9]/.test(p)};

function openAuth(tab){
  if(!sb){alert(t("e_net"));return;}
  var m=modal('<h2>'+esc(t("a_title"))+'</h2><p class="lead">'+esc(t("a_lead"))+'</p>'+
    '<div class="md-tabs" role="tablist"><button type="button" role="tab" data-tab="login">'+esc(t("login"))+'</button><button type="button" role="tab" data-tab="signup">'+esc(t("signup"))+'</button></div><div id="authBody"></div>');
  var body=m.el.querySelector("#authBody");
  function show(tb){
    m.el.querySelectorAll("[data-tab]").forEach(function(b){b.setAttribute("aria-selected",b.dataset.tab===tb)});
    m.el.querySelector(".md-tabs").style.display=tb==="reset"?"none":"";
    if(tb==="login")body.innerHTML='<form class="fm" novalidate><label>'+esc(t("email"))+'<input type="email" name="email" autocomplete="email" required></label>'+
      '<label>'+esc(t("password"))+'<input type="password" name="pw" autocomplete="current-password" required></label>'+
      '<div class="msg"></div><button type="submit">'+esc(t("login"))+'</button><button type="button" class="link" data-go="reset">'+esc(t("forgot"))+'</button></form>';
    if(tb==="signup")body.innerHTML='<form class="fm" novalidate>'+
      '<label><span>'+esc(t("username"))+' <span class="req">*</span></span><input name="username" autocomplete="username" maxlength="24" required spellcheck="false" autocapitalize="none"><small class="hint" id="uh">'+esc(t("u_hint"))+'</small></label>'+
      '<label><span>'+esc(t("email"))+' <span class="req">*</span></span><input type="email" name="email" autocomplete="email" required></label>'+
      '<label><span>'+esc(t("password"))+' <span class="req">*</span></span><input type="password" name="pw" autocomplete="new-password" minlength="8" required><small>'+esc(t("pw_hint"))+'</small></label>'+
      '<div class="opt">'+esc(t("optional"))+'</div>'+
      '<label>'+esc(t("full_name"))+'<input name="full_name" autocomplete="name" maxlength="80"></label>'+
      '<div class="row"><label>'+esc(t("birth"))+'<input type="date" name="birth" max="'+new Date().toISOString().slice(0,10)+'" min="1900-01-02"></label>'+
      '<label>'+esc(t("phone"))+'<input type="tel" name="phone" autocomplete="tel" maxlength="20" dir="ltr"></label></div>'+
      '<p class="note">🔒 '+esc(t("priv"))+'</p><label class="consent"><input type="checkbox" name="consent"><span>'+t("consent").replace("{p}",BASE+"privacidad.html")+'</span></label><div class="msg"></div><button type="submit">'+esc(t("signup"))+'</button></form>';
    if(tb==="reset")body.innerHTML='<form class="fm" novalidate><h3 style="margin:0">'+esc(t("reset_t"))+'</h3><label>'+esc(t("email"))+'<input type="email" name="email" autocomplete="email" required></label>'+
      '<div class="msg"></div><button type="submit">'+esc(t("send"))+'</button><button type="button" class="link" data-go="login">'+esc(t("back"))+'</button></form>';
    wire(tb);
    var f=body.querySelector("input");if(f)f.focus();
  }
  m.el.querySelectorAll("[data-tab]").forEach(function(b){b.onclick=function(){show(b.dataset.tab)}});
  body.addEventListener("click",function(e){var g=e.target.closest("[data-go]");if(g)show(g.dataset.go)});
  function wire(tb){
    var f=body.querySelector("form"),box=f.querySelector(".msg"),btn=f.querySelector("[type=submit]");
    var busy=function(b){btn.disabled=b};
    if(tb==="signup"){
      var ui=f.username,uh=f.querySelector("#uh"),tm=null,last="";
      ui.addEventListener("input",function(){
        ui.value=ui.value.toLowerCase().replace(/\s/g,"");var v=ui.value;clearTimeout(tm);
        if(!U_RE.test(v)){uh.className="hint"+(v?" bad":"");uh.textContent=v?t("u_bad"):t("u_hint");return;}
        tm=setTimeout(async function(){last=v;var r=await sb.rpc("username_available",{u:v});if(last!==ui.value)return;
          uh.className="hint "+(r.data?"good":"bad");uh.textContent=r.data?t("u_free"):t("u_taken");},350);
      });
    }
    f.addEventListener("submit",async function(e){
      e.preventDefault();box.className="msg";
      try{
        if(tb==="login"){busy(true);
          var r=await sb.auth.signInWithPassword({email:f.email.value.trim(),password:f.pw.value});busy(false);
          if(r.error)return msg(box,"err",t("e_login"));m.close();
        }else if(tb==="reset"){busy(true);
          await sb.auth.resetPasswordForEmail(f.email.value.trim(),{redirectTo:new URL(BASE+"perfil.html",location.href).href});busy(false);
          msg(box,"ok",t("reset_ok"));
        }else{
          var u=f.username.value.trim().toLowerCase(),em=f.email.value.trim(),pw=f.pw.value;
          if(!U_RE.test(u))return msg(box,"err",t("u_bad"));
          if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em))return msg(box,"err",t("email")+" ✗");
          if(!PW_OK(pw))return msg(box,"err",t("pw_bad"));
          if(!f.consent.checked)return msg(box,"err",t("consent_err"));
          busy(true);
          var av=await sb.rpc("username_available",{u:u});
          if(av.data===false){busy(false);return msg(box,"err",t("u_taken"));}
          var s=await sb.auth.signUp({email:em,password:pw,options:{emailRedirectTo:new URL(BASE+"perfil.html",location.href).href,
            data:{username:u,full_name:f.full_name.value.trim(),birth_date:f.birth.value||"",phone:f.phone.value.trim(),lang:lang()}}});
          busy(false);
          if(s.error)return msg(box,"err",/already|registered/i.test(s.error.message)?t("e_login"):(/password/i.test(s.error.message)?t("pw_bad"):t("e_gen")));
          if(s.data&&s.data.session){m.close();}else{f.innerHTML='<div class="msg show ok" style="font-size:16px;padding:16px">📬 '+esc(t("check"))+'</div>';}
        }
      }catch(err){busy(false);msg(box,"err",t("e_net"));}
    });
  }
  show(tab||"login");
}

/* ---------- Subir proyecto ---------- */
function openSubmit(slug,done){
  if(!state.user){openAuth("signup");return;}
  var kind="web";
  var m=modal('<h2>'+esc(t("s_title"))+'</h2><p class="lead">'+esc(t("s_lead"))+'</p>'+
   '<form class="fm" novalidate><label><span>'+esc(t("s_name"))+' <span class="req">*</span></span><input name="title" maxlength="100" required></label>'+
   '<div><div style="font-weight:600;font-size:14px;margin-bottom:6px">'+esc(t("s_kind"))+'</div><div class="kinds">'+
   ["web","social","pdf","doc"].map(function(k){return '<button type="button" data-k="'+k+'" aria-pressed="'+(k===kind)+'"><span>'+KIC[k]+'</span>'+esc(t("kinds")[k])+'</button>'}).join("")+'</div></div>'+
   '<div class="howto" id="how"></div>'+
   '<label>'+esc(t("s_url"))+'<input name="url" type="url" inputmode="url" placeholder="https://" dir="ltr"></label>'+
   '<label id="fileL" style="display:none">'+esc(t("s_file"))+'<input name="file" type="file" accept="application/pdf"></label>'+
   '<label><span>'+esc(t("s_note"))+' <small>('+esc(t("optional"))+')</small></span><textarea name="note" maxlength="500"></textarea></label>'+
   '<p class="note">⚠️ '+esc(t("rules"))+'</p><div class="msg"></div><button type="submit">'+esc(t("s_send"))+'</button></form>');
  var f=m.el.querySelector("form"),box=f.querySelector(".msg"),how=f.querySelector("#how");
  function paint(){
    f.querySelectorAll("[data-k]").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.k===kind)});
    how.innerHTML='<b>'+esc(t("how_t"))+'</b><ol>'+t("how")[kind].map(function(x){return "<li>"+esc(x)+"</li>"}).join("")+'</ol>';
    f.querySelector("#fileL").style.display=kind==="pdf"?"":"none";
  }
  f.querySelectorAll("[data-k]").forEach(function(b){b.onclick=function(){kind=b.dataset.k;paint()}});paint();
  f.addEventListener("submit",async function(e){
    e.preventDefault();box.className="msg";
    var title=f.elements["title"].value.trim(),url=f.url.value.trim(),file=kind==="pdf"&&f.file.files[0],btn=f.querySelector("[type=submit]");
    if(title.length<2)return msg(box,"err",t("s_name")+" ✗");
    if(file&&(file.type!=="application/pdf"||file.size>10485760))return msg(box,"err",t("s_pdf"));
    if(!file&&!safeUrl(url))return msg(box,"err",t("s_need"));
    btn.disabled=true;
    try{
      if(file){
        var path=state.user.id+"/"+Date.now()+"-"+file.name.toLowerCase().replace(/[^a-z0-9.]+/g,"-").slice(-60);
        var up=await sb.storage.from("proyectos").upload(path,file,{contentType:"application/pdf",upsert:false});
        if(up.error)throw up.error;
        url=sb.storage.from("proyectos").getPublicUrl(path).data.publicUrl;
      }
      var r=await sb.from("submissions").insert({user_id:state.user.id,recipe_slug:slug,title:title,kind:kind,url:safeUrl(url),note:f.note.value.trim()||null});
      if(r.error)throw r.error;
      f.innerHTML='<div class="msg show ok" style="font-size:16px;padding:16px">🎉 '+esc(t("s_ok"))+'</div>';
      if(done)done();
    }catch(err){btn.disabled=false;msg(box,"err",t("e_gen"));console.error(err);}
  });
}

/* ---------- Comunidad debajo de cada receta ---------- */
async function community(){
  var box=document.getElementById("comunidad");if(!box)return;
  var slug=document.body.dataset.slug;
  box.innerHTML='<div class="ch"><div><h2>'+esc(t("c_title"))+'</h2></div><button class="c-up" type="button" id="cUp">⬆ '+esc(t("c_up"))+'</button></div>'+
    '<p class="sub">'+esc(t("c_sub"))+'</p><div id="cMine"></div><div class="c-list" id="cList"><div class="skel"></div></div>';
  box.querySelector("#cUp").onclick=function(){openSubmit(slug,community)};
  if(!sb){box.querySelector("#cList").innerHTML='<div class="c-empty">'+esc(t("e_net"))+'</div>';return;}
  var r=await sb.rpc("approved_projects",{slug:slug});
  var list=box.querySelector("#cList");
  if(r.error||!r.data||!r.data.length){list.innerHTML='<div class="c-empty">🌱 '+esc(t("c_empty"))+'</div>';}
  else list.innerHTML=r.data.map(function(p){var u=safeUrl(p.url);if(!u)return "";
    return '<a class="pj" href="'+esc(u)+'" target="_blank" rel="noopener noreferrer nofollow ugc"><span class="ic">'+(KIC[p.kind]||"🔗")+'</span><span><b>'+esc(p.title)+'</b>'+
      '<small>'+esc(t("c_by"))+' @'+esc(p.username)+' · '+new Date(p.created_at).toLocaleDateString(lang())+'</small>'+(p.note?'<p>'+esc(p.note)+'</p>':'')+'</span><span class="go">'+esc(t("c_open"))+'</span></a>'}).join("");
  if(state.user){
    var mine=await sb.from("submissions").select("status,review_note,created_at").eq("recipe_slug",slug).order("created_at",{ascending:false}).limit(1);
    var s=mine.data&&mine.data[0];
    if(s)box.querySelector("#cMine").innerHTML='<div class="c-mine '+s.status+'">'+esc(s.status==="rejected"?t("m_rejected")+(s.review_note||""):t("m_"+s.status))+'</div>';
  }
}

/* ---------- Arranque ---------- */
window.AMRI_ACC={sb:sb,state:state,t:t,esc:esc,safeUrl:safeUrl,KIC:KIC,openAuth:openAuth,openSubmit:openSubmit,base:BASE,
  on:function(f){subs.push(f);if(state.ready)f(state);}};
subs.push(function(){headerBtn();countPending();if(document.getElementById("comunidad"))community();});
headerBtn();
document.addEventListener("langchange",function(){headerBtn();if(state.ready&&document.getElementById("comunidad"))community();});
})();

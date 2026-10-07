/* ==========================================================
   AMRI · perfil (recorrido de aprendizaje) y panel de revisión
   ========================================================== */
(function(){
"use strict";
var A=window.AMRI_ACC,D=window.AMRI_DATA;if(!A)return;
var sb=A.sb,esc=A.esc,root=document.getElementById("panel"),PAGE=document.body.dataset.page;
var TX={
es:{p_t:"Tu recorrido",p_l:"Tus recetas completadas y los proyectos que has compartido.",gate_t:"Entra para ver tu perfil",gate_l:"Todo el contenido es libre. La cuenta solo sirve para publicar tus proyectos y guardar tu recorrido.",
 since:"En AMRI desde",of:"de",done:"completadas",path:"Tu progreso por categoría",badges:"Tus insignias",bg_first:"Primera receta",bg_first_d:"Completa tu primera receta.",bg_five:"Cinco recetas",bg_five_d:"Completa cinco recetas.",bg_cat:"Chef · ",bg_cat_d:"Completa todas las recetas de esta categoría.",bg_proj_d:"Termina todas las recetas del proyecto.",bg_all:"Maestro AMRI",bg_all_d:"Completa todas las recetas.",bg_share:"Compartir",bg_copied:"¡Copiado!",bg_lock:"Por conseguir",bg_msg:"He conseguido la insignia «{b}» en AMRI 🧡 Aprende a crear con IA, gratis y paso a paso: https://amri.es",lvl:"Nivel",subs:"Tus proyectos",none_subs:"Aún no has enviado ningún proyecto. Termina una receta y súbelo desde el final de la página.",
 st:{approved:"✓ Completada",pending:"⏳ En revisión",rejected:"✗ No aprobada",none:"Sin enviar"},del:"Borrar",open:"Abrir ↗",edit:"Datos de tu cuenta",save:"Guardar cambios",saved:"Guardado ✓",
 logout:"Cerrar sesión",newpw:"Crea tu nueva contraseña",setpw:"Guardar contraseña",pwok:"Contraseña actualizada ✓",confirm_del:"¿Borrar este envío?",
 how_t:"Cómo completar una receta",how:["Sigue la receta hasta el final.","Publica tu resultado: una web, una publicación en redes, un documento o un PDF.","Al final de la receta, pulsa «Sube tu proyecto» y pega el enlace (o sube el PDF).","Cuando un administrador lo apruebe, la receta cuenta como completada y tu proyecto aparece en la comunidad."],
 a_t:"Revisión de proyectos",a_l:"Aprueba o rechaza los proyectos enviados. Solo los aprobados se publican en la comunidad.",a_gate:"Esta página es solo para administradores.",
 tabs:{pending:"Pendientes",approved:"Aprobados",rejected:"Rechazados",newsletter:"Newsletter"},csv:"Descargar CSV",nl_empty:"Aún no hay suscriptores.",nl_del:"¿Borrar este suscriptor?",approve:"Aprobar",reject:"Rechazar",reason:"Motivo (opcional, lo verá la persona)",empty:"No hay nada aquí. Todo en calma. 🌿",recipe:"Receta",user:"Usuario"},
};
var L=function(){return (window.I18N&&I18N.lang())||"es"};
var t=function(k){var d=TX[L()]||TX.es;return d[k]!==undefined?d[k]:TX.es[k]};
var at=A.t;
var img=function(s){return D.img(s,"")};
var link=function(s){return "recetas/"+s+".html"};
var fmt=function(d){return d?new Date(d).toLocaleDateString(L(),{year:"numeric",month:"long",day:"numeric"}):""};

function gate(title,lead,withBtns){
  root.innerHTML='<div class="card2 gate"><div class="e">🔒</div><h2>'+esc(title)+'</h2><p class="lead" style="margin:6px auto 20px;max-width:460px">'+esc(lead)+'</p>'+
    (withBtns?'<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap"><button class="btn btn-primary" data-a="signup">'+esc(at("signup"))+'</button><button class="btn btn-ghost" data-a="login">'+esc(at("login"))+'</button></div>':'')+'</div>';
  root.querySelectorAll("[data-a]").forEach(function(b){b.onclick=function(){A.openAuth(b.dataset.a)}});
}

/* ---------------- PERFIL ---------------- */
async function perfil(st){
  document.getElementById("pgT").textContent=t("p_t");document.getElementById("pgL").textContent=t("p_l");
  if(window.AMRI_RECOVERY&&st.user)return recovery();
  if(!st.user)return gate(t("gate_t"),t("gate_l"),true);
  var p=st.profile||{username:"…"};
  if(tab==="newsletter")return newsletter();
  var r=await sb.from("submissions").select("id,recipe_slug,title,kind,url,note,status,review_note,created_at").order("created_at",{ascending:false});
  var subs=r.data||[],best={};
  var rank={approved:3,pending:2,rejected:1};
  subs.forEach(function(s){if(!best[s.recipe_slug]||rank[s.status]>rank[best[s.recipe_slug].status])best[s.recipe_slug]=s;});
  var total=D.order.length,doneN=D.order.filter(function(s){return best[s]&&best[s].status==="approved"}).length;
  var C=2*Math.PI*50,off=C*(1-doneN/total);
  var levels=D.paths.map(function(pa,i){
    var full=pa.r.every(function(s){return best[s]&&best[s].status==="approved"});
    var n=pa.r.filter(function(s){return best[s]&&best[s].status==="approved"}).length;
    return '<div class="lv'+(full?" full":"")+'"><span class="ld">'+(full?"✓":pa.ic)+'</span><h3>'+esc(I18N.t("p"+(i+1)+"t"))+'<small>'+n+'/'+pa.r.length+'</small></h3>'+
      pa.r.map(function(s){var b=best[s],k=b?b.status:"none";
        return '<a class="rc" href="'+link(s)+(k==="none"?"#comunidad":"")+'"><span class="th"><img alt="" loading="lazy" src="'+img(s)+'"></span><b>'+esc(D.title(s))+'</b><span class="st '+k+'">'+esc(t("st")[k])+'</span></a>'}).join("")+'</div>';
  }).join("");
  /* Insignias */
  var ok=function(sl){return best[sl]&&best[sl].status==="approved"};
  var BG=[{ic:"🥄",n:t("bg_first"),d:t("bg_first_d"),on:doneN>=1},{ic:"🍳",n:t("bg_five"),d:t("bg_five_d"),on:doneN>=5}]
    .concat(D.paths.map(function(pa,i){return {ic:pa.ic,n:t("bg_cat")+I18N.t("p"+(i+1)+"t"),d:t("bg_cat_d"),on:pa.r.every(ok)}}))
    .concat((D.projects||[]).map(function(pj){return {ic:pj.ic,n:pj.t[L()]||pj.t.es,d:t("bg_proj_d"),on:pj.r.every(ok)}}))
    .concat([{ic:"👑",n:t("bg_all"),d:t("bg_all_d"),on:doneN===total}]);
  BG.sort(function(a,b){return (b.on?1:0)-(a.on?1:0)});
  var badgesH='<div class="card2"><div class="sec-h">'+esc(t("badges"))+' <small>'+BG.filter(function(b){return b.on}).length+'/'+BG.length+'</small></div><div class="bdg-grid">'+
    BG.map(function(b){return '<div class="bdg'+(b.on?' on':'')+'" title="'+esc(b.d)+'"><span class="bdg-i">'+b.ic+'</span><b>'+esc(b.n)+'</b><small>'+esc(b.on?b.d:t("bg_lock"))+'</small>'+
      (b.on?'<button type="button" class="mini bdg-s" data-msg="'+esc(t("bg_msg").replace("{b}",b.n))+'">'+esc(t("bg_share"))+'</button>':'')+'</div>'}).join("")+'</div></div>';
  var subsH=subs.length?subs.map(function(s){var u=A.safeUrl(s.url);
    return '<div class="sub-it"><div class="t"><div><b>'+(A.KIC[s.kind]||"🔗")+' '+esc(s.title)+'</b><p>'+esc(D.title(s.recipe_slug))+' · '+fmt(s.created_at)+'</p></div><span class="st '+s.status+'">'+esc(t("st")[s.status])+'</span></div>'+
      (s.status==="rejected"&&s.review_note?'<p>💬 '+esc(s.review_note)+'</p>':'')+
      '<div class="acts">'+(u?'<a class="mini" href="'+esc(u)+'" target="_blank" rel="noopener noreferrer">'+esc(t("open"))+'</a>':'')+'<button class="mini no" data-del="'+s.id+'">'+esc(t("del"))+'</button></div></div>'}).join(""):'<p class="note">'+esc(t("none_subs"))+'</p>';
  root.innerHTML=
   '<div class="card2 pf-top reveal in"><div class="pf-av">'+esc((p.username||"?").charAt(0))+'</div><div><h2>@'+esc(p.username)+'</h2><p>'+esc(p.full_name||"")+(p.full_name?' · ':'')+esc(t("since"))+' '+fmt(p.created_at)+'</p>'+
     '<div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap"><button class="mini" id="logout">'+esc(t("logout"))+'</button></div></div>'+
     '<div class="pring"><svg width="118" height="118" viewBox="0 0 118 118"><circle class="bg" cx="59" cy="59" r="50"/><circle class="fg" cx="59" cy="59" r="50" stroke-dasharray="'+C+'" stroke-dashoffset="'+C+'" id="ringFg"/></svg><div><span>'+doneN+'<small>'+esc(t("of"))+' '+total+' '+esc(t("done"))+'</small></span></div></div></div>'+
   '<div class="pf-grid"><div style="display:flex;flex-direction:column;gap:22px;min-width:0">'+badgesH+'<div class="card2"><div class="sec-h">'+esc(t("path"))+'</div>'+levels+'</div></div>'+
   '<div style="display:flex;flex-direction:column;gap:22px"><div class="card2"><div class="sec-h">'+esc(t("how_t"))+'</div><ol style="margin:0;padding-inline-start:20px;color:var(--mute);font-size:15px">'+t("how").map(function(x){return "<li style=\"margin:5px 0\">"+esc(x)+"</li>"}).join("")+'</ol></div>'+
   '<div class="card2"><div class="sec-h">'+esc(t("subs"))+'</div>'+subsH+'</div>'+
   '<div class="card2"><div class="sec-h">'+esc(t("edit"))+'</div><form class="fm" id="pfForm" novalidate>'+
     '<label>'+esc(at("email"))+'<input value="'+esc(st.user.email)+'" disabled dir="ltr"></label>'+
     '<label>'+esc(at("username"))+'<input name="username" value="'+esc(p.username)+'" maxlength="24" spellcheck="false" autocapitalize="none"></label>'+
     '<label><span>'+esc(at("full_name"))+' <small>('+esc(at("optional"))+')</small></span><input name="full_name" value="'+esc(p.full_name||"")+'" maxlength="80"></label>'+
     '<div class="row"><label>'+esc(at("birth"))+'<input type="date" name="birth" value="'+esc(p.birth_date||"")+'"></label><label>'+esc(at("phone"))+'<input type="tel" name="phone" value="'+esc(p.phone||"")+'" dir="ltr" maxlength="20"></label></div>'+
     '<div class="msg"></div><button type="submit">'+esc(t("save"))+'</button></form></div></div></div>';
  setTimeout(function(){var fg=document.getElementById("ringFg");if(fg)fg.style.strokeDashoffset=off},80);
  root.querySelectorAll(".bdg-s").forEach(function(b){b.onclick=function(){var m=b.dataset.msg,o=b.textContent;
    if(navigator.share){navigator.share({text:m}).catch(function(){})}
    else if(navigator.clipboard){navigator.clipboard.writeText(m).then(function(){b.textContent=t("bg_copied");setTimeout(function(){b.textContent=o},1800)},function(){})}}});
  document.getElementById("logout").onclick=async function(){await sb.auth.signOut();location.href="index.html"};
  root.querySelectorAll("[data-del]").forEach(function(b){b.onclick=async function(){if(!confirm(t("confirm_del")))return;await sb.from("submissions").delete().eq("id",b.dataset.del);perfil(A.state)}});
  var f=document.getElementById("pfForm"),box=f.querySelector(".msg");
  f.onsubmit=async function(e){e.preventDefault();
    var u=f.username.value.trim().toLowerCase();
    if(!/^[a-z0-9_]{3,24}$/.test(u)){box.className="msg show err";box.textContent=at("u_bad");return;}
    var up={username:u,full_name:f.full_name.value.trim()||null,birth_date:f.birth.value||null,phone:f.phone.value.trim()||null};
    var r2=await sb.from("profiles").update(up).eq("id",st.user.id);
    box.className="msg show "+(r2.error?"err":"ok");box.textContent=r2.error?(/duplicate|unique/i.test(r2.error.message)?at("u_taken"):at("e_gen")):t("saved");
    if(!r2.error){Object.assign(A.state.profile||{},up);}
  };
}
function recovery(){
  root.innerHTML='<div class="card2" style="max-width:460px;margin:0 auto"><form class="fm" id="npw" novalidate><h2 style="margin:0">'+esc(t("newpw"))+'</h2>'+
   '<label>'+esc(at("password"))+'<input type="password" name="pw" autocomplete="new-password" minlength="8"><small>'+esc(at("pw_hint"))+'</small></label><div class="msg"></div><button type="submit">'+esc(t("setpw"))+'</button></form></div>';
  var f=document.getElementById("npw"),box=f.querySelector(".msg");
  f.onsubmit=async function(e){e.preventDefault();var pw=f.pw.value;
    if(!(pw.length>=8&&/[A-Za-z]/.test(pw)&&/[0-9]/.test(pw))){box.className="msg show err";box.textContent=at("pw_bad");return;}
    var r=await sb.auth.updateUser({password:pw});box.className="msg show "+(r.error?"err":"ok");box.textContent=r.error?at("e_gen"):t("pwok");
    if(!r.error){window.AMRI_RECOVERY=false;setTimeout(function(){perfil(A.state)},1200);}};
}

/* ---------------- ADMIN ---------------- */
var tab="pending";
async function admin(st){
  document.getElementById("pgT").textContent=t("a_t");document.getElementById("pgL").textContent=t("a_l");
  if(!st.user)return gate(t("gate_t"),t("a_gate"),true);
  if(!(st.profile&&st.profile.is_admin))return gate(t("a_gate"),"",false);
  root.innerHTML='<div class="adm-tabs" id="tabs"></div><div id="alist"><div class="skel"></div></div>';
  var counts={};
  await Promise.all(["pending","approved","rejected"].map(async function(s){var r=await sb.from("submissions").select("id",{count:"exact",head:true}).eq("status",s);counts[s]=r.count||0;}));
  var nlc=await sb.from("newsletter").select("id",{count:"exact",head:true});counts.newsletter=nlc.count||0;
  document.getElementById("tabs").innerHTML=["pending","approved","rejected","newsletter"].map(function(s){return '<button data-t="'+s+'" aria-pressed="'+(s===tab)+'">'+esc(t("tabs")[s])+' · '+counts[s]+'</button>'}).join("");
  document.querySelectorAll("#tabs [data-t]").forEach(function(b){b.onclick=function(){tab=b.dataset.t;admin(A.state)}});
  var r=await sb.from("submissions").select("id,recipe_slug,title,kind,url,note,status,review_note,created_at,user_id,profiles!submissions_user_id_fkey(username)").eq("status",tab).order("created_at",{ascending:tab==="pending"}).limit(100);
  var list=document.getElementById("alist"),rows=r.data||[];
  if(!rows.length){list.innerHTML='<div class="card2 gate"><p class="lead" style="margin:0">'+esc(t("empty"))+'</p></div>';return;}
  list.innerHTML=rows.map(function(s){var u=A.safeUrl(s.url),who=s.profiles&&s.profiles.username;
    return '<div class="sub-it card2" style="padding:18px"><div class="t"><div><b>'+(A.KIC[s.kind]||"🔗")+' '+esc(s.title)+'</b><p>'+esc(t("recipe"))+': <a href="'+link(s.recipe_slug)+'" target="_blank">'+esc(D.title(s.recipe_slug))+'</a> · '+esc(t("user"))+': @'+esc(who||"?")+' · '+fmt(s.created_at)+'</p></div><span class="st '+s.status+'">'+esc(t("tabs")[s.status])+'</span></div>'+
      (s.note?'<p>💬 '+esc(s.note)+'</p>':'')+(u?'<p dir="ltr" style="text-align:start">🔗 <a href="'+esc(u)+'" target="_blank" rel="noopener noreferrer nofollow">'+esc(u)+'</a></p>':'')+
      (s.review_note?'<p>📝 '+esc(s.review_note)+'</p>':'')+
      '<div class="fm" style="margin-top:10px"><input placeholder="'+esc(t("reason"))+'" data-rn="'+s.id+'" maxlength="300"></div>'+
      '<div class="acts">'+(s.status!=="approved"?'<button class="mini ok" data-rv="approved" data-id="'+s.id+'">✓ '+esc(t("approve"))+'</button>':'')+(s.status!=="rejected"?'<button class="mini no" data-rv="rejected" data-id="'+s.id+'">✗ '+esc(t("reject"))+'</button>':'')+'</div></div>'}).join("");
  list.querySelectorAll("[data-rv]").forEach(function(b){b.onclick=async function(){
    b.disabled=true;var note=list.querySelector('[data-rn="'+b.dataset.id+'"]').value.trim()||null;
    var r2=await sb.from("submissions").update({status:b.dataset.rv,review_note:note,reviewed_by:st.user.id,reviewed_at:new Date().toISOString()}).eq("id",b.dataset.id);
    if(r2.error){alert(at("e_gen"));b.disabled=false;return;}
    var card=b.closest(".sub-it");card.style.transition="opacity .5s,transform .5s";card.style.opacity="0";card.style.transform="translateY(-6px)";setTimeout(function(){admin(A.state)},450);
  }});
}

async function newsletter(){
  var list=document.getElementById("alist");
  var r=await sb.from("newsletter").select("id,email,lang,created_at").order("created_at",{ascending:false}).limit(1000);
  var rows=r.data||[];
  if(!rows.length){list.innerHTML='<div class="card2 gate"><p class="lead" style="margin:0">'+esc(t("nl_empty"))+'</p></div>';return;}
  list.innerHTML='<div style="margin-bottom:14px"><button class="mini ok" id="nlCsv">⬇ '+esc(t("csv"))+'</button></div><div class="card2" style="padding:8px 16px">'+
    rows.map(function(x){return '<div style="display:flex;justify-content:space-between;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--line)"><span dir="ltr">'+esc(x.email)+'</span><span class="note">'+esc(x.lang)+' · '+fmt(x.created_at)+' <button class="mini no" data-nl="'+x.id+'">✕</button></span></div>'}).join("")+'</div>';
  document.getElementById("nlCsv").onclick=function(){
    var csv="email,idioma,fecha\n"+rows.map(function(x){return [x.email,x.lang,x.created_at].map(function(v){return '"'+String(v).replace(/"/g,'""')+'"'}).join(",")}).join("\n");
    var a=document.createElement("a");a.href=URL.createObjectURL(new Blob([csv],{type:"text/csv"}));a.download="amri-newsletter.csv";a.click();};
  list.querySelectorAll("[data-nl]").forEach(function(b){b.onclick=async function(){if(!confirm(t("nl_del")))return;await sb.from("newsletter").delete().eq("id",b.dataset.nl);admin(A.state)}});
}

var run=function(st){if(!st.ready)return;(PAGE==="admin"?admin:perfil)(st)};
root.innerHTML='<div class="skel"></div><div class="skel" style="margin-top:14px"></div>';
A.on(run);
document.addEventListener("langchange",function(){run(A.state)});
})();

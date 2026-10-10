/* ==========================================================
   AMRI · Plataforma de IA — interacción y animaciones de la portada
   Sin dependencias. Respeta "prefers-reduced-motion".
   ========================================================== */
(function(){
"use strict";

/* ---------- Configuración: cambia esto por tu repositorio ---------- */
const REPO = "https://github.com/amriwebapp/amri";

/* ---------- Datos (los textos traducibles viven en i18n.js) ---------- */
// f = categoría · c = usa conectores · n = nueva · top = sale primero en el recetario · off = libro oculto
const RECETAS = [
  {slug:"webapp-gratis",f:"web",emoji:"🌐",bg:"#FFE4D6",bg2:"#FBF6EE"},
  {slug:"imagenes-ia",f:"imagen",emoji:"🎨",bg:"#E4E0FF",bg2:"#EFEAFF"},
  {slug:"asistente-ia",f:"texto",emoji:"💬",bg:"#D6F0E4",bg2:"#EAF7F0"},
  {slug:"automatiza-tareas",f:"auto",emoji:"⚡",bg:"#FFF0C2",bg2:"#FFF7DC",c:1},
  {slug:"chatbot-web",f:"web",emoji:"🤖",bg:"#E4F0FF",bg2:"#EAF4FF"},
  {slug:"logo-ia",f:"imagen",emoji:"✨",bg:"#F6E4FF",bg2:"#FBEAFF"},
  {slug:"video-aftereffects",f:"video",emoji:"🎬",bg:"#E8DEFF",bg2:"#F1EAFF",c:1},
  {slug:"blender-3d",f:"video",emoji:"🧊",bg:"#D9F1F5",bg2:"#E8F7F9",c:1},
  {slug:"higgsfield-cine",f:"video",emoji:"🎥",bg:"#FFE1D2",bg2:"#FBF6EE",c:1,n:1,svg:1},
  {slug:"canva-diseno",f:"imagen",emoji:"🖌️",bg:"#DDF1EE",bg2:"#FBF6EE",c:1,n:1,svg:1},
  {slug:"figma-a-web",f:"web",emoji:"📐",bg:"#EDE4FF",bg2:"#FBF6EE",c:1,n:1,svg:1},
  {slug:"notion-cerebro",f:"texto",emoji:"🗂️",bg:"#F2EADF",bg2:"#FBF6EE",c:1,n:1,svg:1},
  {slug:"gmail-calendario",f:"auto",emoji:"📬",bg:"#FFEFD0",bg2:"#FBF6EE",c:1,n:1,svg:1},
  {slug:"navegador-chrome",f:"auto",emoji:"🧭",bg:"#E2EEF8",bg2:"#FBF6EE",c:1,n:1,svg:1},
  {slug:"skills-propias",f:"texto",emoji:"📖",bg:"#E6F2DC",bg2:"#FBF6EE",n:1,svg:1},
  {slug:"conector-propio",f:"web",emoji:"🔌",bg:"#FFE4D6",bg2:"#FBF6EE",c:1,n:1,svg:1},
  {slug:"slack-equipo",off:1,f:"auto",emoji:"💬",bg:"#EDE4FF",bg2:"#FBF6EE",c:1,n:1,svg:1},
  {slug:"gurusup-brain",f:"texto",emoji:"🧠",bg:"#E4EEF6",bg2:"#FBF6EE",c:1,n:1,svg:1},
  {slug:"redes-sociales",f:"imagen",emoji:"📣",bg:"#FCE3EC",bg2:"#FBF6EE",n:1,svg:1},
  {slug:"animaciones-opus",f:"video",emoji:"🎞️",bg:"#FFE9C7",bg2:"#FBF6EE",n:1,svg:1},
  {slug:"jev-decisiones",f:"auto",emoji:"⚖️",bg:"#DCEFE6",bg2:"#FBF6EE",n:1,svg:1},
  {slug:"jev-guardian",off:1,f:"web",emoji:"🛡️",bg:"#E3E8F7",bg2:"#FBF6EE",n:1,svg:1},
  {slug:"empieza-aqui",f:"texto",emoji:"🌱",bg:"#E7F0E4",bg2:"#FBF6EE",n:1,svg:1,top:2},
  {slug:"primer-agente",f:"auto",emoji:"🤖",bg:"#FFE4D6",bg2:"#FBF6EE",n:1,svg:1,top:1}
];
const IDX = Object.fromEntries(RECETAS.map((r,i)=>[r.slug,i]));
// Libros: recetas de dentro de cada libro (lo genera tools/shells.py)
const LIBROS = window.AMRI_LIBROS || {};
const subs = slug => LIBROS[slug] || [];
const PATHS = [
  {ic:"🌱",r:["empieza-aqui","asistente-ia","imagenes-ia","logo-ia"]},
  {ic:"🔌",r:["gmail-calendario","notion-cerebro","canva-diseno","navegador-chrome"]},
  {ic:"🛠️",r:["webapp-gratis","chatbot-web","figma-a-web","automatiza-tareas"]},
  {ic:"🎬",r:["higgsfield-cine","video-aftereffects","blender-3d","redes-sociales","animaciones-opus"]},
  {ic:"🧠",r:["primer-agente","skills-propias","conector-propio"]},
  {ic:"🏢",r:["gurusup-brain","jev-decisiones"]}
];
const CONNS = [
  {n:"Higgsfield",ic:"🎥",c:"#FFD9C4"},{n:"Canva",ic:"🖌️",c:"#CDEDE8"},{n:"Figma",ic:"📐",c:"#E3D9FF"},
  {n:"Notion",ic:"🗂️",c:"#EFE6D8"},{n:"Gmail",ic:"📬",c:"#FFE7C2"},{n:"Google Calendar",ic:"📅",c:"#D9E8FF"},
  {n:"Claude in Chrome",ic:"🧭",c:"#DCEBF6"},{n:"Blender",ic:"🧊",c:"#D4EEF2"},{n:"After Effects",ic:"🎬",c:"#E6DCFF"},
  {n:"GitHub",ic:"🐙",c:"#E8E1D8"},{n:"Cloudflare",ic:"☁️",c:"#FFE0C8"},{n:"Google Drive",ic:"📁",c:"#DFF0DA"},{n:"Slack",ic:"💬",c:"#EDE4FF"},{n:"GuruSup",ic:"🧠",c:"#E4EEF6"}
];

const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
const T=k=>window.I18N?I18N.t(k):"";
const RM=matchMedia("(prefers-reduced-motion: reduce)").matches;
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;");

/* ---------- Enlaces al repositorio ---------- */
$$("[data-repo]").forEach(a=>a.href=REPO);

/* ---------- Tema: lo gestiona el panel de Ajustes (i18n.js) ---------- */
const root=document.documentElement;

/* ---------- Titular: palabras que aparecen una a una ---------- */
function splitWords(el){
  let i=0;
  const walk=node=>{
    [...node.childNodes].forEach(ch=>{
      if(ch.nodeType===3){
        const frag=document.createDocumentFragment();
        ch.textContent.split(/(\s+)/).forEach(p=>{
          if(!p)return;
          if(/^\s+$/.test(p)){frag.appendChild(document.createTextNode(p));return;}
          const s=document.createElement("span");s.className="w";s.textContent=p;s.style.transitionDelay=(.18+i++*.075)+"s";frag.appendChild(s);
        });
        ch.replaceWith(frag);
      }else if(ch.nodeType===1&&ch.tagName!=="BR"){walk(ch);}
    });
  };
  walk(el);
}

/* ---------- Manifiesto: *palabras* resaltadas ---------- */
let mWords=[];
function buildManifesto(){
  const el=$("#manifesto");if(!el)return;
  const raw=el.textContent;
  const parts=raw.split(/(\*[^*]+\*)/);
  el.innerHTML=parts.map(p=>{
    const acc=/^\*.*\*$/.test(p);const txt=acc?p.slice(1,-1):p;
    return txt.split(/(\s+)/).map(w=>/^\s+$/.test(w)||!w?w:`<span class="mw${acc?" acc":""}">${esc(w)}</span>`).join("");
  }).join("");
  mWords=$$(".mw",el);
}

/* ---------- Cómo funciona: un ejemplo real en 4 pantallas ---------- */
const imgOf=slug=>{const r=RECETAS[IDX[slug]];return `img/${slug}.${r&&r.svg?"svg":"jpg"}`;};
function screenHTML(n){
  if(n===0){
    const picks=["webapp-gratis","logo-ia","canva-diseno"];
    return `<div class="hs hs0"><div class="hs-h">📚 ${T("hv1_t")}</div><div class="mg">${picks.map((s,i)=>`
      <div class="mc${i===0?" pick":""}"><div class="mi"><img src="${imgOf(s)}" alt="" loading="lazy" onerror="this.remove()"></div><b>${esc(I18N.card(IDX[s]).titulo)}</b>${i===0?`<span class="ok-tag">✓ ${T("hv1_pick")}</span>`:""}</div>`).join("")}
      </div><svg class="cur" width="26" height="26" viewBox="0 0 24 24"><path d="M5 3l14 8-6 1.5L10 19z" fill="var(--ink)" stroke="var(--card)" stroke-width="1.5" stroke-linejoin="round"/></svg></div>`;
  }
  if(n===1){
    const it=[["claude","🅰️",T("hv2_i1")],["github","🐙",T("hv2_i2")],["cloudflare","☁️",T("hv2_i3")]];
    return `<div class="hs hs1"><div class="hs-h">🧺 ${T("hv2_t")}</div><ul class="ing">${it.map((x,i)=>`
      <li style="--i:${i}"><span class="bx"></span><span class="lg" data-logo="${x[0]}"><span class="fb">${x[1]}</span></span><span class="nm">${esc(x[2])}</span><small>${T("hv2_free")}</small></li>`).join("")}
      </ul><div class="bar"><i></i></div><div class="ready">🎉 ${T("hv2_ready")}</div></div>`;
  }
  if(n===2){
    return `<div class="hs hs2"><div class="hs-h">📋 ${T("hv3_t")}</div>
      <div class="pbox"><p>${esc(T("hv3_p"))}</p><button tabindex="-1"><span class="c1">${T("hv3_copy")}</span><span class="c2">✓ ${T("hv3_copied")}</span></button></div>
      <div class="arrow"><span>↓ ${T("hv3_paste")}</span></div>
      <div class="mini-chat"><div class="bub u">${esc(T("hv3_p"))}</div><div class="bub a"><span class="av">A</span>${esc(T("hv3_a"))}</div></div></div>`;
  }
  return `<div class="hs hs3"><div class="brw"><div class="url">🔒 panaderia-lola.pages.dev</div>
      <div class="site"><div class="logo">🥖</div><h4>${esc(T("hv4_site"))}</h4><p>${esc(T("hv4_tag"))}</p><span class="wa">💬 ${esc(T("hv4_btn"))}</span>
      <div class="loaves"><i></i><i></i><i></i></div></div></div>
      <div class="toast"><span>✓</span><div><b>${T("hv4_done")}</b><small>${T("hv4_toast")}</small></div></div></div>`;
}
function frameHTML(n,all){
  const pips=[0,1,2,3].map(i=>`<i class="${i<=n?"on":""}"></i>`).join("");
  return `<div class="howv-top"><span class="dts"><i></i><i></i><i></i></span><span class="lbl">${T("hv_step")} <b>${n+1}</b> ${T("hv_of")} 4</span><span class="pips">${pips}</span></div>
    <div class="howv-body">${all?[0,1,2,3].map(i=>`<div class="scr" data-sc="${i}">${screenHTML(i)}</div>`).join(""):`<div class="scr on" data-sc="${n}">${screenHTML(n)}</div>`}</div>`;
}
function buildStory(){
  const v=$("#howv");v.innerHTML=frameHTML(curScene,true);
  $$(".stp .mview").forEach((m,i)=>{m.innerHTML=`<div class="howv mini">${frameHTML(i,false)}</div>`;});
  if(window.AMRI_LOGO)$$("#como .lg[data-logo]").forEach(el=>{const sl=el.dataset.logo;
    AMRI_LOGO.probe(sl).then(info=>{if(!info||info==="none")return;el.classList.toggle("wide",!!info.wide);
      el.innerHTML=`<img src="img/logos/${sl}.${info.ext}" alt="">`;});});
  setScene(curScene,true);
  /* en móvil, cada pantalla se anima al aparecer */
  const mio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){$(".scr",e.target).classList.add("play");mio.unobserve(e.target);}}),{threshold:.45});
  $$(".stp .mview").forEach(m=>RM?$(".scr",m).classList.add("play"):mio.observe(m));
}
let curScene=0;
function setScene(n,force){
  if(n===curScene&&!force)return;curScene=n;
  const v=$("#howv");if(!v)return;
  $$(".scr",v).forEach(s=>{const on=+s.dataset.sc===n;s.classList.toggle("on",on);s.classList.toggle("play",on);});
  $(".lbl b",v).textContent=n+1;
  $$(".pips i",v).forEach((p,i)=>p.classList.toggle("on",i<=n));
  $$(".stp").forEach(s=>s.classList.toggle("on",+s.dataset.s===n));
}
$$(".stp").forEach(s=>s.addEventListener("click",()=>{if(innerWidth>900)s.scrollIntoView({behavior:RM?"auto":"smooth",block:"center"});}));

/* ---------- Categorías (sin niveles: cada uno empieza por donde quiera) ---------- */
const CAT_OF={};PATHS.forEach((p,i)=>p.r.forEach(s=>CAT_OF[s]="c"+i));
function buildPaths(){
  const box=$("#cats");if(!box)return;box.innerHTML=PATHS.map((p,i)=>`
    <article class="cat reveal" style="--d:${(i%3)*.08}s">
      <div class="cat-h"><span class="cat-ic">${p.ic}</span><span class="cat-n">${p.r.length} ${T("cat_n")}</span></div>
      <h3>${T("p"+(i+1)+"t")}</h3><p>${T("p"+(i+1)+"d")}</p>
      <ul class="rl">${p.r.map(s=>`<li><a href="recetas/${s}.html"><span>${RECETAS[IDX[s]].emoji}</span>${esc(I18N.card(IDX[s]).titulo)}</a></li>`).join("")}</ul>
      <button class="cat-see" data-cat="c${i}">${T("cat_see")} <span class="arr">→</span></button>
    </article>`).join("")+`
    <a class="cat cat-cta reveal" style="--d:.16s" href="recetas/empieza-aqui.html">
      <span class="cat-ic">🧭</span><h3>${T("cat_cta_t")}</h3><p>${T("cat_cta_d")}</p>
      <span class="cat-see">${T("cat_cta_b")} <span class="arr">→</span></span></a>`;
  observe($$(".cat",box));
}
$("#cats")&&$("#cats").addEventListener("click",e=>{const b=e.target.closest(".cat-see");if(!b)return;setFilter(b.dataset.cat);
  $("#recetas").scrollIntoView({behavior:RM?"auto":"smooth"});});

/* ---------- Carrusel de conectores ---------- */
function buildMarquee(){
  const desc=(window.I18N&&I18N.conn&&I18N.conn())||[];
  const tile=(c,i)=>`<div class="ctile" data-logo="${window.AMRI_LOGO?AMRI_LOGO.slugFor(c.n)||"":""}"><span class="ic" style="--c:${c.c}"><span class="fb">${c.ic}</span></span><span><span class="nm">${c.n}</span><small>${esc(desc[i]||"")}</small></span></div>`;
  const half=Math.ceil(CONNS.length/2);
  const rowA=CONNS.slice(0,half).map((c,i)=>tile(c,i)).join(""), rowB=CONNS.slice(half).map((c,i)=>tile(c,i+half)).join("");
  $("#marquee").innerHTML=`<div class="mq">${rowA+rowA+rowA}</div><div class="mq rev">${rowB+rowB+rowB}</div>`;
  if(window.AMRI_LOGO)AMRI_LOGO.apply($("#marquee"));
}

/* ---------- Órbita del hero ---------- */
const orbit=$("#orbit");const nodes=[];
const ORB=[
  {n:"Claude",c:"#D2561F",ring:1},{n:"Canva",c:"#3FA99B",ring:0},{n:"Higgsfield",c:"#E0773F",ring:0},
  {n:"Notion",c:"#7A6A58",ring:1},{n:"Figma",c:"#8E6BE8",ring:0},{n:"Gmail",c:"#E4A33A",ring:1},
  {n:"Blender",c:"#3B9BB0",ring:0},{n:"Chrome",c:"#4C86C6",ring:1},{n:"GitHub",c:"#2A1F14",ring:0},{n:"Slack",c:"#4A154B",ring:0}
];
ORB.forEach((o,i)=>{const d=document.createElement("div");d.className="node";const sl=window.AMRI_LOGO?AMRI_LOGO.slugFor(o.n):null;if(sl)d.setAttribute("data-logo",sl);d.innerHTML=`<b class="fb" style="--c:${o.c}"></b><span class="nm">${o.n}</span>`;orbit.appendChild(d);
  const same=ORB.filter(x=>x.ring===o.ring);nodes.push({el:d,ring:o.ring,a0:same.indexOf(o)/same.length*Math.PI*2+(o.ring?0.4:0)});});

if(window.AMRI_LOGO)AMRI_LOGO.apply(orbit);

/* ---------- Tarjetas de recetas ---------- */
const grid=$("#grid");let filter="all",query="";
function norm(s){return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");}
function renderGrid(){
  const list=RECETAS.map((r,i)=>Object.assign({},r,I18N.card(i)))
    .filter(r=>!r.off)
    .sort((a,b)=>(b.top||0)-(a.top||0))
    .filter(r=>filter==="all"||(filter==="conn"?r.c:CAT_OF[r.slug]===filter))
    .filter(r=>!query||norm(r.titulo+" "+r.desc+" "+r.tag+" "+subs(r.slug).map(x=>x.t+" "+x.d).join(" ")).includes(norm(query)));
  renderHits();
  if(!list.length){grid.innerHTML=`<div class="empty">${T("empty")}</div>`;return;}
  const catName=slug=>{const c=CAT_OF[slug];return c?T("p"+(+c.slice(1)+1)+"t"):"";};
  grid.innerHTML=list.map((r,i)=>{const n=subs(r.slug).length||1;return `
    <a class="card book" href="recetas/${r.slug}.html" style="transition-delay:${Math.min(i,8)*.05}s">
      <div class="card-thumb" style="background:linear-gradient(135deg,${r.bg},${r.bg2})">
        ${r.emoji}
        <img src="img/portadas/${r.slug}.jpg" alt="" loading="lazy" onerror="this.onerror=()=>nextImg(this);this.src='img/${r.slug}.${r.svg?"svg":"jpg"}'">
      </div>
      <div class="card-body">
        <h3>${esc(r.titulo)}</h3>
        <span class="bk-meta">${n} ${n===1?T("lib_one"):T("lib_many")} · ${esc(catName(r.slug))}</span>
      </div>
    </a>`}).join("");
  const cards=$$(".card",grid);
  if(RM){cards.forEach(c=>c.classList.add("in"));return;}
  requestAnimationFrame(()=>requestAnimationFrame(()=>cards.forEach(c=>{const r=c.getBoundingClientRect();if(r.top<innerHeight)c.classList.add("in");else io.observe(c);})));
  cards.forEach(c=>c.addEventListener("transitionend",()=>c.style.transitionDelay="0s",{once:true}));
}
/* Recetas de dentro de los libros que encajan con la búsqueda */
function renderHits(){
  const box=$("#hits");if(!box)return;
  if(!query||query.length<3){box.innerHTML="";return;}
  const q=norm(query),hits=[];
  RECETAS.forEach((r,i)=>!r.off&&subs(r.slug).forEach(x=>{if(norm(x.t+" "+x.d).includes(q))hits.push({b:I18N.card(i).titulo,slug:r.slug,x})}));
  box.innerHTML=hits.length?`<h3>${esc(T("lib_hits"))}</h3><div class="hit-list">${hits.slice(0,8).map(h=>`<a class="hit" href="recetas/${h.slug}--${h.x.s}.html"><b>${esc(h.x.t)}</b><small>${esc(T("lib_in"))} «${esc(h.b)}»</small><span aria-hidden="true">→</span></a>`).join("")}</div>`:"";
}
function setFilter(f){filter=f;$$(".fchip").forEach(c=>c.setAttribute("aria-pressed",c.dataset.f===f));renderGrid();}
$("#filters").addEventListener("click",e=>{const b=e.target.closest(".fchip");if(b)setFilter(b.dataset.f);});
$("#q").addEventListener("input",e=>{query=e.target.value.trim();renderGrid();});

/* ---------- Revelado al entrar en pantalla ---------- */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}}),{rootMargin:"0px 0px -8% 0px",threshold:.08});
function observe(els){els.forEach(el=>RM?el.classList.add("in"):io.observe(el));}

/* ---------- Contadores ---------- */
const cio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;cio.unobserve(e.target);const el=e.target,to=+el.dataset.count;
  if(RM){el.textContent=to;return;}const t0=performance.now(),D=1800;
  const step=t=>{const p=clamp((t-t0)/D,0,1);el.textContent=Math.round(to*(1-Math.pow(1-p,4)));if(p<1)requestAnimationFrame(step);};requestAnimationFrame(step);}),{threshold:.6});
const VIS=RECETAS.filter(r=>!r.off);
$$("[data-books]").forEach(el=>el.dataset.count=VIS.length);
$$("[data-recipes]").forEach(el=>el.dataset.count=VIS.reduce((n,r)=>n+(subs(r.slug).length||1),0));
$$("[data-count]").forEach(el=>{el.textContent="0";cio.observe(el);});

/* ---------- Máquina de escribir ---------- */
let typed=false,typeTimer=null;
function typeScript(instant){
  const pre=$("#typer");clearTimeout(typeTimer);
  const lines=String(T("o_script")).split("\n").map(l=>{
    const cls=l.startsWith("›")?"p":l.startsWith("✓")?"c":"m";return {cls,txt:l+"\n"};});
  if(instant||RM){pre.innerHTML=lines.map(l=>`<span class="${l.cls}">${esc(l.txt)}</span>`).join("")+'<span class="caret"></span>';return;}
  let li=0,ci=0;pre.innerHTML="";let span=null;
  const tick=()=>{
    if(li>=lines.length){pre.insertAdjacentHTML("beforeend",'<span class="caret"></span>');return;}
    if(!span){span=document.createElement("span");span.className=lines[li].cls;pre.appendChild(span);}
    const L=lines[li].txt;const chunk=lines[li].cls==="p"?1:3;
    span.textContent+=L.slice(ci,ci+chunk);ci+=chunk;
    if(ci>=L.length){li++;ci=0;span=null;typeTimer=setTimeout(tick,lines[li-1].cls==="p"?650:260);}
    else typeTimer=setTimeout(tick,lines[li].cls==="p"?34:14);
  };tick();
}
const tio=new IntersectionObserver(es=>{if(es[0].isIntersecting&&!typed){typed=true;typeScript();tio.disconnect();}},{threshold:.35});
tio.observe($("#typer"));

/* ---------- FAQ con apertura suave ---------- */
$$("#faq details").forEach(d=>{
  const s=$("summary",d),a=$(".ans",d);
  s.addEventListener("click",e=>{
    if(RM||!a.animate)return;e.preventDefault();
    if(d.open){const h=a.offsetHeight;a.animate([{height:h+"px",opacity:1},{height:"0px",opacity:0}],{duration:520,easing:"cubic-bezier(.22,.8,.24,1)"}).onfinish=()=>d.open=false;}
    else{d.open=true;const h=a.offsetHeight;a.animate([{height:"0px",opacity:0},{height:h+"px",opacity:1}],{duration:700,easing:"cubic-bezier(.22,.8,.24,1)"});}
  });
});

/* ---------- Newsletter ---------- */
$("#news").addEventListener("submit",async e=>{e.preventDefault();
  const f=e.target,b=f.querySelector("button"),inp=f.querySelector("input"),msg=$("#newsMsg"),ok=$("#newsConsent").checked;
  const em=inp.value.trim();msg.style.color="";
  if(!ok||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)){msg.textContent=T("n_err");msg.style.color="#C2410C";return;}
  const sb=window.AMRI_ACC&&AMRI_ACC.sb;if(!sb){msg.textContent=T("n_fail");return;}
  b.disabled=true;
  try{const r=await sb.rpc("subscribe_newsletter",{p_email:em,p_lang:(window.I18N&&I18N.lang())||"es"});
    if(r.error||r.data!==true)throw r.error||new Error("x");
    b.textContent=T("n_ok");b.style.background="var(--ok)";inp.value="";$("#newsConsent").checked=false;msg.textContent="";
    setTimeout(()=>{b.textContent=T("n_btn");b.style.background="";b.disabled=false;},3000);
  }catch(err){b.disabled=false;msg.textContent=T("n_fail");msg.style.color="#C2410C";}
});

/* ---------- Scroll: todo lo que se mueve con la rueda ---------- */
const header=$("#top"),readline=$("#readline"),heroCopy=$("#heroCopy"),wordmark=$("#wordmark");
let lastY=scrollY,ticking=false,sy=scrollY,smooth=scrollY;
function onScroll(){
  const y=scrollY,H=document.documentElement.scrollHeight-innerHeight;
  readline.style.transform=`scaleX(${H>0?y/H:0})`;
  header.classList.toggle("scrolled",y>20);
  header.classList.toggle("hide",y>lastY&&y>600);lastY=y;

  // Manifiesto
  const m=$("#manifesto");
  if(m&&mWords.length){const r=m.getBoundingClientRect();const p=clamp((innerHeight*.85-r.top)/(r.height+innerHeight*.35),0,1);
    const lit=Math.round(p*mWords.length);mWords.forEach((w,i)=>w.classList.toggle("lit",i<lit));}

  // Historia
  const stps=$$(".stp");let best=curScene,bd=1e9;
  stps.forEach(s=>{const r=s.getBoundingClientRect();const d=Math.abs(r.top+r.height/2-innerHeight/2);if(d<bd){bd=d;best=+s.dataset.s;}});
  setScene(best);

  // Rutas: la línea se dibuja

  // Palabra gigante del pie
  if(wordmark&&!RM){const r=wordmark.parentElement.getBoundingClientRect();const p=clamp((innerHeight-r.top)/r.height,0,1);
    wordmark.style.transform=`translateY(${(1-p)*40}%)`;}
  ticking=false;
}
addEventListener("scroll",()=>{sy=scrollY;if(!ticking){ticking=true;requestAnimationFrame(onScroll);}},{passive:true});
addEventListener("resize",onScroll);

/* ---------- Bucle suave: órbita, parallax del hero y brillo ---------- */
const glow=$("#glow"),hero=$("#hero");let gx=innerWidth/2,gy=innerHeight/2,tx=gx,ty=gy;
hero.addEventListener("pointermove",e=>{const r=hero.getBoundingClientRect();tx=e.clientX-r.left;ty=e.clientY-r.top;});
function loop(t){
  smooth+=(sy-smooth)*.08; // inercia tranquila
  const hp=clamp(smooth/innerHeight,0,1.2);
  // Hero: el texto sube y se desvanece despacio; la órbita gira y se aleja
  heroCopy.style.transform=`translateY(${hp*-70}px)`;heroCopy.style.opacity=String(1-hp*1.1);
  orbit.style.transform=`translateY(${hp*40}px) scale(${1-hp*.18}) rotate(${hp*-14}deg)`;orbit.style.opacity=String(1-hp*.9);
  const W=orbit.clientWidth,cx=W/2;
  nodes.forEach(n=>{
    const R=n.ring?W*.31:W*.45, speed=n.ring?-1/95000:1/130000;
    const a=n.a0+t*speed*Math.PI*2+hp*(n.ring?-1.4:1.1);
    const x=cx+Math.cos(a)*R, y=cx+Math.sin(a)*R;
    const depth=(Math.sin(a)+1)/2; // abajo = más cerca
    n.el.style.transform=`translate(${x}px,${y}px) translate(-50%,-50%) rotate(${hp*14}deg) scale(${.86+depth*.18})`;
    n.el.style.opacity=String(.55+depth*.45);
    n.el.style.zIndex=String(depth>.5?3:1);
  });
  gx+=(tx-gx)*.06;gy+=(ty-gy)*.06;glow.style.transform=`translate(${gx-260}px,${gy-260}px)`;
  requestAnimationFrame(loop);
}
if(!RM)requestAnimationFrame(loop);else{loop(0);}

/* ---------- Construcción / idioma ---------- */
function build(){
  splitWords($("#heroTitle"));
  buildManifesto();buildStory();buildPaths();buildMarquee();renderGrid();
  if(typed)typeScript(true);
  onScroll();
}
build();
observe($$(".reveal"));
document.addEventListener("langchange",()=>{build();document.body.classList.add("ready");});
// Entrada inicial suave
requestAnimationFrame(()=>setTimeout(()=>document.body.classList.add("ready"),60));
})();

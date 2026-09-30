/* ==========================================================
   AMRI · Academia de IA — interacción y animaciones de la portada
   Sin dependencias. Respeta "prefers-reduced-motion".
   ========================================================== */
(function(){
"use strict";

/* ---------- Configuración: cambia esto por tu repositorio ---------- */
const REPO = "https://github.com/amri-academia/amri";

/* ---------- Datos (los textos traducibles viven en i18n.js) ---------- */
// f = categoría · c = usa conectores · n = nueva
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
  {slug:"claude-chrome",f:"auto",emoji:"🧭",bg:"#E2EEF8",bg2:"#FBF6EE",c:1,n:1,svg:1},
  {slug:"skills-claude",f:"texto",emoji:"📖",bg:"#E6F2DC",bg2:"#FBF6EE",n:1,svg:1},
  {slug:"conector-propio",f:"web",emoji:"🔌",bg:"#FFE4D6",bg2:"#FBF6EE",c:1,n:1,svg:1}
];
const IDX = Object.fromEntries(RECETAS.map((r,i)=>[r.slug,i]));
const PATHS = [
  {ic:"🌱",r:["asistente-ia","imagenes-ia","logo-ia"]},
  {ic:"🔌",r:["gmail-calendario","notion-cerebro","canva-diseno","claude-chrome"]},
  {ic:"🛠️",r:["webapp-gratis","chatbot-web","figma-a-web","automatiza-tareas"]},
  {ic:"🎬",r:["higgsfield-cine","video-aftereffects","blender-3d"]},
  {ic:"🧠",r:["skills-claude","conector-propio"]}
];
const CONNS = [
  {n:"Higgsfield",ic:"🎥",c:"#FFD9C4"},{n:"Canva",ic:"🖌️",c:"#CDEDE8"},{n:"Figma",ic:"📐",c:"#E3D9FF"},
  {n:"Notion",ic:"🗂️",c:"#EFE6D8"},{n:"Gmail",ic:"📬",c:"#FFE7C2"},{n:"Google Calendar",ic:"📅",c:"#D9E8FF"},
  {n:"Claude in Chrome",ic:"🧭",c:"#DCEBF6"},{n:"Blender",ic:"🧊",c:"#D4EEF2"},{n:"After Effects",ic:"🎬",c:"#E6DCFF"},
  {n:"GitHub",ic:"🐙",c:"#E8E1D8"},{n:"Cloudflare",ic:"☁️",c:"#FFE0C8"},{n:"Google Drive",ic:"📁",c:"#DFF0DA"}
];

const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
const T=k=>window.I18N?I18N.t(k):"";
const RM=matchMedia("(prefers-reduced-motion: reduce)").matches;
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;");

/* ---------- Enlaces al repositorio ---------- */
$$("[data-repo]").forEach(a=>a.href=REPO);

/* ---------- Tema ---------- */
const root=document.documentElement;
let theme=root.getAttribute("data-theme")||(matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light");
function applyTheme(){root.setAttribute("data-theme",theme);$("#theme").textContent=theme==="dark"?"☀️":"🌙";
  const m=$('meta[name="theme-color"]');if(m)m.content=theme==="dark"?"#17110B":"#FBF6EE";}
applyTheme();
$("#theme").onclick=()=>{theme=theme==="dark"?"light":"dark";try{localStorage.setItem("amri-theme",theme)}catch(e){}applyTheme();};

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

/* ---------- Historia: escenas del chat ---------- */
function sceneHTML(n){
  const k="h_c"+(n+1);
  return `<div class="scene" data-sc="${n}">
    <div class="bub u">${T(k+"u")}</div>
    ${T(k+"t")?`<span class="toolpill later">${T(k+"t")}</span>`:""}
    <div class="stack"><span class="dots"><i></i><i></i><i></i></span><div class="bub a later">${T(k+"a")}</div></div>
  </div>`;
}
function buildStory(){
  const body=$("#chatBody");body.innerHTML=[0,1,2,3].map(sceneHTML).join("");
  $$(".stp .mchat").forEach((m,i)=>{m.innerHTML=`<div class="chat"><div class="chat-body">${sceneHTML(i).replace('class="scene"','class="scene on"')}</div></div>`;});
  setScene(curScene,true);
}
let curScene=0;
function setScene(n,force){
  if(n===curScene&&!force)return;curScene=n;
  $$("#chatBody .scene").forEach(s=>s.classList.toggle("on",+s.dataset.sc===n));
  $$(".stp").forEach(s=>s.classList.toggle("on",+s.dataset.s===n));
}

/* ---------- Rutas ---------- */
function buildPaths(){
  const box=$("#paths");$$(".path",box).forEach(p=>p.remove());
  PATHS.forEach((p,i)=>{
    const d=document.createElement("div");d.className="path reveal";
    d.innerHTML=`<div class="dot">${p.ic}</div><div class="pc"><div class="lvl">${T("lvl")} ${i+1}</div><h3>${T("p"+(i+1)+"t")}</h3><p>${T("p"+(i+1)+"d")}</p>
      <div class="pills">${p.r.map(s=>`<a href="recetas/${s}.html">${esc(I18N.card(IDX[s]).titulo)}</a>`).join("")}</div></div>`;
    box.appendChild(d);
  });
  observe($$(".path",box));
}

/* ---------- Carrusel de conectores ---------- */
function buildMarquee(){
  const desc=(window.I18N&&I18N.conn&&I18N.conn())||[];
  const tile=(c,i)=>`<div class="ctile"><span class="ic" style="--c:${c.c}">${c.ic}</span><span>${c.n}<small>${esc(desc[i]||"")}</small></span></div>`;
  const half=Math.ceil(CONNS.length/2);
  const rowA=CONNS.slice(0,half).map((c,i)=>tile(c,i)).join(""), rowB=CONNS.slice(half).map((c,i)=>tile(c,i+half)).join("");
  $("#marquee").innerHTML=`<div class="mq">${rowA+rowA+rowA}</div><div class="mq rev">${rowB+rowB+rowB}</div>`;
}

/* ---------- Órbita del hero ---------- */
const orbit=$("#orbit");const nodes=[];
const ORB=[
  {n:"Claude",c:"#D2561F",ring:1},{n:"Canva",c:"#3FA99B",ring:0},{n:"Higgsfield",c:"#E0773F",ring:0},
  {n:"Notion",c:"#7A6A58",ring:1},{n:"Figma",c:"#8E6BE8",ring:0},{n:"Gmail",c:"#E4A33A",ring:1},
  {n:"Blender",c:"#3B9BB0",ring:0},{n:"Chrome",c:"#4C86C6",ring:1},{n:"GitHub",c:"#2A1F14",ring:0},{n:"Calendar",c:"#5A8FD8",ring:0}
];
ORB.forEach((o,i)=>{const d=document.createElement("div");d.className="node";d.innerHTML=`<b style="--c:${o.c}"></b>${o.n}`;orbit.appendChild(d);
  const same=ORB.filter(x=>x.ring===o.ring);nodes.push({el:d,ring:o.ring,a0:same.indexOf(o)/same.length*Math.PI*2+(o.ring?0.4:0)});});

/* ---------- Tarjetas de recetas ---------- */
const grid=$("#grid");let filter="all",query="";
function norm(s){return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");}
function renderGrid(){
  const list=RECETAS.map((r,i)=>Object.assign({},r,I18N.card(i)))
    .filter(r=>filter==="all"||(filter==="conn"?r.c:r.f===filter))
    .filter(r=>!query||norm(r.titulo+" "+r.desc+" "+r.tag).includes(norm(query)));
  if(!list.length){grid.innerHTML=`<div class="empty">${T("empty")}</div>`;return;}
  grid.innerHTML=list.map((r,i)=>`
    <a class="card" href="recetas/${r.slug}.html" style="transition-delay:${Math.min(i,8)*.07}s">
      <div class="card-thumb" style="background:linear-gradient(135deg,${r.bg},${r.bg2})">
        <span class="tag">${esc(r.tag)}</span>${r.c?`<span class="conn">🔌 MCP</span>`:""}${r.n?`<span class="new">${T("new")}</span>`:""}
        ${r.emoji}
        <img src="img/${r.slug}.${r.svg?"svg":"jpg"}" alt="" loading="lazy" onerror="nextImg(this)">
      </div>
      <div class="card-body">
        <h3>${esc(r.titulo)}</h3>
        <p class="desc">${esc(r.desc)}</p>
        <div class="chips">${r.chips.map(c=>`<span>${esc(c)}</span>`).join("")}</div>
        <span class="more">${T("card_open")} <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
      </div>
    </a>`).join("");
  const cards=$$(".card",grid);
  if(RM){cards.forEach(c=>c.classList.add("in"));return;}
  requestAnimationFrame(()=>requestAnimationFrame(()=>cards.forEach(c=>{const r=c.getBoundingClientRect();if(r.top<innerHeight)c.classList.add("in");else io.observe(c);})));
  cards.forEach(c=>c.addEventListener("transitionend",()=>c.style.transitionDelay="0s",{once:true}));
}
$("#filters").addEventListener("click",e=>{const b=e.target.closest(".fchip");if(!b)return;filter=b.dataset.f;
  $$(".fchip").forEach(c=>c.setAttribute("aria-pressed",c===b));renderGrid();});
$("#q").addEventListener("input",e=>{query=e.target.value.trim();renderGrid();});

/* ---------- Revelado al entrar en pantalla ---------- */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}}),{rootMargin:"0px 0px -8% 0px",threshold:.08});
function observe(els){els.forEach(el=>RM?el.classList.add("in"):io.observe(el));}

/* ---------- Contadores ---------- */
const cio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;cio.unobserve(e.target);const el=e.target,to=+el.dataset.count;
  if(RM){el.textContent=to;return;}const t0=performance.now(),D=1800;
  const step=t=>{const p=clamp((t-t0)/D,0,1);el.textContent=Math.round(to*(1-Math.pow(1-p,4)));if(p<1)requestAnimationFrame(step);};requestAnimationFrame(step);}),{threshold:.6});
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
$("#news").addEventListener("submit",e=>{e.preventDefault();const b=e.target.querySelector("button");b.textContent=T("n_ok");b.style.background="var(--ok)";e.target.querySelector("input").value="";
  setTimeout(()=>{b.textContent=T("n_btn");b.style.background="";},2600);});

/* ---------- Scroll: todo lo que se mueve con la rueda ---------- */
const header=$("#top"),readline=$("#readline"),heroCopy=$("#heroCopy"),wordmark=$("#wordmark"),pathsBox=$("#paths"),pathFill=$("#pathFill");
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
  if(pathsBox){const r=pathsBox.getBoundingClientRect();const p=clamp((innerHeight*.6-r.top)/r.height,0,1);
    pathFill.setAttribute("y2",(p*r.height)+"");
    $$(".path",pathsBox).forEach(el=>{const pr=el.getBoundingClientRect();el.classList.toggle("lit",pr.top<innerHeight*.6);});}

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

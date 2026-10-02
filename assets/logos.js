/* ==========================================================
   AMRI · logos de plataformas (opcionales)
   Pon los archivos en img/logos/<nombre>.svg (o .png).
   - Logos con nombre (anchos): sustituyen al texto.
   - Logos de símbolo (cuadrados): van delante del texto.
   Si un logo no existe, se sigue viendo el diseño de siempre.
   ========================================================== */
(function(){
"use strict";
// Nombre visible (en minúsculas) → nombre de archivo. Los compuestos primero.
var MAP=[
  ["claude in chrome","chrome"],["google calendar","google-calendar"],["google drive","google-drive"],["google sheets","google-sheets"],
  ["google forms","google-forms"],["after effects","after-effects"],["media encoder","media-encoder"],["bing image creator","bing"],
  ["claude","claude"],["supabase","supabase"],["cloudflare","cloudflare"],["github","github"],["canva","canva"],["figma","figma"],
  ["notion","notion"],["gmail","gmail"],["calendar","google-calendar"],["higgsfield","higgsfield"],["blender","blender"],
  ["chrome","chrome"],["zapier","zapier"],["chatbase","chatbase"],["ideogram","ideogram"],["remove.bg","removebg"],
  ["node.js","nodejs"],["hugging face","huggingface"],["slack","slack"],["gurusup","gurusup"]
];
// Ajuste óptico: algunos logos con nombre se ven más pequeños o grandes a igual altura
var SCALE={notion:1.35,cloudflare:1.4,gmail:.82,claude:.95,chatbase:1.1,supabase:1.2,chrome:1.12,zapier:.92,blender:1.05,slack:1.15,gurusup:1.05};
var state={}; // slug -> {ext,ratio} | "none" | Promise
function base(){return /\/recetas\//.test(location.pathname)?"../":""}
function src(slug,ext){return base()+"img/logos/"+slug+"."+ext}
function probe(slug){
  var s=state[slug];
  if(s&&typeof s.then==="function")return s;
  if(s)return Promise.resolve(s);
  var p=new Promise(function(res){
    var tryExt=function(list){
      if(!list.length){state[slug]="none";return res("none");}
      var ext=list[0],im=new Image();
      im.onload=function(){var r=(im.naturalWidth||1)/(im.naturalHeight||1);state[slug]={ext:ext,ratio:r,wide:r>1.6};res(state[slug])};
      im.onerror=function(){tryExt(list.slice(1))};
      im.src=src(slug,ext);
    };
    tryExt(["svg","png"]);
  });
  state[slug]=p;return p;
}
function slugFor(text){
  var t=String(text||"").toLowerCase();
  for(var i=0;i<MAP.length;i++){if(t.indexOf(MAP[i][0])>-1)return MAP[i][1];}
  return null;
}
function slugsIn(text,max){
  var t=String(text||"").toLowerCase(),out=[];
  MAP.forEach(function(m){if(out.length>=(max||3))return;var i=t.indexOf(m[0]);
    if(i>-1){if(out.indexOf(m[1])<0)out.push(m[1]);t=t.slice(0,i)+" ".repeat(m[0].length)+t.slice(i+m[0].length);}});
  return out;
}
function img(slug,info,cls,alt){return '<img class="brand-logo '+(info.wide?"wide ":"sq ")+(cls||"")+'" alt="'+(alt||"")+'" style="--s:'+(info.wide?(SCALE[slug]||1):1)+'" src="'+src(slug,info.ext)+'">'}

/* Órbita (.node) y cinta (.ctile) con data-logo="nombre" */
function apply(root){
  (root||document).querySelectorAll("[data-logo]:not([data-logo-done])").forEach(function(el){
    el.setAttribute("data-logo-done","1");
    var slug=el.getAttribute("data-logo");if(!slug)return;
    probe(slug).then(function(info){
      if(info==="none")return;
      var nm=el.querySelector(".nm"),name=nm?nm.textContent:"";
      if(el.classList.contains("node")){
        if(info.wide){el.classList.add("wm");el.innerHTML=img(slug,info,"",name);}
        else{var fb=el.querySelector(".fb");if(fb)fb.outerHTML=img(slug,info);}
      }else if(el.classList.contains("ctile")){
        if(info.wide){el.classList.add("wm");if(nm)nm.innerHTML=img(slug,info,"",name);}
        else{var ic=el.querySelector(".ic");if(ic){ic.classList.add("has-logo");ic.innerHTML=img(slug,info);}}
      }
    });
  });
}
/* Ingredientes: fila de logos de las herramientas que aparecen en la lista */
function decorateList(ul){
  if(!ul)return;
  var slugs=[];
  ul.querySelectorAll("li > b:first-child").forEach(function(b){slugsIn(b.textContent,3).forEach(function(s){if(slugs.indexOf(s)<0)slugs.push(s)})});
  var host=ul.parentNode,old=host.querySelector(".logo-strip");
  Promise.all(slugs.map(probe)).then(function(infos){
    var html=slugs.map(function(s,i){var inf=infos[i];return inf==="none"?"":'<span class="lchip">'+img(s,inf,"",s)+'</span>'}).join("");
    old=host.querySelector(".logo-strip");
    if(!html){if(old)old.remove();return;}
    if(old&&old.getAttribute("data-k")===slugs.join()){return;}
    if(old)old.remove();
    var d=document.createElement("div");d.className="logo-strip";d.setAttribute("data-k",slugs.join());d.innerHTML=html;
    host.insertBefore(d,ul);
  });
}

/* Herramientas de cada receta (para la esquina de su portada) */
var TOOLS={
  "webapp-gratis":["claude","github","supabase","cloudflare"],"imagenes-ia":["claude","bing","ideogram","canva"],
  "asistente-ia":["claude"],"automatiza-tareas":["zapier","gmail","google-sheets","claude"],"chatbot-web":["claude","chatbase"],
  "logo-ia":["claude","ideogram","canva"],"video-aftereffects":["claude","after-effects"],"blender-3d":["claude","blender"],
  "higgsfield-cine":["claude","higgsfield"],"canva-diseno":["claude","canva"],"figma-a-web":["claude","figma"],
  "notion-cerebro":["claude","notion"],"gmail-calendario":["claude","gmail","google-calendar"],"claude-chrome":["claude","chrome"],
  "skills-claude":["claude"],"conector-propio":["claude","nodejs"],"slack-equipo":["claude","slack"],"gurusup-brain":["claude","gurusup"],"redes-sociales":["claude"],"animaciones-opus":["claude"],"jev-decisiones":["claude","cloudflare"],"jev-guardian":["claude","cloudflare"]
};
/* Rellena cada [data-tools="slug-receta"] con una pastilla de logos */
function fillTools(root){
  (root||document).querySelectorAll("[data-tools]:not([data-tools-done])").forEach(function(el){
    el.setAttribute("data-tools-done","1");
    var list=TOOLS[el.getAttribute("data-tools")]||[];
    Promise.all(list.map(probe)).then(function(infos){
      var html=list.map(function(s,i){return infos[i]==="none"?"":img(s,infos[i],"",s)}).join("");
      if(html){el.innerHTML=html;el.classList.add("on");}
    });
  });
}
var css=document.createElement("style");
css.textContent=
 ".brand-logo{display:block;flex:none;object-fit:contain}"+
 ".node .brand-logo.sq{width:20px;height:20px}"+
 ".node.wm{background:#fff;padding:9px 15px}.node.wm .brand-logo{height:calc(18px*var(--s,1));width:auto;max-width:130px}"+
 ".ctile .ic.has-logo{background:#fff!important;border:1px solid var(--line)}.ctile .ic .brand-logo{width:26px;height:26px}"+
 ".ctile.wm .ic{display:none}.ctile.wm{background:#fff}.ctile.wm .nm .brand-logo{height:calc(22px*var(--s,1));width:auto;max-width:160px;margin:2px 0 5px}"+
 ".ctile.wm small{color:#7A6A58}"+
 ".logo-strip{display:flex;flex-wrap:wrap;gap:8px;margin:6px 0 12px}"+
 ".lchip{display:inline-flex;align-items:center;background:#fff;border:1px solid var(--line);border-radius:12px;padding:7px 12px;box-shadow:0 6px 16px -12px rgba(42,31,20,.5)}"+
 ".tools-badge{position:absolute;z-index:2;right:12px;bottom:12px;display:none;align-items:center;gap:10px;background:rgba(255,255,255,.92);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);border:1px solid rgba(230,218,203,.9);border-radius:12px;padding:6px 10px;box-shadow:0 8px 20px -12px rgba(42,31,20,.55)}"+
 ".tools-badge.on{display:inline-flex}.tools-badge img.brand-logo{position:static!important;inset:auto!important;transform:none!important;filter:none!important;object-fit:contain!important;display:block}"+
 ".tools-badge .brand-logo.wide{height:calc(13px*var(--s,1));width:auto;max-width:78px}.tools-badge .brand-logo.sq{width:16px;height:16px}"+
 ".r-cover .tools-badge{right:16px;bottom:16px;gap:14px;padding:9px 14px;border-radius:14px}.r-cover .tools-badge .brand-logo.wide{height:calc(17px*var(--s,1));max-width:110px}.r-cover .tools-badge .brand-logo.sq{width:21px;height:21px}"+
 "[dir=rtl] .tools-badge{right:auto;left:12px}[dir=rtl] .r-cover .tools-badge{left:16px}"+
 ".lchip .brand-logo.wide{height:calc(19px*var(--s,1));width:auto;max-width:140px}.lchip .brand-logo.sq{width:22px;height:22px}";
document.head.appendChild(css);
window.AMRI_LOGO={slugFor:slugFor,apply:apply,decorateList:decorateList,probe:probe,fillTools:fillTools,tools:TOOLS};
})();

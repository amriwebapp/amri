/* AMRI · datos compartidos de recetas y categorías (mismo orden que las tarjetas de i18n.js) */
window.AMRI_DATA={
  order:["webapp-gratis","imagenes-ia","asistente-ia","automatiza-tareas","chatbot-web","logo-ia","video-aftereffects","blender-3d",
    "higgsfield-cine","canva-diseno","figma-a-web","notion-cerebro","gmail-calendario","claude-chrome","skills-claude","conector-propio","slack-equipo","gurusup-brain","instagram-ia"],
  svg:["higgsfield-cine","canva-diseno","figma-a-web","notion-cerebro","gmail-calendario","claude-chrome","skills-claude","conector-propio","slack-equipo","gurusup-brain","instagram-ia"],
  paths:[
    {ic:"🌱",r:["asistente-ia","imagenes-ia","logo-ia"]},
    {ic:"🔌",r:["gmail-calendario","notion-cerebro","canva-diseno","claude-chrome","slack-equipo"]},
    {ic:"🛠️",r:["webapp-gratis","chatbot-web","figma-a-web","automatiza-tareas"]},
    {ic:"🎬",r:["higgsfield-cine","video-aftereffects","blender-3d","instagram-ia"]},
    {ic:"🧠",r:["skills-claude","gurusup-brain","conector-propio"]}
  ],
  img:function(slug,base){return (base||"")+"img/"+slug+(this.svg.indexOf(slug)>-1?".svg":".jpg")},
  title:function(slug){var i=this.order.indexOf(slug);return i>-1&&window.I18N?I18N.card(i).titulo:slug}
};

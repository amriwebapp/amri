/* AMRI · genera el plugin de Claude Code (plugin/skills/*) a partir de las recetas de la web.
   Uso: node tools/plugin.js   (desde la raíz del repositorio)
   Las skills se regeneran siempre: edita las recetas en recetas/data/*.es.js, no los SKILL.md. */
const fs = require("fs"), path = require("path"), vm = require("vm");
const ROOT = path.resolve(__dirname, ".."), OUT = path.join(ROOT, "plugin", "skills");
const SITE = "https://amri.es";

/* Nombre de la skill: igual que el de la receta (las palabras «claude» y «anthropic» no se usan en nombres de skill) */
const NAME = {};
const skillName = s => NAME[s] || s;

/* Datos de la portada: orden, títulos y categorías */
const i18n = fs.readFileSync(path.join(ROOT, "i18n.js"), "utf8");
const c0 = i18n.indexOf("cards:[") + 6;
let depth = 0, c1 = c0;
for (; c1 < i18n.length; c1++) { const ch = i18n[c1]; if (ch === "[") depth++; else if (ch === "]") { depth--; if (!depth) break; } }
const cardsSrc = i18n.slice(c0, c1 + 1);
const CARDS = vm.runInNewContext("(" + cardsSrc + ")", { CH: (a, b, c) => [a, b, c] });
const ORDER = ["webapp-gratis","imagenes-ia","asistente-ia","automatiza-tareas","chatbot-web","logo-ia","video-aftereffects","blender-3d",
  "higgsfield-cine","canva-diseno","figma-a-web","notion-cerebro","gmail-calendario","navegador-chrome","skills-propias","conector-propio","slack-equipo","gurusup-brain","redes-sociales","animaciones-opus","jev-decisiones","jev-guardian","empieza-aqui","primer-agente"];
const CATS = [
  ["Primeros pasos", ["empieza-aqui","asistente-ia","imagenes-ia","logo-ia"]],
  ["Conecta tus apps", ["gmail-calendario","notion-cerebro","canva-diseno","navegador-chrome","slack-equipo"]],
  ["Crea y publica", ["webapp-gratis","chatbot-web","figma-a-web","automatiza-tareas"]],
  ["Estudio creativo", ["higgsfield-cine","video-aftereffects","blender-3d","redes-sociales","animaciones-opus"]],
  ["Claude a tu medida", ["primer-agente","skills-propias","conector-propio"]],
  ["Para empresas (de pago)", ["gurusup-brain","jev-decisiones","jev-guardian"]]
];
const catOf = s => CATS.find(c => c[1].includes(s));
const card = s => CARDS[ORDER.indexOf(s)];

/* HTML de la receta → Markdown sencillo */
function md(h) {
  return String(h)
    .replace(/<div class="cb"><pre>([\s\S]*?)<\/pre>[\s\S]*?<\/div>/g, (m, t) => "\n\n```text\n" + t.replace(/&lt;/g, "<").replace(/&amp;/g, "&") + "\n```\n\n")
    .replace(/<div class="check">✅ <b>[^<]*<\/b>\s*([\s\S]*?)<\/div>/g, "\n\n**✅ Comprobación:** $1\n\n")
    .replace(/<div class="tip">([\s\S]*?)<\/div>/g, "\n\n> 💡 $1\n\n")
    .replace(/<details><summary>([\s\S]*?)<\/summary>/g, "\n\n**$1**\n").replace(/<\/details>/g, "\n")
    .replace(/<h3>([\s\S]*?)<\/h3>/g, "\n\n#### $1\n")
    .replace(/<p class="what">([\s\S]*?)<\/p>/g, "\n$1\n")
    .replace(/<li>/g, "\n- ").replace(/<\/li>|<\/?ul>|<\/?ol>/g, "")
    .replace(/<a [^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g, "[$2]($1)")
    .replace(/<\/?(b|strong)>/g, "**").replace(/<\/?code>/g, "`").replace(/<\/?i>|<\/?em>/g, "_")
    .replace(/<br\s*\/?>/g, "\n").replace(/<\/?p[^>]*>/g, "\n").replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ")
    .replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
}

const PROTOCOL = `## Cómo cocinar esta receta

Eres el chef de AMRI y cocinas esta receta **con** la persona usuaria, que puede no saber programar.

- **Su idea:** $ARGUMENTS
  Si está vacía, pregúntale qué quiere hacer con una sola pregunta y ofrece dos o tres ejemplos de la lista «Ideas de ejemplo».
- Habla en el idioma de la persona, con frases cortas y sin jerga. Explica cada término nuevo en una línea.
- Antes de empezar, resume el plan en 3-5 puntos y pide confirmación.
- **Haz tú todo lo que puedas** con tus herramientas: crear y editar archivos, la terminal, git, \`gh\`, \`npx wrangler\`, npm y los conectores (MCP) que estén disponibles. Los pasos de abajo están escritos para alguien que usa Claude en el chat: adáptalos. Donde diga «copia este mensaje y pégalo en Claude», haz tú directamente lo que pide el mensaje.
- **Lo hace la persona, nunca tú:** crear cuentas, iniciar sesión, autorizar accesos, aceptar condiciones y pagar. Dile exactamente qué pulsar, lanza el inicio de sesión de la herramienta cuando exista (\`gh auth login\`, \`npx wrangler login\`…) y espera a que confirme.
- No pidas, no escribas y no guardes en el código contraseñas ni claves secretas. Las claves públicas (como la «publicable» de Supabase, antes llamada «anon») sí pueden ir en el código; las secretas, solo en variables de entorno.
- Pide permiso antes de cualquier acción que publique algo o no tenga vuelta atrás: subir a GitHub, desplegar, borrar.
- Después de cada paso, comprueba su **✅ Comprobación** antes de seguir. Si falla, averigua por qué y arréglalo; si no puedes, explícalo y propón una salida.
- Trabaja en una carpeta nueva con un nombre corto sacado de la idea, salvo que la persona ya esté dentro de su proyecto.
- Al terminar: resume lo que se ha hecho, da los enlaces importantes y propón la siguiente receta de «Sigue con». Invita a compartir el resultado en la comunidad de la receta en ${SITE}.`;

function build(slug) {
  const file = path.join(ROOT, "recetas", "data", slug + ".es.js");
  const ctx = { window: {}, console };
  ctx.window.RECIPE = {};
  vm.runInNewContext(fs.readFileSync(file, "utf8"), ctx);
  const P = ctx.window.RECIPE.es, R = P.R;
  if (!R.apps) { R.apps = { base: { n: "", db: true, d: "" } }; R.def = "base"; }
  const APPS = R.apps, app = R.def;
  const IDEA = "[la idea de la persona]";
  Object.keys(APPS).forEach(k => { if (k === app) APPS[k].d = IDEA; });
  const env = {
    APPS, app, P,
    DB: () => true, D: () => IDEA,
    cb: t => `<div class="cb"><pre>${String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;")}</pre></div>`,
    ok: t => `<div class="check">✅ <b>x</b> ${t}</div>`,
    tip: t => `<div class="tip">${t}</div>`,
    det: (s, items) => `<details><summary>${s}</summary><ul>${items.map(i => "<li>" + i + "</li>").join("")}</ul></details>`
  };
  const call = f => typeof f === "function" ? vm.runInNewContext("(" + f.toString() + ")()", env) : f;
  const c = card(slug), cat = catOf(slug), name = skillName(slug);
  const steps = R.steps.filter(s => !s.x), extras = R.steps.filter(s => s.x);
  const cond = P.yn ? ` _(solo si la respuesta a «${P.yn.replace(/[¿?]/g, "").trim()}» es «Sí»)_` : " _(opcional)_";
  const stepMd = (s, i) => `### ${i + 1}. ${s.t}${s.db ? cond : ""}\n_${s.s || ""}_\n\n${md(call(s.b))}`;
  const ideas = Object.values(R.apps).filter(a => a.d && a.d !== IDEA).map(a => `- **${a.n}:** ${a.d}`).join("\n");
  /* Libro: cada receta de dentro, con sus propios pasos */
  const libro = (P.recetas || []).map((r, k) => {
    const env2 = Object.assign({}, env, { APPS: r.apps, app: r.def || Object.keys(r.apps)[0], D: () => IDEA, DB: () => true });
    const call2 = f => typeof f === "function" ? vm.runInNewContext("(" + f.toString() + ")()", env2) : f;
    const main = r.steps.filter(x => !x.x), ex = r.steps.filter(x => x.x);
    const ej = Object.values(r.apps).filter(a => a.d).map(a => `  - ${a.n}: ${a.d}`).join("\n");
    const st = (x, i, pre) => `#### ${pre}${i + 1}. ${x.t}\n_${x.s || ""}_\n\n${md(call2(x.b))}`;
    return `### Receta ${k + 1}: ${r.t}\n\n${r.d || ""}\n\n${(r.meta || []).map(m => "- " + m).join("\n")}\n- Versión web: ${SITE}/recetas/${slug}--${r.s}.html\n${ej ? "- Ideas de ejemplo:\n" + ej + "\n" : ""}\n` +
      main.map((x, i) => st(x, i, "")).join("\n\n") +
      (ex.length ? "\n\n" + ex.map((x, i) => st(x, i, "Extra ")).join("\n\n") : "") +
      (r.fin ? `\n\n**Al terminar:** ${md(r.fin)}` : "");
  }).join("\n\n");
  const next = (cat ? cat[1] : []).filter(s => s !== slug).map(s => `- \`/amri:${skillName(s)}\` · ${card(s).titulo}`).join("\n");
  const desc = `Receta de AMRI «${c.titulo}». ${c.desc} Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar.`.replace(/"/g, "'");
  const out = `---
name: ${name}
description: "${desc.slice(0, 1000)}"
argument-hint: "[tu idea]"
---

# ${c.titulo}

${c.desc}

${P.meta.map(m => "- " + m).join("\n")}
- Categoría: ${cat ? cat[0] : "—"}
- Versión web (con explicaciones y comunidad): ${SITE}/recetas/${slug}.html

${PROTOCOL}

## ${P.ing}

${md(call(R.ing))}

${ideas ? "## Ideas de ejemplo\n\n" + ideas + "\n\n" : ""}${P.yn ? `## Antes de empezar\n\nPregunta a la persona: **${P.yn}** ${md(P.yntip)}\n\nSi responde «No», sáltate los pasos marcados con _(solo si la respuesta… es «Sí»)_ y adapta los demás a esa respuesta.\n\n` : ""}${libro ? `## Este es un libro de recetas

Tiene una preparación común («Antes de empezar») y ${P.recetas.length} recetas concretas. Según la idea de la persona:
1. Elige la receta del libro que mejor encaje (si dudas, propón dos y deja que elija).
2. Haz «Antes de empezar» solo si todavía no está hecho (pregúntalo o compruébalo tú).
3. Cocina esa receta. Al terminar, propón otra del libro que encaje con su idea.

` : ""}## ${libro ? "Antes de empezar" : "Pasos"}

${steps.map(stepMd).join("\n\n")}${libro ? "\n\n## Recetas del libro\n\n" + libro : ""}

## Al terminar

${md(P.fin)}
${extras.length ? "\n## Extras (opcionales, después de servir)\n\n" + extras.map((s, i) => stepMd(s, i).replace(/^### \d+\./, "### Extra " + (i + 1) + ".")).join("\n\n") + "\n" : ""}
## Sigue con

${next || "- `/amri:chef` para planificar tu siguiente proyecto"}
- \`/amri:chef\` · combina varias recetas en un proyecto propio
`;
  fs.mkdirSync(path.join(OUT, name), { recursive: true });
  fs.writeFileSync(path.join(OUT, name, "SKILL.md"), out);
  return { slug, name, titulo: c.titulo, desc: c.desc, cat: cat ? cat[0] : "" };
}

const list = ORDER.map(build);

/* Borra las skills de recetas que ya no existen (por ejemplo, recetas renombradas o fusionadas) */
const keep = new Set(list.map(r => r.name).concat("chef"));
fs.readdirSync(OUT).filter(d => !keep.has(d)).forEach(d => fs.rmSync(path.join(OUT, d), { recursive: true, force: true }));

/* Catálogo para el chef */
const catalog = CATS.map(([n, ss]) => `### ${n}\n` + ss.map(s => { const r = list.find(x => x.slug === s); return `- \`amri:${r.name}\` · **${r.titulo}**: ${r.desc}`; }).join("\n")).join("\n\n");
const chefTpl = fs.readFileSync(path.join(ROOT, "tools", "chef.template.md"), "utf8");
fs.mkdirSync(path.join(OUT, "chef"), { recursive: true });
fs.writeFileSync(path.join(OUT, "chef", "SKILL.md"), chefTpl.replace("{{CATALOGO}}", catalog));

/* Lista para la web (receta → comando) */
fs.writeFileSync(path.join(ROOT, "assets", "plugin-map.js"),
  "/* Generado por tools/plugin.js */\nwindow.AMRI_PLUGIN={repo:\"amriwebapp/amri\",skills:" + JSON.stringify(Object.fromEntries(list.map(r => [r.slug, r.name]))) + "};\n");
console.log("skills:", list.length + 1);

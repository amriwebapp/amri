(window.RECIPE=window.RECIPE||{}).en={
title:"Recipe: design your logo with AI",
meta:["⏱ About 40 min","👩‍🍳 No design skills needed","💶 €0 to get started","🍽 Result: your logo in every format"],
ing:"Ingredients (all free)",
q:"What is the logo for?",
ph:"Describe your project in your own words. Example: a dog grooming salon in Seville, cheerful and modern",
yn:"Does the logo need the name written in it?",
yntip:"If in doubt, choose “Yes”: we'll show you how to get the letters perfect. You can always keep just the symbol.",
fin:"Your logo is ready in every format. Keep it in a folder named after your project so it's always at hand. Below you'll find two extras: your brand kit and how to protect it.",
R:{key:"receta-logo",def:"marca",empty:"[describe your project above]",
apps:{
 marca:{n:"Shop / brand",db:true,d:"a natural cosmetics brand called “Sprout”, friendly and fresh"},
 tech:{n:"App / startup",db:true,d:"a personal finance app called “Piggy”, modern and trustworthy"},
 cafe:{n:"Café / restaurant",db:true,d:"a neighbourhood café called “The Toaster”, warm and artisanal"},
 personal:{n:"Personal brand",db:true,d:"my personal brand as a photographer, with my initials “LM”, elegant and minimalist"},
 simbolo:{n:"Symbol / icon only",db:false,d:"an icon for my hiking community, simple and recognisable"},
 otra:{n:"✏️ Another idea",db:true,d:""}
},
ing:()=>`<li><b>Claude</b>: the head chef. It defines the style and writes the prompts.</li><li><b>${DB()?"Ideogram":"Bing Image Creator"}</b>: the oven. It generates the options${DB()?" and writes letters well":""}.</li><li><b>remove.bg</b>: the sieve. It removes the background in one click.</li><li><b>Canva</b>: plating up. Retouch and prepare the formats.</li>`,
steps:[
{t:"Get your ingredients ready",s:"5 min · create accounts",b:()=>`<p class="what">You'll create three free accounts. Your Google account gets you into all of them.</p><h3>Steps</h3><ol>
<li>Create your account on <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>.</li>
<li>${DB()?`Create your account on <a href="https://ideogram.ai" target="_blank" rel="noopener">Ideogram</a>.`:`Sign in to <a href="https://www.bing.com/images/create" target="_blank" rel="noopener">Bing Image Creator</a> with a Microsoft account.`}</li>
<li>Create your account on <a href="https://www.canva.com" target="_blank" rel="noopener">Canva</a>.</li>
<li>Bookmark <a href="https://www.remove.bg" target="_blank" rel="noopener">remove.bg</a> (no account needed).</li></ol>${ok("you're signed in to all the tools.")}`},
{t:"Ask Claude for the brief",s:"10 min · the personality",b:()=>`<p class="what">A good logo starts with knowing what it should convey. Claude acts as your designer and suggests styles.</p><h3>Steps</h3><ol><li>Open a new chat in Claude.</li><li>Copy this message and paste it:</li></ol>${cb(`I want a logo for ${D()}.\n\nAsk me 4 questions to understand my project. Then suggest 3 different logo styles (for example: minimalist, illustrated, typographic), with colours and the reasoning for each. For each style, write me a prompt for an AI image generator, with a plain white background and flat design.${DB()?" The logo includes the name: put it in quotes in the prompt.":" The logo is a symbol only, with no text."}`)}
${det("What does each part of the message mean?",["<b>“I want a logo for…”</b>: your project. Change it to yours.","<b>3 styles</b>: so you can compare before deciding.","<b>Plain white background and flat design</b>: easy to cut out and it looks professional.",...(DB()?["<b>Name in quotes</b>: so the AI knows which letters to write."]:[])])}${ok("you have 3 styles with their colours and prompts.")}`},
{t:"Bake the options",s:"10 min · generate options",b:()=>`<p class="what">Paste each prompt into the generator and you'll get several versions of each style.</p><h3>Steps</h3><ol>
<li>Open <b>${DB()?"Ideogram":"Bing Image Creator"}</b>.</li>
<li>Paste the first prompt and generate.${DB()?" If you see the <b>Design</b> or <b>Typography</b> option, turn it on.":""}</li>
<li>Repeat with the other two styles.</li>
<li>Download your 3-4 favourites.</li></ol>
${tip("Show them to someone you trust without saying which one you like. Their first reaction is gold.")}${ok("you have several options downloaded and a favourite.")}`},
{t:"Refine the winner",s:"5 min · polish details",b:()=>`<p class="what">Your favourite probably has a detail to improve. Ask Claude.</p><h3>Steps</h3><ol><li>Go back to the same chat and attach the image.</li><li>Paste this message:</li></ol>${cb("This is my favourite logo, made with the prompt [paste the prompt]. I want it to be more [simple / bold / rounded...] and to change [what you don't like]. Rewrite the prompt keeping what works.")}
${tip("A good logo works small. If it has lots of detail, ask for “simpler, fewer elements”.")}${ok("you have a version you love.")}`},
{db:1,t:"Check the lettering",s:"5 min · the perfect name",b:()=>`<p class="what">AI sometimes swaps or distorts letters. In a logo it has to be perfect.</p><h3>Steps</h3><ol>
<li>Read the name letter by letter, out loud.</li>
<li>If a letter is wrong, generate again with the name in quotes.</li>
<li>If it still fails: keep the <b>symbol without text</b> and write the name in Canva with a nice font.</li></ol>${cb("Recommend 3 free Canva fonts that go well with this logo and explain why.")}
${tip("AI symbol + name in Canva is what many designers do: the text is perfect and you can change it whenever you like.")}${ok("the name reads perfectly, with no strange letters.")}`},
{t:"Remove the background",s:"3 min · transparent background",b:()=>`<p class="what">A logo without a background can sit on top of any colour or photo.</p><h3>Steps</h3><ol>
<li>Open <b>remove.bg</b> and upload your logo.</li>
<li>Wait a few seconds and click <b>Download</b>.</li>
<li>Check the edges are clean.</li></ol>
${tip("If the edges look odd, ask the generator for a logo on a “plain white background” and try again: the cleaner the background, the better the cut-out.")}${ok("you have a PNG with a transparent background (it shows as a checkerboard in the editor).")}`},
{t:"Prepare the plates",s:"5 min · the formats",b:()=>`<p class="what">You need several versions to use your logo anywhere.</p><h3>Steps</h3><ol>
<li>In Canva create a 1000 × 1000 px square design and upload your logo.</li>
<li>Download: <b>transparent PNG</b> (web and social) and <b>JPG with white background</b> (documents).</li>
<li>Make a <b>white</b> version for dark backgrounds.</li>
<li>Create a 500 × 500 px design with the logo centred on your colour: your <b>profile picture</b>.</li></ol>
${det("What about SVG?",["SVG is a “vector” format: it can be enlarged without losing quality (ideal for large prints).","Tools like vectorizer.ai convert your PNG to SVG. Check their current terms before using them."])}${ok("you have a folder with at least 4 versions of your logo.")}`},
{x:1,t:"Your brand kit",s:"15 min · optional",b:()=>`<p class="what">Colours, fonts and rules so everything you make looks consistent.</p><h3>Steps</h3><ol><li>Ask Claude:</li></ol>${cb("With this logo [attach it], make me a simple brand kit: 3 colours with their HEX codes, 2 free fonts, and 5 usage rules (minimum size, what not to do...). Put it on a page I can print.")}
<ol start="2"><li>Save the colours in Canva under <b>Brand → Brand Kit</b>, if your plan allows it.</li></ol>`},
{x:1,t:"Protect your logo",s:"Always · tips",b:()=>`<p class="what">Before printing cards or signing a shop, a few simple checks.</p><ol>
<li><b>Make sure it doesn't look like</b> another well-known logo: do a reverse image search on Google.</li>
<li><b>Check the terms</b> of the AI tool regarding commercial use.</li>
<li><b>If you're serious</b>, look into trademark registration at your national office or the <a href="https://www.euipo.europa.eu" target="_blank" rel="noopener">EUIPO</a> (EU) / <a href="https://www.wipo.int" target="_blank" rel="noopener">WIPO</a> (international).</li></ol>
${det("💡 Where to use your logo",["Profile picture on all your social networks.","Your website's tab icon (favicon).","Email signature and invoices.","Stickers, mugs or T-shirts."])}`}
]}};

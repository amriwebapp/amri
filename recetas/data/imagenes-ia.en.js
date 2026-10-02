(window.RECIPE=window.RECIPE||{}).en={
title:"Recipe: AI images for free",
meta:["⏱ About 30 min","👩‍🍳 No drawing skills needed","💶 €0 to get started","🍽 Result: images ready to use"],
ing:"Ingredients (all free)",
q:"What do you want to make?",
ph:"Describe the image in your own words. Example: an illustration of my dog as an astronaut for a T-shirt",
yn:"Does the image need written text in it?",
yntip:"If in doubt, choose “Yes”: we'll show you the tool that writes letters best. If it ends up with no text, it works just the same.",
fin:"You have your images. Save the prompts that worked best: they're your secret recipes to repeat the style whenever you like. Below you'll find extras to go further: the same character across several images, editing photos you already have, drawing icons with Claude and your style cheat sheet.",
R:{key:"receta-img",def:"ilustra",empty:"[describe your image above]",
apps:{
 ilustra:{n:"Illustration",db:false,d:"a colourful illustration of a fox reading a book in an autumn forest"},
 producto:{n:"Product photo",db:false,d:"a product photo of a handmade ceramic mug on a wooden table, morning light"},
 redes:{n:"Social post",db:false,d:"an Instagram image announcing the opening of my café, cosy atmosphere"},
 cartel:{n:"Poster with text",db:true,d:"a poster for a jazz concert with the text “Jazz on the terrace · 12 July”"},
 avatar:{n:"Avatar / profile",db:false,d:"a friendly 3D-style avatar of a smiling person with glasses, plain background"},
 portada:{n:"Cover with title",db:true,d:"the cover of a vegan recipe ebook with the title “Green and easy”"},
 otra:{n:"✏️ Another idea",db:true,d:""}
},
ing:()=>`<li><b>Claude</b>: the head chef. It turns your idea into a good prompt.</li><li><b>Bing Image Creator</b>: the oven. It generates images for free.</li>${DB()?`<li><b>Ideogram</b>: the pastry chef. The best at writing letters inside an image.</li>`:""}<li><b>Canva</b>: plating up. Crop, retouch and export.</li>`,
steps:[
{t:"Get your ingredients ready",s:"5 min · create accounts",b:()=>`<p class="what">You'll create ${DB()?"four":"three"} free accounts. With a Microsoft or Google account you can get into almost all of them.</p><h3>Steps</h3><ol>
<li>Create your account on <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>.</li>
<li>Sign in to <a href="https://www.bing.com/images/create" target="_blank" rel="noopener">Bing Image Creator</a> with a Microsoft account.</li>
${DB()?`<li>Create your account on <a href="https://ideogram.ai" target="_blank" rel="noopener">Ideogram</a> (“Continue with Google” button).</li>`:""}
<li>Create your account on <a href="https://www.canva.com" target="_blank" rel="noopener">Canva</a>.</li></ol>${ok(`you have the ${DB()?"four":"three"} tabs open and you're signed in to all of them.`)}`},
{t:"Ask Claude for the prompt",s:"5 min · the image recipe",b:()=>`<p class="what">A <b>prompt</b> is the description you give the AI. The more specific, the better the result. Claude writes it for you.</p><h3>Steps</h3><ol><li>Open a new chat in Claude.</li><li>Copy this message and paste it:</li></ol>${cb(`I want to create ${D()}.\n\nWrite me 3 different prompts for an AI image generator. Each one should describe: the subject, the style (for example watercolour, 3D, photography), the lighting, the colours and the framing.${DB()?" The image includes text: put the exact text in quotes and tell me where to place it.":""} Then explain what changes between them.`)}
${det("What does each part of the message mean?",["<b>“I want to create…”</b>: your idea. Change it to yours.","<b>Subject, style, lighting, colours, framing</b>: the five ingredients of a good prompt.",...(DB()?["<b>Text in quotes</b>: so the AI knows exactly which letters to write."]:[]),"<b>Explain what changes</b>: so you learn to write prompts yourself."])}
${tip("Describe what you DO want. AI understands “no” poorly: instead of “no people” write “an empty street”.")}${ok("Claude has given you three prompts and you understand the difference between them.")}`},
{t:"Bake the first images",s:"5 min · generate",b:()=>`<p class="what">Paste the prompt into the generator and in a few seconds you get several versions.</p><h3>Steps</h3><ol>
<li>Open ${DB()?"<b>Ideogram</b>":"<b>Bing Image Creator</b>"}.</li>
<li>Paste Claude's first prompt and click <b>${DB()?"Generate":"Create"}</b>.</li>
<li>Repeat with the other two prompts.</li>
<li>Download the ones you like best.</li></ol>
${tip("Each generation takes a few seconds. If there's a queue, wait a little: no need to click again.")}
${det("It won't generate or gives me an error",["Some words are blocked (violence, celebrities, brands). Rephrase with neutral words.","If you've used up your credits for the day, try tomorrow or use the other tool.","Check the current free limits on each tool's page."])}${ok("you have at least 3 images downloaded to your computer or phone.")}`},
{t:"Adjust the seasoning",s:"5 min · improve the result",b:()=>`<p class="what">It's rarely perfect the first time. Pick the best one and ask Claude to improve it with you.</p><h3>Steps</h3><ol><li>Go back to the same Claude chat.</li><li>Paste this message (you can attach the image):</li></ol>${cb("This is the image I got with the prompt [paste the prompt]. I like [what you like], but I want to change [what you don't like]. Rewrite the prompt to fix it without losing the good parts.")}
${tip("Change only one thing at a time. If you change five at once, you won't know which one worked.")}${ok("you have an image you really like.")}`},
{db:1,t:"Check the lettering",s:"5 min · make the text readable",b:()=>`<p class="what">AI sometimes writes strange letters or typos. Check it closely.</p><h3>Steps</h3><ol>
<li>Read the text in the image letter by letter.</li>
<li>If there's a small error, in Ideogram use <b>Remix</b> with the same prompt and the text in quotes.</li>
<li>If it still fails, generate the image <b>without text</b> and add it later in Canva with the <b>Text</b> tool.</li></ol>
${tip("The pro trick: background with AI, lettering in Canva. It looks perfect and you can change the text whenever you like.")}${ok("the text reads well and has no typos.")}`},
{t:"Plate up and serve",s:"5 min · retouch and export",b:()=>`<p class="what">Canva lets you crop, resize for each network and export in the right format.</p><h3>Steps</h3><ol>
<li>In Canva click <b>Create a design</b> and choose the size (Instagram post, story, A4…).</li>
<li>Click <b>Uploads</b> and drag in your image.</li>
<li>Adjust brightness and contrast in <b>Edit photo</b> if needed.</li>
<li>Click <b>Share → Download</b>: <b>PNG</b> for graphics and <b>JPG</b> for photos.</li></ol>${ok("you have your final image downloaded at the right size.")}`},
{x:1,t:"Create a series in the same style",s:"15 min · optional",b:()=>`<p class="what">If you need several images that look like the same family (for a website or a campaign), reuse your recipe.</p><h3>Steps</h3><ol><li>Save the prompt that worked best in a note.</li><li>Ask Claude:</li></ol>${cb("This is my winning prompt: [paste the prompt]. Give me 5 variations with different subjects ([subject 1], [subject 2]...) but keeping exactly the same style, lighting and colours.")}
${tip("Always use the same style words. Changing “watercolour” to “painting” already changes the result.")}`},
{x:1,t:"The same character across several images",s:"15 min · optional",b:()=>`<p class="what">For a brand mascot, a story or a comic you need the character to always look the same. The trick: a <b>character sheet</b> and a <b>reference image</b>.</p><h3>Steps</h3><ol><li>Ask Claude for the sheet:</li></ol>${cb("My character is [describe it]. Write me a character sheet for image generators: facial features, hair, clothes with exact colours, proportions and drawing style. Then give me 4 prompts that reuse the sheet word for word, each in a different scene: [scene 1], [scene 2]…")}
<ol start="2"><li>Generate the first image and keep the best one: it'll be your <b>reference</b>.</li><li>For the next ones, paste the full sheet and, if your tool lets you upload a reference image, upload that one.</li></ol>
${tip("Don't change a single word of the sheet. Change only the scene: what the character is doing and where.")}${ok("you have at least 3 images where you can recognise the same character.")}`},
{x:1,t:"Edit an image you already have",s:"10 min · optional",b:()=>`<p class="what">You don't always have to start from scratch: you can remove the background, erase an object, widen the frame or change part of a photo of yours.</p><h3>Which tool to use</h3><ul>
<li><b>Remove the background or erase an object</b>: in Canva, upload the photo and open <b>Edit</b>. Some of these features are Canva Pro only.</li>
<li><b>Widen or change an area</b>: in Ideogram, upload your image and use its editing tools to paint over the area you want to change.</li></ul>
<ol><li>Before editing, ask Claude for the exact instruction:</li></ol>${cb("I'm attaching a photo. I want to [remove the background / widen the frame / change the T-shirt to a blue one]. Tell me which free tool suits me, the steps and the exact text I should write for the area I'm going to change.")}
${tip("Only edit your own photos or ones you have permission for. Never change a real person's face or make it look like they said or did something that didn't happen.")}${ok("you have the edited version and the original saved separately.")}`},
{x:1,t:"Draw with Claude: icons and graphics",s:"10 min · optional",b:()=>`<p class="what">Claude doesn't generate photos, but it does <b>draw with code</b>: icons, simple logos, diagrams and backgrounds in <b>SVG</b> format. An SVG stays sharp at any size and you can change its colours whenever you like.</p><h3>Steps</h3><ol><li>In a Claude chat, paste:</li></ol>${cb("Draw me a set of 6 SVG icons for [your topic]: [icon 1], [icon 2]… Line style, 2 px rounded stroke, 24×24, all consistent. Show them together in an artifact and give me the code for each one separately.")}
<ol start="2"><li>Ask for changes in words: “thicker”, “round corners”, “use my colour #E07A5F”.</li><li>Copy each icon's code and save it as <code>icon.svg</code>. Canva and almost any website accept it.</li></ol>
${tip("For photos and realistic illustrations, use the generators in this recipe. For icons, diagrams and clean graphics, Claude is more precise.")}${ok("you have your icons in SVG and they stay sharp when you zoom in.")}`},
{x:1,t:"Your style cheat sheet",s:"10 min · optional",b:()=>`<p class="what">Learning to name styles is what improves your images the most. Make yourself a cheat sheet by trying the same subject in several styles.</p>${cb(`Make me a cheat sheet of 12 styles for image generators, as a table: style name, what it looks like, what I'd use it for and 3 keywords that trigger it. Include watercolour, 3D, product photography, flat, risograph, cinematic and pixel art. Then write a base prompt for “${D()}” that I can repeat changing only the style.`)}
${tip("Generate the same prompt in 4 styles and keep the images together: you'll see at a glance which one fits your brand.")}${ok("your cheat sheet is saved with an example of each style you like.")}`},
{x:1,t:"Use them with peace of mind",s:"Always · tips",b:()=>`<p class="what">A few simple rules to avoid surprises.</p><ol>
<li><b>Check the terms</b> of each tool before commercial use: they change over time.</li>
<li><b>Don't imitate real people</b> or registered brands.</li>
<li><b>Check hands, eyes and details</b>: that's where AI makes the most mistakes.</li>
<li><b>Save your prompts</b> in a folder: they're your personal cookbook.</li></ol>
${det("💡 Ideas to keep cooking",["Backgrounds for your website or presentations.","Illustrations for a children's story.","Product mockups before manufacturing.","Icons for your app in the same style."])}`}
]}};

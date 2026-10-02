(window.RECIPE=window.RECIPE||{}).en={
title:"Recipe: cinematic images and video with Higgsfield",
meta:["⏱ About 30 min","👩‍🍳 Easy","💶 Higgsfield uses credits (trial available)","🍽 Result: images and clips ready to publish"],
ing:"Ingredients",
q:"What do you want to shoot?",
ph:"Describe your image or video. Example: an 8-second clip of a steaming cup of coffee in a kitchen with morning light",
yn:"Will you use one of your own photos as a reference (your product, your logo, your shop)?",
yntip:"If in doubt, choose “Yes”: we'll show you how to upload your photo. If you don't use it, the recipe works the same.",
fin:"You have your first pieces generated with Higgsfield from Claude. Save the conversation: it's your recipe to repeat it with other products. Below you'll find extras: turning an image into video and how to use it responsibly.",
R:{key:"receta-higgs",def:"producto",empty:"[describe your image or video above]",
apps:{
 producto:{n:"Product photo",db:true,d:"three studio photos of my product, with soft light, a cream background and delicate shadows"},
 anuncio:{n:"Video ad",db:true,d:"an 8-second vertical 9:16 ad for social media, with my product slowly spinning under warm light"},
 personaje:{n:"Brand character",db:false,d:"a friendly illustrated character that represents my brand, in three different poses"},
 escena:{n:"Film scene",db:false,d:"an 8-second cinematic shot: sunrise in a quiet kitchen, with the camera moving forward very slowly"},
 otra:{n:"✏️ Another idea",db:true,d:""}
},
ing:()=>`<li><b>Claude</b>: the director. It understands your idea and writes the directions.</li><li><b>Higgsfield</b>: the film studio. It generates images and videos with several AI models. It runs on credits.</li><li><b>Higgsfield connector</b>: the assistant director. It carries Claude's orders to the studio.</li>${DB()?`<li><b>Your reference photo</b>: the props. A clear image of your product or logo.</li>`:""}`,
steps:[
{t:"Get your ingredients ready",s:"5 min · accounts",b:()=>`<p class="what">You need two accounts: one on Claude and one on Higgsfield.</p><h3>Steps</h3><ol>
<li>Sign in to <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a> (web or desktop app).</li>
<li>Create an account on <a href="https://higgsfield.ai" target="_blank" rel="noopener">Higgsfield</a>.</li>
<li>Check how many credits or what free trial you have: every image or video uses credits, and video uses more than images.</li></ol>
${tip("Higgsfield's offers and plans change often. Check its website before you start to avoid surprises.")}${ok("you can sign in to both accounts.")}`},
{t:"Connect Higgsfield to Claude",s:"3 min · custom connector",b:()=>`<p class="what">Higgsfield has its own connector. You add it by pasting a web address.</p><h3>Steps</h3><ol>
<li>In Claude open <b>Customize → Connectors</b>.</li>
<li>Click <b>+</b> → <b>Add custom connector</b>.</li>
<li>Name: <b>Higgsfield</b>. Address (URL): copy this:</li></ol>${cb("https://mcp.higgsfield.ai/mcp")}<ol start="4"><li>Click <b>Add</b> and then <b>Connect</b>. Sign in with your Higgsfield account and accept.</li></ol>
${det("What is that address?",["It's the connector's “phone number”: Claude calls it whenever it needs to generate something.","You don't need to install anything: it all happens online.","On Claude's free plan you can add <b>one</b> custom connector."])}
${ok("in a new chat, when you click <b>+ → Connectors</b>, you see Higgsfield switched on.")}`},
{t:"Write the script with Claude",s:"5 min · the idea",b:()=>`<p class="what">Before spending credits, let Claude help you refine the idea. It's free and makes a big difference.</p><h3>Steps</h3><ol><li>Open a new chat and paste:</li></ol>${cb(`Act as a director of photography. I want to create ${D()}.\n\nBefore generating anything, ask me 4 short questions about style, colours, framing and format. Then suggest 2 ideas in one sentence each and wait for me to choose.`)}
${det("Why not generate straight away?",["Every generation uses credits: better to get it right first time.","Claude turns your words into technical directions (light, lens, movement).","You decide before anything is spent."])}${ok("you have a clear idea chosen.")}`},
{db:1,t:"Upload your reference photo",s:"3 min · the props",b:()=>`<p class="what">With a reference, the result looks like your real product.</p><h3>Steps</h3><ol>
<li>Take a photo of your product in good light, front-on, on a plain background.</li>
<li>Drag it into the Claude chat (or click the paperclip 📎).</li>
<li>Write:</li></ol>${cb("Use this photo as a reference. The product must look the same: same shape, same colours and same logo. Change only the background, the lighting and the framing.")}
${tip("Only use your own images or ones you have permission for. Don't upload photos of other people without their consent.")}${ok("Claude has seen your photo and confirms what it will keep.")}`},
{t:"Generate the first version",s:"5 min · action!",b:()=>`<p class="what">Now Claude asks Higgsfield to generate it.</p><h3>Steps</h3><ol><li>In the same chat, paste:</li></ol>${cb(`Perfect. Use Higgsfield to generate ${D()}.${DB()?" Use my reference photo.":""}\n\nChoose the most suitable model yourself and tell me which one you used and why. Start with a single version so we don't waste credits.`)}
${tip("If you ask for video, it may take a minute or two. Breathe: that's normal.")}${ok("you see the image or video in the chat, with a link to open it.")}`},
{t:"Adjust with small changes",s:"5 min · polish",b:()=>`<p class="what">Just like cooking: taste and adjust the salt. One change at a time.</p><h3>Steps</h3><ol><li>Ask for specific changes:</li></ol>${cb("Keep everything the same, but make the light a little warmer and bring the camera closer to the product. Change only that.")}
${det("Words that help",["<b>Light</b>: soft, golden, window light, studio.","<b>Camera</b>: overhead shot, close-up, slow tracking shot.","<b>Mood</b>: calm, minimalist, cosy, like a 70s film."])}${ok("the new version is closer to what you had in mind.")}`},
{t:"Download and save your recipe",s:"2 min · plating up",b:()=>`<p class="what">Save the result and also the words that created it.</p><h3>Steps</h3><ol>
<li>Open the result link and download it (it's also in your Higgsfield library).</li>
<li>Ask Claude:</li></ol>${cb("Write the final direction that worked in a single block, so I can reuse it with other products.")}${ok("you have the file downloaded and your direction saved in a note.")}`},
{x:1,t:"From image to video",s:"10 min · optional",b:()=>`<p class="what">A good image can become a short clip with motion.</p>${cb("Animate the last image: very slow forward camera movement, gentle steam and light that shifts slightly. 8 seconds, vertical 9:16 format.")}${tip("Ask for a short version first. If you like it, ask for variations.")}`},
{x:1,t:"If something doesn't work",s:"Always · check this",b:()=>`<ol><li><b>The connector doesn't appear</b>: check the URL is copied correctly and click Connect again.</li><li><b>It asks you to sign in again</b>: that's normal now and then; reconnect.</li><li><b>You run out of credits</b>: check your balance on Higgsfield.</li><li><b>The result doesn't look right</b>: give a clearer reference and ask for one change at a time.</li></ol>`},
{x:1,t:"Use it responsibly",s:"Always · tips",b:()=>`<ol><li>Don't create images of <b>real people</b> without their permission.</li><li>Don't imitate <b>brands or characters</b> that aren't yours.</li><li>If you publish ads, say the content is <b>AI-generated</b> when the platform requires it.</li><li>Check your plan's commercial use terms.</li></ol>`}
]}};

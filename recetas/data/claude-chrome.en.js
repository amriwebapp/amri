(window.RECIPE=window.RECIPE||{}).en={
title:"Recipe: Claude browses for you in Chrome",
meta:["⏱ About 20 min","👩‍🍳 Easy","💶 Requires a paid Claude plan","🍽 Result: web tasks done while you watch"],
ing:"Ingredients",
q:"What do you want it to do for you?",
ph:"Describe the task. Example: find 5 rural cottages in Asturias for 4 people in May, with price and rating",
yn:"Does the task need your personal details (name, address, phone…)?",
yntip:"If in doubt, choose “Yes”: we'll explain which details to give and which never to give.",
fin:"Claude now knows how to move around the web with you. Start with small tasks and give it more trust little by little.",
R:{key:"receta-chrome",def:"comparar",empty:"[describe the task above]",
apps:{
 comparar:{n:"Compare prices",db:false,d:"compare the price of a product in 4 online shops and make me a table with price, shipping and ratings"},
 investigar:{n:"Research a topic",db:false,d:"read the 5 best sources on a topic and summarise what matters, with links"},
 formulario:{n:"Fill in forms",db:true,d:"fill in a long registration form with my details, leaving it ready for me to submit"},
 viaje:{n:"Plan a trip",db:false,d:"look for accommodation and transport options for a trip, without booking or paying for anything"},
 otra:{n:"✏️ Another idea",db:true,d:""}
},
ing:()=>`<li><b>Google Chrome</b>: the kitchen. The browser where Claude will work.</li><li><b>Claude in Chrome</b>: the kitchen hand. An official extension that sees the page, clicks and types.</li><li><b>A paid Claude plan</b>: the extension isn't on the free plan.</li>${DB()?`<li><b>Your basic details</b>: only the ones essential for the task.</li>`:""}`,
steps:[
{t:"Install the extension",s:"5 min · the kitchen hand",b:()=>`<p class="what">Claude in Chrome is an extension: a small add-on for your browser.</p><ol>
<li>Open Chrome and search for <b>“Claude”</b> in the <a href="https://chromewebstore.google.com" target="_blank" rel="noopener">Chrome Web Store</a> (the official one, by Anthropic).</li>
<li>Click <b>Add to Chrome</b>.</li>
<li>Click the puzzle icon 🧩 and pin Claude.</li>
<li>Open it and sign in with your Claude account.</li></ol>${tip("Check that the publisher is Anthropic. There are imitation extensions.")}${ok("clicking the icon opens Claude in a side panel.")}`},
{t:"Decide the permissions",s:"2 min · house rules",b:()=>`<p class="what">The extension asks you before acting on each website. Start out cautious.</p><ol><li>When it asks permission for a site, read it calmly.</li><li>At first, choose the option to <b>ask you before acting</b>.</li><li>Don't give it access to your bank or sites with very sensitive data.</li></ol>${ok("you know where permissions are granted and removed.")}`},
{t:"Your first task",s:"5 min · watch it work",b:()=>`<p class="what">Open Claude's panel and give it the task. Watch how it works: it's fascinating and reassuring.</p>${cb(`I want to ${D()}.\n\nBefore starting, tell me your plan in short steps. Ask my permission before clicking any submit, book, buy or pay button. When you're done, give me the result in a table with links.`)}
${det("Why ask for the plan first?",["You see what it will do before it does it.","You can correct it if it goes the wrong way.","You learn how it reasons."])}${ok("Claude shows you its plan and starts browsing.")}`},
{db:1,t:"Your details, carefully",s:"3 min · the golden rule",b:()=>`<p class="what">Give only what's essential, and you press the final button.</p><ol><li>Type in the chat only the details the form asks for.</li><li><b>Never</b> give it passwords, card numbers or verification codes.</li><li>Ask:</li></ol>${cb("Fill in the form with these details, but DON'T submit it. When you're done, let me know so I can review and submit it myself.")}${ok("the form is filled in and you press the submit button yourself.")}`},
{t:"Check the result",s:"5 min · taste test",b:()=>`<p class="what">Check two or three facts at random. AI can make mistakes reading a website.</p>${cb("Tell me where you got each piece of data in the table, with the exact link.")}${ok("the facts you checked match the websites.")}`},
{x:1,t:"Safety: watch out for traps",s:"Always · important",b:()=>`<p class="what">Some websites hide instructions to trick AI assistants (this is called <i>prompt injection</i>).</p><ol><li>If Claude does something you didn't ask for, <b>stop it</b> with the stop button.</li><li>Use the extension on trusted websites.</li><li>Keep the rule: purchases and payments, always you.</li></ol>`},
{x:1,t:"Ideas to keep going",s:"Optional",b:()=>`${det("💡 Tasks that work well",["Fill a spreadsheet with data from several websites.","Check whether the links on your website work.","Find grants or calls for applications and summarise the requirements.","Sort your open tabs by topic."])}`}
]}};

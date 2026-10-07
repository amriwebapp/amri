(window.RECIPE=window.RECIPE||{}).en={
title:"Recipe: design in Canva by talking to Claude",
meta:["⏱ About 25 min","👩‍🍳 Easy","💶 Free if your Claude plan includes connectors","🍽 Result: editable designs in your Canva"],
ing:"Ingredients (all free)",
q:"What do you want to design?",
ph:"Describe your design. Example: an A4 poster for my neighbourhood market on Saturday the 12th, with times and address",
yn:"Do you have a logo or brand colours you want to use?",
yntip:"If in doubt, choose “Yes”: we'll show you how to give Claude your brand. If you don't have one, it will suggest a palette.",
fin:"Your designs are now in your Canva account, ready to retouch by hand or publish. Below you'll find extras: reusing designs and what to do if something fails.",
R:{key:"receta-canva",def:"posts",empty:"[describe your design above]",
apps:{
 posts:{n:"Instagram posts",db:true,d:"three square Instagram posts announcing my new product, with a short headline and plenty of white space"},
 presentacion:{n:"Presentation",db:false,d:"an 8-slide presentation, clear and visual, to explain my project to potential clients"},
 cartel:{n:"Poster or flyer",db:true,d:"an A4 poster for an event, with a big title and the date, time and place clearly visible"},
 cv:{n:"CV / résumé",db:false,d:"a one-page CV, clean and modern, with my experience and skills"},
 otra:{n:"✏️ Another idea",db:true,d:""}
},
ing:()=>`<li><b>Claude</b>: the lead designer. It decides the copy, structure and style.</li><li><b>Canva</b>: the workshop. Where designs are created and stored. Free plan.</li><li><b>Canva connector</b>: the apprentice. It creates, finds and exports designs in your account.</li>${DB()?`<li><b>Your logo and colours</b>: the house seal.</li>`:""}`,
steps:[
{t:"Get your ingredients ready",s:"3 min · accounts",b:()=>`<p class="what">You only need a Claude account and a Canva account.</p><h3>Steps</h3><ol>
<li>Sign in to <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>.</li>
<li>Create your free <a href="https://www.canva.com" target="_blank" rel="noopener">Canva</a> account if you don't have one.</li></ol>${ok("you can sign in to both.")}`},
{t:"Connect Canva to Claude",s:"3 min · the connector",b:()=>`<p class="what">A connector is a permission for Claude to use Canva for you. You turn it on once and it stays saved.</p><h3>Steps</h3><ol>
<li>In Claude (web or desktop app) open <b>Customize → Connectors</b>.</li>
<li>Click <b>Browse connectors</b>, search for <b>“Canva”</b> and click <b>Connect</b>.</li>
<li>A Canva window opens: sign in and click <b>Allow</b>.</li>
<li>In a new chat, click the <b>+</b> button → <b>Connectors</b> and check that Canva is switched on.</li></ol>${tip("Claude's menus change names now and then. If you can't find it, search for “connectors” in <a href='https://support.claude.com' target='_blank' rel='noopener'>Claude's help centre</a>.")}${ok("Canva shows as enabled in your connectors.")}`},
{db:1,t:"Introduce your brand",s:"5 min · the seal",b:()=>`<p class="what">To make everything match your style, first upload your logo to Canva and tell Claude your colours.</p><h3>Steps</h3><ol>
<li>In Canva, click <b>Uploads → Upload files</b> and upload your logo (ideally a PNG with a transparent background).</li>
<li>In Claude, write:</li></ol>${cb("My brand: main colours [#D2561F and #FBF6EE], font [the one you use], tone [warm and calm]. My logo is uploaded to Canva with the name [file name]. Use it in everything you design today.")}
${tip("Don't know your colour codes? Ask Claude: “Suggest a 3-colour palette for a [your thing] brand”.")}${ok("Claude repeats your brand back in its own words.")}`},
{t:"Ask for your design",s:"5 min · the prompt",b:()=>`<p class="what">Copy first, then design. That way you don't waste time on versions you don't like.</p><h3>Steps</h3><ol><li>Paste this into the chat:</li></ol>${cb(`Use Canva to create ${D()}.\n\nBefore designing, suggest the copy for each piece and wait for my OK. Once I give it, create the design${DB()?" with my brand":""} and give me the link to open it in Canva.`)}
${det("What does each part mean?",["<b>“Use Canva”</b>: tells Claude to use the connector, not to draw it itself.","<b>Copy first</b>: the most important thing in a design is what it says.","<b>The link</b>: so you can open and retouch it."])}${ok("Claude gives you one or more links to new designs in your Canva.")}`},
{t:"Retouch by hand in Canva",s:"5 min · your touch",b:()=>`<p class="what">AI does 80%. The finishing touch is yours.</p><h3>Steps</h3><ol>
<li>Open the link. The design is in your account, under <b>Projects</b>.</li>
<li>Change whatever you like: text, photos, colours.</li>
<li>Prefer Claude to do it? Ask in the chat, one change at a time:</li></ol>${cb("In the design you just created, make the headline bigger and change the background photo to something brighter. Leave everything else.")}${ok("the design looks the way you wanted.")}`},
{t:"Export and publish",s:"2 min · serve",b:()=>`<p class="what">Download it in the format you need.</p>${cb("Export the design as a PNG for social media and also as a PDF for printing. Give me the download links.")}${tip("You can also export from Canva with <b>Share → Download</b>.")}${ok("you have the files downloaded.")}`},
{x:1,t:"Reuse what you already have",s:"Optional",b:()=>`<p class="what">Claude can also search your older designs.</p>${cb("Search my Canva for the designs I made for [event or topic] and create a new version with the updated date.")}`},
{x:1,t:"If something doesn't work",s:"Always · check this",b:()=>`<ol><li><b>Claude draws instead of using Canva</b>: start the message with “Use the Canva connector”.</li><li><b>It can't find your logo</b>: give it the exact name of the uploaded file.</li><li><b>Some features are Canva Pro</b> (brand kit, background remover): the rest works on the free plan.</li></ol>${det("💡 Ideas to keep designing",["A content calendar for the whole month.","Business cards.","Menus for your restaurant.","YouTube thumbnails."])}`}
]}};

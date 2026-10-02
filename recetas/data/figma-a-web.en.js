(window.RECIPE=window.RECIPE||{}).en={
title:"Recipe: from Figma to a real website",
meta:["⏱ About 1 hour","👩‍🍳 Medium difficulty","💶 €0 to get started","🍽 Result: your design turned into a website"],
ing:"Ingredients (all free)",
q:"What design do you have?",
ph:"Describe what's in your design. Example: the homepage of my yoga studio, with timetables and a booking button",
yn:"Do you want to publish it online when you're done?",
yntip:"If in doubt, choose “Yes”: we'll link you to the free publishing recipe. You can leave it for another day.",
fin:"Your design is now a working website. Save the file and the conversation: if you change the design in Figma, you can ask Claude to update just that part.",
R:{key:"receta-figma",def:"landing",empty:"[describe your design above]",
apps:{
 landing:{n:"Homepage",db:true,d:"a homepage with a header, a services section, reviews and a footer with contact details"},
 portfolio:{n:"Portfolio",db:true,d:"a portfolio with my introduction, a project gallery and a contact form"},
 componente:{n:"A component",db:false,d:"a product card with image, price and button, in its normal and hover states"},
 app:{n:"App screen",db:false,d:"the main screen of a mobile app with a bottom menu and a list of cards"},
 otra:{n:"✏️ Another idea",db:true,d:""}
},
ing:()=>`<li><b>Figma</b>: the kitchen blueprint. Where your design lives. Free plan.</li><li><b>Claude</b>: the builder. It reads the design and writes the website.</li><li><b>Figma connector</b>: Claude's glasses. It lets it see layers, colours, text and measurements.</li><li><b>Your browser</b>: the table. To test the website on your computer.</li>${DB()?`<li><b>GitHub and Cloudflare</b>: home delivery. To publish it for free.</li>`:""}`,
steps:[
{t:"Get your ingredients ready",s:"5 min · accounts",b:()=>`<p class="what">You need a design in Figma. If you don't have one, use a community template.</p><h3>Steps</h3><ol>
<li>Sign in to <a href="https://www.figma.com" target="_blank" rel="noopener">Figma</a> with a free account.</li>
<li>If you don't have a design, search <b>Figma Community</b> for a free website template and click <b>Open in Figma</b>.</li>
<li>Sign in to <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>.</li></ol>${ok("you have a design open in Figma.")}`},
{t:"Tidy up the design",s:"10 min · mise en place",b:()=>`<p class="what">A tidy design turns into a much better website. It's like chopping ingredients before cooking.</p><h3>Steps</h3><ol>
<li>Put each screen in its own <b>frame</b> with a clear name: “Home”, “Contact”.</li>
<li>Name the important layers: “Header”, “Book button”, “Hero photo”.</li>
<li>If you know how to use <b>Auto layout</b>, use it: Claude will better understand how everything is arranged.</li></ol>${tip("It doesn't need to be perfect. As long as the names make sense, it already helps a lot.")}${ok("your main frame has a name and its layers make sense.")}`},
{t:"Connect Figma to Claude",s:"3 min · the connector",b:()=>`<p class="what">A connector is a permission for Claude to use Figma for you. You turn it on once and it stays saved.</p><h3>Steps</h3><ol>
<li>In Claude (web or desktop app) open <b>Customize → Connectors</b>.</li>
<li>Click <b>Browse connectors</b>, search for <b>“Figma”</b> and click <b>Connect</b>.</li>
<li>A Figma window opens: sign in and click <b>Allow</b>.</li>
<li>In a new chat, click the <b>+</b> button → <b>Connectors</b> and check that Figma is switched on.</li></ol>${tip("Claude's menus change names now and then. If you can't find it, search for “connectors” in <a href='https://support.claude.com' target='_blank' rel='noopener'>Claude's help centre</a>.")}${ok("Figma shows as enabled in your connectors.")}`},
{t:"Copy the frame link",s:"1 min · point at the dish",b:()=>`<p class="what">Claude needs to know which part of the design to build.</p><h3>Steps</h3><ol>
<li>In Figma, click your main frame.</li>
<li>Right-click → <b>Copy/Paste as → Copy link to selection</b>.</li></ol>${ok("you have a link starting with figma.com/design/…")}`},
{t:"Ask for your website",s:"10 min · the prompt",b:()=>`<p class="what">Claude reads the design and turns it into a real website.</p><h3>Steps</h3><ol><li>Open a new chat and paste (swap the link for yours):</li></ol>${cb(`This is the link to a Figma frame: [paste your link here]\n\nUse the Figma connector to read it. It's ${D()}.\n\nTurn it into a website in a single index.html file with HTML and CSS. Respect the colours, fonts, sizes and spacing. Make it look good on mobile. Use the real text from the design, not “lorem ipsum”. At the end, tell me which parts you couldn't copy exactly.`)}
${det("What does each part mean?",["<b>A single file</b>: easier to test and publish.","<b>Make it look good on mobile</b>: most of your visitors will come from their phones.","<b>Which parts you couldn't copy</b>: so you know what to review."])}${ok("Claude gives you an index.html file to download or copy.")}`},
{t:"Test it and compare",s:"10 min · taste the salt",b:()=>`<p class="what">Open the website next to the design and look for differences.</p><h3>Steps</h3><ol>
<li>Save the file as <b>index.html</b> in a folder and double-click it.</li>
<li>Put it next to Figma and compare.</li>
<li>Ask for adjustments one at a time:</li></ol>${cb("On the website, the space between the header and the services section is bigger than in Figma. Adjust it to match and don't change anything else.")}
${tip("To see it on mobile: in the browser press F12 and click the phone icon.")}${ok("the website and the design look like two peas in a pod.")}`},
{db:1,t:"Publish it for free",s:"15 min · serve",b:()=>`<p class="what">Your file is ready to go online.</p><ol><li>Follow the recipe <a href="webapp-gratis.html">Your web app, online and free</a> from the GitHub step.</li><li>Upload your <b>index.html</b> instead of creating a new one.</li></ol>${ok("you have a web address you can open from your phone.")}`},
{x:1,t:"Your colours as variables",s:"Optional · pro level",b:()=>`<p class="what">If you use variables or styles in Figma, ask for them to become CSS variables. Then changing one colour changes the whole website.</p>${cb("Read the colour and text styles and variables in my Figma file and turn them into CSS variables at the top of the file. Use those variables throughout the website.")}`},
{x:1,t:"If something doesn't work",s:"Always · check this",b:()=>`<ol><li><b>Claude can't read the link</b>: check the connector is enabled and your Figma account has access to the file.</li><li><b>Different fonts</b>: ask it to use Google Fonts with the same or closest font.</li><li><b>Missing images</b>: export them from Figma, put them in the same folder and tell Claude their names.</li></ol>`}
]}};

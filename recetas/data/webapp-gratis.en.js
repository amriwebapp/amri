(window.RECIPE=window.RECIPE||{}).en={
title:"Recipe: your website, online and free",
meta:["⏱ 1-2 hours, at your own pace","👩‍🍳 No coding needed","💶 €0 to get started","🍽 Result: your website online, made to measure"],
ing:"Ingredients (all free)",
q:"What do you want to make?",
ph:"Describe your website in your own words. Example: a website for my gym with timetables and a sign-up form",
yn:"Does it need to store data or user accounts?",
yntip:"If in doubt, choose “Yes”: it works the same and you can ignore it later. Taking payments online needs a separate payments service; start without payments.",
fin:"Your web app is online. Every time you change something and push it to GitHub, Cloudflare updates it by itself. Below you'll find two extras: your own domain and maintenance.",
R:{key:"receta2",def:"tareas",empty:"[write your idea above]",
apps:{
 portfolio:{n:"Portfolio / about me",db:false,d:"a personal website with my background, my projects and a link to contact me"},
 negocio:{n:"My business website",db:false,d:"a page for my business with services, prices, customer reviews and a contact button"},
 tareas:{n:"To-do list",db:true,d:"a to-do list where each person creates an account and sees only their own tasks"},
 notas:{n:"Blog / notes",db:true,d:"a notes blog where each person creates an account and can write, edit and delete their posts"},
 contacto:{n:"Site with a form",db:true,d:"a presentation website with a contact form that stores the messages people send me"},
 reservas:{n:"Bookings / appointments",db:true,d:"a website where customers book an appointment and I can see all the bookings"},
 catalogo:{n:"Product catalogue",db:true,d:"a product catalogue that I update from a private panel, without online payments"},
 otra:{n:"✏️ Another idea",db:true,d:""}
},
ing:()=>`<li><b>Claude</b>: the chef. It writes the code for you.</li><li><b>GitHub</b>: the fridge. It stores your files.</li>${DB()?`<li><b>Supabase</b>: the pantry. It stores the data and user accounts.</li>`:""}<li><b>Cloudflare</b>: the counter. It publishes your website so anyone can see it.</li>`,
steps:[
{t:"Get your ingredients ready",s:"5 min · create accounts",b:()=>`<p class="what">You'll create ${DB()?"four":"three"} free accounts. Start with GitHub: you can use it to sign in to the others.</p><h3>Steps</h3><ol>
<li>Create your account on <a href="https://github.com/signup" target="_blank" rel="noopener">GitHub</a>.</li>
<li>Create your account on <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>.</li>
${DB()?`<li>Create your account on <a href="https://supabase.com" target="_blank" rel="noopener">Supabase</a> (“Sign in with GitHub” button).</li>`:""}
<li>Create your account on <a href="https://dash.cloudflare.com/sign-up" target="_blank" rel="noopener">Cloudflare</a>.</li></ol>${ok(`you have the ${DB()?"four":"three"} tabs open and you're signed in to all of them.`)}`},
{t:"Ask Claude for the recipe",s:"10 min · generate the site",b:()=>`<p class="what">You'll describe your idea to Claude. It creates <b>3 files</b> that make up your website. You don't need to understand them yet.</p><h3>Steps</h3><ol><li>Open a new chat in Claude.</li><li>Copy this message and paste it:</li></ol>${cb(`I want ${APPS[app].d||"[write your idea above]"}.\n\nMake it as a simple website with three files: index.html, styles.css and app.js. It should look good on mobile and have a polished design.${DB()?" It should store the data in Supabase, with the connection keys in a separate file called config.js.":""} Explain each file in simple words, as if I didn't know how to code.`)}
<details><summary>What does each part of the message mean?</summary><ul>
<li><b>“I want…”</b>: your idea. You can change it to yours.</li>
<li><b>index.html, styles.css, app.js</b>: the page, its look and how it works.</li>
${DB()?`<li><b>Supabase</b>: where the data and accounts will be stored.</li><li><b>config.js</b>: a file where you'll paste your Supabase “keys” later.</li>`:""}
<li><b>“As if I didn't know how to code”</b>: so Claude explains it simply.</li></ul></details>
<div class="tip">If you don't like something, tell it in your own words: “make it darker”, “make the button bigger”.</div><h3>Download the files to your computer</h3><ol><li>Create a folder on your computer called <b>my-app</b>.</li><li>In the chat, each file has a <b>download</b> button. Click each one and save it in <b>my-app</b>.</li><li>Can't see the button? Ask: “Give me the files in a .zip to download”. Unzip it inside <b>my-app</b>.</li></ol><div class="tip">If you'll use the GitHub connector (next step), Claude can upload the files itself. Downloading them anyway gives you a copy.</div>${ok("you have your website files inside the my-app folder on your computer.")}`},
{t:"Connect Claude to your tools",s:"5 min · connectors",b:()=>`<p class="what">A connector is a permission for Claude to use GitHub${DB()?" and Supabase":""} for you, without copying and pasting. It works with MCP, the standard that lets Claude use external tools.</p><h3>Steps</h3><ol>
<li>In Claude open <b>Customize → Connectors</b>.</li><li>Click <b>Connect</b> next to GitHub and authorise it with your account.</li>${DB()?"<li>Do the same with Supabase.</li>":""}</ol>
<div class="tip">If your plan doesn't show connectors, don't worry: every next step has a manual alternative.</div>${ok(DB()?"GitHub and Supabase show as “Connected”.":"GitHub shows as “Connected”.")}`},
{db:1,t:"Let Claude set up the database",s:"5 min · create the tables",b:()=>`<p class="what">A table is like a spreadsheet where your data is stored. Claude creates it for you, with security so <b>each user only sees their own data</b>.</p><h3>Steps</h3><ol>
<li>In Supabase click <b>New project</b>, name it and choose a nearby region. Wait a couple of minutes.</li>
<li>Go back to the same Claude chat and paste:</li></ol>${cb(`Create the tables this app needs in my Supabase project. Use the same field names as in the code. Turn on security (RLS) so each user can only see and change their own data. Before running anything, tell me what you're going to create.`)}
<div class="tip">Use a single table for all users, with a column saying who each row belongs to. It's simpler than one table per person and just as private.</div>
<details><summary>I don't have the connector or it doesn't work</summary><ul>
<li>Ask Claude: “Give me the SQL to create the tables with RLS security”.</li>
<li>In Supabase open <b>SQL Editor</b>, paste the code and click <b>Run</b>.</li></ul></details>${ok("in Supabase, in <b>Table Editor</b>, you see your table with security (RLS) enabled.")}`},
{db:1,t:"Plug the website into Supabase",s:"5 min · the two keys",b:()=>`<p class="what">Your website needs two pieces of information to talk to your database: an address and a public key.</p><h3>Steps</h3><ol>
<li>In Supabase open <b>Project Settings → API</b>.</li>
<li>Copy the <b>Project URL</b> and the <b>publishable key</b> (in older projects it's called <b>anon public</b>).</li>
<li>Open the <code>config.js</code> file and paste them where Claude said. If you're not sure where, ask it.</li>
<li>Save the file. You'll test it for real once it's published (step “Publish your website”).</li></ol><div class="tip">If you open <code>index.html</code> by double-clicking, the design will show, but creating accounts may fail: browsers limit websites opened as files. That's normal; it will work online.</div>
<div class="tip">⚠️ Never use the <b>service_role</b> (secret) key on your website: it gives full access to your data.</div>${ok("config.js has your Project URL and your publishable key.")}`},
{t:"Save everything on GitHub",s:"5 min · upload the files",b:()=>`<p class="what">You upload your 3 files to GitHub. Cloudflare will read them from there to publish your website.</p><h3>With the connector</h3><ol><li>Tell Claude: “Create a repository called my-app and upload these files”.</li></ol>
<details><summary>Without the connector: by hand</summary><ul>
<li>On GitHub click <b>New repository</b> and call it <b>my-app</b>.</li>
<li>Click <b>uploading an existing file</b>, drag in your files and confirm with <b>Commit changes</b>.</li></ul></details>${ok("you see your files inside the my-app repository on GitHub.")}`},
{t:"Publish your site on Cloudflare",s:"10 min · put it online",b:()=>`<p class="what">Cloudflare Pages takes your repository and turns it into a public website with a padlock (HTTPS).</p><h3>Steps</h3><ol>
<li>In Cloudflare open <b>Workers &amp; Pages → Create</b> and choose to import a GitHub repository (<b>Import a repository</b> or <b>Connect to Git</b>).</li>
<li>Choose the <b>my-app</b> repository.</li>
<li>Leave “Build command” empty and put <code>/</code> in “Build output directory”.</li>
<li>Click <b>Save and Deploy</b> (or <b>Deploy</b>) and wait 1-2 minutes.</li><li>If your screens look different, take a screenshot, paste it into Claude and ask what to enter.</li>
${DB()?"<li>In Supabase, <b>Authentication → URL Configuration</b>: paste your website address into “Site URL”.</li>":""}</ol>${ok("you open your address (it ends in <code>.pages.dev</code> or <code>.workers.dev</code>) and your website loads.")}`},
{t:"Taste before serving",s:"5 min · final check",b:()=>`<p class="what">Before sharing it, check that everything works and is secure.</p><h3>Steps</h3><ol>
<li>Open your website on your phone and create an account.</li>
${DB()?`<li>Create another account with a different email and check it <b>can't see the first one's data</b>.</li><li>Check that only the <b>publishable</b> key appears in your code.</li>`:`<li>Check that links, images and buttons work.</li>`}
<li>If you later use the Claude API or any other secret key, keep it in a Cloudflare Worker, never on the website.</li></ol>
<div class="tip">${DB()?"Free Supabase projects pause after a week without use and reactivate with one click. Check the current limits on their pricing pages.":"Check the current Cloudflare Pages limits on its pricing page."}</div>${ok(DB()?"two different users see different data.":"your website looks good on mobile and everything works.")}`}
,
{x:1,t:"Connect your own domain",s:"20 min · optional",b:()=>`<p class="what">Right now your site lives at <code>my-app.pages.dev</code>. With your own domain (for example <code>yourname.com</code>) it gets a made-to-measure address. It's the only thing that isn't free: the price varies by extension and where you buy it, so check before paying.</p>
<h3>The easiest way: buy it on Cloudflare</h3><ol>
<li>In Cloudflare open <b>Domain Registration → Register Domains</b>, search for the name you want and buy it.</li>
<li>Go to <b>Workers &amp; Pages</b> and open your <b>my-app</b> project.</li>
<li>Click <b>Custom domains → Set up a custom domain</b>.</li>
<li>Type your domain and click <b>Continue → Activate domain</b>. Cloudflare configures everything automatically.</li>
<li>Repeat with <code>www.yourname.com</code> if you want both to work.</li>
${DB()?`<li>In Supabase, <b>Authentication → URL Configuration</b>: change “Site URL” to your new domain so login keeps working.</li>`:""}</ol>
<details><summary>I already bought the domain elsewhere</summary><ul>
<li>In Cloudflare click <b>Add a site</b>, type your domain and choose the <b>Free</b> plan.</li>
<li>Cloudflare will give you two “nameservers”. Paste them in your registrar's panel, in the DNS or nameservers section.</li>
<li>Wait for Cloudflare to confirm (from minutes up to 24 hours) and follow steps 2 to 4 above.</li></ul></details>
<div class="tip">Turn on automatic domain renewal: if it expires, your website stops loading.</div>${ok("you open <code>https://yourname.com</code> and your site loads with a padlock.")}`},
{x:1,t:"Maintain and improve your website",s:"Always · ideas and tips",b:()=>`<p class="what">A website is never finished: you look after it and extend it as you like. Here's how to change something, step by step.</p>
<h3>How to add or change something</h3><ol>
<li>Go back to your chat with Claude (or open a new one and paste your files).</li>
<li>Ask for the change with these words:</li></ol>${cb("This is my website's code: [paste your files here]. I want to add: [your improvement]. Change only what's necessary and tell me which files you touched.")}
<ol start="3"><li>Upload the new files to GitHub: with the connector, ask “update the repository”; by hand, open the file on GitHub, click the pencil, paste the code and click <b>Commit changes</b>.</li>
<li>Cloudflare publishes the change by itself in 1-2 minutes.</li></ol>
<details><summary>💡 Ideas to improve your website</summary><ul>
<li>Dark mode and your brand colours.</li>
<li>A browser tab icon and a well-written title and description so people find you in search engines.</li>
<li>Share buttons or links to your profiles.</li>
<li>Visitor statistics (Cloudflare has a web analytics option).</li>
<li>A version in another language.</li>
${DB()?`<li>Search and filters for your data.</li><li>Export the data to Excel or CSV.</li><li>Upload images or files (Supabase includes storage).</li><li>Sign in with Google.</li><li>An admin panel just for you.</li>`:`<li>An image gallery or a reviews section.</li><li>A contact form (you can add it later with a database).</li>`}</ul></details>
<h3>Maintenance routine</h3><ol>
<li><b>Before a big change:</b> ask Claude to summarise what it will touch. GitHub keeps the history, so you can go back to an earlier version.</li>
<li><b>Every month:</b> open your site on your phone and check everything works.</li>
${DB()?`<li><b>If Supabase paused due to inactivity:</b> open your project and click restore.</li><li><b>Back up your data:</b> in Supabase, in <b>Table Editor</b>, you can export your tables to CSV.</li>`:""}
<li><b>Check the free limits</b> from time to time on the pricing pages of the tools you use.</li></ol>
<h3>If something breaks</h3><p>Don't panic: copy the error message and ask Claude for help.</p>${cb("My website gives this error: [paste the error or describe what happens]. The last thing I changed was: [what you changed]. How do I fix it? Explain it step by step.")}
<div class="tip">One rule that avoids almost every scare: make one small change at a time and test it before asking for the next.</div>`}
]}};

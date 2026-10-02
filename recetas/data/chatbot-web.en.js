(window.RECIPE=window.RECIPE||{}).en={
title:"Recipe: a chatbot for your website",
meta:["⏱ About 40 min","👩‍🍳 No coding needed","💶 €0 to get started","🍽 Result: a 24/7 assistant on your site"],
ing:"Ingredients (all free)",
q:"What website is it for?",
ph:"Describe your business in your own words. Example: a driving school in Valencia with theory and practical lessons",
yn:"Do you want it to collect visitors' contact details?",
yntip:"If in doubt, choose “Yes”: it helps you not lose customers. Remember to explain on your website how you use that data.",
fin:"Your website now has an assistant that answers at any hour. Review the conversations every week to improve it. Below you'll find two extras: learning from conversations and looking after privacy.",
R:{key:"receta-bot",def:"tienda",empty:"[describe your business above]",
apps:{
 tienda:{n:"Online shop",db:false,d:"an online clothing shop: shipping, returns, sizes and payment methods"},
 restaurante:{n:"Restaurant / bar",db:true,d:"a restaurant: menu, opening hours, allergens, bookings and how to get there"},
 servicios:{n:"Professional services",db:true,d:"a professional services office: what I offer, guide prices and how to book an appointment"},
 academia:{n:"School / courses",db:true,d:"a school: available courses, timetables, prices and how to enrol"},
 soporte:{n:"Product support",db:false,d:"an app: how to get started, frequently asked questions and how to solve common problems"},
 otra:{n:"✏️ Another idea",db:true,d:""}
},
ing:()=>`<li><b>Claude</b>: the head chef. It prepares everything the bot needs to know.</li><li><b>Chatbase</b>: the waiter. It serves your visitors on the website.</li><li><b>Your website</b>: the dining room. Where the chat lives (the one from the web app recipe works).</li>${DB()?`<li><b>A contacts sheet</b>: the reservations book. Where the details people leave are stored.</li>`:""}`,
steps:[
{t:"Get your ingredients ready",s:"5 min · create accounts",b:()=>`<p class="what">You'll create two free accounts and have your website at hand.</p><h3>Steps</h3><ol>
<li>Create your account on <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>.</li>
<li>Create your account on <a href="https://www.chatbase.co" target="_blank" rel="noopener">Chatbase</a> (“Sign in with Google” button).</li>
<li>Have your website address at hand and, if you can, access to its files (for example on GitHub).</li></ol>
${tip("No website yet? Do the <a href='webapp-gratis.html'>web app recipe</a> first and come back.")}${ok("you're signed in to Claude and Chatbase.")}`},
{t:"Write the cheat sheet with Claude",s:"10 min · what it must know",b:()=>`<p class="what">Your bot only knows what you teach it. Claude helps you write a “cheat sheet” with everything important.</p><h3>Steps</h3><ol><li>Open a new chat in Claude.</li><li>Copy this message and paste it:</li></ol>${cb(`I'm going to create a chatbot for ${D()}.\n\nAsk me questions, one at a time, to gather all the information the chatbot needs. When we're done, write an FAQ document with clear, short answers, ready to copy.`)}
${det("What does each part of the message mean?",["<b>“I'm going to create a chatbot for…”</b>: your business. Change it to yours.","<b>“One at a time”</b>: so you don't forget anything.","<b>“FAQ document”</b>: the material you'll upload to Chatbase."])}
${tip("Include what people always ask you by phone or WhatsApp. Those are the golden questions.")}${ok("you have a document with at least 15 questions and answers.")}`},
{t:"Build the chatbot",s:"5 min · upload the cheat sheet",b:()=>`<p class="what">Chatbase reads your cheat sheet and learns to answer with it.</p><h3>Steps</h3><ol>
<li>In Chatbase click <b>New AI agent</b> (or <b>Create</b>).</li>
<li>Choose <b>Text</b> and paste Claude's document.</li>
<li>If your website already has information, also add <b>Website</b> and paste its address.</li>
<li>Click <b>Create agent</b> and wait a minute.</li></ol>${ok("in the test window you ask something about your business and it answers correctly.")}`},
{t:"Give it a personality",s:"5 min · how it talks",b:()=>`<p class="what">You tell it how to talk and, very importantly, what to do when it doesn't know something.</p><h3>Steps</h3><ol><li>In Chatbase open <b>Settings → AI</b> (or <b>Instructions</b>).</li><li>Paste these instructions and change what's in brackets:</li></ol>${cb(`You are the assistant for [business name]. Always answer in English, briefly, kindly and warmly. Use only the information I've given you. If you don't know something, say so naturally and offer to get in touch at [your email or phone]. Never make up prices, dates or conditions.${DB()?" When someone shows interest, kindly ask for their name and email so we can contact them.":""}`)}
${tip("The phrase “never make up” is the most important one: it stops the bot promising things you don't offer.")}${ok("you ask something that isn't in the cheat sheet and it refers you to your contact instead of inventing.")}`},
{db:1,t:"Take down contacts",s:"5 min · don't lose customers",b:()=>`<p class="what">The bot can ask interested people for their name and email, and you receive them.</p><h3>Steps</h3><ol>
<li>In Chatbase find the <b>Actions</b> or <b>Leads</b> section and turn on contact collection.</li>
<li>Choose the fields: <b>name</b> and <b>email</b> (don't ask for more than you need).</li>
<li>Check the contacts in <b>Activity → Leads</b>.</li></ol>
${tip("⚠️ If you collect personal data, add a privacy policy to your website explaining what you use it for. Ask Claude for a draft tailored to your case.")}${ok("you run a test, leave your email and it appears in the contacts list.")}`},
{t:"Set the table",s:"5 min · install it on your site",b:()=>`<p class="what">Chatbase gives you a small snippet of code. You paste it into your website and the chat bubble appears.</p><h3>Steps</h3><ol>
<li>In Chatbase open <b>Deploy → Chat widget</b> and copy the code.</li>
<li>Open your <code>index.html</code> and paste it just before <code>&lt;/body&gt;</code>. If you don't know where, ask Claude: “paste this code into my website”.</li>
<li>Push the change to GitHub; Cloudflare will publish the updated site in 1-2 minutes.</li></ol>
${det("My site is on another platform (WordPress, Wix…)",["Look in Chatbase for the instructions for your platform.","There's usually a “custom code” section or a plugin."])}${ok("you open your website and the chat bubble appears in a corner.")}`},
{t:"Taste before serving",s:"5 min · final check",b:()=>`<p class="what">Put yourself in a customer's shoes and test the bot.</p><h3>Steps</h3><ol>
<li>Open your website on your phone and ask it 5 typical questions.</li>
<li>Ask it something that isn't in the cheat sheet: it should refer you to your contact.</li>
<li>Try to trick it: “can you give me a 90% discount?”. It must not promise anything.</li></ol>${ok("it answers typical questions well and doesn't make anything up.")}`},
{x:1,t:"Learn from conversations",s:"10 min a week · optional",b:()=>`<p class="what">Your visitors will tell you what's missing. Chatbase saves every conversation.</p><ol>
<li>Open <b>Activity → Chat logs</b>.</li><li>Look for weak answers or unanswered questions.</li><li>Ask Claude for help:</li></ol>${cb("These are questions my chatbot couldn't answer well: [paste the questions]. Write me short, clear answers to add to its cheat sheet.")}
<ol start="4"><li>Add them in Chatbase and click <b>Retrain</b>.</li></ol>`},
{x:1,t:"Look after privacy",s:"Always · tips",b:()=>`<p class="what">A few simple rules to make the bot trustworthy.</p><ol>
<li><b>Don't upload private data</b> to the cheat sheet: no customer data or passwords.</li>
<li><b>Say it's an automated assistant</b> in the welcome message.</li>
<li><b>Check Chatbase's free limits</b> from time to time on its pricing page.</li></ol>
${det("💡 Ideas to improve your bot",["Suggested question buttons in the welcome message.","Your brand colours and logo in the chat.","A version in another language for visitors from abroad."])}`}
]}};

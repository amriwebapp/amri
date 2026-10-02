(window.RECIPE=window.RECIPE||{}).en={
title:"Recipe: automate boring tasks with AI",
meta:["⏱ About 45 min","👩‍🍳 No coding needed","💶 €0 to get started","🍽 Result: a task that does itself"],
ing:"Ingredients (all free)",
q:"What do you want to automate?",
ph:"Describe the task in your own words. Example: when an order arrives by email, log it in a spreadsheet",
yn:"Does it need AI to read, summarise or write text?",
yntip:"If in doubt, choose “Yes”: we'll add an AI step. If it isn't needed, you can remove it at the end.",
fin:"Your task now does itself. Every time the trigger happens, Zapier will do the work for you. Below you'll find two extras: chaining more steps and what to do if something fails.",
R:{key:"receta-auto",def:"correos",empty:"[describe your task above]",
apps:{
 correos:{n:"Summarise emails",db:true,d:"when an important email arrives, summarise it in 3 points and log it in a spreadsheet",tr:"Gmail → New Email",ac:"Google Sheets → Create Spreadsheet Row"},
 facturas:{n:"Save invoices",db:false,d:"when an email arrives with an invoice attached, save the file in a Google Drive folder",tr:"Gmail → New Attachment",ac:"Google Drive → Upload File"},
 eventos:{n:"Events to calendar",db:true,d:"when an email mentions an appointment with a date and time, create the event in my calendar",tr:"Gmail → New Email",ac:"Google Calendar → Create Detailed Event"},
 formulario:{n:"Form to sheet",db:false,d:"when someone fills in my form, log it in a sheet and send me an email alert",tr:"Google Forms → New Form Response",ac:"Gmail → Send Email"},
 clasificar:{n:"Sort messages",db:true,d:"when a customer email arrives, have AI classify it (question, complaint, order) and alert me only about urgent ones",tr:"Gmail → New Email",ac:"Gmail → Send Email"},
 otra:{n:"✏️ Another idea",db:true,d:"",tr:"[the app where it all starts]",ac:"[the app where the result ends up]"}
},
ing:()=>`<li><b>Zapier</b>: the food processor. It does the task on its own, again and again.</li><li><b>Your apps</b> (Gmail, Google Drive, Sheets…): the stove. Where things happen.</li>${DB()?`<li><b>AI inside Zapier</b>: the cook. It reads and writes text for you.</li>`:""}<li><b>Claude</b>: the head chef. It helps you plan and answers your questions.</li>`,
steps:[
{t:"Get your ingredients ready",s:"5 min · create accounts",b:()=>`<p class="what">You'll create two free accounts. Your Google account gets you into both.</p><h3>Steps</h3><ol>
<li>Create your account on <a href="https://zapier.com/sign-up" target="_blank" rel="noopener">Zapier</a> (“Sign up with Google” button).</li>
<li>Create your account on <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>.</li>
<li>Make sure you have access to the apps you'll use (for example Gmail and Google Sheets).</li></ol>${ok("you're signed in to Zapier and Claude.")}`},
{t:"Ask Claude for the plan",s:"5 min · design the automation",b:()=>`<p class="what">Every automation has a <b>trigger</b> (what happens) and one or more <b>actions</b> (what gets done). Claude maps it out step by step.</p><h3>Steps</h3><ol><li>Open a new chat in Claude.</li><li>Copy this message and paste it:</li></ol>${cb(`I want to automate this with Zapier: ${D()}.\n\nExplain step by step how to build the Zap: which trigger to choose, which actions to add and which fields to fill in each one.${DB()?" Include an AI step and write the exact instructions I should give it.":""} Explain it in simple words, as if I'd never used Zapier.`)}
${det("What does each word mean?",["<b>Zap</b>: what Zapier calls each automation.","<b>Trigger</b>: the moment it starts. Example: “an email arrives”.","<b>Action</b>: what Zapier does. Example: “add a row”.",...(DB()?["<b>AI step</b>: a helper that reads or writes text in the middle of the process."]:[])])}
${ok("you have a clear plan with the trigger and the actions.")}`},
{t:"Light the fire: the trigger",s:"10 min · when it starts",b:()=>`<p class="what">You tell Zapier what to watch.</p><h3>Steps</h3><ol>
<li>In Zapier click <b>+ Create → Zaps</b>.</li>
<li>Click <b>Trigger</b> and choose: <code>${APPS[app].tr}</code>.</li>
<li>Click <b>Sign in</b> to connect your account and authorise it.</li>
<li>Click <b>Test trigger</b>: Zapier will look for a real example.</li></ol>
${tip("For emails, first create a Gmail label (for example “automate”) and have it watch only that one. That way you control what comes in.")}${ok("the test finds a real example (an email, a response…).")}`},
{db:1,t:"Add the cook: the AI step",s:"10 min · read and write",b:()=>`<p class="what">The AI receives the text from the trigger and transforms it: summarises, classifies or extracts data.</p><h3>Steps</h3><ol>
<li>Click <b>+</b> below the trigger and search for <b>AI by Zapier</b>.</li>
<li>Choose the option to analyse or transform text.</li>
<li>In the instructions paste this (and adapt it to your case):</li></ol>${cb("Read the following text and return: 1) a 3-point summary, 2) the category (question, complaint, order or other), 3) whether it's urgent (yes/no), 4) the date if one appears. Text: ")}
<ol start="4"><li>At the end of the message, click the <b>+</b> button to insert the <b>Body</b> field (the email body).</li><li>Click <b>Test step</b>.</li></ol>
${det("I can't find AI by Zapier",["Search for “ChatGPT” or “Claude” among the apps: they work too, although they ask for your own key.","Ask Claude which AI option is available on your Zapier plan."])}${ok("the test returns the summary and category of the example.")}`},
{t:"Serve the dish: the final action",s:"5 min · what gets done",b:()=>`<p class="what">Now you say where the result ends up.</p><h3>Steps</h3><ol>
<li>Click <b>+</b> and choose: <code>${APPS[app].ac}</code>.</li>
<li>Connect your account if asked.</li>
<li>Fill in each field by clicking <b>+</b> and choosing the data from previous steps${DB()?" (for example, the AI summary)":""}.</li>
<li>Click <b>Test step</b>.</li></ol>
${tip("If you're using a spreadsheet, create it first with the headings in the first row: Date, From, Summary… Zapier will recognise them.")}${ok("you see the test result in place (the row, the file, the event…).")}`},
{t:"Taste before serving",s:"5 min · switch it on",b:()=>`<p class="what">Time to switch it on and test it with a real case.</p><h3>Steps</h3><ol>
<li>Click <b>Publish</b> to activate the Zap.</li>
<li>Trigger it for real (send yourself an email, fill in the form…).</li>
<li>Wait a few minutes and check the result.</li>
<li>Check in <b>Zap history</b> that it shows up in green.</li></ol>
${tip("Free plans have a monthly task limit and may take a few minutes to react. Check the current limits on Zapier's pricing page.")}${ok("the real case arrives in its place without you doing anything.")}`},
{x:1,t:"Chain more steps",s:"15 min · optional",b:()=>`<p class="what">Once the first one works, you can add more: filters, alerts or extra actions.</p><h3>Ideas</h3><ol>
<li><b>Filter</b>: only continue if a condition is met (for example “urgent = yes”).</li>
<li><b>Alert</b>: an email or message when something important happens.</li>
<li><b>Second action</b>: as well as logging it, save it in another app.</li></ol>${cb("I have this Zap working: [describe the steps]. I want to add: [your improvement]. Tell me exactly which steps to add and where.")}
${tip("One change at a time. Test the Zap after each improvement.")}`},
{x:1,t:"If something burns",s:"Always · fixing errors",b:()=>`<p class="what">Don't panic: Zapier emails you when something fails and keeps a history.</p><ol>
<li>Open <b>Zap history</b> and click the run shown in red.</li>
<li>Copy the error message.</li>
<li>Ask Claude for help:</li></ol>${cb("My Zapier Zap gives this error: [paste the error]. The Zap does this: [describe the steps]. How do I fix it? Explain it step by step.")}
${det("💡 Other tasks you can automate",["Save new subscribers in a sheet.","Automatic reminders to customers before an appointment.","Post on social media when you publish a blog post.","A daily summary of your important emails."])}`}
]}};

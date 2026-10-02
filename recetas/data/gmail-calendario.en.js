(window.RECIPE=window.RECIPE||{}).en={
title:"Recipe: your secretary with Gmail and Google Calendar",
meta:["⏱ About 25 min","👩‍🍳 Easy","💶 €0 to get started","🍽 Result: a summary of your day in 1 minute"],
ing:"Ingredients",
q:"What takes up most of your time?",
ph:"Describe your situation. Example: I get 80 supplier emails a day and I always miss the important ones",
yn:"Do you want it to prepare reply drafts?",
yntip:"In this recipe Claude must never send anything for you: it only prepares drafts that you review.",
fin:"Your secretary is up and running. Every morning, one message and you know what matters. Below you'll find extras on privacy and ideas.",
R:{key:"receta-gmail",def:"manana",empty:"[describe your situation above]",
apps:{
 manana:{n:"Morning summary",db:false,d:"a summary every morning of what's urgent in my inbox and of my calendar for the day"},
 respuestas:{n:"Reply to emails",db:true,d:"reply faster to repetitive emails, in my own tone"},
 reuniones:{n:"Prepare meetings",db:false,d:"arrive prepared for every meeting: who's coming, what we discussed last time and what to decide"},
 semana:{n:"Plan the week",db:true,d:"plan my week: find free slots, group meetings together and protect time to focus"},
 otra:{n:"✏️ Another idea",db:true,d:""}
},
ing:()=>`<li><b>Claude</b>: your secretary. It reads, summarises and suggests.</li><li><b>Gmail and Google Calendar</b>: your inbox and your calendar.</li><li><b>Gmail and Google Calendar connectors</b>: the access pass. You decide which permissions to give.</li><li><b>A project in Claude</b>: the instructions notebook, so you don't repeat yourself.</li>`,
steps:[
{t:"Get your ingredients ready",s:"2 min · accounts",b:()=>`<p class="what">You need your Google account and your Claude account.</p><ol><li>Sign in to <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>.</li><li>Have your Google username and password at hand.</li></ol>${tip("If you use a work account, your company may need to authorise the connection.")}${ok("you can sign in to Claude and Gmail.")}`},
{t:"Connect Gmail and Calendar",s:"5 min · two connectors",b:()=>`<p class="what">A connector is a permission for Claude to use Gmail for you. You turn it on once and it stays saved.</p><h3>Steps</h3><ol>
<li>In Claude (web or desktop app) open <b>Customize → Connectors</b>.</li>
<li>Click <b>Browse connectors</b>, search for <b>“Gmail”</b> and click <b>Connect</b>.</li>
<li>A Google window opens: sign in and click <b>Allow</b>.</li>
<li>In a new chat, click the <b>+</b> button → <b>Connectors</b> and check that Gmail is switched on.</li></ol><p>Repeat the same steps searching for <b>“Google Calendar”</b>.</p>${tip("Claude's menus change names now and then. If you can't find it, search for “connectors” in <a href='https://support.claude.com' target='_blank' rel='noopener'>Claude's help centre</a>.")}${ok("Gmail and Google Calendar show as enabled.")}`},
{t:"Create “My secretary”",s:"5 min · the rules",b:()=>`<p class="what">A project keeps your rules forever, so you don't have to repeat them.</p><ol><li>In Claude: <b>Projects → Create project</b>, call it <b>My secretary</b>.</li><li>In <b>Instructions</b>, paste:</li></ol>${cb(`You are my secretary. Your goal: ${D()}.\n\nRules:\n- Never send emails or accept invitations: only suggest and prepare drafts.\n- Be brief: short lists, urgent things first.\n- If something looks like a scam or asks for bank details, warn me.\n- Write like me: warm, clear and polite.`)}${ok("you have the project with its instructions.")}`},
{t:"Your first summary",s:"3 min · good morning",b:()=>`<p class="what">Open a chat inside the project and ask for your summary.</p>${cb("Review my emails from the last 24 hours and my calendar for today. Tell me:\n1) What's urgent (max 5).\n2) What can wait.\n3) My meetings today and what I should prepare for each.")}${ok("in one minute you know what's ahead of you today.")}`},
{db:1,t:"Drafts in your tone",s:"5 min · reply",b:()=>`<p class="what">Claude writes, you review and send.</p>${cb("Prepare reply drafts for the urgent emails, in my tone. Don't send anything. If the connector can create drafts in Gmail, leave them there; if not, write them here so I can copy them.")}${tip("Always read each draft before sending it. You sign, you decide.")}${ok("you have drafts ready to review.")}`},
{t:"Make it a habit",s:"2 min · the routine",b:()=>`<p class="what">Save the summary message in a note and use it every morning inside the project.</p>${tip("If you use <b>Claude Cowork</b> on desktop, you can turn it into a <b>scheduled task</b> that runs by itself every weekday morning.")}${ok("tomorrow you repeat it and it takes less than a minute.")}`},
{x:1,t:"Calm privacy",s:"Always · tips",b:()=>`<ol><li>You can <b>disconnect</b> Gmail or Calendar whenever you like in Customize → Connectors.</li><li>Don't ask Claude to forward other people's personal data.</li><li>Check your company's policy before connecting a work account.</li></ol>`},
{x:1,t:"If something doesn't work",s:"Always · check this",b:()=>`<ol><li><b>It can't see your emails</b>: reconnect Gmail and accept all the permissions it asks for.</li><li><b>Summaries too long</b>: add “max 10 lines” to the instructions.</li></ol>${det("💡 Ideas to keep going",["A Friday summary of what's pending.","Find invoices and log them in a sheet.","Suggest slots for a meeting with 3 people."])}`}
]}};

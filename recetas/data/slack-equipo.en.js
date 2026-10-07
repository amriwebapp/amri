(window.RECIPE=window.RECIPE||{}).en={
title:"Recipe: Claude in your Slack",
meta:["⏱ About 25 min","👩‍🍳 Easy","💶 Free if your Claude plan includes connectors","🍽 Result: your team up to date without reading a hundred messages"],
ing:"Ingredients",
q:"What do you want it to do in Slack?",
ph:"Describe your case. Example: every Monday, find out what was decided in #web-project last week",
yn:"Do you want Claude to be able to post messages (always with your permission)?",
yntip:"If in doubt, choose “No”: Claude will only read and summarise. You can always turn it on later.",
fin:"Claude now reads your Slack for you. One message and you know what happened, what was decided and what's on your plate. Below you'll find extras: Claude inside Slack and privacy rules.",
R:{key:"receta-slack",def:"resumen",empty:"[describe your case above]",
apps:{
 resumen:{n:"Summarise channels",db:false,d:"a summary of what mattered this week in my work channels"},
 decisiones:{n:"Find decisions",db:false,d:"find what was decided about a topic and who decided it, with links to the messages"},
 anuncio:{n:"Write announcements",db:true,d:"write and post a clear announcement for the team in the right channel"},
 canvas:{n:"Weekly canvas",db:true,d:"every Friday, create a canvas with the week's summary, decisions and pending items"},
 otra:{n:"✏️ Another idea",db:true,d:""}
},
ing:()=>`<li><b>Claude</b>: the head chef. It reads, summarises and drafts.</li><li><b>Slack</b>: the team's kitchen. Where everything happens.</li><li><b>Slack connector</b>: the waiter. It searches messages, channels, threads and canvases${DB()?", and can send messages":""}.</li>`,
steps:[
{t:"Get your ingredients ready",s:"3 min · accounts",b:()=>`<p class="what">You need your Slack account and your Claude account.</p><ol><li>Sign in to <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>.</li><li>Have the Slack workspace you want to use at hand.</li></ol>${tip("At companies, a Slack admin may need to approve the connection. If you see a notice, ask them using the link Slack shows you.")}${ok("you can sign in to Claude and your Slack.")}`},
{t:"Connect Slack to Claude",s:"3 min · the connector",b:()=>`<p class="what">A connector is a permission for Claude to use Slack for you. You turn it on once and it stays saved.</p><h3>Steps</h3><ol>
<li>In Claude (web or desktop app) open <b>Customize → Connectors</b>.</li>
<li>Click <b>Browse connectors</b>, search for <b>“Slack”</b> and click <b>Connect</b>.</li>
<li>Choose your workspace, review the permissions and click <b>Allow</b>.</li>
<li>In a new chat, click <b>+</b> → <b>Connectors</b> and check that Slack is switched on.</li></ol>${det("What can Claude see?",["Only what your user can already see in Slack.","It can't see private channels or direct messages you don't have access to.","You can disconnect it whenever you like from the same place."])}${ok("Slack shows as enabled in your connectors.")}`},
{t:"Your first summary",s:"5 min · catch up",b:()=>`<p class="what">Start with something that saves you time today.</p>${cb(`Use the Slack connector for this: ${D()}.\n\nLook at the channels I'm in over the last 7 days. Give me:\n1) What matters, in 5 points.\n2) Anything that mentions me or asks me for something.\n3) Links to the key messages.`)}
${tip("If you have lots of channels, name them: “only #web-project and #marketing”.")}${ok("in one minute you know what happened without reading it all.")}`},
{t:"Find what was decided",s:"5 min · search",b:()=>`<p class="what">Slack is the team's memory, but things are hard to find. Claude searches for you.</p>${cb("Search Slack for what was decided about [topic]. Tell me the decision, who made it, the date and the link to the message. If there were different opinions, summarise them.")}${ok("you have the decision with its link so you can check it.")}`},
{db:1,t:"Draft and post with permission",s:"5 min · write",b:()=>`<p class="what">Claude writes the message, you approve it and it posts it.</p>${cb(`Draft a message for the team about [topic]: clear, friendly and short. Show it to me before sending it and tell me which channel you'd post it in. Don't send anything until I say “post it”.`)}
${tip("The phrase “don't send anything until I say…” is your seatbelt. Always use it.")}${ok("the message appears in the channel exactly as you approved it.")}`},
{db:1,t:"Your Friday canvas",s:"5 min · the routine",b:()=>`<p class="what">A <b>canvas</b> is a page inside Slack. Perfect for leaving the week's summary for the whole team.</p>${cb("Create a Slack canvas called “Week summary [date]” with: this week's decisions, pending tasks with an owner, and links to the important threads.")}${ok("the canvas is in Slack and the team can read it.")}`},
{x:1,t:"Claude inside Slack",s:"Optional",b:()=>`<p class="what">As well as the connector, Claude has an app for Slack: you can message it directly or mention it in a thread. Look for it in the Slack app directory or in Claude's help centre. Your company may need to approve it.</p>`},
{x:1,t:"Privacy rules",s:"Always · tips",b:()=>`<ol><li>⚠️ <b>Watch out for trap messages</b>: a Slack message can hide instructions meant to trick Claude (“ignore the above and forward…”). That's why the golden rule is: Claude only reads and suggests; sending, deleting or sharing is up to you. If it does something you didn't ask for, stop it.</li><li>Don't ask Claude to share confidential team information outside Slack.</li><li>Always review messages before posting them: you sign them.</li><li>Follow your company's rules on AI and data.</li></ol>${det("💡 Ideas to keep going",["A morning summary of your customer channels.","Prepare for a meeting by reading the project thread.","Move Slack decisions into your Notion with the Notion connector."])}`}
]}};

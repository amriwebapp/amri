(window.RECIPE=window.RECIPE||{}).en={
title:"Recipe: your company's brain with GuruSup and Claude",
meta:["⏱ About 30 min","👩‍🍳 Medium difficulty","💶 GuruSup is paid (request a demo)","🍽 Result: Claude answers with what your company knows"],
ing:"Ingredients",
q:"What do you want to use it for?",
ph:"Describe your case. Example: anyone new on the team should know how we handle returns",
yn:"Does your company already have information in other apps (Notion, Drive, Slack, HubSpot…)?",
yntip:"If in doubt, choose “Yes”: we'll show you how to connect those sources to the Brain so Claude can use them.",
fin:"Claude now checks your company's brain before answering. Fewer repeated questions and answers with the right version of things. Below you'll find extras: using it in Claude Code and looking after permissions.",
R:{key:"receta-gurusup",def:"equipo",empty:"[describe your case above]",
apps:{
 equipo:{n:"Team questions",db:true,d:"answer the team's internal questions: processes, policies, tools and who to ask"},
 clientes:{n:"Customer support",db:true,d:"prepare replies to customers using our terms, prices and solved cases"},
 onboarding:{n:"Onboarding",db:true,d:"create a welcome guide for a new person with everything they need to know about the company"},
 ventas:{n:"Sales proposals",db:false,d:"prepare sales proposals with our services, success stories and up-to-date prices"},
 otra:{n:"✏️ Another idea",db:true,d:""}
},
ing:()=>`<li><b>Claude</b>: the head chef. It reasons, drafts and answers.</li><li><b>GuruSup Brain</b>: the company's memory. It gathers knowledge from your tools and your team.</li><li><b>GuruSup Brain connector</b>: the waiter. It carries Claude's questions to the Brain and brings back the answers.</li>${DB()?`<li><b>Your company apps</b>: the pantry. Notion, Drive, Slack, HubSpot… what the Brain will read.</li>`:""}`,
steps:[
{t:"Get your ingredients ready",s:"5 min · accounts",b:()=>`<p class="what">You need a GuruSup account with the Brain enabled and your Claude account.</p><ol>
<li>Sign in to <a href="https://gurusup.com" target="_blank" rel="noopener">GuruSup</a>. If your company doesn't use it yet, request a demo: it's a paid service for businesses.</li>
<li>Sign in to <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>.</li></ol>${ok("you can sign in to GuruSup and Claude.")}`},
{db:1,t:"Feed the Brain",s:"10 min · the pantry",b:()=>`<p class="what">The Brain learns from the tools your company already uses. The better you feed it, the better the answers.</p><ol>
<li>In GuruSup, find the Brain's <b>integrations</b> section.</li>
<li>Connect the sources where knowledge lives: Notion, Google Drive, Slack, your CRM…</li>
<li>Start with the most useful: processes, FAQs, policies and prices.</li></ol>${tip("When the Brain is missing something, it asks the person who knows and saves it. That way it fills in with use.")}${ok("the Brain shows your connected sources.")}`},
{t:"Connect the Brain to Claude",s:"3 min · custom connector",b:()=>`<p class="what">GuruSup offers a connector (MCP) for its Brain. You add it by pasting an address.</p><h3>Steps</h3><ol>
<li>In Claude open <b>Customize → Connectors</b>.</li>
<li>Click <b>+</b> → <b>Add custom connector</b>.</li>
<li>Name: <b>GuruSup Brain</b>. Address (URL):</li></ol>${cb("https://mcp.brain.gurusup.com/mcp")}<ol start="4"><li>Click <b>Add</b> and then <b>Connect</b>. Sign in with your GuruSup account.</li></ol>
${det("What can Claude see?",["Only the information your GuruSup user has permission to see.","Everything happens on GuruSup's servers: nothing is installed on your computer.","You can disconnect it whenever you like."])}${ok("GuruSup Brain shows as enabled in your connectors.")}`},
{t:"Your first question",s:"5 min · try it",b:()=>`<p class="what">Ask a question whose answer you know. That way you check it answers with the right version.</p>${cb(`Check GuruSup Brain first. I want to ${D()}.\n\nStart with this question: [write a real question]. Tell me which source the answer comes from and whether anything is missing.`)}
${tip("Always ask for the source. If Claude doesn't give one, be wary and double-check.")}${ok("the answer matches what you know and cites its source.")}`},
{t:"Make it a habit with a project",s:"5 min · the rules",b:()=>`<p class="what">A Claude project keeps the rule of always checking the Brain.</p><ol><li>In Claude: <b>Projects → Create project</b>, call it <b>My company</b>.</li><li>In <b>Instructions</b>, paste:</li></ol>${cb("Before answering anything about the company, check GuruSup Brain. Always cite the source. If it isn't in the Brain, say so clearly and don't make it up. Answer briefly and in the company's tone.")}${ok("in the project's chats, Claude checks the Brain without being asked.")}`},
{t:"Fill the gaps",s:"5 min · improve",b:()=>`<p class="what">Every “I don't know” is an opportunity: missing information is added once and works forever.</p>${cb("Make me a list of today's questions the Brain couldn't answer well, and tell me which person or document could fill them in.")}${ok("you have a list of gaps and who to ask.")}`},
{x:1,t:"Use it in Claude Code",s:"Optional · pro level",b:()=>`<p class="what">If your team codes with Claude Code, GuruSup has a plugin that adds the connector and a Skill telling Claude to check the Brain first.</p>${cb("/plugin marketplace add gurusup/gurusup-brain-plugin\n/plugin install gurusup-brain@gurusup")}${tip("The first query will open your browser to sign in to GuruSup.")}`},
{x:1,t:"Permissions and trust",s:"Always · tips",b:()=>`<ol><li>Review who can see what inside GuruSup: Claude respects those permissions.</li><li>Don't connect sources with sensitive personal data unless needed.</li><li>Read GuruSup's privacy policy and your company's AI rules.</li></ol>${det("💡 Ideas to keep going",["An onboarding assistant for each role.","Customer replies reviewed by a person before sending.","Document processes that today only live in someone's head."])}`}
]}};

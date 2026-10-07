(window.RECIPE=window.RECIPE||{}).en={
title:"Recipe: your first agent, Claude works for you",
meta:["⏱ About 40 min", "👩‍🍳 No coding needed", "💶 Needs a paid Claude plan", "🍽 Result: a task done by Claude from start to finish"],
ing:"Ingredients",
q:"What task do you want it to do for you?",
ph:"Describe it in your own words. Example: rename my holiday photos with the date and place",
yn:"Fancy trying the terminal too?",
yntip:"If in doubt, choose “No”: you don't need it with the desktop app. With “Yes” you'll learn to use Claude Code from the terminal, like programmers do.",
fin:"You've worked with your first agent: you gave it a goal, approved its plan and checked the result. That's the method for any task, big or small.",
R:{key:"receta-agente",def:"carpeta",empty:"[describe the task, above]",
apps:{
 carpeta:{n:"Tidy a folder",db:false,d:"sort the files in the folder into subfolders by type and give me a list of what's there"},
 informe:{n:"A report from my documents",db:false,d:"read the documents in the folder and prepare a one-page report with the key points"},
 tabla:{n:"Clean up a spreadsheet",db:false,d:"check the spreadsheet in the folder, fix obvious mistakes and give me a summary with totals"},
 web:{n:"A simple website",db:true,d:"create a one-page website to introduce myself, open it in the browser and improve it until it looks good"},
 otra:{n:"✏️ Another idea",db:true,d:""}
},
ing:()=>`<li><b>Claude on a paid plan</b> (Pro or higher): the agent. The modes that work with your files aren't on the free plan.</li><li><b>The Claude desktop app</b>: where it works. Mac or Windows.</li><li><b>A test folder</b>: the only place you'll let it work.</li>${DB()?`<li><b>The terminal</b>: a window where you give your computer instructions by typing. It's already on your computer.</li>`:""}`,
steps:[
{t:"What an agent is",s:"3 min · the idea",b:()=>`<p class="what">So far you've used Claude as a chat: you ask, it answers and you do the rest. An <b>agent</b> is Claude working on its own on a task with several steps: it makes a plan, opens and creates files, checks whether it worked, fixes things and lets you know when it's done.</p>
${det("The difference, with an example",["<b>Chat</b>: explains how to tidy your downloads folder.","<b>Agent</b>: tidies it, shows you the result and asks before deleting anything."])}
${tip("You set the goal and the limits. Claude does the work. You always approve what matters.")}${ok("you could explain the difference between a chat and an agent.")}`},
{t:"Set up the kitchen",s:"10 min · app and folder",b:()=>`<h3>Steps</h3><ol>
<li>Download the desktop app from <a href="https://claude.ai/download" target="_blank" rel="noopener">claude.ai/download</a> and sign in.</li>
<li>Create a folder on your desktop called <b>prueba-agente</b>.</li>
<li>Copy a few files for the task into it. <b>Copies, not the originals.</b></li></ol>
${tip("Working with copies the first time is the best safety net: if something goes wrong, delete the folder and start again.")}${ok("the app is open and the prueba-agente folder has test files in it.")}`},
{t:"Open agent mode",s:"3 min · Cowork or Code",b:()=>`<p class="what">In the desktop app, Claude can work as an agent in two ways:</p><ul>
<li><b>Cowork</b>: for tasks with your documents: sorting, summarising, preparing reports or spreadsheets.</li>
<li><b>Code</b> (Claude Code): for building websites, small programs or automations.</li></ul>
<h3>Steps</h3><ol><li>Pick the one that fits your task.</li><li>When it asks which folder to work in, choose <b>prueba-agente</b>. Only that one.</li></ol>
${tip("Menu names change from time to time. If you can't see Cowork or Code, update the app and check your plan is a paid one.")}${ok("Claude has access to your test folder, and nothing else.")}`},
{t:"Ask for a plan first",s:"5 min · the instruction",b:()=>`<h3>Copy this message and paste it</h3>${cb(`I'd like you to do this: ${D()}.\n\nOnly work inside the prueba-agente folder.\nBefore doing anything, tell me your plan in short steps and wait for my OK.\nDon't delete or overwrite any file without asking me.\nWhen you finish, summarise what you've changed.`)}
${det("Why each part?",["“Only inside the folder”: you decide where it can touch.","“Tell me your plan”: you see what it will do before it does it, and you can correct it.","“Don't delete without asking”: you decide anything that can't be undone."])}
${ok("Claude has shown you a plan you understand.")}`},
{t:"Let it work",s:"10 min · approve calmly",b:()=>`<h3>Steps</h3><ol>
<li>If the plan looks good, reply <b>“OK, go ahead”</b>. If not, correct it in your own words.</li>
<li>While it works, you'll see what it's doing.</li>
<li>When it asks for permission (creating, moving or deleting files, going online), read what it is and decide.</li></ol>
${tip("At first, give permissions one at a time. Once you trust it more, you can give it more freedom.")}
${tip("If it does something you didn't want, press the stop button and explain what you expected.")}${ok("Claude has finished and given you a summary of what it did.")}`},
{t:"Check and undo if needed",s:"5 min · you decide",b:()=>`<p class="what">Open the folder and check the result with your own eyes. If something isn't right, ask:</p>${cb("Undo the last change and explain what you had done and why.")}
${tip("For next time: save the message from step 4 in a note. It works for any task, changing only the first line.")}${ok("the result is how you wanted it, or you've undone what you didn't like.")}`},
{db:1,t:"Claude Code in the terminal",s:"10 min · install it",b:()=>`<p class="what">The terminal is a window where you give your computer instructions by typing. Claude Code works there just like in the app.</p><h3>Steps</h3><ol>
<li><b>Mac:</b> open the <b>Terminal</b> app and paste:</li></ol>${cb("curl -fsSL https://claude.ai/install.sh | bash")}
<ol start="2"><li><b>Windows:</b> open <b>PowerShell</b> and paste:</li></ol>${cb("irm https://claude.ai/install.ps1 | iex")}
<ol start="3"><li>Close the window, open it again and go into your test folder:</li></ol>${cb("cd Desktop/prueba-agente\nclaude")}
<ol start="4"><li>Sign in when asked and paste the same message from step 4.</li></ol>
${tip("Getting “command not found”? Close the terminal completely and open it again.")}${ok("Claude Code answers you inside the terminal.")}`},
{db:1,t:"Four terminal tricks",s:"5 min · safely",b:()=>`<ul>
<li><b>Shift + Tab</b>: switches mode. In <b>plan mode</b>, Claude only suggests and doesn't touch anything.</li>
<li><b>/rewind</b> (or press <b>Esc</b> twice): goes back to an earlier point and undoes the changes.</li>
<li><b>/init</b>: Claude creates a CLAUDE.md file with notes about your project, which it reads every time you come back.</li>
<li><b>/help</b>: everything you can do.</li></ul>
${ok("you've tried plan mode and you know how to undo.")}`}
,
{x:1,t:"Agents working as a team",s:"Optional · next level",b:()=>`<p class="what">On big tasks, Claude can share the work between several helpers, called <b>subagents</b>: one researches, another writes and another reviews. In Claude Code you can create your own with <b>/agents</b>.</p>
${tip("Before getting here, do several small tasks with a single agent. That way you'll know what to ask for and how to check it.")}`},
{x:1,t:"Whole recipes with one command",s:"Optional · the AMRI plugin",b:()=>`<p class="what">With Claude Code you can install the <a href="../plugin.html">AMRI plugin</a>. Every recipe on this site becomes a command, and Claude does it with you from start to finish.</p>${cb("/amri:chef a website for my yoga studio with bookings")}`},
{x:1,t:"House rules",s:"Always · safety",b:()=>`<ul>
<li>Only give it access to the folder it needs.</li>
<li>Never type passwords or bank details to it.</li>
<li>Watch out for traps: a website or document can hide instructions meant to trick Claude. If it does something you didn't ask for, stop it.</li>
<li>Before publishing, sending or deleting anything, check it yourself.</li></ul>`},
{x:1,t:"If something doesn't work",s:"Always · check this",b:()=>`<ul>
<li><b>I can't see Cowork or Code</b>: update the app and check your plan is a paid one.</li>
<li><b>It stops halfway</b>: write “carry on where you left off”.</li>
<li><b>It does more than I asked</b>: start again asking for the plan first and say what it mustn't touch.</li></ul>`}
]}};

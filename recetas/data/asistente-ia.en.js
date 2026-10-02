(window.RECIPE=window.RECIPE||{}).en={
title:"Recipe: your personal AI assistant",
meta:["⏱ About 20 min","👩‍🍳 No coding needed","💶 €0 to get started","🍽 Result: a helper that knows you"],
ing:"Ingredients (all free)",
q:"What do you want it for?",
ph:"Describe how it would help you. Example: answering customer emails for my bike shop and preparing quotes",
yn:"Does it need to know your documents (catalogue, notes, rules…)?",
yntip:"If in doubt, choose “Yes”: we'll show you how to give it your documents. If you don't need them, you can skip that step.",
fin:"Your assistant knows you now. Every time you open a chat inside its project, it will remember your instructions. Below you'll find two extras: connecting it to your apps and keeping it up to date.",
R:{key:"receta-asis",def:"trabajo",empty:"[write what you want it for, above]",
apps:{
 trabajo:{n:"Email & work",db:false,d:"answer emails, prepare meetings and summarise long documents for my job"},
 estudios:{n:"Studying",db:true,d:"study my notes: make summaries, quiz questions and explain what I don't understand"},
 negocio:{n:"My business",db:true,d:"answer customer questions about my business using my prices, opening hours and terms"},
 contenido:{n:"Writing content",db:false,d:"write social media posts and newsletters in my own style"},
 personal:{n:"Personal organisation",db:false,d:"organise my week, plan meals and make shopping lists"},
 otra:{n:"✏️ Another idea",db:true,d:""}
},
ing:()=>`<li><b>Claude</b>: the chef. It will be your assistant.</li><li><b>Claude Projects</b>: the recipe book. It keeps its instructions forever.</li>${DB()?`<li><b>Your documents</b>: the pantry. What your assistant needs to know.</li>`:""}<li><b>A note on your phone</b>: the notebook. To save your best prompts.</li>`,
steps:[
{t:"Get your ingredients ready",s:"3 min · create the account",b:()=>`<p class="what">You only need a free Claude account${DB()?" and your documents at hand":""}.</p><h3>Steps</h3><ol>
<li>Create your account on <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>.</li>
${DB()?"<li>Gather the documents it will use (PDF, Word or text) in one folder. A few clear ones are better than many.</li>":""}
<li>Open an empty note on your phone or computer.</li></ol>${ok("you're signed in to Claude"+(DB()?" and your documents are in a folder.":"."))}`},
{t:"Let Claude interview you",s:"5 min · your personal profile",b:()=>`<p class="what">Instead of writing the instructions yourself, let Claude ask you questions and write them for you.</p><h3>Steps</h3><ol><li>Open a new chat in Claude.</li><li>Copy this message and paste it:</li></ol>${cb(`I want you to be my personal assistant to ${D()}.\n\nAsk me 8 questions, one at a time, to get to know me: what I do, how I write, which tasks I repeat and how I like to receive answers. When you're done, write me clear instructions so you always behave that way.`)}
${det("What does each part of the message mean?",["<b>“I want you to be…”</b>: your assistant's job. Change it to yours.","<b>“One at a time”</b>: that makes it a conversation, not a form.","<b>“Write me instructions”</b>: the result you'll save in the next step."])}
${tip("Answer naturally, as if you were talking to someone new on your team. The more specific, the better.")}${ok("Claude has given you a text with your personal instructions.")}`},
{t:"Give it its own kitchen",s:"5 min · the project",b:()=>`<p class="what">A <b>Project</b> is a space in Claude with its own instructions. Every chat you open inside it will remember them.</p><h3>Steps</h3><ol>
<li>In Claude's side menu, click <b>Projects → Create project</b>.</li>
<li>Give it a name, for example <b>My assistant</b>.</li>
<li>Click <b>Project instructions</b> and paste the text from the previous step.</li></ol>
${det("I can't see the Projects option",["Your plan may have limits. Alternative: keep the instructions in your phone note.","Paste them at the start of every new chat. It works the same, it's just one more step."])}${ok("you have a project with your instructions saved.")}`},
{db:1,t:"Stock the pantry",s:"5 min · upload your documents",b:()=>`<p class="what">Your assistant will answer using your documents, not made-up information.</p><h3>Steps</h3><ol>
<li>Inside the project, click <b>Add content</b> (or the <b>+</b> files button).</li>
<li>Upload your documents.</li>
<li>Open a chat inside the project and paste:</li></ol>${cb("Read the project documents and tell me in 5 points what you've understood. If anything is confusing or missing, tell me. From now on, if you can't find something in my documents, say so instead of making it up.")}
${tip("⚠️ Don't upload passwords, bank details or other people's personal data.")}${ok("Claude summarises your documents correctly.")}`},
{t:"Try it with a real task",s:"5 min · first test",b:()=>`<p class="what">Give it something you'd really do today. That way you'll see whether it needs tweaks.</p><h3>Example</h3>${cb(`${APPS[app].db?"Using my documents, ":""}help me with this: [paste a real email, question or task here]. Answer the way I would.`)}
${tip("If you don't like something, tell it: “shorter”, “more formal”, “no emojis”. Then ask: “add this to your instructions”.")}${ok("the answer works for you almost without changes.")}`},
{t:"Save your shortcuts",s:"3 min · your prompt notebook",b:()=>`<p class="what">The messages you repeat often are gold. Save them so you can paste them in a second.</p><h3>Steps</h3><ol><li>Copy the messages that worked best into your note.</li><li>Ask Claude to suggest more:</li></ol>${cb("Based on what you know about me, give me 5 short messages I could use with you every day to save time. Make them ready to copy.")}${ok("you have at least 5 shortcuts saved in your note.")}`},
{x:1,t:"Connect it to your apps",s:"10 min · optional",b:()=>`<p class="what">With <b>connectors</b>, Claude can read your email, your calendar or your Google documents without copying and pasting.</p><h3>Steps</h3><ol>
<li>In Claude, go to <b>Customize → Connectors</b>.</li>
<li>Click <b>Connect</b> next to the app you want and authorise it.</li>
<li>Try it: “What's on my calendar tomorrow?”.</li></ol>
${tip("Only connect what you need. You can disconnect any app whenever you like from the same place.")}`},
{x:1,t:"Keep it up to date",s:"Always · routine",b:()=>`<p class="what">An assistant gets better with you. Give it five minutes a month.</p><ol>
<li><b>Every month:</b> review its instructions and remove what no longer applies.</li>
${DB()?"<li><b>When something changes</b> (prices, syllabus, rules): replace the old document with the new one.</li>":""}
<li><b>If it keeps making the same mistake:</b> add a rule to the instructions.</li></ol>${cb("Review your instructions and suggest improvements based on our latest conversations. Tell me what you'd change and why.")}
${det("💡 Ideas to keep cooking",["A second project just for one client or subject.","Email templates for typical situations.","A weekly summary of your pending tasks."])}`}
]}};

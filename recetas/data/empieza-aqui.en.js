(window.RECIPE=window.RECIPE||{}).en={
title:"Recipe: start here, meet Claude",
meta:["⏱ About 15 min", "👩‍🍳 Very easy", "💶 Free", "🍽 Result: your first conversation and a map of everything else"],
ing:"Ingredients (all free)",
q:"What would you like to try first?",
ph:"Say it in your own words. Example: help me write a letter to my landlord",
yn:"Do you also want Claude on your phone or computer?",
yntip:"If in doubt, choose “Yes”. If you'd rather not install anything, it works just as well in the browser.",
fin:"You've met Claude and you know what everything is. From here, pick any recipe you like: each one works on its own.",
R:{key:"receta-empieza",def:"escribir",empty:"[write what you want to try, above]",
apps:{
 escribir:{n:"Write and summarise",db:true,d:"write a difficult email and summarise a long text"},
 aprender:{n:"Learn something",db:true,d:"understand a topic I find hard, with simple examples and questions to check I've got it"},
 organizar:{n:"Plan my week",db:true,d:"plan my week with my tasks, my appointments and some free time"},
 ideas:{n:"Get ideas",db:true,d:"give me ideas for a personal project and help me pick the best one"},
 otra:{n:"✏️ Another idea",db:true,d:""}
},
ing:()=>`<li><b>Claude</b>: your helper. It understands what you ask in everyday words.</li><li><b>An email address</b>: to create your account.</li>${DB()?`<li><b>Your phone or computer</b>: to take Claude with you.</li>`:""}<li><b>Something real to do</b>: you'll learn more with a real task than with a test.</li>`,
steps:[
{t:"Create your account",s:"3 min · free",b:()=>`<p class="what">Claude is an artificial intelligence: a program you talk to like a person, which helps you write, think, learn and create.</p><h3>Steps</h3><ol>
<li>Go to <a href="https://claude.ai" target="_blank" rel="noopener">claude.ai</a>.</li>
<li>Create your account with your email or your Google account.</li>
<li>Choose the free plan. No card needed.</li></ol>
${tip("The free plan has a message limit. If you reach it, wait a few hours and you can carry on. It's plenty for learning.")}${ok("you see a box asking how it can help you.")}`},
{db:1,t:"Take it with you",s:"3 min · phone and computer",b:()=>`<p class="what">Your conversations are the same everywhere: start on your phone and carry on at your computer.</p><h3>Steps</h3><ol>
<li><b>Phone:</b> search for “Claude” in the App Store or Google Play. Check the developer is <b>Anthropic</b>.</li>
<li><b>Computer:</b> download the app from <a href="https://claude.ai/download" target="_blank" rel="noopener">claude.ai/download</a>.</li>
<li>Sign in with the same account.</li></ol>
${tip("On your phone you can talk to it out loud: tap the microphone.")}${ok("you see your conversations in the app.")}`},
{t:"Your first conversation",s:"5 min · give it a go",b:()=>`<p class="what">Talk to it like a person. You don't need any special words.</p><h3>Copy this message and paste it</h3>${cb(`Hi Claude. This is my first time using you. I'd like you to help me ${D()}.\n\nBefore you start, ask me 3 short questions so you understand what I need. Then do it and explain what you've done.`)}
${det("Tips so it understands you better",["Tell it <b>who</b> it's for and <b>what</b> it's for.","Ask for the shape you want: “in 5 points”, “in a table”, “shorter”.","If you don't like something, say so: “friendlier”, “no emojis”. You can ask for changes as many times as you like."])}
${ok("Claude asked you questions and gave you a result you can use.")}`},
{t:"Check what matters",s:"3 min · use your head",b:()=>`<p class="what">Claude gets a lot right, but sometimes it's wrong and sounds very sure. You have the final say.</p><h3>Ask it</h3>${cb("Is there anything in your answer you're not sure about? Tell me what I should double-check.")}
${tip("For health, money or legal topics, always compare with a reliable source or a professional.")}
${tip("⚠️ Don't give it passwords, card numbers or other people's private data.")}${ok("you know which parts of the answer to double-check.")}`},
{t:"The map of Claude",s:"5 min · six words",b:()=>`<p class="what">On AMRI you'll see six words again and again. Here's what they mean, without jargon:</p><ul>
<li><b>💬 Chat</b>: a conversation with Claude. It's what you just did.</li>
<li><b>📁 Project</b>: a folder with your instructions and documents. Every chat you open inside it takes them into account. <a href="asistente-ia.html">Recipe: your personal assistant</a>.</li>
<li><b>🔌 Connector</b>: permission for Claude to use another app for you, like Gmail, Canva or Notion. You can remove it whenever you want. <a href="gmail-calendario.html">Recipe: Gmail and Calendar</a>.</li>
<li><b>📖 Skill</b>: a card with your way of doing something. Claude uses it on its own when it fits. <a href="skills-propias.html">Recipe: teach it your method</a>.</li>
<li><b>📦 Plugin</b>: a bundle of Skills (and sometimes connectors) you install in one go. <a href="../plugin.html">The AMRI plugin</a>.</li>
<li><b>🤖 Agent</b>: Claude working on its own on a task with several steps. It makes a plan, carries it out, checks the result and asks your permission before anything important. <a href="primer-agente.html">Recipe: your first agent</a>.</li></ul>
${tip("No need to learn it by heart: in the recipes, underlined words come with an explanation.")}${ok("you could explain in your own words what a connector and an agent are.")}`},
{t:"Choose your path",s:"2 min · what next?",b:()=>`<p class="what">Every recipe works on its own. Choose by what you want to achieve:</p><ul>
<li>Claude knowing you and helping every day → <a href="asistente-ia.html">Your personal assistant</a>.</li>
<li>Claude working inside your apps → <a href="gmail-calendario.html">Gmail and Calendar</a>, <a href="canva-diseno.html">Canva</a> or <a href="notion-cerebro.html">Notion</a>.</li>
<li>Making something for the internet → <a href="webapp-gratis.html">Your website, online and free</a>.</li>
<li>Long tasks done for you → <a href="primer-agente.html">Your first agent</a>.</li>
<li>Got a project in mind? Describe it in <a href="../index.html#construir">“What do you want to build?”</a> and we'll suggest the recipes in order.</li></ul>
${ok("you've chosen your next recipe.")}`}
,
{x:1,t:"Where to use Claude",s:"Optional · each place, what for",b:()=>`<ul>
<li><b>Web (claude.ai)</b>: all the basics, from any browser.</li>
<li><b>Phone</b>: chats, photos and voice when you're away from your computer.</li>
<li><b>Desktop app</b>: the same as the web plus Cowork and Claude Code, so Claude can work with the files on your computer.</li>
<li><b>Claude in Chrome</b>: an extension that lets Claude use websites for you. <a href="navegador-chrome.html">Recipe</a>.</li>
<li><b>Claude Code</b>: for building websites and programs on your computer, from the desktop app or the terminal. <a href="primer-agente.html">Recipe</a>.</li></ul>`},
{x:1,t:"Plans, no small print",s:"Optional · what's free",b:()=>`<ul>
<li><b>Free</b>: chats, projects and most of the basic AMRI recipes. It has a message limit.</li>
<li><b>Paid (Pro or higher)</b>: more messages and features like Claude Code, Cowork or the Chrome extension.</li>
<li>Some features, like certain connectors or Skills, depend on your plan. If you don't see them, the recipe gives you another way.</li></ul>
${tip("Prices change: check them at <a href=\"https://claude.ai/pricing\" target=\"_blank\" rel=\"noopener\">claude.ai/pricing</a>. Every AMRI card shows whether a recipe is free, depends on your plan or is paid.")}`},
{x:1,t:"Your privacy",s:"Always · settings",b:()=>`<ul>
<li>In Claude's settings, under <b>Privacy</b>, you decide whether your conversations can be used to improve Claude.</li>
<li>You can delete any conversation whenever you want.</li>
<li>Simple rule: don't write anything you wouldn't put in an email to someone you trust.</li></ul>`}
]}};

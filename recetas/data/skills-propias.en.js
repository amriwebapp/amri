(window.RECIPE=window.RECIPE||{}).en={
title:"Recipe: teach it your method with Skills",
meta:["⏱ About 30 min","👩‍🍳 Medium difficulty","💶 Free if your Claude plan includes Skills","🍽 Result: a Skill Claude uses on its own"],
ing:"Ingredients",
q:"What do you want to teach it?",
ph:"Describe the task you repeat. Example: writing the minutes of my association's meetings, always in the same format",
yn:"Do you have an example or template you already use?",
yntip:"If in doubt, choose “Yes”: a good example is worth a thousand explanations.",
fin:"Claude now knows your method. From now on it will apply it by itself whenever it's needed. And if you like, share it: it could become an AMRI recipe.",
R:{key:"receta-skills",def:"informes",empty:"[describe your method above]",
apps:{
 informes:{n:"Reports in my format",db:true,d:"writing monthly reports always with the same structure, tone and charts"},
 correos:{n:"Emails in my style",db:true,d:"replying to customer emails with my tone, my signatures and my usual answers"},
 fichas:{n:"Product sheets",db:true,d:"writing product sheets for my shop with title, description, benefits and dimensions"},
 clases:{n:"Class materials",db:false,d:"preparing worksheets for my students with level, objectives and answers"},
 otra:{n:"✏️ Another idea",db:true,d:""}
},
ing:()=>`<li><b>Claude</b>: the diligent student.</li><li><b>A Skill</b>: your written recipe. A folder with a <b>SKILL.md</b> file that explains how to do something.</li>${DB()?`<li><b>Your example or template</b>: the sample dish.</li>`:""}<li><b>Code execution turned on</b>: the worktop. Skills need it.</li>`,
steps:[
{t:"Understand what a Skill is",s:"3 min · the idea",b:()=>`<p class="what">A Skill is like a recipe card that Claude keeps in its drawer. It doesn't use it all the time: it only takes it out when the task matches its description.</p><ul><li><b>Name</b>: what it's called.</li><li><b>Description</b>: when to use it. This is the most important part.</li><li><b>Instructions</b>: the step by step, examples and templates.</li></ul>${ok("you could explain to someone what a Skill is in one sentence.")}`},
{t:"Turn on Skills",s:"2 min · settings",b:()=>`<ol><li>In Claude, open settings and look for <b>Capabilities</b> or <b>Customize → Skills</b>.</li><li>Turn on <b>Code execution</b> if it asks you to.</li><li>Check that the <b>Skills</b> section appears.</li></ol>${tip("Depending on your plan or company, some options may be elsewhere or turned off. Check Claude's help centre if you can't see it.")}${ok("you can see the Skills section.")}`},
{t:"Let Claude interview you",s:"10 min · your method",b:()=>`<p class="what">You know how to do it; Claude knows how to write it down. Let it ask you questions.</p>${cb(`I want to create a Skill for ${D()}.\n\nInterview me with questions, one at a time, to understand my method: when I use it, what steps I follow, which mistakes I avoid and how I know it's done well. Max 8 questions.`)}${ok("you've answered all the questions.")}`},
{db:1,t:"Give it your sample dish",s:"3 min · the example",b:()=>`<ol><li>Attach your example or template to the chat (📎).</li><li>Write:</li></ol>${cb("This is an example of how I like it to turn out. Include it in the Skill as a reference and explain what's good about it.")}${tip("Remove personal or confidential data from the example before uploading it.")}${ok("Claude has understood your example.")}`},
{t:"Let Claude write the Skill",s:"5 min · drafting",b:()=>`${cb("Now write the Skill. Create a folder with a SKILL.md file containing: a short name, a clear description of WHEN to use it, and step-by-step instructions. If needed, add templates or examples in separate files. Package it as a .zip so I can download it.")}
${det("A good description…",["Says when to use it: “Use it when the user asks for meeting minutes”.","Uses the words you'd use when asking for it.","Is short: one or two sentences."])}${ok("you have a .zip file downloaded.")}`},
{t:"Install it",s:"2 min · into the drawer",b:()=>`<ol><li>Go back to the <b>Skills</b> section in settings.</li><li>Click <b>Upload skill</b> and choose your .zip.</li><li>Check that it appears enabled.</li></ol>${ok("your Skill appears in the list.")}`},
{t:"Test it without naming it",s:"5 min · the exam",b:()=>`<p class="what">The acid test: ask for the task without mentioning the Skill.</p>${cb("[Ask for the task the way you normally would, without saying “use the Skill”]")}${tip("If Claude doesn't use it, improve the description: add the exact words you use when asking for it.")}${ok("Claude applies your method without you reminding it.")}`},
{x:1,t:"Share it with AMRI",s:"Optional · open source",b:()=>`<p class="what">If your Skill could help other people, add it to the platform: AMRI is open. Send us the .zip at <a href="mailto:contact@amri.es">contact@amri.es</a> with one sentence about what it's for. If you use GitHub, you can also open a proposal in the repository.</p>`},
{x:1,t:"If something doesn't work",s:"Always · check this",b:()=>`<ol><li><b>It won't install</b>: the .zip must contain the folder with the SKILL.md inside.</li><li><b>It isn't used on its own</b>: the description is too vague. Make it more specific.</li><li><b>It does strange things</b>: ask Claude to review the Skill and simplify it.</li></ol>`}
]}};

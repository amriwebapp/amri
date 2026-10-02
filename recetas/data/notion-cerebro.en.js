(window.RECIPE=window.RECIPE||{}).en={
title:"Recipe: your second brain in Notion",
meta:["⏱ About 30 min","👩‍🍳 Easy","💶 €0 (free Notion)","🍽 Result: a tidy Notion that sums itself up"],
ing:"Ingredients (all free)",
q:"What do you want to organise?",
ph:"Describe what you want to organise. Example: ideas for my thesis, with sources, quotes and a deadline calendar",
yn:"Do you already have pages in Notion with content?",
yntip:"If in doubt, choose “Yes”: Claude will look at what you have before suggesting anything. If your Notion is empty, it works too.",
fin:"Your Notion now has a clear structure and a weekly routine. Every Friday, one message and you're done. Below you'll find safety extras and ideas.",
R:{key:"receta-notion",def:"notas",empty:"[describe what you want to organise above]",
apps:{
 notas:{n:"Loose notes",db:true,d:"all my loose notes, ideas and saved links, grouped by topic"},
 proyectos:{n:"Projects & tasks",db:true,d:"my projects with their tasks, deadlines and status"},
 lecturas:{n:"Books & reading",db:false,d:"the books and articles I read, with a summary, rating and favourite quotes"},
 cocina:{n:"Cooking recipes",db:false,d:"my cooking recipes with ingredients, time, difficulty and photos"},
 otra:{n:"✏️ Another idea",db:true,d:""}
},
ing:()=>`<li><b>Notion</b>: the pantry. Where you keep everything. Free plan.</li><li><b>Claude</b>: the head chef. It organises, summarises and suggests.</li><li><b>Notion connector</b>: the pantry key. It lets Claude read and write pages.</li>`,
steps:[
{t:"Get your ingredients ready",s:"3 min · accounts",b:()=>`<p class="what">You need a Notion account and a Claude account.</p><ol><li>Sign in to <a href="https://www.notion.so" target="_blank" rel="noopener">Notion</a> (free plan).</li><li>Sign in to <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>.</li></ol>${ok("you can sign in to both.")}`},
{t:"Connect Notion to Claude",s:"3 min · the connector",b:()=>`<p class="what">A connector is a permission for Claude to use Notion for you. You turn it on once and it stays saved.</p><h3>Steps</h3><ol>
<li>In Claude (web or desktop app) open <b>Customize → Connectors</b>.</li>
<li>Click <b>Browse connectors</b>, search for <b>“Notion”</b> and click <b>Connect</b>.</li>
<li>A Notion window opens: sign in and click <b>Allow</b>.</li>
<li>In a new chat, click the <b>+</b> button → <b>Connectors</b> and check that Notion is switched on.</li></ol><p>Notion will ask which workspace to give access to. Choose yours.</p>${tip("Claude's menus change names now and then. If you can't find it, search for “connectors” in <a href='https://support.claude.com' target='_blank' rel='noopener'>Claude's help centre</a>.")}${ok("Notion shows as enabled in your connectors.")}`},
{db:1,t:"Let Claude explore your Notion",s:"5 min · inventory",b:()=>`<p class="what">Before tidying up, you need to know what's in the pantry.</p>${cb(`Search my Notion for everything related to ${D()}. Give me a summary of how it's organised now and what problems you see (duplicates, empty pages, unsorted things).\n\nDon't change anything yet.`)}${tip("“Don't change anything yet” is your best friend. Look first, touch later.")}${ok("Claude describes what you have.")}`},
{t:"Design the structure",s:"5 min · the plan",b:()=>`<p class="what">A Notion <b>database</b> is like a pretty spreadsheet: each row is a page.</p>${cb(`Suggest a Notion database to organise ${D()}.\n\nTell me: the properties (columns) and their type, 2 or 3 useful views (table, board, calendar) and a template for new pages. Explain it briefly and wait for my OK.`)}${ok("you have a proposal that you understand and like.")}`},
{t:"Build it in your Notion",s:"5 min · set up",b:()=>`<p class="what">Now Claude builds it for you.</p>${cb(`Perfect. Create a page in my Notion called “My second brain” with that database.${DB()?" Then move or copy my existing pages that fit into it, and tell me which ones you touched.":" Add 3 examples so I can see how it looks."}`)}
${tip("If Claude can't create something (for example, a type of view), it'll tell you how to do it by hand in two clicks.")}${ok("you open Notion and see the new page with its database.")}`},
{t:"Your weekly review",s:"5 min · the routine",b:()=>`<p class="what">The magic is in repeating it. Every Friday, one message:</p>${cb("Review what I've added or changed this week in “My second brain”. Write me a 5-line summary, 3 priorities for next week and anything that's being forgotten. Save it as a new page called “Week of [date]”.")}${ok("you have your first weekly summary saved in Notion.")}`},
{x:1,t:"Look after your pantry",s:"Always · safety",b:()=>`<ol><li>Always ask it to <b>“show me before deleting”</b>.</li><li>Don't keep passwords or bank details in Notion.</li><li>Notion keeps each page's history: if something goes wrong, you can go back.</li></ol>`},
{x:1,t:"If something doesn't work",s:"Always · check this",b:()=>`<ol><li><b>Claude can't find a page</b>: check the workspace has access in the connector.</li><li><b>Half-finished results</b>: ask for smaller chunks (“only the notes from March”).</li></ol>${det("💡 Ideas to keep going",["A journal with daily questions.","A simple customer CRM.","A study plan for your exams."])}`}
]}};

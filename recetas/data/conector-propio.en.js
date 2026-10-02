(window.RECIPE=window.RECIPE||{}).en={
title:"Recipe: cook your own MCP connector",
meta:["⏱ About 1 hour","👩‍🍳 Advanced","💶 €0","🍽 Result: Claude using your own data"],
ing:"Ingredients (all free)",
q:"What do you want Claude to be able to use?",
ph:"Describe your data or app. Example: an Excel file with my club's members: name, fee and joining date",
yn:"Is your data in a file on your computer (CSV, Excel, folder)?",
yntip:"If in doubt, choose “Yes”: it's the easiest way to start.",
fin:"You've cooked your own connector: Claude can now use your data with tools you defined. This is exactly what's behind Canva, Notion or Higgsfield.",
R:{key:"receta-mcp",def:"csv",empty:"[describe your data above]",
apps:{
 csv:{n:"My data sheet",db:true,d:"query a spreadsheet (CSV) with my customers: search by name, filter and add up amounts"},
 notas:{n:"My notes folder",db:true,d:"search and read my notes in text files in a folder on my computer"},
 recetas:{n:"My recipe book",db:true,d:"search recipes in my recipe book (a JSON file) by ingredient and time"},
 tiempo:{n:"A public API",db:false,d:"check the weather in any city using the free Open-Meteo API, no key needed"},
 otra:{n:"✏️ Another idea",db:true,d:""}
},
ing:()=>`<li><b>Claude Desktop</b>: the head chef. The desktop app.</li><li><b>Node.js</b>: the stove. A free program to run your connector.</li><li><b>The MCP SDK</b>: the official base recipe for building connectors.</li>${DB()?`<li><b>Your data</b>: the pantry. A file or folder on your computer.</li>`:""}<li><b>A text editor</b>: the knife. Notepad works; VS Code is better.</li>`,
steps:[
{t:"Understand how it works",s:"3 min · the idea",b:()=>`<p class="what">MCP (Model Context Protocol) is a common language for Claude to talk to other apps. A connector is a small program that offers <b>tools</b>.</p><ul><li>Each tool has a <b>name</b>, a <b>description</b> and some <b>inputs</b>.</li><li>Claude reads the descriptions and decides when to use them.</li><li>Your connector does the work and returns the result.</li></ul>${ok("you could explain what an MCP tool is.")}`},
{t:"Get your ingredients ready",s:"10 min · install",b:()=>`<ol><li>Install <a href="https://claude.ai/download" target="_blank" rel="noopener">Claude Desktop</a> and sign in.</li><li>Install <a href="https://nodejs.org" target="_blank" rel="noopener">Node.js</a> (<b>LTS</b> version).</li><li>Create a folder called <b>my-connector</b> in your user folder.</li><li>Open a terminal (Mac: Terminal; Windows: PowerShell) and check:</li></ol>${cb("node --version")}${ok("the terminal replies with a version number.")}`},
{t:"Ask Claude for the code",s:"10 min · the recipe",b:()=>`<p class="what">You describe; Claude programs.</p>${cb(`I want to create my own MCP server in Node.js (simple JavaScript, no TypeScript) using the official @modelcontextprotocol/sdk SDK, with stdio transport.\n\nGoal: ${D()}.\n\nGive me:\n1) package.json\n2) server.js with 2 or 3 small tools, with very clear descriptions\n3) the exact commands to install it\n4) the block for claude_desktop_config.json\n\nExplain each file in one sentence. I'm a beginner.`)}
${det("Why only a few tools?",["Each tool does one thing well.","Clear descriptions = Claude gets it right about when to use them.","You can always add more later."])}${ok("Claude has given you the files and instructions.")}`},
{t:"Save and install",s:"5 min · set up",b:()=>`<ol><li>Save <b>package.json</b> and <b>server.js</b> inside <b>my-connector</b>.</li><li>In the terminal, go into the folder and install:</li></ol>${cb("cd my-connector\nnpm install")}${tip("If you see an error in red, copy all of it and paste it to Claude. It's the fastest way to fix it.")}${ok("a node_modules folder appears inside my-connector.")}`},
{db:1,t:"Put your data in the pantry",s:"3 min · the data",b:()=>`<ol><li>Copy your data file into <b>my-connector</b> (for example, <b>data.csv</b>).</li><li>If it's an Excel file, save it as <b>CSV</b> (File → Save as → CSV).</li><li>Check the name matches the one server.js uses.</li></ol>${tip("Start with a copy of your data, not the original.")}${ok("the file is in the folder with the right name.")}`},
{t:"Connect it to Claude Desktop",s:"5 min · the plug",b:()=>`<ol><li>In Claude Desktop: <b>Settings → Developer → Edit Config</b>.</li><li>Open <b>claude_desktop_config.json</b> and add your connector (change the path to your full path):</li></ol>${cb(`{\n  "mcpServers": {\n    "my-connector": {\n      "command": "node",\n      "args": ["/full/path/to/my-connector/server.js"]\n    }\n  }\n}`)}<ol start="3"><li>If there were other connectors already, add only the <b>“my-connector”</b> block inside <b>mcpServers</b>.</li><li>Save and <b>quit Claude Desktop completely</b>. Open it again.</li></ol>
${det("How do I find the full path?",["Mac: drag server.js into the Terminal and it's typed for you.","Windows: hold Shift, right-click server.js → “Copy as path”. Use double backslashes \\\\ or forward slashes /."])}${ok("in a new chat, your connector appears in the tools list.")}`},
{t:"Test it",s:"5 min · try it out",b:()=>`${cb("Which tools do you have from “my-connector”? Use one of them with a simple example and explain what happened.")}${ok("Claude uses your tool and gives you a result with your data.")}`},
{x:1,t:"Debug it with the Inspector",s:"Optional · pro level",b:()=>`<p class="what">The official MCP Inspector lets you test the tools without Claude.</p>${cb("npx @modelcontextprotocol/inspector node server.js")}${tip("A local web page opens where you can see each tool and try it by hand.")}`},
{x:1,t:"Take it online",s:"Optional · next level",b:()=>`<p class="what">A local connector only works on your computer. To use it from the web or your phone, you need to publish it as a <b>remote connector</b> (for example, on Cloudflare Workers) and add it in <b>Customize → Connectors → Add custom connector</b>, like we did with Higgsfield.</p>${cb("I want to turn my MCP server into a remote connector on Cloudflare Workers. Explain the steps for beginners and what I should keep in mind for security.")}`},
{x:1,t:"Security",s:"Always · important",b:()=>`<ol><li>Start with <b>read-only</b> tools.</li><li>Don't put passwords or keys inside the code: use environment variables.</li><li>Only install connectors from sources you trust.</li></ol>`}
]}};

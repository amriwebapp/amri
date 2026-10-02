(window.RECIPE=window.RECIPE||{}).en={
title:"Recipe: edit video with Claude and After Effects",
meta:["⏱ About 45 min","👩‍🍳 Medium difficulty","💶 After Effects is paid","🍽 Result: an animated MP4 video"],
ing:"Ingredients",
q:"What do you want to make?",
ph:"Describe the video in your own words. Example: a 5-second intro for my cooking channel with the name in big letters",
yn:"Will you use your own logo or one of your clips?",
yntip:"If in doubt, choose “Yes”: we'll show you how to import your material. If you don't end up using it, it works just the same.",
fin:"Your video is exported as MP4. Save the project and the prompt you gave Claude: they're your recipe to repeat it with other text. Below you'll find extras: a reusable template, what to do if something fails and how to use material with permission.",
R:{key:"receta-ae",def:"intro",empty:"[describe your video above]",
apps:{
 intro:{n:"Logo intro",db:true,d:"a 5-second intro where my logo appears with a shine effect, in horizontal 16:9 format"},
 titulos:{n:"Titles & lower thirds",db:false,d:"an animated title saying “My channel” and a lower third with my name and role that appears bottom left, to put over my videos"},
 vertical:{n:"Vertical video",db:true,d:"a 15-second vertical 9:16 video with one of my clips in the background and big animated text on top"},
 anuncio:{n:"Product ad",db:false,d:"a 10-second ad with a coloured background, my product name sliding in with motion and the price appearing afterwards"},
 otra:{n:"✏️ Another idea",db:true,d:""}
},
ing:()=>`<li><b>Claude Desktop</b>: the head chef. It writes the orders for After Effects.</li><li><b>After Effects</b>: the oven. Where the animation is made. It's paid (Adobe offers a free trial).</li><li><b>Node.js</b>: the gas valve. A free program needed to connect everything.</li><li><b>After Effects MCP connector</b>: the waiter. It carries Claude's orders to the oven. Free, made by the community.</li><li><b>Adobe Media Encoder</b>: plating up. It exports your MP4 (included with the Adobe subscription).</li>`,
steps:[
{t:"Get your ingredients ready",s:"10 min · install programs",b:()=>`<p class="what">You need three programs on the same computer. The connector only works if everything is on the same machine.</p><h3>Steps</h3><ol>
<li>Install <a href="https://claude.ai/download" target="_blank" rel="noopener">Claude Desktop</a> and sign in.</li>
<li>Install <b>After Effects</b> (2024, 2025 or 2026) from Creative Cloud. If you don't have it, Adobe offers a <a href="https://www.adobe.com/products/aftereffects.html" target="_blank" rel="noopener">free trial</a>.</li>
<li>Install <a href="https://nodejs.org" target="_blank" rel="noopener">Node.js</a>: download the <b>LTS</b> version and check it's <b>24 or later</b>.</li>
<li>Open a terminal (Mac: <b>Terminal</b>; Windows: <b>PowerShell</b>) and type this to check:</li></ol>${cb("node --version")}${ok("the terminal replies with a number starting with v24 or higher.")}`},
{t:"Give After Effects permission",s:"2 min · one setting",b:()=>`<p class="what">For Claude to move things inside the program, After Effects has to allow scripts.</p><h3>Steps</h3><ol>
<li>Open After Effects.</li>
<li>Windows: <b>Edit → Preferences → Scripting &amp; Expressions</b>. Mac: <b>After Effects → Settings → Scripting &amp; Expressions</b>.</li>
<li>Tick <b>“Allow Scripts to Write Files and Access Network”</b> and click <b>OK</b>.</li></ol>${tip("The connector project may need another setting: check its "+`<a href="https://github.com/kumoproductions/mcp-aftereffects" target="_blank" rel="noopener">official page</a>.`)}${ok("you've ticked the box and saved the preferences.")}`},
{t:"Connect Claude to After Effects",s:"10 min · the config file",b:()=>`<p class="what">Here you tell Claude Desktop that the connector exists. It's the most technical step, but you only do it once.</p><h3>Steps</h3><ol>
<li>In Claude Desktop open <b>Settings → Developer → Edit Config</b>. A folder opens with the file <b>claude_desktop_config.json</b>.</li>
<li>Open it with Notepad (Windows) or TextEdit (Mac).</li>
<li>If the file is empty, paste this as is:</li></ol>${cb(`{
  "mcpServers": {
    "aftereffects": {
      "command": "npx",
      "args": ["-y", "@kumoproductions/mcp-aftereffects"]
    }
  }
}`)}<ol start="4"><li>If the file already had other connectors, don't delete them: just add the <b>“aftereffects”</b> block inside the existing <b>mcpServers</b> list.</li><li>Save, <b>quit Claude Desktop completely</b> and open it again.</li></ol>
${det("What does each part mean?",["<b>mcpServers</b>: Claude's list of connectors.","<b>npx</b>: a Node.js command that downloads and runs the connector by itself.","<b>@kumoproductions/mcp-aftereffects</b>: the connector's name."])}
${tip("It's a community project, not by Adobe or Anthropic. Use it with your own projects and always keep a backup before experimenting. It may change over time: if something doesn't match, check its GitHub page.")}${ok("when you open a new chat in Claude Desktop there's no error and the connector appears among the tools.")}`},
{t:"Open After Effects and save the project",s:"5 min · the working project",b:()=>`<p class="what">The connector works on the project you have open, so it has to exist first.</p><h3>Steps</h3><ol>
<li>Open After Effects.</li>
<li><b>File → New → New Project</b>.</li>
<li><b>File → Save As</b> and save it with a clear name in a folder, for example <b>my-video.aep</b>.</li>
<li>If you're using an existing project, make a <b>copy</b> first and work on the copy.</li></ol>${ok("After Effects is open and the project has a name.")}`},
{db:1,t:"Prepare your material",s:"5 min · logo or clip",b:()=>`<p class="what">Since your video uses your own material, it has to be in the project so Claude can use it.</p><h3>Steps</h3><ol>
<li>Put your logo (ideally a <b>PNG with a transparent background</b>) or your clip in a folder with a simple name, no spaces or accents.</li>
<li>In After Effects: <b>File → Import → File…</b> and choose your files.</li>
<li>Check they appear in the <b>Project</b> panel.</li></ol>${tip("If you don't have a transparent logo, see the recipe "+`<a href="logo-ia.html">Design a logo with AI</a>.`)}${ok("your logo or clip is visible in the Project panel.")}`},
{t:"Ask Claude for the video",s:"10 min · the prompt",b:()=>`<p class="what">Now Claude creates the animation directly in your After Effects. You'll watch the layers appear.</p><h3>Steps</h3><ol><li>Open a new chat in Claude Desktop.</li><li>Copy this message and paste it:</li></ol>${cb(`You have access to my After Effects through the connector. I want to create ${D()}.\n\nBefore touching anything, tell me in short steps what you'll do. Then create it in my open project: a composition with the right size and duration, clearly named layers and smooth animations with keyframes.${DB()?" Use the material I've imported into the Project panel.":""} When you're done, tell me what you created and how to preview it.`)}
${det("What does each part of the message mean?",["<b>“I want to create…”</b>: your idea. Change it to yours.","<b>Tell me the plan first</b>: so you can correct it before it touches your project.","<b>Clearly named layers</b>: easy to retouch by hand later.","<b>Keyframes</b>: the points where something changes (position, size, opacity) to create motion."])}
${tip("Start with something short and simple. A 5-second video that works is better than a one-minute video full of mistakes.")}${ok("there's a new composition with layers in After Effects and Claude has explained what it did.")}`},
{t:"Preview and adjust",s:"10 min · polish the result",b:()=>`<p class="what">It's almost never perfect the first time. Watching it and asking for small changes is what gets good results.</p><h3>Steps</h3><ol>
<li>Double-click the new composition in the <b>Project</b> panel.</li>
<li>Press the <b>spacebar</b> to play it.</li>
<li>Note what you don't like and ask Claude, <b>one change at a time</b>:</li></ol>${cb("Make the title's entrance slower and smoother, and change the text colour to [your colour]. Change only that and leave everything else.")}
${tip("If a change goes wrong, undo with <b>Ctrl+Z</b> (Windows) or <b>Cmd+Z</b> (Mac) in After Effects.")}${ok("when it plays, the motion, text and colours are what you wanted.")}`},
{t:"Export your video to MP4",s:"5 min · plating up",b:()=>`<p class="what">To get a file you can upload anywhere, export it with Adobe Media Encoder.</p><h3>Steps</h3><ol>
<li>Select the composition.</li>
<li>Menu <b>Composition → Add to Adobe Media Encoder Queue</b>.</li>
<li>In Media Encoder, in the <b>Format</b> column, choose <b>H.264</b> and the preset <b>“Match Source - High bitrate”</b>.</li>
<li>Choose where to save it and click the green <b>Play</b> button (Start Queue).</li></ol>${ok("you have an .mp4 file that opens in your player and looks like it did in After Effects.")}`},
{x:1,t:"Leave a reusable template",s:"15 min · optional",b:()=>`<p class="what">If you'll repeat this video with other text, ask Claude to set it up for that.</p><h3>Steps</h3><ol><li>Save the project and ask Claude:</li></ol>${cb("Reorganise this project so I can reuse it: make the main text and colours easy to change, tidy the layers and explain step by step how to change the text and export again.")}${tip("Save a copy of the project named “template” and always work on copies.")}`},
{x:1,t:"If something doesn't work",s:"Always · check this",b:()=>`<p class="what">Almost every problem comes from one of these things.</p><ol>
<li><b>After Effects must be open</b> with a project before you ask Claude anything.</li>
<li><b>Quit and reopen Claude Desktop</b> completely after changing the config file.</li>
<li>Check the config file is copied correctly: one extra comma or brace breaks it.</li>
<li>Run <b>node --version</b> again in the terminal: it must be 24 or later.</li>
<li>Check you ticked the scripts permission in the preferences.</li>
<li>Look at the connector's GitHub page: changes and known issues are explained there.</li></ol>${det("💡 Ideas to keep cooking",["Animated titles for all your videos.","An end card with your website and social links.","Short ads for Instagram and TikTok.","An animation of your logo as a video signature."])}`},
{x:1,t:"Use material with permission",s:"Always · tips",b:()=>`<p class="what">Before publishing, a few simple rules.</p><ol>
<li><b>Music:</b> only use songs licensed for your use.</li>
<li><b>Fonts:</b> check the font can be used in commercial projects.</li>
<li><b>Clips and images:</b> only use your own or licensed ones.</li>
<li><b>Keep the .aep project and the .mp4</b> in the same folder, so you can retouch it months later.</li></ol>`}
]}};

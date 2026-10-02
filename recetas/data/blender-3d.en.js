(window.RECIPE=window.RECIPE||{}).en={
title:"Recipe: create 3D with Claude and Blender",
meta:["⏱ About 45 min","👩‍🍳 No modelling skills needed","💶 €0 to get started","🍽 Result: a 3D image or video"],
ing:"Ingredients (all free)",
q:"What do you want to make?",
ph:"Describe your 3D scene in your own words. Example: a small spaceship on a red planet, with sunset light",
yn:"Do you want it to move (video animation)?",
yntip:"If in doubt, choose “No”: you'll get a still image, which is quicker. If you want to animate it later, come back and switch to “Yes”.",
fin:"You have your 3D result. Save the project and the prompt you gave Claude: they're your recipe to repeat it with other ideas. Below you'll find extras: how to protect your work, how to put it on a website and what to do if something fails.",
R:{key:"receta-blender",def:"objeto",empty:"[describe your 3D scene above]",
apps:{
 objeto:{n:"An object",db:false,d:"a blue ceramic mug on a wooden table, with warm morning light"},
 escena:{n:"A scene",db:false,d:"a small cosy room with a desk, a lamp switched on and a plant, with sunset light"},
 logo3d:{n:"My logo in 3D",db:true,d:"a simple 3D logo shaped like an embossed letter A with a gold material, slowly spinning on a plain background"},
 producto:{n:"Spinning product",db:true,d:"a perfume bottle on a white pedestal, with the camera orbiting around it in a smooth loop"},
 personaje:{n:"Friendly character",db:true,d:"a friendly character made of simple shapes (a sphere with eyes and arms) waving hello"},
 otra:{n:"✏️ Another idea",db:true,d:""}
},
ing:()=>`<li><b>Claude Desktop</b>: the head chef. It gives Blender its orders.</li><li><b>Blender</b>: the oven. The free, open-source 3D program.</li><li><b>Blender connector</b>: the waiter. It carries Claude's orders to the oven. Free and official.</li>${DB()?`<li><b>Blender itself</b>: it also exports the final MP4 video.</li>`:`<li><b>Blender itself</b>: it also renders the final image.</li>`}`,
steps:[
{t:"Get your ingredients ready",s:"10 min · install programs",b:()=>`<p class="what">You need two free programs on the same computer.</p><h3>Steps</h3><ol>
<li>Install <a href="https://claude.ai/download" target="_blank" rel="noopener">Claude Desktop</a> and sign in. Any plan works, including the free one.</li>
<li>Install <a href="https://www.blender.org/download/" target="_blank" rel="noopener">Blender</a> <b>version 4.2 or later</b>.</li>
<li>Open Blender once to check it works.</li></ol>${tip("A recent computer is enough for simple scenes. Long renders and videos take longer on older machines.")}${ok("Blender opens and you see the cube, light and camera of the default scene.")}`},
{t:"Add the connector to Claude Desktop",s:"3 min · the waiter",b:()=>`<p class="what">Blender has an official connector that you add from Claude's directory.</p><h3>Steps</h3><ol>
<li>In Claude Desktop, go to <b>Customize → Connectors</b>.</li>
<li>Search for <b>Blender</b> and click <b>Add</b>.</li></ol>${tip("Menu names may change slightly with updates. If you can't find it, look for “Connectors” in the settings.")}${ok("the Blender connector appears in your list of connectors.")}`},
{t:"Install the add-on in Blender",s:"10 min · only once",b:()=>`<p class="what">The connector needs an add-on inside Blender to be able to talk to it.</p><h3>Steps</h3><ol>
<li>Open the <a href="https://www.blender.org/lab/mcp-server/" target="_blank" rel="noopener">Blender MCP Server</a> page in your browser, with Blender open next to it.</li>
<li>Drag the <b>install link</b> from that page into the Blender window.</li>
<li>Blender will ask you to add the <b>“lab”</b> repository: accept.</li>
<li>Drag <b>the same link a second time</b> to install the add-on.</li></ol>${tip("This is Blender's official add-on. Only install the one from blender.org: this add-on runs commands inside your program.")}${ok("Blender tells you the add-on has been installed.")}`},
{t:"Switch on the connection",s:"3 min · every time you work",b:()=>`<p class="what">You switch the connection on from Blender every time you start working.</p><h3>Steps</h3><ol>
<li>Open Blender and save the project: <b>File → Save</b>, with a clear name.</li>
<li>Hover over the 3D view and press <b>N</b> to open the side panel.</li>
<li>Find the <b>BlenderMCP</b> tab and click <b>Start MCP server</b>.</li>
<li>In Claude Desktop, open a new chat and paste this message:</li></ol>${cb("Are you connected to Blender? Tell me which objects are in the scene right now.")}${ok("Claude replies that it sees a cube, a camera and a light.")}`},
{t:"Ask Claude for the scene",s:"10 min · the prompt",b:()=>`<p class="what">Claude builds the scene by writing commands inside Blender. You'll watch the objects appear.</p><h3>Steps</h3><ol><li>In the same Claude chat, copy this message and paste it:</li></ol>${cb(`You're connected to my Blender. I want to create ${D()}.\n\nFirst tell me the plan in short steps. Then build it in my scene: delete the default cube, create the objects with believable shapes and proportions, give them materials, place a light and a camera with good framing, and give everything clear names.`)}
${det("What does each part of the message mean?",["<b>“I want to create…”</b>: your idea. Change it to yours.","<b>Tell me the plan first</b>: so you can correct it before it touches your scene.","<b>Materials</b>: the look of each surface (wood, metal, ceramic…).","<b>Light and camera</b>: what makes the scene look good, just like in a photo."])}
${tip("Start with something simple: one object or a small scene. When it works, add things little by little.")}${ok("you see the objects appear in Blender and Claude explains what it did.")}`},
{t:"Adjust materials and light",s:"10 min · polish the result",b:()=>`<p class="what">The first attempt is rarely the final one. Ask for small changes, one at a time.</p><h3>Steps</h3><ol>
<li>Hover over the 3D view and press <b>Z</b>. In the pie menu choose <b>Rendered</b>: now you see the real light and materials.</li>
<li>Rotate the view by dragging with the <b>mouse wheel</b> pressed.</li>
<li>Ask Claude for one change at a time:</li></ol>${cb("Make the light warmer and softer, and make the material of [object] look more [glossy / matte / rough]. Change only that and don't touch anything else.")}${tip("If you don't know how to describe something, use comparisons: “like oak wood”, “like brushed metal”.")}${ok("the Rendered view looks like what you had in mind.")}`},
{db:1,t:"Make it move",s:"10 min · the animation",b:()=>`<p class="what">An animation is many drawings in a row. Claude sets the key points of the movement and Blender fills in the rest.</p><h3>Steps</h3><ol><li>Ask Claude:</li></ol>${cb("Animate it for 5 seconds at 24 frames per second, that is 120 frames. Make [the camera orbit around the object / the object spin on itself] with a smooth movement that can loop. Adjust the timeline.")}<ol start="2"><li>Press the <b>spacebar</b> in Blender to play it.</li></ol>${ok("when it plays, the movement is smooth and ends where it starts.")}`},
{t:"Render and save",s:"5-20 min · plating up",b:()=>DB()?`<p class="what">Rendering means Blender calculates every final image. We ask Claude to set it up to export a video.</p><h3>Steps</h3><ol><li>Ask Claude:</li></ol>${cb("Set up the render to export a 1080p MP4 video with the EEVEE engine, which is faster, and tell me where it will be saved.")}<ol start="2"><li>In Blender: <b>Render → Render Animation</b> (or <b>Ctrl+F12</b>).</li><li>Wait for it to finish: you'll see each frame being calculated.</li></ol>${tip("If it takes too long, ask Claude to “lower the quality to 720p for testing”. When you like it, go back to 1080p.")}${ok("you have an .mp4 file that looks like your animation.")}`:`<p class="what">Rendering means Blender calculates the final image.</p><h3>Steps</h3><ol><li>Ask Claude:</li></ol>${cb("Set up the render for a 1920×1080 image with the EEVEE engine, which is faster.")}<ol start="2"><li>In Blender press <b>F12</b> (or <b>Render → Render Image</b>).</li><li>When it finishes, in the image window: <b>Image → Save As</b> and save it as <b>PNG</b>.</li></ol>${ok("you have a PNG image of your scene in your folder.")}`},
{x:1,t:"Save and protect your work",s:"Always · tips",b:()=>`<p class="what">Claude runs commands inside Blender, and some big changes can't be undone with a single Ctrl+Z.</p><ol>
<li><b>Save before</b> every big request: <b>File → Save</b>.</li>
<li>Use <b>File → Save Incremental</b> to save versions (v1, v2, v3…) without losing the previous ones.</li>
<li>Test first in an empty project, not an important one.</li>
<li>Ask for specific things: the clearer you are, the fewer surprises.</li></ol>`},
{x:1,t:"Put it on your website",s:"10 min · optional",b:()=>`<p class="what">You can show your 3D object on a web page so visitors can rotate it.</p><h3>Steps</h3><ol>
<li>In Blender: <b>File → Export → glTF 2.0 (.glb)</b> and save it.</li>
<li>Follow the <a href="webapp-gratis.html">Your web app, online and free</a> recipe and, when Claude asks for the content, ask:</li></ol>${cb("I want to show my 3D model (.glb file) on the website so visitors can rotate it with the mouse. Explain step by step how to add it.")}`},
{x:1,t:"If something doesn't work",s:"Always · check this",b:()=>`<p class="what">Almost every problem comes from one of these things.</p><ol>
<li>Blender must be <b>open</b> with the connection on: BlenderMCP tab → <b>Start MCP server</b>.</li>
<li>Check that the Blender connector is added in Claude Desktop.</li>
<li>Close and reopen Claude Desktop, and switch the connection on again in Blender.</li>
<li>Check that you're using Blender 4.2 or later.</li>
<li>Repeat the check message: “Are you connected to Blender?”.</li></ol>${det("💡 Ideas to keep cooking",["A 3D logo for your video intros.","A mockup of your product before manufacturing it.","A mascot character for your brand.","3D backgrounds for your posts and thumbnails."])}`}
]}};

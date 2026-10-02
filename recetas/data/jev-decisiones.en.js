(window.RECIPE=window.RECIPE||{}).en={
title:"Recipe: automatic decisions with Jev",
meta:["⏱ About 50 min", "👩‍🍳 No coding needed: Claude Code writes the code", "💶 Jev is pay-as-you-go and in early access", "🍽 Result: a classifier that decides in milliseconds and tells you when it's unsure"],
ing:"Ingredients",
q:"Which decision do you want to automate?",
ph:"Describe what it has to decide and between which options. Example: decide whether a message from my website is a booking, a question or a complaint",
yn:"Do you want to connect it to your website or apps?",
yntip:"If you choose “Yes”, the last step turns the classifier into a service your form or apps can send messages to. If not, you'll use it on a spreadsheet whenever you like.",
fin:"You now have a Jev classifier that decides in milliseconds, tells you how confident it is and hands the doubtful cases to you. Review it every month with new cases: your criteria get better with use.",
R:{key:"receta-jev",def:"correo",empty:"[describe the decision here, above]",
apps:{
 correo:{n:"Sort messages",db:true,d:"sort the messages from my contact form into: quote, support, invoice or spam"},
 urgencia:{n:"Ticket priority",db:true,d:"decide whether a customer issue is urgent, normal or can wait"},
 leads:{n:"Score leads",db:true,d:"score from 0 to 10 how likely a contact from the form is to become a customer"},
 resenas:{n:"Reviews",db:false,d:"decide whether a review is positive, negative or mixed, and whether it needs a reply from me"},
 moderar:{n:"Moderate comments",db:true,d:"decide whether a comment on my website is published straight away or I review it first"},
 otra:{n:"✏️ Another idea",db:true,d:""}
},
ing:()=>`<li><b>Jev</b>, by TypeSafe AI: the taster. It looks at a text and decides in milliseconds, saying how sure it is.</li><li><b>Claude Code</b>: the head chef. Writes and runs the code for you on your computer.</li><li><b>The TypeSafe skill</b>: Jev's manual for Claude Code, free.</li><li><b>Some real examples</b>: 20 or 30 cases like the ones you want to classify (without personal data).</li>${DB()?`<li><b>Cloudflare</b> (free): to put your classifier online.</li>`:""}`,
steps:[
{t:"Meet the ingredient: what Jev is",s:"5 min · understand it",b:()=>`<p class="what"><b>Jev</b> is TypeSafe AI's first “System One” model. It doesn't write text or chat: it <b>decides</b>. You give it a text and some questions, and in 70–500 milliseconds it returns an answer with its <b>probability</b> and its <b>confidence</b>.</p>
${det("The three questions it can answer",["<b>Choice</b>: which of these options? For example, quote, support or invoice.","<b>Score</b>: how much, on a scale? For example, from 0 to 10.","<b>Noul</b> (yes or no): is this true? For example, “the message is urgent”."])}
${det("Why not use Claude for this?",["Claude thinks and writes: it's ideal for answering, drafting or reasoning.","Jev decides fast and cheaply, and tells you how sure it is. It's ideal for thousands of small decisions.","Together: Jev sorts the work and Claude handles whatever needs thinking."])}
${tip("Think of Jev as the kitchen's taster: it tastes and says “yes” or “no” on the spot. The chef is still Claude.")}${ok("you can explain in your own words whether your decision is choosing, scoring or yes/no.")}`},
{t:"Get your key",s:"5 min · early access",b:()=>`<p class="what">Jev has been in <b>early access</b> since September 2026: you may need to join the waitlist.</p><h3>Steps</h3><ol>
<li>Go to <a href="https://typesafe.ai" target="_blank" rel="noopener">typesafe.ai</a> and request access.</li>
<li>Once you have it, go to <a href="https://console.typesafe.ai/keys" target="_blank" rel="noopener">console.typesafe.ai/keys</a> and create an <b>API key</b> (your key).</li>
<li>Copy it and keep it somewhere safe for now, like your password manager.</li></ol>
${det("How much does it cost?",["You pay for the text you send: about <b>$0.042 per million tokens</b>. Answers aren't charged.","Example: 1,000 messages of 500 words are about 650,000 tokens, under 3 cents.","No free plan is mentioned. Check the current price on their website before you start."])}
${tip("An API key is like your house key: whoever has it can spend in your name. Never paste it into a chat, an email or GitHub.")}${ok("your API key is saved somewhere safe.")}`},
{t:"Get the kitchen ready",s:"5 min · folder and key",b:()=>`<p class="what">You'll create a folder for the project and keep the key in a file that's never uploaded to the internet.</p><h3>Steps</h3><ol>
<li>Create a folder called <code>my-jev</code> and open it in <b>Claude Code</b>.</li>
<li>Paste this:</li></ol>${cb("Create in this folder a .env file with the line TYPESAFE_API_KEY= (empty) and a .gitignore that excludes .env. Don't ask me for the key: I'll paste it in by hand.")}
<ol start="3"><li>Open <code>.env</code> with a text editor, paste your key after the <code>=</code> and save.</li></ol>
${tip("The dot in front of .env makes the file hidden. On a Mac, press Cmd + Shift + . in Finder to see it.")}${ok("the .env file has your key and .gitignore excludes it.")}`},
{t:"Give Claude Code Jev's manual",s:"2 min · the TypeSafe skill",b:()=>`<p class="what">TypeSafe publishes a free <b>skill</b>: a manual that teaches Claude Code to use Jev correctly. That way it doesn't have to guess.</p><ol><li>In Claude Code, paste:</li></ol>${cb("/plugin marketplace add typesafe-ai/skills")}${cb("/plugin install typesafe@typesafe-ai")}
<ol start="2"><li>Restart Claude Code if it asks you to.</li></ol>
${tip("If you prefer the terminal: claude plugin marketplace add typesafe-ai/skills and then claude plugin install typesafe@typesafe-ai.")}${ok("when you type /plugin you see “typesafe” among your installed plugins.")}`},
{t:"Cook your classifier",s:"10 min · the main course",b:()=>`<p class="what">Now Claude Code writes a small program that sends each case to Jev and saves its decision.</p>${cb(`Use the TypeSafe skill. I want a small Python program that uses Jev to ${D()}.\n\n- Read the key from TYPESAFE_API_KEY in .env.\n- Pick the right question (Choice, Score or Noul) and explain why.\n- Write clear criteria for each option, as you'd explain them to a new colleague.\n- Create examples.csv with 20 made-up but realistic cases, including some tricky ones.\n- Run it and save to results.csv: the case, the decision, the probabilities and the confidence.\n\nExplain each step before running it.`)}
${det("What are “criteria”?",["They're the descriptions of each option. Jev decides by comparing the text with them.","Example: “support: the customer has a technical problem with something they've already bought”.","Clear criteria matter more than the code: that's where your knowledge lives."])}${ok("results.csv exists with a decision and a confidence for each example.")}`},
{t:"Test it and read the confidence",s:"10 min · taste before serving",b:()=>`<p class="what">Before you trust it, compare what Jev decides with what you would decide.</p>${cb("Show me results.csv as a table, sorted from lowest to highest confidence. For each doubtful case, explain which criterion confuses it and suggest how to rewrite the criteria. Don't change the code, only the criteria.")}
<ol><li>Mark the cases where you disagree.</li><li>Ask Claude Code to adjust the criteria and run it again.</li><li>Add real cases to <code>examples.csv</code> (without names or personal data).</li></ol>
${tip("Watch the confidence: a correct decision with low confidence tells you the criteria aren't clear yet.")}${ok("you agree with Jev on almost every high-confidence case.")}`},
{t:"When it's unsure, it asks you",s:"5 min · a human in charge",b:()=>`<p class="what">The professional trick: Jev only decides when it's sure and hands the doubtful cases to you. That way you automate most of the work without risking the rest.</p>${cb("Add a confidence threshold of 0.8. If the confidence is higher, apply the decision. If it's lower, save the case to review.csv with the suggested decision so I can review it. At the end, tell me what percentage was decided automatically and how many are left for me.")}
${tip("Start with a high threshold (0.9) and lower it bit by bit as you see it gets things right. Better to review too much at first.")}${ok("doubtful cases land in review.csv and the rest are decided automatically.")}`},
{db:1,t:"Connect it to your website or apps",s:"10 min · serve it",b:()=>`<p class="what">Turn the classifier into an online service that your form or apps send each new message to.</p>${cb("Turn the classifier into a Cloudflare Worker that receives a text via POST and returns the decision, the confidence and whether it needs review. Store the Jev key as a Worker secret (wrangler secret put TYPESAFE_API_KEY), never in the code. Add a key of my own so only my website can call it and explain how to connect it to my form.")}
${tip("Want an alert when something needs review? With the “Claude in your Slack” recipe you can send doubtful cases to a channel.")}${ok("when you send a test message from your form, you get the decision in under a second.")}`},
{x:1,t:"Jev and Claude, the best team",s:"Optional · save money and reply better",b:()=>`<p class="what">A very useful pattern: Jev sorts every message instantly and only the ones that need thinking go to Claude, which drafts the reply.</p>${cb("Extend the program: if Jev decides the message is [type], pass it to Claude with my instructions so it drafts a reply. The rest, just classify them. Save the drafts so I can review them before sending.")}`},
{x:1,t:"Use it responsibly",s:"Always · tips",b:()=>`<p class="what">Deciding fast isn't the same as deciding well. A few simple rules:</p><ol>
<li><b>Decisions that affect people</b> (hiring, granting a loan, penalising): always with human review.</li>
<li><b>Personal data</b>: send only what's needed and follow data protection law (GDPR in Europe).</li>
<li><b>Keep a log</b> of decisions so you can review and correct them.</li>
<li><b>Be transparent</b>: if an automated system decides something, say so.</li></ol>`}
]}};

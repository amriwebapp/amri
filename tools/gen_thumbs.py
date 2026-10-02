"""Genera las ilustraciones SVG de las recetas nuevas (estilo cocina cálida de AMRI).
Uso: python3 tools/gen_thumbs.py  -> escribe img/<slug>.svg
"""
import os, math
OUT = os.path.join(os.path.dirname(__file__), "..", "img")
INK = "#6B4A33"; TERR = "#D9774A"; PEACH = "#F2C1A0"; SAGE = "#9CBFA3"; CREAM = "#FFF8EE"
WOOD = "#E3B98A"; WOOD2 = "#CF9F6E"; SKY = "#A9C6DD"; GOLD = "#E9B64F"; LILAC = "#C5B3EC"
S = f'stroke="{INK}" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"'

def star(x, y, r, c):
    p = f"M{x},{y-r} Q{x+r*.18},{y-r*.18} {x+r},{y} Q{x+r*.18},{y+r*.18} {x},{y+r} Q{x-r*.18},{y+r*.18} {x-r},{y} Q{x-r*.18},{y-r*.18} {x},{y-r}Z"
    return f'<path d="{p}" fill="{c}"/>'

def frame(inner, blob="#FBE3D2", blob2="#E7F0E4"):
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
<defs><filter id="g"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 .45 0 0 0 0 .32 0 0 0 0 .2 0 0 0 .07 0"/></filter>
<radialGradient id="b1"><stop offset="0" stop-color="{blob}"/><stop offset="1" stop-color="{blob}" stop-opacity="0"/></radialGradient>
<radialGradient id="b2"><stop offset="0" stop-color="{blob2}"/><stop offset="1" stop-color="{blob2}" stop-opacity="0"/></radialGradient></defs>
<rect width="1200" height="800" fill="#FBF4E9"/>
<circle cx="640" cy="360" r="380" fill="url(#b1)"/><circle cx="1000" cy="200" r="260" fill="url(#b2)"/>
<ellipse cx="600" cy="640" rx="470" ry="26" fill="{INK}" opacity=".08"/>
<path d="M120 600 H1080 Q1092 600 1092 612 V640 Q1092 652 1080 652 H120 Q108 652 108 640 V612 Q108 600 120 600Z" fill="{WOOD}" {S}/>
<path d="M170 624 H420 M520 630 H700 M800 622 H1020" stroke="{WOOD2}" stroke-width="4" stroke-linecap="round"/>
{inner}
{star(930,250,22,GOLD)}{star(980,320,12,SAGE)}{star(250,230,14,TERR)}
<circle cx="1010" cy="240" r="5" fill="{GOLD}"/><circle cx="220" cy="300" r="4" fill="{SAGE}"/>
<rect width="1200" height="800" filter="url(#g)"/>
</svg>'''

def higgsfield():
    spokes = "".join(f'<line x1="{500+math.cos(a)*18}" y1="{330+math.sin(a)*18}" x2="{500+math.cos(a)*58}" y2="{330+math.sin(a)*58}" {S}/>' for a in [i*math.pi/3 for i in range(6)])
    spokes2 = "".join(f'<line x1="{660+math.cos(a)*16}" y1="{340+math.sin(a)*16}" x2="{660+math.cos(a)*46}" y2="{340+math.sin(a)*46}" {S}/>' for a in [i*math.pi/3+.3 for i in range(6)])
    # tira de película que sale como vapor
    film = f'<path d="M800 470 C900 440 880 330 960 300 C1040 270 1010 170 1080 140" fill="none" stroke="{INK}" stroke-width="52" stroke-linecap="round" opacity=".9"/>'
    film += f'<path d="M800 470 C900 440 880 330 960 300 C1040 270 1010 170 1080 140" fill="none" stroke="{CREAM}" stroke-width="40" stroke-linecap="round" stroke-dasharray="22 14"/>'
    film += f'<path d="M800 470 C900 440 880 330 960 300 C1040 270 1010 170 1080 140" fill="none" stroke="{PEACH}" stroke-width="22" stroke-linecap="round"/>'
    clap = f'''<g transform="translate(190 470) rotate(-6)"><rect x="0" y="40" width="170" height="92" rx="10" fill="#4A3526" {S}/>
<path d="M0 40 L170 40 L166 4 L-2 12Z" fill="{CREAM}" {S}/><path d="M28 10 L44 40 M72 7 L88 40 M116 5 L132 40" {S}/>
<path d="M16 76 H120 M16 104 H86" stroke="{CREAM}" stroke-width="6" stroke-linecap="round"/></g>'''
    cam = f'''<rect x="420" y="400" width="320" height="190" rx="30" fill="{TERR}" {S}/>
<rect x="450" y="430" width="120" height="70" rx="14" fill="{CREAM}" {S}/><circle cx="690" cy="440" r="12" fill="{GOLD}" {S}/>
<path d="M740 450 L800 420 L800 560 L740 530Z" fill="{PEACH}" {S}/><rect x="796" y="410" width="30" height="160" rx="12" fill="{INK}"/>
<circle cx="500" cy="330" r="70" fill="{CREAM}" {S}/>{spokes}<circle cx="500" cy="330" r="12" fill="{INK}"/>
<circle cx="660" cy="340" r="58" fill="{CREAM}" {S}/>{spokes2}<circle cx="660" cy="340" r="10" fill="{INK}"/>
<rect x="470" y="590" width="220" height="14" rx="7" fill="{INK}"/>'''
    return frame(film + clap + cam, "#FBD9C4")

def canva():
    dollops = [(470,520,TERR),(540,490,GOLD),(620,480,SAGE),(700,495,SKY),(760,525,LILAC)]
    d = "".join(f'<ellipse cx="{x}" cy="{y}" rx="34" ry="24" fill="{c}" {S}/><ellipse cx="{x-8}" cy="{y-8}" rx="10" ry="6" fill="#fff" opacity=".6"/>' for x,y,c in dollops)
    easel = f'''<path d="M780 600 L850 200 M1000 600 L930 200" {S} fill="none"/><path d="M890 180 L890 600" {S}/>
<rect x="760" y="200" width="260" height="300" rx="16" fill="{CREAM}" {S}/>
<circle cx="840" cy="290" r="44" fill="{PEACH}" {S}/><rect x="880" y="330" width="100" height="100" rx="14" fill="{SAGE}" {S}/>
<path d="M800 460 L850 380 L900 460Z" fill="{TERR}" {S}/><path d="M800 240 H960" stroke="{INK}" stroke-width="6" stroke-linecap="round" opacity=".5"/>'''
    pal = f'''<path d="M380 560 C360 460 470 420 600 425 C740 430 830 470 820 540 C812 590 740 600 700 580 C660 560 640 600 600 605 C520 612 395 610 380 560Z" fill="{WOOD}" {S}/>
<ellipse cx="560" cy="570" rx="26" ry="16" fill="#FBF4E9" {S}/>{d}'''
    jar = f'''<rect x="220" y="440" width="110" height="160" rx="22" fill="{SKY}" opacity=".85" {S}/>
<path d="M250 450 L210 250 M285 450 L300 230 M310 450 L360 280" {S}/>
<path d="M200 230 Q210 200 220 250 Z" fill="{TERR}" {S}/><path d="M292 208 Q306 190 308 232Z" fill="{GOLD}" {S}/><path d="M354 262 Q376 250 364 290Z" fill="{SAGE}" {S}/>'''
    return frame(easel + jar + pal, "#DDF1EE", "#FBE3D2")

def figma():
    board = f'''<rect x="170" y="440" width="330" height="170" rx="24" fill="{WOOD2}" {S}/><circle cx="470" cy="470" r="12" fill="#FBF4E9" {S}/>
<circle cx="250" cy="520" r="42" fill="{TERR}" {S}/><rect x="310" y="480" width="80" height="80" rx="12" fill="{SAGE}" {S}/>
<path d="M410 575 L445 505 L480 575Z" fill="{GOLD}" {S}/>'''
    dots = "".join(f'<circle cx="{530+i*38}" cy="{470-math.sin(i/6*math.pi)*70}" r="{7}" fill="{TERR}" opacity="{.35+i*.1}"/>' for i in range(7))
    win = f'''<rect x="760" y="220" width="340" height="370" rx="24" fill="{CREAM}" {S}/>
<path d="M760 272 H1100" {S}/><circle cx="790" cy="246" r="8" fill="{TERR}"/><circle cx="816" cy="246" r="8" fill="{GOLD}"/><circle cx="842" cy="246" r="8" fill="{SAGE}"/>
<rect x="790" y="300" width="280" height="110" rx="14" fill="{PEACH}" {S}/><circle cx="850" cy="355" r="30" fill="{TERR}" {S}/>
<path d="M900 340 H1040 M900 372 H1000" stroke="{INK}" stroke-width="7" stroke-linecap="round"/>
<rect x="790" y="430" width="130" height="130" rx="14" fill="{SAGE}" {S}/><rect x="940" y="430" width="130" height="60" rx="14" fill="{GOLD}" {S}/>
<rect x="940" y="505" width="130" height="55" rx="14" fill="{SKY}" {S}/>'''
    knife = f'<path d="M560 600 L720 560 Q740 556 736 574 L700 590 L560 606Z" fill="#E8E1D8" {S}/><rect x="520" y="592" width="60" height="18" rx="8" fill="{INK}"/>'
    return frame(board + dots + win + knife, "#EDE4FF")

def notion():
    box = f'''<path d="M330 420 H760 V600 H330Z" fill="{WOOD2}" {S}/><path d="M330 470 H760" stroke="{INK}" stroke-width="4" opacity=".4"/>
<rect x="520" y="500" width="50" height="22" rx="8" fill="{GOLD}" {S}/>'''
    cards = ""
    for i,(c,dx,rot) in enumerate([(CREAM,0,-8),(PEACH,80,-3),(CREAM,160,2),(SAGE,240,6)]):
        x = 360+dx
        cards += f'<g transform="rotate({rot} {x+60} 420)"><rect x="{x}" y="{280-i*6}" width="130" height="170" rx="10" fill="{c}" {S}/><rect x="{x+14}" y="{262-i*6}" width="46" height="24" rx="6" fill="{[TERR,GOLD,SKY,LILAC][i]}" {S}/><path d="M{x+20} {320-i*6} H{x+110} M{x+20} {344-i*6} H{x+90}" stroke="{INK}" stroke-width="5" stroke-linecap="round" opacity=".6"/></g>'
    float_card = f'''<g transform="rotate(8 930 330)"><rect x="830" y="220" width="200" height="240" rx="16" fill="{CREAM}" {S}/>
<rect x="856" y="252" width="26" height="26" rx="6" fill="{SAGE}" {S}/><path d="M862 266 L868 272 L878 258" stroke="{CREAM}" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M896 266 H1000" stroke="{INK}" stroke-width="6" stroke-linecap="round"/>
<rect x="856" y="302" width="26" height="26" rx="6" fill="{CREAM}" {S}/><path d="M896 316 H990" stroke="{INK}" stroke-width="6" stroke-linecap="round" opacity=".6"/>
<rect x="856" y="352" width="26" height="26" rx="6" fill="{CREAM}" {S}/><path d="M896 366 H970" stroke="{INK}" stroke-width="6" stroke-linecap="round" opacity=".6"/>
<rect x="856" y="400" width="148" height="30" rx="8" fill="{PEACH}"/></g>'''
    pen = f'<g transform="rotate(-20 230 560)"><rect x="150" y="548" width="180" height="22" rx="10" fill="{TERR}" {S}/><path d="M330 548 L370 559 L330 570Z" fill="{CREAM}" {S}/></g>'
    return frame(cards + box + float_card + pen, "#F2EADF")

def gmail():
    env = f'''<g transform="rotate(-8 420 330)"><rect x="280" y="240" width="290" height="190" rx="18" fill="{CREAM}" {S}/>
<path d="M284 250 L425 350 L566 250" fill="none" {S}/><circle cx="425" cy="352" r="26" fill="{TERR}" {S}/>
<path d="M425 366 C400 350 408 334 418 338 C422 340 425 344 425 346 C425 344 428 340 432 338 C442 334 450 350 425 366Z" fill="{CREAM}"/></g>
<path d="M260 470 C300 450 320 480 360 460" stroke="{TERR}" stroke-width="5" fill="none" stroke-linecap="round" opacity=".5"/>'''
    cells = ""
    for r in range(4):
        for c in range(5):
            x, y = 690+c*54, 330+r*52
            fill = TERR if (r,c)==(1,2) else (SAGE if (r,c) in [(2,4),(0,1)] else CREAM)
            cells += f'<rect x="{x}" y="{y}" width="42" height="40" rx="8" fill="{fill}" stroke="{INK}" stroke-width="3"/>'
    cal = f'''<rect x="660" y="230" width="330" height="360" rx="22" fill="#FFFDF8" {S}/><path d="M660 300 H990 V252 Q990 230 968 230 H682 Q660 230 660 252Z" fill="{GOLD}" {S}/>
<rect x="720" y="206" width="16" height="50" rx="8" fill="{INK}"/><rect x="910" y="206" width="16" height="50" rx="8" fill="{INK}"/>{cells}
<circle cx="819" cy="400" r="30" fill="none" stroke="{TERR}" stroke-width="5" stroke-dasharray="6 6"/>'''
    cup = f'''<path d="M430 500 H560 V560 Q560 600 520 600 H470 Q430 600 430 560Z" fill="{SAGE}" {S}/><path d="M560 515 Q600 515 598 545 Q596 572 560 570" fill="none" {S}/>
<path d="M470 480 Q455 460 470 440 Q485 420 470 400 M510 480 Q495 460 510 440 Q525 420 510 400" stroke="{INK}" stroke-width="4" fill="none" stroke-linecap="round" opacity=".45"/>'''
    return frame(env + cal + cup, "#FFEFD0")

def chrome():
    win = f'''<rect x="300" y="190" width="560" height="400" rx="26" fill="{CREAM}" {S}/><path d="M300 250 H860" {S}/>
<circle cx="334" cy="220" r="9" fill="{TERR}"/><circle cx="362" cy="220" r="9" fill="{GOLD}"/><circle cx="390" cy="220" r="9" fill="{SAGE}"/>
<rect x="430" y="206" width="400" height="28" rx="14" fill="#FBF4E9" stroke="{INK}" stroke-width="3"/>
<rect x="340" y="280" width="220" height="130" rx="14" fill="{SKY}" {S}/><rect x="580" y="280" width="240" height="130" rx="14" fill="{PEACH}" {S}/>
<path d="M340 450 H820 M340 486 H740 M340 522 H660" stroke="{INK}" stroke-width="7" stroke-linecap="round" opacity=".35"/>
<rect x="690" y="500" width="130" height="50" rx="14" fill="{TERR}" {S}/>'''
    compass = f'''<circle cx="450" cy="345" r="46" fill="{CREAM}" {S}/><path d="M450 305 L464 345 L450 385 L436 345Z" fill="{TERR}" stroke="{INK}" stroke-width="3"/>
<path d="M450 345 L464 345 L450 385Z" fill="{INK}" opacity=".3"/><circle cx="450" cy="345" r="6" fill="{INK}"/>'''
    cursor = f'<path d="M790 520 L790 610 L812 588 L830 628 L848 620 L830 580 L862 578Z" fill="#fff" {S}/>'
    lens = f'''<circle cx="980" cy="420" r="70" fill="{SKY}" fill-opacity=".45" {S}/><circle cx="960" cy="400" r="16" fill="#fff" opacity=".7"/>
<path d="M1030 470 L1080 540" stroke="{INK}" stroke-width="22" stroke-linecap="round"/><path d="M1030 470 L1080 540" stroke="{TERR}" stroke-width="12" stroke-linecap="round"/>'''
    return frame(win + compass + cursor + lens, "#E2EEF8", "#FBE3D2")

def skills():
    stand = f'<path d="M420 600 L520 480 M780 600 L680 480" {S} fill="none"/>'
    book = f'''<path d="M600 300 C520 270 400 270 330 300 L330 520 C400 490 520 490 600 520Z" fill="{CREAM}" {S}/>
<path d="M600 300 C680 270 800 270 870 300 L870 520 C800 490 680 490 600 520Z" fill="{CREAM}" {S}/>
<path d="M600 300 V520" {S}/>
<path d="M370 340 H550 M370 372 H530 M370 404 H550 M370 436 H500" stroke="{INK}" stroke-width="6" stroke-linecap="round" opacity=".45"/>
<circle cx="660" cy="345" r="13" fill="{SAGE}" {S}/><path d="M690 345 H820" stroke="{INK}" stroke-width="6" stroke-linecap="round"/>
<circle cx="660" cy="395" r="13" fill="{SAGE}" {S}/><path d="M690 395 H800" stroke="{INK}" stroke-width="6" stroke-linecap="round"/>
<circle cx="660" cy="445" r="13" fill="{CREAM}" {S}/><path d="M690 445 H780" stroke="{INK}" stroke-width="6" stroke-linecap="round" opacity=".5"/>
<path d="M740 282 V360 L756 344 L772 360 V279" fill="{TERR}" {S}/><path d="M460 281 V340 L474 328 L488 340 V277" fill="{GOLD}" {S}/>'''
    spoon = f'<g transform="rotate(-18 960 560)"><ellipse cx="900" cy="560" rx="44" ry="30" fill="{WOOD2}" {S}/><rect x="940" y="552" width="170" height="18" rx="9" fill="{WOOD2}" {S}/></g>'
    bowl = f'<path d="M190 520 H350 Q345 600 270 600 Q195 600 190 520Z" fill="{SAGE}" {S}/><path d="M220 516 Q270 470 320 516" fill="{GOLD}" {S}/>'
    return frame(stand + book + spoon + bowl, "#E6F2DC", "#FBE3D2")

def conector():
    jar = lambda x,c,lab: f'''<rect x="{x}" y="360" width="190" height="240" rx="34" fill="{c}" fill-opacity=".8" {S}/>
<rect x="{x+14}" y="324" width="162" height="46" rx="14" fill="{WOOD2}" {S}/><rect x="{x+40}" y="440" width="110" height="70" rx="12" fill="{CREAM}" {S}/>
<path d="M{x+60} 470 H{x+130}" stroke="{INK}" stroke-width="6" stroke-linecap="round"/>{lab}'''
    left = jar(170, PEACH, f'<circle cx="265" cy="555" r="10" fill="{TERR}"/>')
    right = jar(840, SKY, f'<circle cx="935" cy="555" r="10" fill="{SAGE}"/>')
    cable = f'''<path d="M360 470 C450 470 440 330 540 330" fill="none" stroke="{INK}" stroke-width="16" stroke-linecap="round"/>
<path d="M840 470 C750 470 760 330 660 330" fill="none" stroke="{INK}" stroke-width="16" stroke-linecap="round"/>
<rect x="520" y="300" width="70" height="60" rx="14" fill="{TERR}" {S}/><path d="M590 314 H614 M590 346 H614" stroke="{INK}" stroke-width="9" stroke-linecap="round"/>
<rect x="628" y="296" width="62" height="68" rx="14" fill="{CREAM}" {S}/><circle cx="660" cy="316" r="5" fill="{INK}"/><circle cx="660" cy="344" r="5" fill="{INK}"/>'''
    sparks = f'<path d="M620 250 L612 276 M650 240 V270 M680 252 L690 276" stroke="{GOLD}" stroke-width="7" stroke-linecap="round"/>'
    return frame(left + right + cable + sparks, "#FFE4D6", "#E4EEF6")

def slack():
    # tablón de mensajes con almohadilla y burbujas
    board = f'''<rect x="300" y="200" width="460" height="390" rx="28" fill="{CREAM}" {S}/>
<path d="M300 262 H760" {S}/><text x="332" y="246" font-family="Arial" font-weight="700" font-size="34" fill="{INK}">#</text>
<rect x="370" y="222" width="190" height="22" rx="11" fill="{PEACH}"/>'''
    rows = ""
    for i,(c,w) in enumerate([(TERR,260),(SAGE,210),(GOLD,290),(SKY,180)]):
        y = 292 + i*72
        rows += f'<circle cx="352" cy="{y+18}" r="22" fill="{c}" {S}/><rect x="392" y="{y}" width="{w}" height="16" rx="8" fill="{INK}" opacity=".55"/><rect x="392" y="{y+26}" width="{w-60}" height="12" rx="6" fill="{INK}" opacity=".25"/>'
    bubble = f'''<g transform="rotate(6 900 300)"><path d="M820 230 H1000 Q1030 230 1030 260 V330 Q1030 360 1000 360 H880 L850 392 L852 360 H820 Q790 360 790 330 V260 Q790 230 820 230Z" fill="{TERR}" {S}/>
<path d="M830 280 H990 M830 314 H950" stroke="{CREAM}" stroke-width="10" stroke-linecap="round"/></g>'''
    cup = f'<path d="M180 500 H300 V560 Q300 600 262 600 H218 Q180 600 180 560Z" fill="{SAGE}" {S}/><path d="M300 515 Q336 515 334 543 Q332 568 300 566" fill="none" {S}/>'
    return frame(board + rows + bubble + cup, "#EDE4FF", "#FBE3D2")

def gurusup():
    # tarro-cerebro con tarjetas de conocimiento conectadas
    jar = f'''<rect x="470" y="300" width="260" height="300" rx="46" fill="{SKY}" fill-opacity=".55" {S}/>
<rect x="490" y="262" width="220" height="54" rx="16" fill="{WOOD2}" {S}/>
<path d="M540 470 C520 420 560 380 600 400 C630 360 690 390 675 430 C715 450 700 510 655 505 C640 540 580 540 570 505 C530 510 520 480 540 470Z" fill="{PEACH}" {S}/>
<path d="M600 405 C590 440 610 470 600 505 M640 420 C630 450 660 470 645 500" stroke="{INK}" stroke-width="4" fill="none" stroke-linecap="round" opacity=".6"/>'''
    cards = ""
    for x,y,c,r in [(230,300,CREAM,-8),(250,470,GOLD,5),(880,290,CREAM,7),(900,460,SAGE,-5)]:
        cards += f'<g transform="rotate({r} {x+70} {y+50})"><rect x="{x}" y="{y}" width="150" height="100" rx="14" fill="{c}" {S}/><path d="M{x+20} {y+34} H{x+120} M{x+20} {y+62} H{x+90}" stroke="{INK}" stroke-width="7" stroke-linecap="round" opacity=".5"/></g>'
    lines = f'<path d="M380 350 C430 350 440 400 470 410 M400 520 C440 520 450 480 470 470 M880 340 C820 340 790 380 730 400 M900 510 C840 510 790 480 730 470" stroke="{TERR}" stroke-width="5" fill="none" stroke-dasharray="10 10" stroke-linecap="round"/>'
    return frame(lines + cards + jar, "#E4EEF6", "#FBE3D2")

def instagram():
    # móvil con cuadrícula de publicaciones, un reel y un corazón
    phone = f'''<rect x="470" y="150" width="270" height="450" rx="40" fill="{CREAM}" {S}/>
<rect x="560" y="168" width="90" height="14" rx="7" fill="{INK}" opacity=".35"/>
<circle cx="515" cy="222" r="22" fill="{TERR}" {S}/><rect x="550" y="210" width="110" height="12" rx="6" fill="{INK}" opacity=".55"/><rect x="550" y="230" width="70" height="10" rx="5" fill="{INK}" opacity=".25"/>'''
    tiles = ""
    cols = [PEACH, SAGE, GOLD, SKY, LILAC, TERR, WOOD, PEACH, SAGE]
    for i, c in enumerate(cols):
        x = 492 + (i % 3) * 78; y = 268 + (i // 3) * 78
        tiles += f'<rect x="{x}" y="{y}" width="70" height="70" rx="10" fill="{c}" {S}/>'
    reel = f'''<g transform="rotate(-8 330 380)"><rect x="250" y="250" width="170" height="280" rx="28" fill="{INK}" {S}/>
<rect x="266" y="268" width="138" height="244" rx="18" fill="{PEACH}"/><path d="M318 360 L370 392 L318 424Z" fill="{CREAM}" {S}/></g>'''
    heart = f'''<g transform="rotate(8 880 330)"><path d="M820 230 H990 Q1020 230 1020 260 V350 Q1020 380 990 380 H880 L850 410 L852 380 H820 Q790 380 790 350 V260 Q790 230 820 230Z" fill="{CREAM}" {S}/>
<path d="M905 345 C860 315 845 290 860 272 C875 255 898 262 905 280 C912 262 935 255 950 272 C965 290 950 315 905 345Z" fill="{TERR}" {S}/></g>'''
    pen = f'<path d="M800 470 L930 430 L944 456 L814 498Z" fill="{GOLD}" {S}/><path d="M800 470 L786 506 L814 498Z" fill="{INK}"/>'
    return frame(reel + phone + tiles + heart + pen, "#FCE3EC", "#FBE3D2")

for slug, fn in {"higgsfield-cine":higgsfield,"canva-diseno":canva,"figma-a-web":figma,"notion-cerebro":notion,
                 "gmail-calendario":gmail,"claude-chrome":chrome,"skills-claude":skills,"conector-propio":conector,"slack-equipo":slack,"gurusup-brain":gurusup,"instagram-ia":instagram}.items():
    open(os.path.join(OUT, slug + ".svg"), "w").write(fn())
    print("ok", slug)

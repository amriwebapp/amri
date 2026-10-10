"""Genera la portada vertical de cada librito (img/portadas/<slug>.jpg) con tools/portada.html.
Necesita Google Chrome. Uso: python3 tools/portadas.py [slug ...]   (sin slugs: todos los libros visibles)"""
import os, re, sys, subprocess, threading, functools, http.server, socketserver
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
os.chdir(ROOT)
CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
OUT = 'img/portadas'
os.makedirs(OUT, exist_ok=True)

# Libros de la portada (assets/academia.js): slug, color de fondo, si la ilustración es SVG y si está oculto
src = open('assets/academia.js', encoding='utf-8').read()
books = [(m.group(1), re.search(r'bg:"(#\w+)"', m.group(0)).group(1), 'svg:1' in m.group(0), 'off:1' in m.group(0))
         for m in re.finditer(r'\{slug:"([\w-]+)"[^}]*\}', src)]
only = set(sys.argv[1:])

class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass
handler = functools.partial(Quiet, directory=ROOT)
srv = socketserver.TCPServer(('127.0.0.1', 0), handler)
threading.Thread(target=srv.serve_forever, daemon=True).start()
port = srv.server_address[1]

for slug, bg, svg, off in books:
    if off or (only and slug not in only):
        continue
    png = f'{OUT}/{slug}.png'
    url = f'http://127.0.0.1:{port}/tools/portada.html?s={slug}&bg={bg.replace("#", "%23")}&img=img/{slug}.{"svg" if svg else "jpg"}'
    subprocess.run([CHROME, '--headless=new', '--disable-gpu', '--hide-scrollbars', '--window-size=600,800',
                    '--force-device-scale-factor=1.5', '--virtual-time-budget=6000', f'--screenshot={png}', url],
                   check=True, stderr=subprocess.DEVNULL, stdout=subprocess.DEVNULL)
    subprocess.run(['sips', '-s', 'format', 'jpeg', '-s', 'formatOptions', '78', png, '--out', f'{OUT}/{slug}.jpg'],
                   check=True, stdout=subprocess.DEVNULL)
    os.remove(png)
    print('ok', slug)
srv.shutdown()

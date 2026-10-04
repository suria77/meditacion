# Dharma Eterno · App de meditación

App estática (HTML + audio + imágenes). Sin servidor, sin base de datos.

## Estructura
```
index.html              Home (4 cartas)
manifest.webmanifest    Para instalarla como app
_headers                Caché de Cloudflare
assets/                 Imágenes comunes (home, logo, fondo, iconos del reproductor, botones)
meditaciones/           Meditaciones por emoción  (+ audio/)
musica/                 Menú de 3 botones
  bonita/  mantras/  naturaleza/     (cada uno con audio/)
podcast/                Podcast (+ audio/)
oraculo/                Atman · Oráculo de Luz (40 cartas)
FALTAN.md               Lo que aún hay que añadir
```
Cada sección es una carpeta con su `index.html`, y se abre en `/seccion/`.

## Subir a GitHub (desde el navegador)
1. github.com → New repository → nombre: `dharmaeterno-app` → Private → Create.
2. Pulsa "uploading an existing file".
3. Sube **por tandas** (máx. 100 archivos y 25 MB cada uno). Orden recomendado:
   1. `index.html`, `manifest.webmanifest`, `_headers`, `.gitignore`, `LEEME.md`, `FALTAN.md`
   2. carpeta `assets`
   3. carpeta `meditaciones`
   4. carpeta `podcast`
   5. carpeta `musica` (en 2-3 tandas: bonita, mantras, naturaleza, y el `index.html` del menú)
   6. carpeta `oraculo` (85 archivos: una sola tanda)
   Tras cada tanda: "Commit changes".
4. Comprueba al final que ves todas las carpetas en el repo.

## Conectar con Cloudflare Pages
1. Cloudflare → Workers & Pages → Create → **Pages** → Connect to Git → elige `dharmaeterno-app`.
2. Framework preset: **None**. Build command: vacío. Build output directory: `/` (o `.`).
3. Save and Deploy. Te dará una URL `xxxx.pages.dev`.
4. Custom domains → añade `app.dharmaeterno.com` (el dominio ya está en tu Cloudflare).

## Comprobar tras desplegar
- La home abre las 4 secciones y la flecha vuelve.
- Música → 3 botones → cada reproductor suena.
- Meditaciones: Positividad y Calma suenan (cuando estén los mp3).

# Ẹsẹ · versos de Ifá — app para teléfono y web

Estos archivos son la misma herramienta, preparada para instalarse en el iPhone y funcionar sin conexión.

## Publicarla (una sola vez)

1. En GitHub, crea un repositorio nuevo. Puede ser público o privado con GitHub Pages activado.
2. Sube estos seis archivos tal cual, en la raíz del repositorio:
   `index.html`, `sw.js`, `manifest.webmanifest`, `icon-192.png`, `icon-512.png`, `icon-180.png`.
3. Entra en **Settings → Pages**, elige **Deploy from a branch**, rama `main`, carpeta `/ (root)`, y guarda.
4. En un par de minutos tendrás una dirección como `https://tuusuario.github.io/versos-ifa/`.

## Instalarla en el iPhone

1. Abre esa dirección en **Safari** (no en Chrome: en iPhone solo Safari instala apps).
2. Toca el botón de compartir y elige **Añadir a pantalla de inicio**.
3. Ábrela desde el ícono. Se ve a pantalla completa y funciona en modo avión.

En Android y en la computadora, Chrome ofrece instalarla desde el ícono de la barra de direcciones.

## Pasar tu biblioteca al teléfono

1. En la computadora, abre la app y pulsa **Respaldar biblioteca**. Se descarga un archivo `versos-ifa-FECHA.json` con los versos, los audios, las marcas de tiempo y las notas.
2. Pasa ese archivo al iPhone: AirDrop, iCloud Drive, o adjuntándolo a un correo para ti.
3. En el iPhone, abre la app y pulsa **Importar**. Elige el archivo.
4. Repite cuando quieras sincronizar los dos aparatos. Los versos con el mismo identificador se actualizan en lugar de duplicarse.

Los versos se guardan en cada dispositivo por separado: no hay servidor de por medio y nada sale de tus aparatos. Respalda de vez en cuando; ese archivo es tu copia de seguridad.

## Actualizar la app

Sube el `index.html` nuevo al repositorio, reemplazando el anterior. En la app, cierra y vuelve a abrir. Tus versos no se tocan: viven aparte de la app.

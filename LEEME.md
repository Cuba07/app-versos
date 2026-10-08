# Ẹsẹ̀ · versos de Ifá — app para teléfono y web

Estos archivos son la misma herramienta, preparada para instalarse en el iPhone y funcionar sin conexión.

## Publicarla (una sola vez)

1. En GitHub, crea un repositorio nuevo. Puede ser público o privado con GitHub Pages activado.
2. Sube todo tal cual en la raíz del repositorio: `index.html`, `sw.js`, `manifest.webmanifest`, los tres `icon-*.png` y la carpeta `fonts/` completa.
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

## Si no se escucha el audio en el iPhone

El interruptor lateral del teléfono silencia el sonido de las páginas web. Súbelo a modo timbre y sube el volumen con los botones laterales mientras la app está abierta. La app pide al sistema la sesión de reproducción, pero en iPhones viejos el interruptor manda igual.

## Si algo no se guardó

En la biblioteca hay un botón **Almacenamiento**. Dice dónde se guardan los versos, cuánto espacio queda y si algún verso quedó incompleto, con el motivo. Si la lista muestra versos que no abren, ahí mismo se limpian.

Cuando el teléfono se queda sin espacio, importa el respaldo en dos o tres partes, o usa audios más cortos.

## Tipografías incluidas

La carpeta `fonts/` lleva las tipografías dentro de la app (Gentium Book Plus para el yorùbá y Atkinson Hyperlegible para la interfaz, ambas con licencia SIL OFL, incluida en `fonts/OFL.txt`). Gracias a eso los tonos se dibujan siempre sobre su letra, también sin conexión. Si no se suben esos archivos, el teléfono usa una tipografía del sistema que coloca mal los acentos.

## Actualizar la app

Sube el `index.html` nuevo al repositorio, reemplazando el anterior. En la app, cierra y vuelve a abrir. Tus versos no se tocan: viven aparte de la app.

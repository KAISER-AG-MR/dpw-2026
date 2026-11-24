# Sitio web — Instituto de la Visión

Sitio estático en HTML, CSS y JavaScript, sin frameworks ni dependencias. Para verlo, abre `index.html` en el navegador. Para publicarlo, sube la carpeta completa a cualquier hosting, como Netlify, Vercel, GitHub Pages o el hosting del dominio ivision.com.mx.

## Estructura

```
index.html            Inicio: portada, promo, accesos rápidos, testimonios y contacto
especialidades.html   Las 11 especialidades, cada una con su ficha "Conoce más"
servicios.html        Servicios con ilustraciones y "Nota la diferencia"
promo.html            Promoción del mes
nosotros.html         Historia (2003), Ivy y testimonios
tu-visita.html        Pasos para la primera visita, qué llevar y preguntas frecuentes
contacto.html         Dirección, horario, teléfonos y mapa
css/estilos.css       Todos los estilos
js/main.js            Promo del mes, especialidades y sus fichas, y menú en celular
fonts/                WsMogila, Swarsh Daisy, Hypodermic y Goodspace (woff2)
img/                  Portada, fondo, Ivy, logo e ilustraciones
```

## Cambios frecuentes

**Promoción del mes.** Abre `js/main.js` y llena el objeto `PROMO` (título, detalle, precio y vigencia). Si `titulo` se deja vacío, la página invita a preguntar por WhatsApp. El nombre del mes se actualiza solo.

**Especialidades.** Están en la lista `ESP` de `js/main.js`. Cada especialidad tiene la pregunta para el paciente, el nombre, un resumen corto, el texto "¿Qué es?" y los bloques que aparecen en su ficha, como síntomas o tratamientos. La información se tomó de las páginas de cada especialidad en ivision.com.mx.

**Colores y tipografías.** Están al inicio de `css/estilos.css`, dentro de `:root`. Los colores son `--navy`, `--azul`, `--cian`, `--magenta` y `--lila`. Las tipografías son `--display`, `--acento`, `--cuerpo` y `--ui`.

**WhatsApp y teléfonos.** El número es 528711414619. Para cambiarlo, búscalo y reemplázalo en todos los archivos.

**Menú, pie de página y redes.** Se repiten en cada `.html`. Si cambias uno, cambia los siete.

## Pendientes antes de publicar

- Agregar la sección de médicos, con nombre, especialidad, cédula y foto.
- Confirmar la promoción vigente, el servicio de lentes de contacto y los textos de "Tu visita".
- Enlazar el aviso de privacidad, que ahora apunta a `#`.
- Revisar que las tipografías tengan licencia para uso web.

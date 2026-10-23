# Auditoría editorial y funcional — 23 octubre 2026

Base: 93931feafc80890473e39735dd597a04bdf27f62. Cambios autorizados por LABCCO.

## Correcciones
- Guía de colinesterasa ampliada con preparación, diferencias entre solicitudes sérica/eritrocitaria, pasos, preguntas frecuentes y contacto. Conserva URL y medición.
- Retirada la instrucción general de evitar exposición 48 horas antes en tres páginas; se remite a las indicaciones del profesional solicitante y se pide informar exposición reciente.
- Consulta particular, glicemia y colinesterasa sérica: textos específicos, menos repetición y proceso más claro.
- Brigadas: pregunta adaptada al servicio, tanto en texto visible como en FAQ estructurado.
- Corrección de “con con” y sustitución de afirmaciones de liderazgo en los pies de páginas revisadas.

## Parte 3: alcance y resultados
- 91 URL del sitemap renderizadas localmente con el código del sitio en 320, 390 y 1440 px (273 comprobaciones).
- Sin errores JavaScript. Una alerta de desbordamiento transitoria en ecografías al cambiar el ancho desapareció al esperar a que terminara la transición del menú; no se modificó CSS por esa alerta.
- Menú comprobado en inicio, servicios, guía de colinesterasa, consulta particular, ecografías e imágenes en inglés: apertura y cierre con Escape correctos.
- Preguntas desplegables de la nueva guía comprobadas. Inspección visual de la guía en móvil y escritorio.
- Todos los enlaces wa.me detectados en las 91 páginas apuntan al número 573128274796. No se enviaron mensajes ni formularios.
- Una carga GTM por página salvo política de privacidad, que no incluye GTM. No se detectó carga directa adicional gtag.js en el HTML auditado.
- Formulario de inicio: destino FormSubmit a calidad@labccosas.com. El evento form_submit_attempt indica intento de envío, no recepción confirmada.
- Contenedor público GTM-KFW5WLWP consultado: su sección resource contiene una etiqueta Google G-TQETH9BJ9P activada en gtm.init. No contiene etiquetas de eventos personalizadas que transmitan los eventos de WhatsApp del dataLayer. No se infiere de ello que no exista medición automática de enlaces salientes o eventos derivados configurados dentro de GA4.

## Límites y siguiente trabajo
- Pruebas locales con solicitudes externas bloqueadas para no contaminar Analytics: no certifican fuentes externas, velocidad real ni recepción de eventos.
- Confirmar en GTM/GA4 la medición de clics WhatsApp/teléfono, eventos clave y deduplicación. Ambos equipos remotos estaban offline durante la auditoría.
- Revisar rendimiento real (Lighthouse/Core Web Vitals) por separado. El vídeo del inicio pesa aproximadamente 8,7 MiB y se carga condicionado a escritorio y preferencia de movimiento; no se obtuvo puntuación de velocidad.
- Pendiente revisión de indexación en Search Console acordada para el 26 de octubre. Sitemap procesado no equivale a páginas indexadas.

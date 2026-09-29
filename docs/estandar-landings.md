# Estándar visual LABCCO — versión 2

Actualizado: 29 de septiembre de 2026. Modelo visual de espermograma y ADN aprobado por el usuario. No equivale a auditoría clínica, legal o SEO terminada.

## Implementación

`assets/css/labcco-landings.css` concentra los componentes y ajustes compartidos. Se carga después del CSS de cada landing. Aplicado a las landings comerciales. `assets/css/labcco-mobile.css` y `assets/js/labcco-mobile.js` añaden ajustes compartidos de navegación, foco, menús y ancho a las páginas de contenido, incluidos inicio y portafolio. No reemplazan las mediciones ni los enlaces existentes.

- Azul principal #004a99; azul secundario #0077aa; celeste #0099cc.
- Fondo #f5f8fc; superficies blancas; destacados claros #edf7fc.
- Sobre azul: texto blanco y acento #c4edff. El celeste decorativo no sustituye el azul oscuro en botones con texto blanco.
- Sin amarillo recurrente en fondos, bordes, botones, hover ni pie de página. El color original de logos e iconos existentes se conserva. Verde reservado al botón identificable de WhatsApp.
- Tipografía Outfit y logos actuales; tarjetas de 16 px de radio, bordes suaves y sombras discretas. Mantener la forma aprobada, evitando rediseños independientes.
- CTA principal, asesoría contextual y cierre: mismo lenguaje visual, texto específico para cada servicio. No publicar tarifas de paternidad; contacto por WhatsApp.

## Componentes

1. Hero: servicio y localidad, beneficio confirmado, CTA principal y alternativa útil.
2. Accesos internos a las secciones de la página; destinos reales, legibles y tocables.
3. Diferenciales verificables y bloque de confianza específico, cuando corresponda.
4. Tarjetas de modalidades para facilitar la elección. Patrón rescatado de ADN y compatible con tipos de espermograma.
5. Proceso paso a paso: componente de ADN reutilizable solo con la operación confirmada de cada servicio. No copiar procesamiento UdeA ni tiempos a otras páginas.
6. Preparación y documentos: bloque celeste propio de cada servicio.
7. Información educativa, tablas y otros módulos necesarios. No suprimir contenido por uniformidad visual.
8. CTA final, ubicación, horarios y servicios relacionados pertinentes.

El orden puede adaptarse a la intención de búsqueda; no todas las páginas necesitan todos los módulos. Las cifras anuales de pacientes van únicamente en inicio. El respaldo universitario se limita a ADN.

## Móvil y accesibilidad

- Menú compacto hasta 900 px, estado aria-expanded, cierre con Escape y foco visible.
- Botones principales de ancho completo en móvil; objetivos de al menos 44 px.
- Preparación con encabezado en flujo, sin solapar el texto; tarjetas con margen interior suficiente.
- Proceso de ADN en cinco columnas en escritorio y lista compacta en pantallas menores.
- Tablas amplias dentro de una región con desplazamiento horizontal; no ampliar toda la página.
- Contenido visible aunque falle JavaScript; respetar movimiento reducido.
- Revisar 320, 390, 768, 900, 1024 y 1440 px antes de replicar masivamente.

## Preservación y límites de esta versión

Conservar URLs, canonical, textos, metadatos y scripts de medición en esta adaptación visual. No duplicar GTM ni incorporar eventos nuevos. Las vistas previas descargables desactivan GTM para no contaminar la analítica.

Hay asuntos heredados que requieren una revisión posterior antes de considerar las landings completas: enlaces institucionales con #, algunos teléfonos con formato antiguo, FAQ en datos estructurados que debe contrastarse con contenido visible, afirmaciones clínicas y operativas no confirmadas, y parámetros de analítica que requieren revisión. No propagar automáticamente esos defectos al resto del sitio.

En ADN, verificar con LABCCO cifras de precisión, marcadores, condiciones de cada modalidad y plazos. En espermograma, confirmar modalidades/equipos, preparación, interpretación incluida, sala privada y hora límite. Estos textos se preservaron en la propuesta visual, no se certificaron.

## Regla para extender

Comparar la landing con estas dos páginas modelo, conservar sus datos útiles, añadir la hoja compartida, adaptar sus componentes y revisar contraste, anclas, contacto, textos y móvil. Publicar solo dentro de la autorización del usuario. No cambiar de golpe páginas todavía no revisadas.

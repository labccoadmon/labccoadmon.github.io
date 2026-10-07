# Revisión global de landings — 6 de octubre de 2026 (Colombia)

## Estado y alcance

Esta revisión continúa el estándar aprobado de ADN, espermograma e imágenes diagnósticas. No declara el sitio completo al 100% ni garantiza posiciones en Google.

La jerarquía de imágenes ya está publicada desde el commit 4a03419: tarjeta en Inicio, categoría en Servicios, página principal y cinco landings individuales con retorno a la principal.

## Cambios de este bloque

- Ocho páginas ocupacionales por cargo: brigadistas, conductores, soldadores, vigilantes, fumigadores, operadores de retroexcavadora, mantenimiento industrial y trabajadores agrícolas. Se conserva el contenido específico aprobado; se incorporan encabezado completo, accesos internos, proceso, preparación, ubicación, FAQ y servicios relacionados. La consulta SST y las pruebas complementarias siguen cotizadas por separado.
- Embarazo en español: cualitativa y cuantitativa sin ayuno, confirmado nuevamente por el usuario. Se retiran las afirmaciones de semanas exactas, descarte de embarazo ectópico con una medición y detección garantizada en un número fijo de días. Se conserva atención sin cita y resultados el mismo día. Se actualizan metadatos y datos estructurados.
- Embarazo en inglés: preparación sin ayuno, modalidades cualitativa/cuantitativa y entrega el mismo día.
- ITS: RPR no treponémica confirmada por el usuario; se retiran técnicas y paneles heredados no confirmados. Se mantiene una página de información y solicitud de cotización. La oferta detallada sigue pendiente de respuesta del usuario.
- Inglés de ITS: se precisa RPR; no se inventan otras técnicas.
- Contraste corregido en cierres de cotización, con una hoja compartida y reglas específicas. Se mantiene la barra de contacto.
- Inicio: barra superior adaptada a tableta. Servicios: encabezados y tarjetas adaptados a 320 px; eliminado encabezado vacío duplicado de imágenes.

## Verificación realizada

- Inventario público completo de HTML; diferenciación de landings activas, rutas puente y páginas retiradas.
- 50 páginas activas de servicios y navegación revisadas en Chromium a 320, 390, 768, 900, 1024 y 1440 px: 300 vistas. Sin desbordamientos ni anclas rotas después de las correcciones.
- Menús móviles (apertura, cierre con Escape) y FAQ interactiva comprobados en las diez páginas reestructuradas.
- Inspección de capturas de embarazo, ITS, soldadores y brigadistas.
- Enlaces HTML internos contrastados contra el inventario del repositorio.
- La revisión local bloqueó solicitudes externas, incluida analítica. No equivale a medición de Core Web Vitals ni a validación del funcionamiento del contenedor de Google Tag Manager.

## Pregunta agrupada pendiente: ITS

El usuario preguntó qué faltaba exactamente. Se le informó que la página heredada anunciaba ELISA de cuarta generación para VIH; VDRL/FTA-ABS/TPHA para sífilis; cultivo/PCR con antibiograma para gonorrea; PCR/inmunofluorescencia para clamidia; genotipificación para VPH; e IgG/IgM para distinguir infección inicial/recurrente de herpes. También prometía siete pruebas en una sola toma.

RPR ya está confirmado. Falta confirmar el panel realmente ofrecido y qué se procesa directamente o por remisión para VIH, gonorrea, clamidia, herpes y VPH. No restituir esos métodos o promesas sin respuesta. No volver a preguntar si embarazo necesita ayuno.

## Pendientes que siguen abiertos

1. Completar el detalle de ITS con la respuesta operativa del usuario, manteniendo correspondencia ES/EN.
2. Revisión clínica de las demás páginas heredadas. En particular, colinesterasa para empresas aún contiene una instrucción de evitar exposición 48 horas antes y una cifra de 150 empresas agrícolas: comprobar su fundamento y vigencia con LABCCO. El cambio de contraste no certifica ese contenido.
3. Revisar trazabilidad de conversiones en GA4/GTM y datos de Search Console; no declararlos comprobados por validar HTML.
4. Mantener al día el inventario y revisar la utilidad de enlaces entre versiones ES/EN y páginas principales. La página general de imágenes inglesa conserva la estructura previa; no se le ha replicado el directorio visual nuevo de la española.
5. Google Ads y Meta Ads después del cierre del entorno web; no se activan en este bloque.

## Fuentes clínicas consultadas para corregir afirmaciones heredadas

- MedlinePlus: https://medlineplus.gov/spanish/pruebas-de-laboratorio/prueba-de-embarazo/
- NICE NG126: https://www.nice.org.uk/guidance/ng126
- CDC, pruebas de VIH: https://www.cdc.gov/hiv/testing/index.html
- CDC, diagnóstico de sífilis: https://www.cdc.gov/std/treatment-guidelines/syphilis.htm

Estas fuentes informan las explicaciones generales; la oferta y la operación de LABCCO se basan en lo confirmado por el usuario.

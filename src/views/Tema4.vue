<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Equipos de muestreo de aguas
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="flip-right")
        p En los muestreos convencionales para la determinación de los parámetros fisicoquímicos y biológicos que definen la calidad de un cuerpo de agua, es necesario tener en cuenta las siguientes recomendaciones:
        .cajon.color-primario.p-4.mb-4(data-aos="flip-right")
          .row
            .col-1
              img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
            .col-11              
                p El volumen de la muestra debe ser lo suficiente para el análisis requerido y cantidad suficiente en caso de tener que repetir el análisis.
          .row
            .col-1
              img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
            .col-11              
                p Minimizar o en caso extremo evitar que el personal que toma la muestra tenga contacto directo con la muestra.
          .row
            .col-1
              img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
            .col-11              
                p Usar materiales que no contaminen la muestra.
          .row
            .col-1
              img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
            .col-11              
                p Usar equipos que sean de fácil manejo y garanticen la toma de la muestra, la seguridad del operario          
      .col-lg-4
        figure(data-aos="flip-right")
          img(src='@/assets/curso/temas/tema4/img1.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p Según el sitio donde se realizará el muestreo, se definen los equipos manuales a utilizar:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.col-md-4.mb-4.mb-md-0(data-aos="flip-right")
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Tabla 3.
          span  #[i  Equipos para la obtención de la muestra de agua ]
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="flip-right")
        table(border=1)
          thead(style="background-color:#FFAE7E;")
            tr
              th.text-center Sitio             
              th.text-center Equipo
          tbody
          tr
            td #[strong Obtención de muestra puntual o superficial (ejemplo río)]
            td Generalmente de forma manual con un balde o botella de boca ancha que se introduce en el cuerpo de agua y se saca rápidamente una vez se encuentra llena.
          tr 
            td #[strong Obtención de muestra de profundidad (ejemplo embalse)]
            td Las botellas muestreadoras tipo #[i Niskin], #[i Van Dorn] y #[i Ruttner], son dispositivos utilizados para tomar muestras de agua en diferentes profundidades de cuerpos de agua como océanos, lagos o ríos. Estas botellas tienen un diseño que permite la recolección de muestras a profundidades específicas sin que se mezclen con las capas de agua circundantes.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p También existen los equipos automáticos de muestreo de agua, que son de gran utilidad en investigaciones y monitoreo ambiental, ya que permiten obtener datos de manera continua y precisa. Estos equipos se dividen en dos categorías principales, según sus criterios de funcionamiento:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure(data-aos="flip-right")
          img(src='@/assets/curso/temas/tema4/img2.png', alt='Imagen decorativa')
      .col-lg-8(data-aos="flip-right")
        .cajon.tarj-color.p-4.mb-4
          ol.lista-ol
            li
              span.text-bold a). 
              | #[b Basados en el tiempo:] estos equipos recolectan muestras de agua a intervalos de tiempo predefinidos. Esto significa que toman muestras en momentos específicos programados previamente. Este enfoque es útil para obtener una serie temporal de datos.
            li
              span.text-bold b). 
              | #[b Basados en el volumen de muestra:] estos equipos toman muestras de agua en función de las variaciones de flujo en el cuerpo de agua. Responden a cambios en la velocidad o caudal del agua, lo que garantiza que la muestra sea representativa incluso en condiciones de flujo variable.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p Además de la recolección de muestras, se utilizan sondas multiparamétricas que se sumergen directamente en el lugar de muestreo para medir varios parámetros fisicoquímicos en tiempo real. Algunos de los parámetros que pueden medirse con estas sondas incluyen:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
          .col-lg-12.mb-1(data-aos="fade-down-left")
            .tarjeta-avatar-b
              .tarjeta.tarjeta-verde.color-primario(style="background-color:#EEFFDE;margin-left:0px;")
                .p-1
                .row
                  .col-1
                    figure
                      img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width: 100%;")
                  .col-11
                    .mt-3
                    p.p-2 #[b Profundidad:] para conocer la profundidad del cuerpo de agua en el punto de muestreo.
          .col-lg-12.mb-1(data-aos="fade-down-left")
            .tarjeta-avatar-b
              .tarjeta.tarjeta-verde.color-primario(style="background-color:#EEFFDE;margin-left:0px;")
                .p-1
                .row
                  .col-1
                    figure
                      img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width: 100%;")
                  .col-11
                    .mt-3
                    p.p-2 #[b Temperatura:] para medir la temperatura del agua.
          .col-lg-12.mb-1(data-aos="fade-down-left")
            .tarjeta-avatar-b
              .tarjeta.tarjeta-verde.color-primario(style="background-color:#EEFFDE;margin-left:0px;")
                .p-1
                .row
                  .col-1
                    figure
                      img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width: 100%;")
                  .col-11
                    .mt-3
                    p.p-2 #[b Oxígeno disuelto:] para determinar la concentración de oxígeno disuelto en el agua, lo que es crucial para la salud de los ecosistemas acuáticos.
          .col-lg-12.mb-1(data-aos="fade-down-left")
            .tarjeta-avatar-b
              .tarjeta.tarjeta-verde.color-primario(style="background-color:#EEFFDE;margin-left:0px;")
                .p-1
                .row
                  .col-1
                    figure
                      img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width: 100%;")
                  .col-11
                    .mt-3
                    p.p-2 #[b pH:] para medir la acidez o alcalinidad del agua.
          .col-lg-12.mb-1(data-aos="fade-down-left")
            .tarjeta-avatar-b
              .tarjeta.tarjeta-verde.color-primario(style="background-color:#EEFFDE;margin-left:0px;")
                .p-1
                .row
                  .col-1
                    figure
                      img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width: 100%;")
                  .col-11
                    .mt-3
                    p.p-2 #[b Conductividad eléctrica:] para evaluar la capacidad del agua para conducir electricidad, lo que está relacionado con la concentración de sales disueltas.
      .col-lg-4
        figure(data-aos="flip-right")
          img(src='@/assets/curso/temas/tema4/img3.png', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="flip-right")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/img4.png' alt='AvatarTop')
          .tarjeta.tarj-color
            .p-4
              p En cuanto a los equipos de muestreo biológico, estos varían según el grupo de organismos que se desee analizar. Por ejemplo, pueden utilizarse redes de plancton para recolectar organismos microscópicos, trampas para atrapar organismos bentónicos en el fondo del agua, o equipos de pesca eléctrica para estudiar poblaciones de peces. La elección del equipo depende de los objetivos específicos de la investigación biológica.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p En resumen, estos equipos automáticos y sondas son fundamentales en la recopilación de datos continuos y precisos para la monitorización y la investigación de cuerpos de agua, lo que contribuye a comprender mejor la calidad del agua y los ecosistemas acuáticos.

    Separador
    .row
      .col-xl-12       
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 4.1 Ficha técnica de los equipos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Las fichas técnicas de los equipos son documentos esenciales para comprender y utilizar adecuadamente los dispositivos utilizados en el muestreo y análisis de agua. Estas fichas contienen información detallada sobre las especificaciones técnicas y las funciones de manejo de los equipos. Algunos de los datos comunes que se encuentran en una ficha técnica incluyen:
    
    .row.justify-content-center.align-items-center.mb-5
      .cajon.color-primario.p-4.mb-4(data-aos="flip-right")
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            .row
              .col-1
                img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
              .col-11              
                p #[b Año de fabricación:] indica el año en que se produjo el equipo. Esto puede ser relevante para determinar su antigüedad y si necesita actualizaciones o mantenimiento.
            .row
              .col-1
                img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
              .col-11              
                p #[b Modelo:] es el nombre o número de modelo del equipo, que facilita su identificación.
            .row
              .col-1
                img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
              .col-11              
                p #[b Marca:] la marca del fabricante del equipo.
            .row
              .col-1
                img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
              .col-11              
                p #[b Composición:] describe los materiales y componentes que conforman el equipo. Esto puede ser importante para evaluar la durabilidad y la resistencia a condiciones específicas.
            .row
              .col-1
                img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
              .col-11              
                p #[b Características físicas internas y externas:] detalla las características tanto internas como externas del equipo, como dimensiones, peso, capacidad, tipo de pantalla, conexiones, etc.
            .row
              .col-1
                img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
              .col-11              
                p #[b Recomendaciones:] proporciona orientación sobre el uso adecuado del equipo, precauciones de seguridad y mantenimiento recomendado.
            .row
              .col-1
                img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
              .col-11              
                p #[b Modos de uso:] describe cómo utilizar el equipo correctamente, incluidas las funciones específicas y las configuraciones que pueden ser necesarias.
            .row
              .col-1
                img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
              .col-11              
                p #[b Empresa fabricante:] indica la empresa que fabricó el equipo, lo que puede ser útil para obtener información adicional o soporte técnico si es necesario.
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema4/img5.svg', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p Estas fichas técnicas son herramientas valiosas para los profesionales que trabajan con equipos de muestreo y análisis de agua, ya que les permiten comprender a fondo las capacidades y limitaciones de los dispositivos y garantizar su uso eficiente y seguro. Además, proporcionan una referencia útil para el mantenimiento y la calibración de los equipos a lo largo del tiempo. A continuación, se presenta un ejemplo de cómo podría lucir una ficha técnica de un equipo de campo: 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.col-md-4.mb-4.mb-md-0(data-aos="flip-right")
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Tabla 4.
          span  #[i  Ejemplo ficha de campo de un equipo de campo]
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="flip-right")
        table(border=1)
          thead
            tr
              th(style="background-color:#FFAE7E;").text-center #[b Producto]
              td Equipo multiparámetro de doble entrada.
            tr
              th(style="background-color:#FFAE7E;").text-center  #[b Marca] 
              td HACH.
            tr
              th(style="background-color:#FFAE7E;").text-center  #[b Año de fabricación] 
              td 2010.
            tr
              th(style="background-color:#FFAE7E;").text-center  #[b Modelo] 
              td HQ 440D.
            tr
              th(style="background-color:#FFAE7E;").text-center  #[b País de fabricación] 
              td Estados Unidos.
            tr
              th(style="background-color:#FFAE7E;").text-center  #[b Medidas] 
              td 20 cm x 15 cm x 4 cm.
            tr
              th(style="background-color:#FFAE7E;").text-center  #[b Peso] 
              td 1250 gr aproximadamente.
            tr
              th(style="background-color:#FFAE7E;").text-center  #[b Color] 
              td Negro.
            tr
              th(style="background-color:#FFAE7E;").text-center  #[b Características de uso] 
              td 
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | Requiere de baterías AA.
                  li 
                    i.lista-ul__vineta
                    | Verificar que esté actualizado fecha y hora.
                  li 
                    i.lista-ul__vineta
                    | Calibrar antes de usar.
                  li 
                    i.lista-ul__vineta
                    | Validar los parámetros antes de cada muestreo.
                  li 
                    i.lista-ul__vineta
                    | Cuidado con la humedad.
            tr
              th(style="background-color:#FFAE7E;").text-center  #[b Función ] 
              td Medir parámetros #[i in situ] de calidad de agua.
            tr
              th(style="background-color:#FFAE7E;").text-center  #[b Parámetros a analizar] 
              td Oxígeno disuelto, pH, temperatura y conductividad.
            tr
              th(style="background-color:#FFAE7E;").text-center  #[b Mantenimiento ] 
              td 
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | Mantenimiento preventivo cada 6 meses.
                  li 
                    i.lista-ul__vineta
                    | Calibración anual.

    Separador
    .row
      .col-xl-12       
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 4.2 Manuales técnicos de los equipos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p Los manuales técnicos son documentos esenciales que proporcionan instrucciones detalladas sobre cómo utilizar y mantener un equipo de manera segura y efectiva. Estos manuales suelen ser elaborados por el fabricante o por el personal calificado de la empresa que adquiere el equipo. Aquí hay algunos elementos clave que suelen incluirse en los manuales técnicos de los equipos de muestreo y análisis de agua:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema4/img6.svg', alt='Imagen decorativa')
      .col-lg-8(data-aos="flip-right")
        .cajon.tarj-color.p-4.mb-4
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | #[b Introducción:] una breve descripción del equipo y su propósito.
            li 
              i.lista-ul__vineta
              | #[b Especificaciones técnicas:] instrucciones paso a paso para configurar y preparar el equipo antes de su uso.
            li 
              i.lista-ul__vineta
              | #[b Instalación:] instrucciones paso a paso para configurar y preparar el equipo antes de su uso.
            li 
              i.lista-ul__vineta
              | #[b Operación:] cómo utilizar el equipo correctamente, incluidas las funciones específicas y los procedimientos de muestreo.
            li 
              i.lista-ul__vineta
              | #[b Calibración:] instrucciones para calibrar el equipo, si es necesario, y cómo verificar su precisión.
            li 
              i.lista-ul__vineta
              | #[b Mantenimiento:] cómo cuidar y mantener el equipo, incluidas las tareas de limpieza y reemplazo de partes o consumibles.
            li 
              i.lista-ul__vineta
              | #[b Solución de problemas:] una guía para identificar y solucionar problemas comunes que puedan surgir durante el uso del equipo.
            li 
              i.lista-ul__vineta
              | #[b Seguridad:] precauciones de seguridad importantes que deben seguirse al utilizar el equipo.
            li 
              i.lista-ul__vineta
              | #[b Almacenamiento:] recomendaciones sobre cómo almacenar el equipo cuando no esté en uso.
            li 
              i.lista-ul__vineta
              | #[b Garantía y soporte:] información sobre la garantía del equipo y cómo obtener soporte técnico o reparaciones en caso de problemas.
            li 
              i.lista-ul__vineta
              | #[b Referencias y recursos:] cualquier otra documentación relevante, como hojas de datos, certificados de calibración, y datos de contacto del fabricante o proveedor.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p Estos manuales son valiosos recursos para garantizar que los equipos se utilicen adecuadamente, se mantengan en buen estado y se obtengan resultados precisos y confiables en las operaciones de muestreo y análisis de agua.

    Separador
    .row
      .col-xl-12       
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 4.3 Técnicas de mantenimiento
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p El mantenimiento de los equipos utilizados en las operaciones de muestreo y análisis del agua es fundamental para asegurar la precisión y confiabilidad de los resultados, así como para garantizar la seguridad de los trabajadores y la eficiencia operativa. Algunos de los beneficios clave del mantenimiento de equipos son:
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-6.mb-1(data-aos="fade-down-left")
        .tarjeta-avatar-b
          .tarjeta.tarjeta-verde.color-primario(style="background-color:#EEFFDE;margin-left:0px;")
            .p-1
            .row
              .col-1
                figure
                  img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width: 100%;")
              .col-11
                .mt-3
                p.p-2 #[b Reducción de costos:] el mantenimiento preventivo ayuda a evitar costosas reparaciones y reemplazos de equipos debido a fallas mayores. Además, minimiza los costos adicionales relacionados con el tiempo de inactividad y la interrupción de las operaciones.
      .col-lg-6.mb-1(data-aos="fade-down-left")
        .tarjeta-avatar-b
          .tarjeta.tarjeta-verde.color-primario(style="background-color:#EEFFDE;margin-left:0px;")
            .p-1
            .row
              .col-1
                figure
                  img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width: 100%;")
              .col-11
                .mt-3
                p.p-2 #[b Mayor durabilidad:] los equipos que se mantienen regularmente tienden a tener una vida útil más larga, lo que significa que pueden seguir siendo utilizados de manera efectiva durante más tiempo antes de necesitar ser reemplazados.
      .col-lg-6.mb-1(data-aos="fade-down-left")
        .tarjeta-avatar-b
          .tarjeta.tarjeta-verde.color-primario(style="background-color:#EEFFDE;margin-left:0px;")
            .p-1
            .row
              .col-1
                figure
                  img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width: 100%;")
              .col-11
                .mt-3
                p.p-2 #[b Confianza en los resultados:] los equipos bien mantenidos son más propensos a proporcionar mediciones y resultados precisos, lo que es esencial en el muestreo y análisis de agua, donde la exactitud es crítica.
      .col-lg-6.mb-1(data-aos="fade-down-left")
        .tarjeta-avatar-b
          .tarjeta.tarjeta-verde.color-primario(style="background-color:#EEFFDE;margin-left:0px;")
            .p-1
            .row
              .col-1
                figure
                  img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width: 100%;")
              .col-11
                .mt-3
                p.p-2 #[b Seguridad:] el mantenimiento adecuado también contribuye a garantizar la seguridad de los trabajadores al reducir el riesgo de accidentes causados por equipos defectuosos.
      .col-lg-6.mb-1(data-aos="fade-down-left")
        .tarjeta-avatar-b
          .tarjeta.tarjeta-verde.color-primario(style="background-color:#EEFFDE;margin-left:0px;")
            .p-1
            .row
              .col-1
                figure
                  img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width: 100%;")
              .col-11
                .mt-3
                p.p-2 #[b Cumplimiento normativo:] en muchas industrias y sectores, el mantenimiento regular de equipos es un requisito legal y regulatorio. Cumplir con estas normativas es esencial para evitar sanciones y multas.
      .col-lg-6.mb-1(data-aos="fade-down-left")
        .tarjeta-avatar-b
          .tarjeta.tarjeta-verde.color-primario(style="background-color:#EEFFDE;margin-left:0px;")
            .p-1
            .row
              .col-1
                figure
                  img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width: 100%;")
              .col-11
                .mt-3
                p.p-2 #[b Eficiencia operativa:] los equipos en buen estado operan de manera más eficiente, lo que puede traducirse en ahorros de tiempo y recursos en el proceso de muestreo y análisis de agua.                

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p El mantenimiento de equipos puede ser clasificado en diferentes tipos, dependiendo de la estrategia y los objetivos de mantenimiento. Los principales tipos de mantenimiento incluyen:
    .tarjeta.tarjeta-verde.p-4
      SlyderA(tipo="b")(data-aos="flip-right")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Mantenimiento preventivo
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Este enfoque implica la realización de inspecciones y tareas de mantenimiento de rutina en los equipos de manera programada, incluso si no muestran signos de falla. El objetivo es prevenir problemas antes de que ocurran. Se llevan a cabo actividades como la limpieza, lubricación, calibración y reemplazo de piezas desgastadas de manera regular.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img7.png', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Mantenimiento correctivo
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Se realiza en respuesta a una falla o problema identificado en un equipo. El objetivo es corregir la falla y restaurar el equipo a su funcionamiento normal. Puede ser planificado o no planificado, dependiendo de si se anticipa la falla o no.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img8.png', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Mantenimiento predictivo
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p En este enfoque, se utilizan herramientas de monitoreo y técnicas de diagnóstico para predecir cuándo es probable que ocurra una falla en un equipo. Se basa en la observación de indicadores de desempeño y la recopilación de datos para tomar decisiones informadas sobre cuándo llevar a cabo el mantenimiento.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img9.png', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Mantenimiento proactivo
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Este tipo de mantenimiento implica la identificación de problemas potenciales antes de que se conviertan en fallas. Se toman medidas para abordar las causas raíz de los problemas y prevenir futuras fallas. Es un enfoque más estratégico que busca mejorar continuamente la confiabilidad del equipo.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img10.png', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Mantenimiento de emergencia
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Este tipo de mantenimiento se realiza en situaciones de emergencia cuando un equipo ha fallado inesperadamente y se requiere una reparación inmediata para minimizar el tiempo de inactividad.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img11.png', alt='Imagen decorativa')
    Separador
    .row
      .col-xl-12       
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 4.4 Técnicas de calibración
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p La calibración de equipos utilizados en el muestreo y análisis de agua es un proceso esencial para garantizar la precisión y confiabilidad de las mediciones. Algunas de las técnicas comunes de calibración incluyen:
    .cajon.tarj-color.p-4.mb-4      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8(data-aos="flip-right")
          .row
            .col-1
              img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
            .col-11              
              p #[b Calibración por puntos:] en esta técnica, se ajusta un equipo utilizando uno o más puntos de calibración conocidos. Se realizan mediciones en estos puntos de referencia y se ajusta el equipo para que sus lecturas coincidan con los valores conocidos. Esto es común en equipos como medidores de pH y conductividad.
          .row
            .col-1
              img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
            .col-11              
              p #[b Calibración por curva de calibración:] en lugar de ajustar el equipo en puntos individuales, se utiliza una curva de calibración que relaciona las lecturas del equipo con los valores conocidos. Se crea una ecuación o curva que permite la conversión de las lecturas del equipo en valores reales. Este enfoque se utiliza en equipos que generan curvas de respuesta, como espectrofotómetros.
          .row
            .col-1
              img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
            .col-11              
              p #[b Calibración comparativa:] en esta técnica, se compara el equipo a calibrar con un equipo de referencia o patrón de calibración. Se realizan mediciones simultáneas en ambos equipos y se ajusta el equipo a calibrar para que coincida con las lecturas del equipo de referencia. Esto se utiliza en situaciones donde es importante garantizar que dos equipos proporcionen mediciones consistentes.
          .row
            .col-1
              img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
            .col-11              
              p #[b Calibración de parámetros múltiples:] algunos equipos pueden requerir la calibración de múltiples parámetros simultáneamente. En este caso, se realizan calibraciones separadas para cada parámetro y se ajusta el equipo en consecuencia.
          .row
            .col-1
              img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
            .col-11              
              p #[b Calibración externa:] en ocasiones, se utiliza un laboratorio externo o una entidad de calibración certificada para llevar a cabo la calibración de equipos. Esto garantiza la trazabilidad de las mediciones a estándares reconocidos internacionalmente.
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/tema4/img12.svg', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="flip-right")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/imginte.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#FFEBDF")
            .p-4
            p.p-2 Es importante destacar que la calibración debe ser realizada por personal capacitado y siguiendo procedimientos documentados. Además, debe llevarse a cabo de manera regular, ya que los equipos pueden desviarse con el tiempo debido al desgaste y otros factores. La calibración adecuada asegura que los resultados de las mediciones sean precisos y confiables, lo que es fundamental en aplicaciones relacionadas con la calidad del agua y la toma de decisiones.
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Aspectos generales del agua

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure(data-aos="flip-right")
          img(src="@/assets/curso/temas/tema1/img1.png", alt="Imagen decorativa")
      .col-lg-8
        p  El agua se considera el elemento fundamental en nuestro planeta, ya que desempeña un papel crítico en una amplia gama de procesos tanto físicos como químicos. Además, sirve como hábitat esencial para una variedad de organismos acuáticos y semiacuáticos, así como para otros seres que dependen directa o indirectamente de este recurso vital.
        p Sin embargo, a lo largo del tiempo y debido a diversos factores como la actividad humana, cambios en las condiciones geofísicas y químicas, la ubicación geográfica y la presencia o ausencia de flora y fauna, las características y la composición del agua pueden experimentar variaciones significativas.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p A continuación, se presentan los aspectos generales relacionados con características de aguas crudas, tratadas y residuales:
        .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img2_1.png", alt="Imagen decorativa")
          .crd_hover_txt--body
            .icono  
              img(src="@/assets/curso/temas/tema1/flecha.svg", alt="Imagen decorativa")
            h4.mb-3 Agua cruda o superficial                    
            p.mb-0 Son todos aquellos cuerpos de agua que se encuentran en la superficie de la Tierra y que se forman por escorrentía producto de las precipitaciones o por el afloramiento de aguas subterráneas son aguas en estado natural, que no han sido sometidas a procesos de tratamiento. 

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img3_1.png", alt="Imagen decorativa")
          .crd_hover_txt--body
            .icono  
              img(src="@/assets/curso/temas/tema1/flecha.svg", alt="Imagen decorativa")
            h4.mb-3 Agua tratada o potable
            p.mb-3 Es el agua que se utiliza para labores domésticas en general, como consumo humano, higiene personal, preparar alimentos y lavado de carros, casas, pisos.
            p.mb-0 Según la Organización Mundial de la Salud (OMS, 2011), el agua potable se considera apta para el consumo humano cuando es incolora, inolora, insípida.


      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img4_1.png", alt="Imagen decorativa")
          .crd_hover_txt--body
            .icono  
              img(src="@/assets/curso/temas/tema1/flecha.svg", alt="Imagen decorativa")
            h4.mb-3 Agua residual
            p.mb-0 Resultan de actividades antropogénicas. Su falta o indebido tratamiento puede generar graves problemas de contaminación alternando los ciclos biogeoquímicos.
            ul.lista-ul
              li
                i.fas.fa-check
                | #[b Físicos:] barreras como rejillas y filtros que impiden el paso de elementos.
              li
                i.fas.fa-check
                | #[b Químicos:] adición de elementos (como cloro, ozono), biológicos (raíces de plantas, bacterias limpiadoras).
              li
                i.fas.fa-check
                | #[b Combinados:] físicos y químicos.

    Separador
    .row
      .col-xl-12       
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.1 Propiedades

    .cajon.tarj-color.p-4.mb-4      
      p El agua participa en la mayoría de los procesos biológicos, físicos y químicos que se desarrollan en el planeta, haciendo que muchos procesos de las actividades humanas se relacionen directamente (Galvín, 2022).
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Algunas de sus propiedades más destacadas son:
    
    .row
      .col-lg-7
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/imgt.svg' alt='AvatarTop')(style="max-width: 55%;margin-top: -15px;")
          .tarjeta.tarjeta--azul.tituhoja(style="background-color:#C1E29A;margin-left: -16%;")
            .row.justify-content-center.align-items-center              
              .col-lg-12
                h3(style="color:#264100").mt-2 Propiedades físicas
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/tema1/img5.png", alt="Imagen decorativa")
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
                    p El agua se puede encontrar en la naturaleza en estado sólido, líquido y gaseoso.
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
                    p Es inolora, incolora, insípida.
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
                    p Su punto de congelación es a 0 °C (grados Celsius) mientras que el punto de ebullición es a 100 °C (al nivel del mar).
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
                    p Tiene la capacidad de absorber calor antes de que suba su temperatura. 
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
                    p Tiende a unirse con otras sustancias en vez de separarse.
    .row
      .col-lg-7
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/imgt.svg' alt='AvatarTop')(style="max-width: 55%;margin-top: -15px;")
          .tarjeta.tarjeta--azul.tituhoja(style="background-color:#C1E29A;margin-left: -16%;")
            .row.justify-content-center.align-items-center              
              .col-lg-12
                h3(style="color:#264100").mt-2 Propiedades químicas
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.tarj-color.p-4.mb-4
          ul.lista-ul
            li 
              i.fas.fa-circle.fa-2xs
              | El agua pura es neutral (pH de 7), es decir que no es ácida ni básica.
            li 
              i.fas.fa-circle.fa-2xs
              | La molécula del agua tiene carga eléctrica positiva y negativa, aspecto que facilita la adhesión con otras moléculas.
            li 
              i.fas.fa-circle.fa-2xs
              | Reacciona con elementos formando óxidos ácidos, óxidos básicos e hidratos.
            li 
              i.fas.fa-circle.fa-2xs
              | Reacciona con elementos clasificados como metales, no metales.
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/tema1/img6.png", alt="Imagen decorativa")        
    .row
      .col-lg-7
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/imgt.svg' alt='AvatarTop')(style="max-width: 55%;margin-top: -15px;")
          .tarjeta.tarjeta--azul.tituhoja(style="background-color:#C1E29A;margin-left: -16%;")
            .row.justify-content-center.align-items-center              
              .col-lg-12
                h3(style="color:#264100").mt-2 Propiedades microbiológicas
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p En el agua residen organismos cuya concentración varía dependiendo de factores como:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/tema1/img7.png", alt="Imagen decorativa")
      .col-lg-4
        .cajon.color-primario.p-4.mb-4
          ul.lista-ul
            li 
              i.fas.fa-circle.fa-2xs
              | Tipo de agua.
            li 
              i.fas.fa-circle.fa-2xs
              | Concentración de sustancias.
            li 
              i.fas.fa-circle.fa-2xs
              | Turbiedad.
            li 
              i.fas.fa-circle.fa-2xs
              | Luz.
            li 
              i.fas.fa-circle.fa-2xs
              | Temperatura.
            li 
              i.fas.fa-circle.fa-2xs
              | Microorganismos.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Algunos de los organismos presentes en el agua pueden ser considerados como indicadores de su calidad, por lo cual comúnmente se analizan en la toma de muestras: 

    .tarjeta.tarjeta--amarilla.p-4(style="background-color:#EEFFDE")
      SlyderA(tipo="b")(data-aos="flip-right")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Las bacterias
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Aunque existen bacterias que se desarrollan en el agua, existen otras provenientes del aire y suelo que terminan ocasionalmente en el agua y permanecen vivas por un limitado tiempo.                  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img8.png', alt='Las bacterias')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Los hongos
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Que habitan en el agua pueden desempeñar diversos roles en los ecosistemas acuáticos. Algunos de estos hongos son parásitos, lo que significa que pueden infectar y causar enfermedades en plantas y animales, ya sea de manera permanente u ocasional.
                p Además, existen hongos que actúan como depredadores en el ambiente acuático. Estos hongos se alimentan de otros organismos microscópicos, como protozoos, rotíferos y nemátodos. Funcionan como parte de la cadena alimentaria, ayudando a regular las poblaciones de estas especies y contribuyendo al equilibrio del ecosistema acuático.                  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img9.png', alt='Los hongos')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Los protozoos
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Cuentan con gran facilidad para desplazarse en el agua por medio de sus órganos de locomoción como flagelos, cilios o pies falsos. Algunos se presentan de manera independiente, pero otros son parásitos de vertebrados e invertebrados.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img10.png', alt='Los protozoos')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Las algas
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Su presencia se encuentra directamente relacionada con la temperatura y la luz, produciendo los llamados florecimientos algales o explosiones de crecimientos algales en la superficie del agua. Es posible que no se encuentren en aguas subterráneas debido a su capacidad fotosintética.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img11.png', alt='Las algas')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Los virus
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Que se encuentran en el agua suelen ser parásitos de microorganismos o de organismos invertebrados y vertebrados, y pueden provenir de diversas fuentes, siendo una de las más comunes las aguas residuales contaminadas por aglomeraciones humanas. Los virus presentes en aguas contaminadas pueden representar un riesgo para la salud pública, ya que algunos de estos virus son patógenos y pueden causar enfermedades en humanos y otros organismos.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img12.png', alt='Los virus')

    Separador
    .row
      .col-xl-12       
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.2 Niveles permisivos para consumo
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-secundario.p-4.mb-4
          p  Los niveles permisivos, también conocidos como valores de referencia, son parámetros establecidos previamente con el propósito de servir como puntos de comparación durante el análisis de sistemas de medición. Estos valores son respaldados por profesionales expertos en la materia y están definidos por ley para proporcionar una guía en la interpretación de los resultados obtenidos mediante equipos de medición precisos.
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img13.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p En el contexto de los muestreos de agua, se lleva a cabo la medición de diversos parámetros críticos que son fundamentales para evaluar la calidad del agua y su adecuación para diferentes usos. Estos parámetros incluyen: 
    
    .cajon.tarj-color.p-4.mb-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-2        
          figure
            img(src='@/assets/curso/temas/tema1/img14.svg', alt='Imagen decorativa')
        .col-lg-1
        .col-lg-4
          ul.lista-ul
            li 
              i.fas.fa-circle.fa-2xs
              | Temperatura.
            li 
              i.fas.fa-circle.fa-2xs
              | Potencial de hidrógeno (pH).
            li 
              i.fas.fa-circle.fa-2xs
              | Oxígeno disuelto.
            li 
              i.fas.fa-circle.fa-2xs
              | Conductividad.
        .col-lg-4
          ul.lista-ul
            li 
              i.fas.fa-circle.fa-2xs
              | Nutrientes.
            li 
              i.fas.fa-circle.fa-2xs
              | Contaminantes químicos.
            li 
              i.fas.fa-circle.fa-2xs
              | Sólidos disueltos.
            li 
              i.fas.fa-circle.fa-2xs
              | Sólidos suspendidos.
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Los resultados obtenidos se someten a un proceso de contraste o análisis en comparación con los niveles permitidos previamente establecidos con el fin de determinar la condición de un cuerpo de agua. Es fundamental que los valores de referencia recomendados cumplan con ciertos criterios:
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-6.mb-1(data-aos="fade-down-left")
        .tarjeta-avatar-b
          .tarjeta.tarjeta-verde.color-primario(style="background-color:#EEFFDE;margin-left:0px;")
            .p-1
            .row
              .col-1
                figure
                  img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="margin-top:25px;")
              .col-11
                .mt-3
                p Deben estar respaldados y justificados desde una perspectiva científica sólida.
      .col-lg-6.mb-1(data-aos="fade-down-left")
        .tarjeta-avatar-b
          .tarjeta.tarjeta-verde.color-primario(style="background-color:#EEFFDE;margin-left:0px;")
            .p-1
            .row
              .col-1
                figure
                  img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="margin-top:25px;")
              .col-11
                .mt-3
                p Su implementación debe ser práctica y factible, considerando los recursos y capacidades disponibles.
      .col-lg-6.mb-1(data-aos="fade-down-left")
        .tarjeta-avatar-b
          .tarjeta.tarjeta-verde.color-primario(style="background-color:#EEFFDE;margin-left:0px;")
            .p-1
            .row
              .col-1
                figure
                  img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="margin-top:25px;")
              .col-11
                .mt-3
                p Deben estar dentro de los límites de detección de los métodos analíticos utilizados por los laboratorios para garantizar mediciones precisas.
      .col-lg-6.mb-1(data-aos="fade-down-left")
        .tarjeta-avatar-b
          .tarjeta.tarjeta-verde.color-primario(style="background-color:#EEFFDE;margin-left:0px;")
            .p-1
            .row
              .col-1
                figure
                  img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="margin-top:25px;")
              .col-11
                .mt-3
                p Deben estar diseñados para proteger la salud pública y el medio ambiente.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p En Colombia, el Decreto 1076 de 2015, emitido por el Ministerio de Ambiente y Desarrollo Sostenible (MADS), en su hoja 383 (artículo 2.2.3.3.9.3), establece criterios de calidad admisibles para el uso del recurso hídrico destinado al consumo humano y doméstico. A continuación, se presenta una tabla que recopila los valores de referencia permitidos según esta normativa. Estos valores son esenciales para garantizar la calidad del agua utilizada para consumo humano y doméstico en el país. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.col-md-4.mb-4.mb-md-0
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Tabla 1.
          span  #[i  Valores de referencia permitidos de la calidad de agua para consumo humano y doméstico]
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .tabla-a.color-acento-botones.mb-5        
          table(border=1)
            caption Nota. Tomada de MADS (2015).
            thead(style="background-color:#FFAE7E;")
              tr
                th.text-center Referencia              
                th.text-center Expresado como
                th.text-center Valor (mg/L)
            tbody
            tr
              td Amoníaco
              td N
              td 1,0 
            tr
              td Arsénico
              td As
              td 0,05 
            tr
              td Bario
              td Ba
              td 1,0 
            tr
              td Cadmio
              td Cd
              td 0,01 
            tr
              td Cianuro
              td CN-
              td 0,2 
            tr
              td Cinc
              td Zn
              td 15,0 
            tr
              td Cloruros
              td Cl-
              td 250,0 
            tr
              td Cobre
              td Cu
              td 1,0 
            tr
              td Color 
              td Color real
              td 75 unidades, escala platino, cobalto 
            tr
              td Compuestos fenólicos
              td Fenol 
              td 0,002 
            tr
              td Cromo
              td Cr+6
              td 0,05 
            tr
              td Difeniles policlorados
              td Concentración de agente activo
              td No detectable 
            tr
              td Mercurio 
              td Hg
              td 0,002 
            tr
              td Nitratos
              td N
              td 10,0 
            tr
              td Nitritos
              td N
              td 1,0 
            tr
              td pH
              td Unidades
              td 5,0- 9,0 unidades 
            tr
              td Plata 
              td Ag
              td 0,05 
            tr
              td Plomo 
              td Pb
              td 0,05 
            tr
              td Selenio 
              td Se
              td 0,01 
            tr
              td Sulfatos
              td SO=4
              td 400,0 
            tr
              td Tensoactivos 
              td Sustancias activas al azul de metileno
              td 0,5 
            tr
              td Coliformes totales
              td NMP
              td 20,000 microorganismos/100 ml 
            tr
              td Coliformes fecales
              td NMP
              td 2000 microorganismos/100 ml  
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Además de cumplir con estos criterios, es importante que el cuerpo de agua no presente sustancias que imparten:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img15.png', alt='Imagen decorativa')
      .col-lg-8
        .cajon.color-primario.p-4.mb-4
          .row
            .col-1.desktop
              img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:60%;")
            .col-1.movil
              figure
                img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')
            .col-11              
              p Olor o sabor a los tejidos.
          .row
            .col-1
              img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:60%;")
            .col-11              
              p Turbiedad o color.
          .row
            .col-1
              img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:60%;")
            .col-11              
              p Películas o capas de grasas o aceites flotantes.
          .row
            .col-1
              img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:60%;")
            .col-11              
              p Material flotante (sólidos suspendidos).
          .row
            .col-1
              img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:60%;")
            .col-11
              p Radioisótopos.
          .row
            .col-1
              img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:60%;")
            .col-11              
              p Otras sustancias que no se puedan remover con el tratamiento y que afecten la salud humana.

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          p En el mismo decreto, y tal como se muestra en la siguiente tabla, se establecen los niveles permitidos para aguas de uso:
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/tema1/img16.svg', alt='Imagen decorativa')
        .col-lg-4
          ul.lista-ul
            li 
              i.fas.fa-circle.fa-2xs(style="color:#FFBF9A")
              | Agrícola.
            li 
              i.fas.fa-circle.fa-2xs(style="color:#FFBF9A")
              | Pecuario.
            li 
              i.fas.fa-circle.fa-2xs(style="color:#FFBF9A")
              | Recreativo de contacto primario.
            li 
              i.fas.fa-circle.fa-2xs(style="color:#FFBF9A")
              | Recreativos de contacto secundario.
            li 
              i.fas.fa-circle.fa-2xs(style="color:#FFBF9A")
              | Estético.
            li 
              i.fas.fa-circle.fa-2xs(style="color:#FFBF9A")
              | Preservación de fauna y flora.
            li 
              i.fas.fa-circle.fa-2xs(style="color:#FFBF9A")
              | Vertimientos.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.col-md-4.mb-4.mb-md-0
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Tabla 2.
          span  #[i  Valores de referencia permitidos de la calidad de agua para vertimientos a un cuerpo de agua]
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        table(border=1)
          caption Nota. Tomada de MADS (2015).
          thead(style="background-color:#FFAE7E;")
            tr
              th.text-center Referencia              
              th.text-center Usuario existente
              th.text-center Usuario nuevo
          tbody
          tr
            td pH
            td 5 a 9 unidades.
            td 5 a 9 unidades.
          tr
            td Temperatura 	
            td ≤ 40 °C.
            td ≤ 40 °C.
          tr
            td Material flotante		
            td Ausente.
            td Ausente.
          tr
            td Grasas y aceites	
            td Remoción ≥ 80 % en carga.
            td Remoción ≥ 80 % en carga.
          tr
            td Sólidos suspendidos, domésticos o industriales
            td Remoción ≥ 50 % en carga.
            td Remoción ≥ 80 % en carga.
          tr
            td Demanda bioquímica de oxígeno para desechos domésticos
            td Remoción ≥ 30 % en carga.
            td Remoción ≥ 80 % en carga.
          tr
            td Demanda bioquímica de oxígeno para desechos industriales	
            td Remoción ≥ 20 % en carga.
            td Remoción ≥ 80 % en carga.


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

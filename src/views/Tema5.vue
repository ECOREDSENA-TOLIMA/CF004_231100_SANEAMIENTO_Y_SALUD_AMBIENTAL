<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Productos químicos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="flip-right")
        p Los productos químicos son sustancias fabricadas mediante procesos industriales y tienen una presencia significativa en la vida cotidiana. Son ampliamente utilizados en diversas aplicaciones, desde productos de limpieza y detergentes hasta insecticidas, plásticos y ambientadores. Además, se encuentran en sectores como la peluquería, la veterinaria, la jardinería, la fotografía, la construcción, la tintorería y muchas otras industrias.
        .cajon.tarj-color.p-4.mb-4
          p En Colombia, la clasificación de los productos químicos se rige por el Sistema Globalmente Armonizado de Clasificación y Etiquetado de Productos Químicos (SGA) de la Organización de las Naciones Unidas. Este sistema se basa en criterios que incluyen la identificación de los peligros asociados con una sustancia química o mezcla, la revisión de datos sobre los riesgos y la determinación del grado de peligrosidad. Además, se asignan símbolos y palabras de advertencia para comunicar de manera efectiva los peligros asociados con estos productos.

      .col-lg-4
        figure(data-aos="flip-right")
          img(src='@/assets/curso/temas/tema5/img1.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p Según el SGA, algunas de las clases de peligros más comunes incluyen:
    
    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Peligros físicos")
        .col-md-6.mb-4.mb-md-0(data-aos="flip-right")
          p Estos peligros se relacionan con las propiedades físicas de los productos químicos y su capacidad para causar daños debido a su inflamabilidad, explosividad, reactividad química, presión o temperatura. Ejemplos de subclases incluyen inflamables, explosivos, gases comprimidos, sustancias oxidantes, etc.
      
        .col-md-6
          figure(data-aos="flip-right")
            img(src='@/assets/curso/temas/tema5/img2.png', alt='Imagen decorativa')
      .row(titulo="Peligros para la salud")
        .col-md-6.mb-4.mb-md-0(data-aos="flip-right")
          p Estos peligros están asociados con los efectos adversos que los productos químicos pueden tener en la salud humana o animal. Esto incluye categorías como toxicidad aguda, irritación, sensibilización cutánea, carcinogenicidad, toxicidad reproductiva, entre otros.
      
        .col-md-6
          figure(data-aos="flip-right")
            img(src='@/assets/curso/temas/tema5/img3.png', alt='Imagen decorativa')
      .row(titulo="Para el medio ambiente")
        .col-md-6.mb-4.mb-md-0
          p Estos peligros se refieren a la capacidad de los productos químicos para causar daños al medio ambiente, como la toxicidad para los organismos acuáticos, la persistencia en el medio ambiente o la bioacumulación.
      
        .col-md-6
          figure(data-aos="flip-right")
            img(src='@/assets/curso/temas/tema5/img4.png', alt='Imagen decorativa')
      .row(titulo="Para la salud física")
        .col-md-6.mb-4.mb-md-0
          p Estos peligros se relacionan con el impacto físico que un producto químico puede tener en el cuerpo humano o en otros organismos, como quemaduras químicas, daño ocular o asfixia.

      
        .col-md-6
          figure(data-aos="flip-right")
            img(src='@/assets/curso/temas/tema5/img5.png', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-5.mt-4
      .col-lg-10(data-aos="flip-right")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/imginte.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#FFEBDF")
            .p-4
            p.p-2 Es fundamental proporcionar información clara y precisa sobre los peligros asociados a los productos químicos para garantizar su uso seguro. Las etiquetas y las Fichas de Datos de Seguridad (FDS) son herramientas esenciales para comunicar estos riesgos a los trabajadores, los consumidores y aquellos que manipulan productos químicos.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p Las etiquetas suelen incluir símbolos, palabras de advertencia e indicaciones de peligro que indican la naturaleza de los riesgos asociados al producto químico. Esto permite a las personas tomar precauciones adecuadas al manipular, almacenar o desechar estos productos. A continuación, se muestran las indicaciones de peligro utilizadas por el SGA:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.col-md-4.mb-4.mb-md-0(data-aos="flip-right")
        .titulo-sexto.color-acento-contenido.offset-2
          h5 Figura 1.
          span  #[i  Imágenes utilizadas por el SGA con indicaciones de peligro]
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="flip-right")
        figure
          img(src='@/assets/curso/temas/tema5/img6.svg', alt='Imágenes utilizadas por el SGA con indicaciones de peligro ')
        figcaption Nota: MADS (2017).
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
      p Además del etiquetado y la ficha, algunos productos tienen recomendaciones como: 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="flip-right")
        .cajon.tarj-color.p-4.mb-4
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Mantener fuera del alcance de los niños.
            li 
              i.lista-ul__vineta
              | No utilizar el producto si no se encuentra etiquetado.
            li 
              i.lista-ul__vineta
              | Si requiere repetir, utilizar el producto menos peligroso.
            li 
              i.lista-ul__vineta
              | Leer la etiqueta e instrucciones de uso antes de utilizar. 
            li 
              i.lista-ul__vineta
              | Utilizar las dosis recomendadas.
            li 
              i.lista-ul__vineta
              | Evite trasvasar el contenido. 
            li 
              i.lista-ul__vineta
              | Evitar fumar y consumir alimentos, mientras manipula el producto.
            li 
              i.lista-ul__vineta
              | Evitar usar el producto en casa si la etiqueta dice que es de uso profesional.
            li 
              i.lista-ul__vineta
              | Procurar no mezclar productos.
            li 
              i.lista-ul__vineta
              | No verter el producto en los desagües.
            li 
              i.lista-ul__vineta
              | Evitar utilizar agua para limpiar derrames (si el producto es inflamable).

      .col-lg-4
        figure(data-aos="flip-right")
          img(src='@/assets/curso/temas/tema5/img7.svg', alt='Imagen decorativa')


    Separador
    .row
      .col-xl-12       
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 5.1 Método de medición
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p Los métodos que se utilizan para medir los productos químicos son:
    

    .row.justify-content-center.mb-5
      .col-lg-4.mb-4.mb-lg-0.tarjeta(data-aos="flip-right")
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-11.tarjeta-verde 
            figure
              img(src="@/assets/curso/temas/tema5/img8.png", alt="Imagen decorativa")
          .col-lg-11.p-4.tarjeta-verde 
            h3.text-center Activos
            p.mb-0 Estos métodos implican la utilización de un proceso o dispositivo para recolectar muestras de manera deliberada y controlada. Algunos ejemplos de métodos activos son:
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | #[b Muestreo por bomba de aire:] se utiliza una bomba para aspirar el aire a través de un filtro o colector que captura partículas y compuestos químicos presentes en el aire.
              li 
                i.lista-ul__vineta
                | #[b Muestreo de agua mediante bomba:] se utiliza una bomba para recoger muestras de agua de forma controlada y a una velocidad específica.
            br
            br
            br
            br
            br
            br
            br
      .col-lg-4.mb-4.mb-lg-0.tarjeta 
      
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-11.tarjeta-verde
            figure
              img(src="@/assets/curso/temas/tema5/img9.png", alt="Imagen decorativa")
          .col-lg-11.p-4.tarjeta-verde
            h3.text-center Pasivos
            p.mb-0 Estos métodos implican la exposición de un dispositivo de muestreo a la fuente de contaminación durante un período de tiempo determinado. El dispositivo recoge las sustancias químicas de forma pasiva, sin intervención activa. Algunos ejemplos de métodos pasivos son:
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | #[b Muestreo de difusión pasiva:] se utilizan dispositivos que permiten la absorción lenta de compuestos químicos presentes en el aire o el agua. Estos dispositivos capturan sustancias a medida que difunden hacia ellos.
              li 
                i.lista-ul__vineta
                | #[b Muestreo pasivo de suelo o sedimentos:] se colocan dispositivos en el suelo o sedimentos para recoger contaminantes de forma pasiva durante un período de tiempo.
            br
            br
            br


      .col-lg-4.mb-4.mb-lg-0.tarjeta 
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-11.tarjeta-verde
            figure
              img(src="@/assets/curso/temas/tema5/img10.png", alt="Imagen decorativa")
          .col-lg-11.p-4.tarjeta-verde
            h3.text-center Directos
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | Utilizan equipos de campo que realizan la lectura de la concentración del contaminante de manera simultánea.
              li 
                i.lista-ul__vineta
                | Permiten obtener resultados rápidos, instantáneos, precisos y puntuales, con un costo relativamente bajo.
              li 
                i.lista-ul__vineta
                | Los equipos colorimétricos son dispositivos que se basan en el cambio de color que tiene un reactivo al entrar en contacto con un contaminante.
              li 
                i.lista-ul__vineta
                | Los monitores específicos son equipos que ofrecen una lectura electrónica.
              li 
                i.lista-ul__vineta
                | Los monitores de gases y vapores pueden ser eléctricos, térmicos, electromagnéticos, y espectroscopios fotoacústicos.
              li 
                i.lista-ul__vineta
                | Para aerosoles se utilizan equipos ópticos o eléctricos.
  
      
    Separador
    .row
      .col-xl-12       
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 5.2 Hoja de seguridad
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p Las hojas de seguridad, también conocidas como Fichas de Datos de Seguridad (FDS) o Material #[i Safety Data Sheets] (MSDS) en inglés, son documentos esenciales que proporcionan información detallada sobre los peligros asociados con un producto químico o su mezcla. Estas hojas se utilizan para comunicar de manera efectiva la información crítica relacionada con la seguridad y el manejo de productos químicos peligrosos. A continuación, se describen algunos de los aspectos clave que se incluyen en una hoja de seguridad:
    
    .cajon.tarj-color.p-4.mb-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4(data-aos="flip-right")
          figure
            img(src="@/assets/curso/temas/tema5/img11.svg", alt="Imagen decorativa")
        .col-lg-8(data-aos="flip-right")
          .row
            .col-1
              img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
            .col-11              
                p #[b Identificación del producto:] esto incluye el nombre del producto, la composición química, el nombre del fabricante o proveedor y los datos de contacto.
          .row
            .col-1
              img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
            .col-11              
                p #[b Propiedades físicas y químicas:] se detallan las características del producto, como estado físico, color, olor, punto de ebullición, punto de fusión, densidad, solubilidad, entre otros.
          .row
            .col-1
              img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
            .col-11              
                p #[b Identificación de peligros:] aquí se describen los riesgos potenciales asociados con el producto, incluidos los peligros para la salud, la inflamabilidad, la reactividad y otros riesgos específicos.
          .row
            .col-1
              img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
            .col-11              
                p #[b Medidas de primeros auxilios:] se proporcionan instrucciones sobre cómo actuar en caso de exposición o contacto con el producto, incluidas las medidas de primeros auxilios que deben tomarse.
          .row
            .col-1
              img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
            .col-11              
                p #[b Medidas de lucha contra incendios:] esto incluye información sobre cómo controlar y extinguir incendios relacionados con el producto, así como los agentes extintores adecuados.
          .row
            .col-1
              img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
            .col-11              
                p #[b Medidas en caso de derrame:] se detallan las precauciones y los procedimientos adecuados para el manejo de derrames, incluyendo el uso de equipos de protección personal.
          .row
            .col-1
              img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
            .col-11              
                p #[b Almacenamiento y manipulación segura:] se proporcionan recomendaciones sobre cómo almacenar y manipular el producto de manera segura, incluyendo condiciones de temperatura y ventilación.
    .cajon.color-primario.p-4.mb-4
      .row.justify-content-center.align-items-center.mb-5        
        .col-lg-8(data-aos="flip-right")
          .row
            .col-1
              img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
            .col-11              
                p #[b Exposición y control de riesgos:] esto incluye información sobre límites de exposición ocupacional, medidas de control de riesgos y equipos de protección personal recomendados.
          .row
            .col-1
              img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
            .col-11              
                p #[b Propiedades toxicológicas y ecotoxicológicas:] se describen los efectos potenciales del producto en la salud humana y el medio ambiente.
          .row
            .col-1
              img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
            .col-11              
                p #[b Consideraciones medioambientales:] se proporciona información sobre el impacto ambiental del producto y las medidas para minimizar dicho impacto.
          .row
            .col-1
              img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
            .col-11              
                p #[b Eliminación:] se indican los métodos seguros y apropiados para la eliminación del producto y los envases vacíos.
          .row
            .col-1
              img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
            .col-11              
                p #[b Transporte:] se detallan las regulaciones y precauciones relacionadas con el transporte del producto.
          .row
            .col-1
              img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
            .col-11              
                p #[b Información toxicológica y ecológica adicional:] esto incluye datos adicionales sobre la toxicidad y el impacto ecológico del producto.
          .row
            .col-1
              img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
            .col-11              
                p #[b Información sobre regulaciones:] se informa sobre las regulaciones y leyes aplicables relacionadas con el producto químico.
          .row
            .col-1
              img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
            .col-11              
                p #[b Otra información:] cualquier otra información relevante que no haya sido cubierta en las secciones anteriores.
        .col-lg-4
          figure(data-aos="flip-right")
            img(src="@/assets/curso/temas/tema5/img12.svg", alt="Imagen decorativa")
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p Las hojas de seguridad son fundamentales para garantizar un manejo seguro de productos químicos peligrosos en diversos entornos, desde laboratorios hasta lugares de trabajo industriales. Es esencial que el personal que trabaja con productos químicos tenga acceso a estas hojas y comprenda su contenido para minimizar los riesgos asociados con su uso. Además, estas hojas deben actualizarse periódicamente para reflejar cualquier cambio en la información del producto.
    Separador
    .row
      .col-xl-12       
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 5.3 Fichas técnicas
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="flip-right")
        p Las fichas técnicas son documentos esenciales para proporcionar información clave sobre un producto químico en un formato conciso y fácil de entender. Esta información es fundamental para garantizar el uso seguro y adecuado de productos químicos en diversos entornos, desde lugares de trabajo industriales hasta laboratorios y hogares. A continuación, se mencionan los elementos más comunes que se incluyen en una ficha técnica de un producto químico:
        .cajon.color-primario.p-4.mb-4
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | #[b Nombre:] nombre y composición.
            li 
              i.lista-ul__vineta
              | #[b Descripción:] descripción general del producto, uso y función.
            li 
              i.lista-ul__vineta
              | #[b Presentación:] forma de presentación.
            li 
              i.lista-ul__vineta
              | #[b Propiedades físicas y químicas:] olor, color, estado, pH, densidad.
            li 
              i.lista-ul__vineta
              | #[b Modo de empleo:] dónde y cómo aplicarlo, periodo de seguridad, incompatibilidades de aplicación, dosis de aplicación.
            li 
              i.lista-ul__vineta
              | #[b Condiciones de estabilidad:] temperatura de congelación, temperatura de ebullición, solubilidad, compatibilidad.
            li 
              i.lista-ul__vineta
              | #[b Ficha técnica:] incluyendo su fecha de revisión.
      .col-lg-4
        figure(data-aos="flip-right")
          img(src="@/assets/curso/temas/tema5/img13.png", alt="Imagen decorativa")
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="flip-right")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema5/img14.png' alt='AvatarTop')
          .tarjeta.tarj-color
            .p-4
              p Las fichas técnicas desempeñan un papel fundamental en la gestión de la seguridad química y son esenciales para proteger la salud de los trabajadores y minimizar los riesgos asociados con el uso de productos químicos peligrosos. Proporcionan a los usuarios la información necesaria para manipular, almacenar y desechar productos químicos de manera segura y adecuada. Además, ayudan a las organizaciones a cumplir con las regulaciones y normativas de seguridad relacionadas con el manejo de sustancias químicas peligrosas.
    Separador
    .row
      .col-xl-12       
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 5.4 Almacenamiento
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p El almacenamiento adecuado de productos químicos es esencial para garantizar la seguridad en el lugar de trabajo, prevenir accidentes y minimizar los riesgos para la salud humana y el medio ambiente. 
        p Se pueden clasificar de varias formas; por ejemplo:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4(data-aos="flip-right")
        figure
          img(src="@/assets/curso/temas/tema5/img15.png", alt="Imagen decorativa")
      .col-lg-4
        .cajon.color-primario.p-4.mb-4
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Orgánicos.
            li 
              i.lista-ul__vineta
              | Inorgánicos.
            li 
              i.lista-ul__vineta
              | Sólidos.
            li 
              i.lista-ul__vineta
              | Líquidos.
            li 
              i.lista-ul__vineta
              | Gaseosos.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p Sin embargo, la principal y más segura forma de clasificarlos es acorde a su descripción:
    .cajon.tarj-color.p-4.mb-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-2        
          figure(data-aos="flip-right")
            img(src='@/assets/curso/temas/tema5/img16.svg', alt='Imagen decorativa')
        .col-lg-1
        .col-lg-4
          ul.lista-ul
            li 
              i.fas.fa-circle.fa-2xs
              | Ácidos. 
            li 
              i.fas.fa-circle.fa-2xs
              | Líquidos inflamables. 
            li 
              i.fas.fa-circle.fa-2xs
              | Bases líquidas.
            li 
              i.fas.fa-circle.fa-2xs
              | Oxidantes líquidos. 
        .col-lg-4
          ul.lista-ul
            li 
              i.fas.fa-circle.fa-2xs
              | Gases comprimidos. 
            li 
              i.fas.fa-circle.fa-2xs
              | Sustancias volátiles peligrosas.
            li 
              i.fas.fa-circle.fa-2xs
              | Sustancias líquidas no volátiles peligrosas.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p Por otra parte, se deben almacenar:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="flip-right")
        .cajon.color-primario.p-4.mb-4
          ul.lista-ul
            li 
              i.fas.fa-circle.fa-2xs
              | Ácidos.
            li 
              i.fas.fa-circle.fa-2xs
              | De forma separada. 
            li 
              i.fas.fa-circle.fa-2xs
              | Correctamente etiquetados, indicando su nivel de riesgo.
            li 
              i.fas.fa-circle.fa-2xs
              | Incompatibilidad entre sustancias, como por ejemplo las sustancias combustibles lejos de las oxidantes o tóxicas para evitar posibles reacciones.
            li 
              i.fas.fa-circle.fa-2xs
              | Las sustancias corrosivas en recipientes pequeños y en bandejas o cubetas de contención.
            li 
              i.fas.fa-circle.fa-2xs
              | Las instalaciones deben tener una óptima temperatura para evitar reacciones.
            li 
              i.fas.fa-circle.fa-2xs
              | Productos químicos almacenados por tiempo prolongado es un riesgo porque pueden generar reacciones químicas indeseadas, riesgo de descomposición de la sustancia o deterioro de los recipientes.
            li 
              i.fas.fa-circle.fa-2xs
              | Disponer de una buena ventilación si se almacenan especialmente productos tóxicos e inflamables.
            li 
              i.fas.fa-circle.fa-2xs
              | Utilizar instalaciones eléctricas antiexplosivas.
            li 
              i.fas.fa-circle.fa-2xs
              | Contar sistema de drenaje seguro en caso de derrames.

      .col-lg-4
        figure(data-aos="flip-right")
          img(src='@/assets/curso/temas/tema5/img17.svg', alt='Imagen decorativa')
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

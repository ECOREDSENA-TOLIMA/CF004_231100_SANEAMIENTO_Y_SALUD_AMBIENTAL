<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Productos químicos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p os productos químicos son sustancias fabricadas mediante procesos industriales y tienen una presencia significativa en la vida cotidiana. Son ampliamente utilizados en diversas aplicaciones, desde productos de limpieza y detergentes hasta insecticidas, plásticos y ambientadores. Además, se encuentran en sectores como la peluquería, la veterinaria, la jardinería, la fotografía, la construcción, la tintorería y muchas otras industrias.
        .cajon.tarj-color.p-4.mb-4
          p En Colombia, la clasificación de los productos químicos se rige por el Sistema Globalmente Armonizado de Clasificación y Etiquetado de Productos Químicos (SGA) de la Organización de las Naciones Unidas. Este sistema se basa en criterios que incluyen la identificación de los peligros asociados con una sustancia química o mezcla, la revisión de datos sobre los riesgos y la determinación del grado de peligrosidad. Además, se asignan símbolos y palabras de advertencia para comunicar de manera efectiva los peligros asociados con estos productos.

      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema5/img1.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Según el SGA, algunas de las clases de peligros más comunes incluyen:
    
    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Peligros físicos")
        .col-md-6.mb-4.mb-md-0
          p Estos peligros se relacionan con las propiedades físicas de los productos químicos y su capacidad para causar daños debido a su inflamabilidad, explosividad, reactividad química, presión o temperatura. Ejemplos de subclases incluyen inflamables, explosivos, gases comprimidos, sustancias oxidantes, etc.
      
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema5/img2.png', alt='Imagen decorativa')
      .row(titulo="Peligros para la salud")
        .col-md-6.mb-4.mb-md-0
          p Estos peligros están asociados con los efectos adversos que los productos químicos pueden tener en la salud humana o animal. Esto incluye categorías como toxicidad aguda, irritación, sensibilización cutánea, carcinogenicidad, toxicidad reproductiva, entre otros.
      
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema5/img3.png', alt='Imagen decorativa')
      .row(titulo="Para el medio ambiente")
        .col-md-6.mb-4.mb-md-0
          p Estos peligros se refieren a la capacidad de los productos químicos para causar daños al medio ambiente, como la toxicidad para los organismos acuáticos, la persistencia en el medio ambiente o la bioacumulación.
      
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema5/img4.png', alt='Imagen decorativa')
      .row(titulo="Para la salud física")
        .col-md-6.mb-4.mb-md-0
          p Estos peligros se relacionan con el impacto físico que un producto químico puede tener en el cuerpo humano o en otros organismos, como quemaduras químicas, daño ocular o asfixia.

      
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema5/img5.png', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-5.mt-4
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/imginte.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#FFEBDF")
            .p-4
            p.p-2 Es fundamental proporcionar información clara y precisa sobre los peligros asociados a los productos químicos para garantizar su uso seguro. Las etiquetas y las Fichas de Datos de Seguridad (FDS) son herramientas esenciales para comunicar estos riesgos a los trabajadores, los consumidores y aquellos que manipulan productos químicos.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Las etiquetas suelen incluir símbolos, palabras de advertencia e indicaciones de peligro que indican la naturaleza de los riesgos asociados al producto químico. Esto permite a las personas tomar precauciones adecuadas al manipular, almacenar o desechar estos productos. A continuación, se muestran las indicaciones de peligro utilizadas por el SGA:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.col-md-4.mb-4.mb-md-0
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Figura 1.
          span  #[i  Imágenes utilizadas por el SGA con indicaciones de peligro]
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema5/img6.svg', alt='En la figura 1 se muestran los indicadores de peligro según el SGA.')
        figcaption Nota: MADS (2017).
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
      p Además del etiquetado y la ficha, algunos productos tienen recomendaciones como: 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
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
        figure
          img(src='@/assets/curso/temas/tema5/img7.svg', alt='Imagen decorativa')


    Separador
    .row
      .col-xl-12       
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 5.1 Método de medición
      
    Separador
    .row
      .col-xl-12       
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 5.2 Hoja de seguridad
      
    Separador
    .row
      .col-xl-12       
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 5.3 Fichas técnicas
      
    Separador
    .row
      .col-xl-12       
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 5.4 Almacenamiento
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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Muestreo de agua
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los muestreos de agua son esenciales para evaluar la calidad de un cuerpo de agua, y su enfoque puede variar según los objetivos y las circunstancias específicas. Se definen como un conjunto de procedimientos y actividades diseñados para obtener muestras que permitan estimar valores y verificar hipótesis. En esencia, implican la extracción de una porción representativa de agua con el fin de analizar sus propiedades.
          br
          br
          | La clave para llevar a cabo muestreos efectivos radica en seleccionar momentos que reflejen fielmente las características del cuerpo de agua en cuestión, así como las variaciones inherentes al lugar de muestreo. La frecuencia de estos muestreos debe determinarse considerando los objetivos específicos y garantizando las condiciones de seguridad necesarias, como se establece en las pautas del Icontec de 1995.
    Separador
    .row
      .col-xl-12       
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 2.1 Métodos de muestreo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-down-left")
        p La selección de los métodos de muestreo dependerá de las situaciones y de los objetivos que se han propuesto. Estos métodos pueden ser:

    .tarjeta.tarjeta-verde.p-4
      SlyderA(tipo="b")(data-aos="flip-right")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Muestreo puntual o simple
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Se refiere a la práctica de recolectar muestras de agua en un lugar específico en un momento determinado, sin tener en cuenta las variaciones temporales. En este enfoque, se toma una sola muestra en un instante específico y en un sitio concreto, sin considerar los cambios que pueden ocurrir en la calidad del agua a lo largo del tiempo.
                p Este tipo de muestreo es útil en situaciones donde se necesita una instantánea de las condiciones del agua en un lugar determinado y no es necesario realizar un seguimiento continuo de las fluctuaciones en la calidad del agua. Por ejemplo, puede ser utilizado para verificar el cumplimiento de los estándares de calidad del agua en un punto de descarga industrial o para evaluar la calidad del agua en un momento específico en un río o lago.
                p Es importante tener en cuenta que el muestreo puntual puede no capturar las variaciones diurnas o estacionales en la calidad del agua, por lo que en algunas situaciones, especialmente aquellas que requieren un monitoreo a largo plazo, puede ser necesario combinar el muestreo puntual con un muestreo continuo o programado en diferentes momentos y condiciones.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img2.png', alt='Muestreo puntual o simple')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Muestreo compuesto
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Es una técnica que implica mezclar varias muestras individuales de agua de diferentes momentos y lugares para obtener una muestra representativa de la calidad del agua en un área o sistema específico. Este enfoque se utiliza para obtener una visión más precisa y completa de la calidad del agua a lo largo del tiempo o en una ubicación particular, reduciendo la variabilidad inherente a las muestras individuales. Se utiliza en monitoreo ambiental, evaluación de sistemas de tratamiento de agua y otros contextos donde se necesita una representación robusta de la calidad del agua.                
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img3.png', alt='Muestreo compuesto')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Muestreo continuo
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Es una técnica que implica la recolección constante y automatizada de muestras de agua a lo largo del tiempo. Se utiliza en aplicaciones como el monitoreo en tiempo real de la calidad del agua en sistemas de abastecimiento, estaciones de monitoreo ambiental y plantas de tratamiento de aguas residuales. Esta técnica permite detectar cambios y tendencias a lo largo del tiempo y es crucial para el control en tiempo real de la calidad del agua en diversas aplicaciones.                
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img4.png', alt='Muestreo continuo')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Muestreo discontinuo
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Es una técnica que implica la recolección de muestras en momentos específicos y planificados en lugar de un monitoreo continuo. Las muestras se toman en intervalos predefinidos, pero no se obtienen datos en tiempo real y se analizan posteriormente en un laboratorio. Este enfoque es adecuado para situaciones donde un monitoreo constante no es necesario o factible, como en estudios de investigación o evaluaciones periódicas de la calidad del agua en fuentes naturales o sistemas de abastecimiento. Sin embargo, no proporciona información instantánea sobre la calidad del agua entre los momentos de muestreo.                
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img5.png', alt='Muestreo discontinuo')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Muestreo en serie
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Es una técnica que implica la recolección continua y frecuente de muestras de agua a lo largo del tiempo, proporcionando datos en tiempo real sobre la calidad del agua. Este método se utiliza en situaciones donde se necesita un monitoreo detallado y constante, como en estudios de flujos de agua, control de procesos industriales y en investigaciones científicas. Permite capturar cambios inmediatos en la calidad del agua y es esencial para la toma de decisiones críticas en tiempo real.                
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img6.png', alt='Muestreo en serie')
    Separador
    .row
      .col-xl-12       
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 2.2 Tipos de alícuotas y recipientes

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-down-left")
        p Las alícuotas son porciones de muestras que se toman en el sitio de muestreo y mantienen las propiedades físicas y químicas de la sustancia original.  En el caso de muestreos de aguas residuales, estas alícuotas son esenciales. Para recolectar estas alícuotas, se utilizan recipientes específicos que deben cumplir ciertos criterios:
        .row
          .col-1
            img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
          .col-11              
              p Deben ser resistentes y preferiblemente de plástico para reducir costos en muestreos rutinarios.
        .row
          .col-1
            img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
          .col-11              
              p Deben ser estériles para evitar la contaminación de la muestra.
        .row
          .col-1
            img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
          .col-11              
              p Deben tener un cierre hermético para prevenir derrames.
        .row
          .col-1
            img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
          .col-11              
              p Deben permitir la fácil etiquetación o marcado.
          
        .row
          .col-1
            img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
          .col-11              
              p Durante el transporte y almacenamiento, deben garantizar que no haya contaminación cruzada.                    
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img7.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-down-left")
        p En algunos casos, se requieren recipientes especiales para muestras con características particulares. Por ejemplo, muestras microbiológicas pueden necesitar recipientes estériles y oscuros para protegerlas de la luz y la temperatura ambiente.

    row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-down-left")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/imginte.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#FFEBDF")
            .p-4
            p.p-2 La elección del recipiente es crucial para garantizar la calidad de la muestra. Debe minimizar el riesgo de contaminación, no afectar las concentraciones de analitos, ser fácil de limpiar y manejar, resistir temperaturas extremas y no romperse fácilmente. Además, debe ser de un tamaño y forma adecuados, permitir un fácil sellado y transporte, y en algunos casos, ser reutilizable. 
</template>

<script>
export default {
  name: 'Tema2',
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

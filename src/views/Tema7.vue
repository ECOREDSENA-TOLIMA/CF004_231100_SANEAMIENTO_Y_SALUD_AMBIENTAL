<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Normatividad ambiental
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema7/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-4 La normatividad ambiental relacionada con el uso y conservación del agua es esencial para garantizar un manejo adecuado de este recurso vital y promover la sustentabilidad de los ecosistemas. A través de directrices y regulaciones, se busca orientar las prácticas relacionadas con el agua y prevenir la sobreexplotación, la contaminación y otros impactos negativos en los recursos hídricos.
        br
        br
        p Esta normatividad suele abordar diversas áreas, como la calidad del agua, la gestión de aguas residuales, la protección de fuentes de agua, la conservación de ecosistemas acuáticos, la promoción de prácticas sostenibles en la agricultura y la industria, y la participación ciudadana en la gestión del agua, entre otros aspectos.
   
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p En cada país, las leyes y regulaciones específicas pueden variar, pero en general, la normatividad ambiental relacionada con el agua busca equilibrar las necesidades humanas con la conservación de la biodiversidad y la protección de los ecosistemas acuáticos. Además, promueve la eficiencia en el uso del agua y fomenta la adopción de tecnologías y prácticas que minimicen el impacto ambiental.
    .cajon.color-secundario.p-4.mb-4(data-aos="flip-right")
      p El cumplimiento de estas normativas es fundamental para preservar la calidad y disponibilidad del agua para las generaciones futuras y garantizar un entorno saludable para todas las formas de vida que dependen de este recurso.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p La Constitución Política de Colombia de 1991 establece:
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
                    p.p-2 #[b Artículo 79:] “Todas las personas tienen derecho a gozar de un ambiente sano. La ley garantizará la participación de la comunidad en las decisiones que puedan afectarlo. Es deber del Estado proteger la diversidad e integridad del ambiente, conservar las áreas de especial importancia ecológica y fomentar la educación para el logro de estos fines”.
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
                    p.p-2 #[b Artículo 80:] “El Estado planificará el manejo y aprovechamiento de los recursos naturales, para garantizar su desarrollo sostenible, su conservación, restauración o sustitución. Además, deberá prevenir y controlar los factores de deterioro ambiental, imponer las sanciones legales y exigir la reparación de los daños causados. Así mismo, cooperará con otras naciones en la protección de los ecosistemas situados en las zonas fronterizas”. 
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema7/img2.svg', alt='Imagen decorativa')
    Separador
    .row
      .col-xl-12       
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 7.1 Calidad del agua
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p La calidad del agua es un aspecto de vital importancia para la salud humana y la preservación del medio ambiente. En Colombia, se han establecido normativas y decretos que regulan y supervisan la gestión y control de la calidad del agua en sus diferentes usos. Dos decretos clave en este contexto son el Decreto 1575 de 2007 y el Decreto 1975 de 2015.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4(data-aos="flip-right")
        figure
          img(src='@/assets/curso/temas/tema7/img3.png', alt='Imagen decorativa')
      .col-lg-8(data-aos="flip-right")
        .cajon.tarj-color.p-4.mb-4
          p El Decreto 1575 de 2007 se enfoca específicamente en garantizar la seguridad del agua potable destinada al consumo humano. Define el agua potable como aquella que cumple con las condiciones necesarias para ser segura y saludable en su uso en actividades cotidianas, como beber, cocinar y asearse. Además, este decreto establece las responsabilidades de diversas entidades, desde empresas prestadoras de servicios hasta autoridades de salud y medio ambiente, para llevar a cabo el control y vigilancia de la calidad del agua a nivel local, departamental y nacional.
    .row.justify-content-center.align-items-center.mb-5      
      .col-lg-8(data-aos="flip-right")
        .cajon.color-primario.p-4.mb-4
          p Por otro lado, el Decreto 1975 de 2015 aborda una perspectiva más amplia de la gestión del recurso hídrico. Este decreto regula todas las normas relacionadas con el agua en sus diferentes estados y cauces, considerando aspectos como el aprovechamiento, la protección y la declaración de reservas. Además, aborda las condiciones para la construcción de obras hidráulicas que garanticen un uso eficiente y responsable del agua.
      .col-lg-4(data-aos="flip-right")
        figure
          img(src='@/assets/curso/temas/tema7/img4.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p En resumen, estos decretos son fundamentales para asegurar la calidad y disponibilidad del agua en Colombia, protegiendo tanto la salud de la población como la sostenibilidad de los ecosistemas acuáticos. Su cumplimiento es esencial para mantener un equilibrio entre las necesidades humanas y la conservación del medio ambiente en relación con este recurso vital.
    Separador
    .row
      .col-xl-12       
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 7.2 Vertimientos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p Los vertimientos de aguas residuales son un tema crucial en la gestión ambiental y la regulación de la calidad del agua en Colombia. Estos vertimientos son el resultado de las actividades humanas y pueden tener un impacto significativo en la calidad del agua y el medio ambiente si no se gestionan adecuadamente.
        p El Decreto 1975 de 2015 establece una clasificación de los vertimientos en función de su uso, reconociendo tres categorías principales:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4(data-aos="flip-right")
        figure
          img(src='@/assets/curso/temas/tema7/img5.png', alt='Imagen decorativa')
      .col-lg-8(data-aos="flip-right")
        .cajon.color-primario.p-4.mb-4
          ol.lista-ol
            li
              span.text-bold a) 
              | #[b Doméstico y municipal:] estos vertimientos provienen de fuentes como viviendas, edificios públicos, y otras instalaciones de tipo municipal. Se espera que las aguas residuales domésticas sean tratadas adecuadamente antes de su vertimiento, para evitar la contaminación de cuerpos de agua.
            li
              span.text-bold b) 
              | #[b Agrícola, riego y drenaje:] en el contexto agrícola, se pueden generar vertimientos relacionados con el riego y el drenaje de tierras de cultivo. Estos vertimientos deben ser gestionados de manera que no causen daños al suelo ni a las fuentes de agua cercanas.
            li
              span.text-bold c) 
              | #[B Industrial:] las actividades industriales suelen generar aguas residuales con una variedad de contaminantes, desde químicos hasta materia orgánica. La regulación de los vertimientos industriales es especialmente importante para prevenir la contaminación del agua y garantizar que las empresas cumplan con estándares ambientales.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p El Decreto también establece disposiciones relacionadas con concesiones y permisos para realizar vertimientos, prohibiciones de ciertas prácticas perjudiciales para el agua, sanciones en caso de incumplimiento, caducidad de permisos, y sistemas de control y vigilancia para monitorear y hacer cumplir estas regulaciones.
        p Es fundamental contar con una regulación y normativa sólida que establezca los parámetros de calidad del agua y las pautas para los vertimientos, con el fin de proteger tanto la salud pública como el medio ambiente en Colombia. Aquí se presenta un resumen de algunas de las normas más relevantes asociadas a estos aspectos:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.col-md-4.mb-4.mb-md-0(data-aos="flip-right")
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Tabla 6.
          span  #[i  Normas asociadas a parámetros de calidad y vertimiento de agua]
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="flip-right")
        .tabla-b
          table(border=1)
            thead(style="background-color:#FFAE7E;")
              tr
                th.clsth.text-center Norma   
                th.clsth.text-center Descripción
            tbody
              tr 
                td Decreto 2811 de 1974	
                td Por el cual se dicta el Código Nacional de Recursos Naturales Renovables y de Protección al Medio Ambiente.
              tr 
                td Decreto 475 de 1998	
                td Por el cual se expiden normas técnicas de calidad del agua potable.
              tr
                td Decreto 1575 de 2007	
                td Por el cual se establece el Sistema para la Protección y Control de la Calidad del Agua para Consumo Humano.
              tr 
                td Resolución 2115 de 2007	
                td Por medio de la cual se señalan características, instrumentos básicos y frecuencias del sistema de control y vigilancia para la calidad del agua para consumo humano.
              tr 
                td Resolución 1207 de 2014	
                td Por el cual se adoptan disposiciones relacionadas con el uso de aguas residuales tratadas. 
              tr
                td Resolución 631 DE 2015	
                td Por la cual se establecen los parámetros y los valores límites máximos permisibles en los vertimientos puntuales a cuerpos de aguas superficiales y a los sistemas de alcantarillado público y se dictan otras disposiciones.
              tr 
                td Decreto 1076 de 2015	
                td Por medio del cual se expide el decreto único reglamentario del sector ambiente y desarrollo sostenible. 


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

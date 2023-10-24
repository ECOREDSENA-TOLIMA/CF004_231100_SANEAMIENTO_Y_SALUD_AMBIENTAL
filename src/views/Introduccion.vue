<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right") 
        p El estudio del agua como recurso constituye un reto multidisciplinario que involucra diversos campos de conocimiento. Entre ellos se encuentran la ingeniería, biología, física, química, geología, geografía, agricultura, sociología y derecho. Cada uno de estos campos desempeña un papel crucial en la gestión y el aprovechamiento sostenible del agua.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure(data-aos="flip-right")
          img(src="@/assets/curso/temas/introduccion/img1.png", alt="Imagen decorativa")
      .col-lg-8
        .cajon.color-secundario.p-4.mb-4
          p La ingeniería civil y ambiental se encarga del diseño y construcción de infraestructuras relacionadas con el agua, como sistemas de suministro de agua potable, tratamiento de aguas residuales y control de inundaciones. La biología acuática se enfoca en el estudio de los ecosistemas acuáticos y la biodiversidad, así como en los impactos de la contaminación en la vida acuática. La física hidráulica analiza el comportamiento del agua en movimiento, mientras que la química del agua se dedica al análisis de su calidad y la presencia de contaminantes.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-primario.p-4.mb-4
          p La geología, por su parte, se centra en la hidrogeología y la gestión de recursos hídricos subterráneos. La geografía de los recursos hídricos examina la distribución espacial de cuerpos de agua y la gestión de cuencas hidrográficas. En la agricultura, se busca un uso eficiente y sostenible del agua para el riego de cultivos. La sociología del agua aborda cuestiones sociales relacionadas con el acceso al agua y los derechos de agua, mientras que el derecho del agua se ocupa de la legislación y regulación relacionada con su uso y gestión.
      .col-lg-4
        figure(data-aos="flip-right")
          img(src="@/assets/curso/temas/introduccion/img2.png", alt="Imagen decorativa")
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p La colaboración interdisciplinaria es esencial para abordar los desafíos actuales y futuros relacionados con el agua, como la escasez, la contaminación y el cambio climático. La gestión equitativa y coordinada de este recurso es fundamental para garantizar su disponibilidad para las generaciones venideras. 
    .row.justify-content-center.align-items-center.md-5   
      .col-lg-12(data-aos="fade-left")     
        figure
          .video          
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

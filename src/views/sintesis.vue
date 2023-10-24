<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p A continuación, se describe el tema principal del componente formativo Generalidades del muestreo para calidad de agua, que es una práctica fundamental en el monitoreo y evaluación de la salud ambiental. Consiste en la recolección representativa de muestras de agua en diferentes puntos y momentos para analizar sus propiedades físicas, químicas y biológicas. El objetivo principal es obtener datos confiables que permitan evaluar y controlar la calidad del agua, identificando posibles contaminantes y tomando medidas preventivas o correctivas. El muestreo debe realizarse siguiendo protocolos estandarizados, considerando la ubicación de los puntos de muestreo, la frecuencia de recolección y las condiciones de preservación de las muestras. Además, es importante garantizar la trazabilidad de los datos y mantener la integridad de las muestras para obtener resultados precisos y válidos.
 
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

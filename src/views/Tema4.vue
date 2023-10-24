<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Equipos de muestreo de aguas


    Separador
    .row
      .col-xl-12       
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 4.1 Ficha técnica de los equipos
      
    Separador
    .row
      .col-xl-12       
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 4.2 Manuales técnicos de los equipos
      
    Separador
    .row
      .col-xl-12       
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 4.3 Técnicas de mantenimiento
      
    Separador
    .row
      .col-xl-12       
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 4.4 Técnicas de calibración
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

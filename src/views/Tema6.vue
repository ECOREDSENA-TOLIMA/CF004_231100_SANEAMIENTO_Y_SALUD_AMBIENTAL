<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Seguridad y salud en el trabajo

    Separador
    .row
      .col-xl-12       
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 6.1 Clases de riesgos
      
    Separador
    .row
      .col-xl-12       
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 6.2 Métodos de prevención
      
    Separador
    .row
      .col-xl-12       
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 6.3 Elementos de protección individual
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

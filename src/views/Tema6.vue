<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Seguridad y salud en el trabajo
    .row.justify-content-center.align-items-center.mb-5      
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema6/img1.png', alt='Imagen decorativa')
      .col-lg-8
        p El Sistema de Gestión de Seguridad y Salud en el Trabajo (SGSST) es una iniciativa promovida por el Ministerio del Trabajo, diseñada para establecer un proceso que garantice la protección de los trabajadores en el desempeño de sus actividades laborales. Este sistema se fundamenta en la mejora continua y tiene como propósito principal anticipar, identificar, evaluar y controlar los riesgos que puedan comprometer la seguridad y la salud de los empleados en su entorno laboral. Su enfoque se centra en:
        .cajon.tarj-color.p-4.mb-4
          ol.lista-ol
            li
              span.text-bold a)
              | La prevención de lesiones y enfermedades derivadas de las condiciones laborales.
            li
              span.text-bold b)
              | La salvaguardia y el fomento de la salud de los trabajadores.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p El SGSST busca, en última instancia, crear entornos laborales seguros y saludables, donde los empleados puedan desarrollar sus tareas con la menor exposición posible a riesgos y con el respaldo de medidas de protección y promoción de su bienestar. El enfoque de este sistema abarca dos dimensiones fundamentales:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-primario.p-4.mb-4
          ol.lista-ol
            li
              span.text-bold a)
              | #[b Medicina preventiva:] esta dimensión se concentra en actividades destinadas a promover y controlar la salud de los trabajadores. Su objetivo es prevenir enfermedades y promover prácticas de salud entre el personal de la organización. Esto incluye, por ejemplo, la realización de exámenes médicos periódicos, programas de vacunación, promoción de estilos de vida saludables y otras acciones para garantizar la salud de los empleados.
            li
              span.text-bold b)
              | #[b Higiene y seguridad industrial:] en esta dimensión, se llevan a cabo actividades encaminadas a identificar, evaluar y controlar los agentes contaminantes y los factores de riesgo que puedan afectar tanto la salud como la seguridad de los trabajadores. Esto incluye la implementación de medidas para prevenir accidentes laborales, así como la gestión de sustancias peligrosas y condiciones de trabajo que puedan poner en riesgo la integridad física de los empleados.
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema6/img2.svg', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p En conjunto, estas dimensiones buscan evaluar y gestionar los riesgos asociados a la actividad laboral, entendiendo el riesgo como la posibilidad de que un trabajador sufra daños como resultado de sus tareas en el entorno de trabajo. La gestión de riesgos es esencial para eliminar o reducir al mínimo las consecuencias perjudiciales para la salud de los empleados, así como para proteger a los clientes y preservar la integridad de la organización.
    Separador
    .row
      .col-xl-12       
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 6.1 Clases de riesgos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Los riesgos laborales en Colombia están clasificados en una escala del 1 al 5, según el Decreto 1295 de 1994, tomando en cuenta el nivel de exposición y los factores que los generan. A continuación, se describen estas clases de riesgos:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.col-md-4.mb-4.mb-md-0
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Tabla 5.
          span  #[i  Clasificación de riesgos en Colombia]
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tabla-b
          table(border=1)
            thead(style="background-color:#FFAE7E;")
              tr
                th.clsth.text-center Clase   
                th.clsth.text-center Riesgo   
                th.text-center Descripción
            tbody
              tr 
                td I
                td Mínimo
                td Se encuentran los cargos donde el riesgo laboral es mínimo. Los trabajadores en esta categoría están expuestos a condiciones de trabajo que no representan un riesgo significativo para su salud o seguridad. Esto incluye, por ejemplo, labores administrativas en oficinas.
              tr
                td II
                td Bajo
                td Se ubican los cargos con un riesgo laboral bajo. Los trabajadores en esta clase pueden estar expuestos a condiciones de trabajo que conllevan un riesgo leve para su salud o seguridad, pero este riesgo es manejable con medidas de prevención adecuadas.
              tr
                td III
                td Medio
                td Aquí se incluyen los cargos con un riesgo laboral moderado. Los trabajadores en esta categoría pueden estar expuestos a condiciones de trabajo que presentan un riesgo considerable para su salud o seguridad, pero que aún son controlables mediante medidas preventivas adecuadas
              tr
                td IV
                td Alto              
                td Se encuentra los cargos con un riesgo laboral alto. Los trabajadores en esta clase enfrentan condiciones de trabajo que conllevan un riesgo significativo para su salud o seguridad, y se requieren medidas de prevención y control rigurosas para reducir los peligros.
              tr
                td V              
                td Máximo
                td Se encuentran los cargos con el riesgo laboral más alto. Los trabajadores en esta clase están expuestos a condiciones de trabajo que representan un riesgo extremadamente alto para su salud o seguridad, y es esencial implementar medidas de control estrictas para garantizar su protección.              

    Separador
    .row
      .col-xl-12       
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 6.2 Métodos de prevención
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Las acciones preventivas son fundamentales para que las empresas puedan gestionar eficazmente los riesgos laborales y evitar que ocurran accidentes o enfermedades relacionadas con el trabajo. Estas acciones incluyen:
    .tarjeta.tarjeta-verde.p-4
      SlyderA(tipo="b")(data-aos="flip-right")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Seguridad en el trabajo
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Se centra en evaluar los riesgos asociados al lugar de trabajo para asegurar condiciones seguras y efectivas, reduciendo la probabilidad de accidentes.
                
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema6/img3.png', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Higiene industrial
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Se enfoca en proteger la salud de los trabajadores y el ambiente laboral. Esto implica identificar, evaluar y controlar riesgos como el ruido, agentes biológicos y químicos. Su objetivo es mejorar la salud de los empleados, prevenir enfermedades ocupacionales y crear un ambiente laboral más seguro y productivo. 
                
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema6/img4.png', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 La ergonomía
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Se encarga de adecuar el trabajo a las capacidades y limitaciones de las personas que lo realizan, diseñando los recursos materiales y los métodos de trabajo para prevenir la fatiga física y mental.
                
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema6/img5.png', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 La psicosociología
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Se enfoca en el estudio de las relaciones interpersonales y los aspectos organizativos del trabajo, con el objetivo de promover relaciones laborales positivas y comprender el comportamiento humano en el entorno de trabajo.
                
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema6/img6.png', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 La medicina del trabajo
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Se dedica al estudio de las consecuencias de las condiciones laborales, incluyendo aspectos ambientales y materiales. Su enfoque abarca la vigilancia de la salud de los trabajadores, la educación sanitaria, la curación de enfermedades relacionadas con el trabajo y la rehabilitación. Su actuación se centra en la prevención de enfermedades y lesiones laborales, así como en la atención y recuperación de los trabajadores afectados.
                
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema6/img7.png', alt='Imagen decorativa')
    Separador
    .row
      .col-xl-12       
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 6.3 Elementos de protección individual

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Los Elementos de Protección Individual (EPI) son esenciales para proteger la integridad de los trabajadores en sus labores y reducir los riesgos asociados al trabajo. Estos elementos varían según la parte del cuerpo que se busca proteger. Algunos ejemplos de EPI incluyen:
    
    .row.justify-content-center
      .col-lg-6
        ImagenInfograficaB.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema6/img8.svg', alt='Elementos de protección individual')

          div(x="50%" y="15%" tooltip="Ver más" numero="1")
            .tarjeta.p-4
              .row
                .col-lg-12
                  .h4 Protectores de la cabeza
                  .row
                    .col-2
                      figure
                        img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
                    .col-10              
                        p Cascos de seguridad.
                  .row
                    .col-2
                      figure
                        img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
                    .col-10              
                        p Gorros.
                .col-lg-12
                  figure
                    img(src='@/assets/curso/temas/tema6/img9.svg', alt='imagen decorativa')
          div(x="38%" y="25%" tooltip="Ver más" numero="2")
            .tarjeta.p-4
              .row
                .col-lg-12
                  .h4 Protectores auditivos
                  .row
                    .col-2
                      figure
                        img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
                    .col-10              
                        p Orejeras.
                .col-lg-12
                  figure
                    img(src='@/assets/curso/temas/tema6/img10.svg', alt='imagen decorativa')
          div(x="58%" y="25%" tooltip="Ver más" numero="3")
            .tarjeta.p-4
              .row
                .col-lg-12
                  .h4 Protectores oculares y de la cara
                  .row
                    .col-2
                      figure
                        img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
                    .col-10              
                        p Gafas.
                  .row
                    .col-2
                      figure
                        img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
                    .col-10              
                        p Caretas.
                .col-lg-12
                  figure
                    img(src='@/assets/curso/temas/tema6/img11.svg', alt='imagen decorativa')
          div(x="50%" y="30%" tooltip="Ver más" numero="4")
            .tarjeta.p-4
              .row
                .col-lg-12
                  .h4 Protección de las vías respiratorias
                  .row
                    .col-2
                      figure
                        img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
                    .col-10              
                        p Tapabocas.
                  .row
                    .col-2
                      figure
                        img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
                    .col-10              
                        p Filtros.
                .col-lg-12
                  figure
                    img(src='@/assets/curso/temas/tema6/img12.svg', alt='imagen decorativa')
          div(x="73%" y="60%" tooltip="Ver más" numero="5")
            .tarjeta.p-4
              .row
                .col-lg-12
                  .h4 Protectores de manos y brazos
                  .row
                    .col-2
                      figure
                        img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
                    .col-10              
                        p Guantes.
                .col-lg-12
                  figure
                    img(src='@/assets/curso/temas/tema6/img13.svg', alt='imagen decorativa')
          div(x="33%" y="93%" tooltip="Ver más" numero="6")
            .tarjeta.p-4
              .row
                .col-lg-12
                  .h4 Protectores de pies y piernas
                  .row
                    .col-2
                      figure
                        img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
                    .col-10              
                        p Botas de seguridad.
                  .row
                    .col-2
                      figure
                        img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
                    .col-10              
                        p Polainas.
                .col-lg-12
                  figure
                    img(src='@/assets/curso/temas/tema6/img14.svg', alt='imagen decorativa')
          div(x="40%" y="75%" tooltip="Ver más" numero="7")
            .tarjeta.p-4
              .row
                .col-lg-12
                  .h4 Protectores de la piel
                  .row
                    .col-2
                      figure
                        img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
                    .col-10              
                        p Ropa adecuada.
                  .row
                    .col-2
                      figure
                        img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
                    .col-10              
                        p Tela antifluido.
                .col-lg-12
                  figure
                    img(src='@/assets/curso/temas/tema6/img15.svg', alt='imagen decorativa')
          div(x="60%" y="50%" tooltip="Ver más" numero="8")
            .tarjeta.p-4
              .row
                .col-lg-12
                  .h4 Protectores del tronco y el abdomen
                  .row
                    .col-2
                      figure
                        img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
                    .col-10              
                        p Chalecos.
                .col-lg-12
                  figure
                    img(src='@/assets/curso/temas/tema6/img16.svg', alt='imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5.mt-4
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/imginte.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#FFEBDF")
            .p-4
            p.p-2 Es importante que los trabajadores utilicen los EPI adecuados según su función y el entorno de trabajo para garantizar su seguridad y salud. Además, es responsabilidad de los empleadores proporcionar y mantener en buen estado estos elementos, así como capacitar a los trabajadores en su uso correcto.
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

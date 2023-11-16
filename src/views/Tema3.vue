<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Muestras de agua

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p  Las muestras de agua se relacionan directamente con los tipos de muestreo, y se pueden clasificar en varios tipos según el propósito y la metodología del muestreo. Algunos de los tipos comunes de muestras de agua incluyen:
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
                    p.p-2 #[b Muestras puntuales:] estas muestras se toman en un lugar y momento específicos. Son útiles para obtener una instantánea de la calidad del agua en un punto particular en un momento dado. Se utilizan en muestreos simples y discontinuos.
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
                    p.p-2 #[b Muestras compuestas:] estas muestras se obtienen mediante la mezcla de varias muestras individuales recogidas en diferentes momentos y lugares. La muestra compuesta proporciona una visión promedio de la calidad del agua en un área o sistema específico y se utiliza en muestreos compuestos.
                    
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
                    p.p-2 #[b Muestras en serie:] estas muestras se recolectan de manera continua y secuencial a lo largo del tiempo. Proporcionan datos en tiempo real y se utilizan en muestreos en serie para un seguimiento detallado.
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
                    p.p-2 #[b Muestras representativas:] estas muestras se toman cuidadosamente para reflejar con precisión las características del agua en el lugar de muestreo. Se utilizan en muestreos representativos para obtener datos que sean fieles a la realidad.
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
                    p.p-2 #[b Muestras especiales:] estas muestras se utilizan para analizar parámetros específicos o para situaciones particulares. Pueden requerir recipientes especiales, como muestras microbiológicas que necesitan envases estériles y oscuros.
      .col-lg-4
        figure(data-aos="flip-right")
          img(src='@/assets/curso/temas/tema3/img1.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img(data-aos="flip-right")
            img(src='@/assets/curso/temas/tema3/img2.png' alt='AvatarTop')
          .tarjeta.tarj-color
            .p-4
              p La elección del tipo de muestra de agua depende de los objetivos del muestreo, la frecuencia de recolección y la necesidad de obtener datos en tiempo real. Cada tipo de muestra tiene sus propias ventajas y se selecciona en función de las circunstancias específicas y los protocolos de muestreo aplicables. 
    Separador
    .row
      .col-xl-12       
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 3.1 Preservación y conservación
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Es importante destacar que una vez que se toma una muestra de agua en el sitio de muestreo, las condiciones del agua pueden cambiar a medida que pasa el tiempo debido a una serie de factores, lo que puede afectar la precisión de los resultados de análisis posteriores. Estos factores incluyen:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure(data-aos="flip-right")
          img(src='@/assets/curso/temas/tema3/img3.png', alt='Imagen decorativa')
      .col-lg-8
        .cajon.tarj-color.p-4.mb-4
          ul.lista-ul
            li 
              i.fas.fa-circle.fa-2xs
              | #[b Altas temperaturas:] pueden acelerar las reacciones químicas y biológicas en la muestra, lo que puede alterar su composición química y la concentración de ciertos componentes.
            li 
              i.fas.fa-circle.fa-2xs
              | #[b Exposición a la luz:] especialmente a la luz solar directa, puede afectar la calidad del agua, en particular si se trata de muestras sensibles a la luz, como las destinadas a análisis de parámetros fotosensibles.
            li 
              i.fas.fa-circle.fa-2xs
              | #[b Tipo de recipiente:] utilizado para almacenar la muestra es fundamental. Debe ser adecuado para evitar la contaminación, la evaporación y la reacción química con el material del recipiente.
            li 
              i.fas.fa-circle.fa-2xs
              | #[b Tiempo transcurrido entre el muestreo y el análisis:] cuanto más tiempo pase entre la recolección de la muestra y su análisis, mayores serán las posibilidades de que ocurran cambios en la composición del agua.
            li 
              i.fas.fa-circle.fa-2xs
              | #[b Agitación durante el transporte:] el transporte de las muestras puede involucrar agitación o movimiento, lo que podría causar mezcla de componentes o cambios en las características de la muestra.
    .cajon.color-primario.p-4.mb-4
      p Para garantizar la representatividad y precisión de los resultados de análisis, es esencial tomar medidas para minimizar estos efectos. Esto incluye mantener las muestras a temperaturas adecuadas, protegerlas de la luz, utilizar recipientes adecuados, reducir el tiempo de almacenamiento y manejarlas con cuidado durante el transporte. Además, se deben seguir protocolos y procedimientos establecidos para el manejo y preservación de las muestras, especialmente cuando se analizan parámetros críticos. 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Cuando las muestras no son tratadas de manera adecuada puede ocurrir:
    .tarjeta.tarjeta-verde.p-4
      SlyderA(tipo="b")(data-aos="flip-right")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Modificación de la muestra
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Los organismos presentes en el agua, como bacterias, algas y hongos, pueden llevar a cabo procesos que modifican la composición química de la muestra de agua, lo que puede afectar las concentraciones de ciertos compuestos. Algunos ejemplos de las modificaciones que pueden ocurrir incluyen:
                .row
                  .col-1
                    img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
                  .col-11              
                      p #[b Oxígeno disuelto:] los microorganismos aeróbicos, como las bacterias, pueden consumir oxígeno disuelto en el agua a medida que descomponen materia orgánica.
                .row
                  .col-1
                    img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
                  .col-11              
                      p #[b Dióxido de carbono disuelto:] algunos microorganismos producen dióxido de carbono como subproducto de su metabolismo.

                .row
                  .col-1
                    img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
                  .col-11              
                      p #[b Compuestos de nitrógeno y fósforo:] bacterias específicas pueden llevar a cabo procesos de nitrificación y desnitrificación, que afectan las concentraciones de compuestos de nitrógeno en el agua.
                .row
                  .col-1
                    img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
                  .col-11              
                      p #[b Silicio:] en ambientes acuáticos marinos y de agua dulce, las diatomeas, un tipo de alga unicelular, pueden acumular sílice en sus estructuras celulares. Esto puede influir en la concentración de silicio en el agua.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img4.svg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Exceso de tiempo entre la toma y su análisis
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Es fundamental tener en cuenta el tiempo transcurrido entre la toma de la muestra de agua y su posterior análisis, ya que un exceso de tiempo puede tener un impacto significativo en la calidad de los resultados. Esto se debe a que, durante ese período, los organismos presentes en la muestra, como las bacterias, tienen la oportunidad de reproducirse y multiplicarse, lo que puede llevar a una contaminación de la muestra y afectar la precisión de los análisis.
                p Por ejemplo, si se recoge una muestra de agua en un punto determinado y luego se almacena durante un período prolongado antes de su análisis, las bacterias presentes en la muestra pueden multiplicarse, consumir oxígeno y generar cambios en las concentraciones de diferentes componentes químicos. Esto podría resultar en mediciones inexactas de parámetros como la concentración de oxígeno disuelto, la turbidez o la presencia de compuestos orgánicos.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img5.svg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Modificación de las concentraciones de hierro y sulfuros
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Es importante destacar que las concentraciones de hierro y sulfuros en una muestra de agua pueden verse afectadas por la exposición al oxígeno atmosférico o al propio oxígeno contenido en la muestra. Esto se debe a procesos químicos que pueden alterar los niveles de estos elementos en la muestra.
                p En presencia de oxígeno, el hierro presente en el agua puede oxidarse, formando compuestos de hierro oxidado que pueden precipitar o disolverse en la muestra. Esto puede conducir a cambios en la concentración de hierro en la muestra con el tiempo.
                p En cuanto a los sulfuros, en ambientes anaeróbicos (sin oxígeno), pueden existir en forma de sulfuros disueltos. Sin embargo, cuando la muestra entra en contacto con el oxígeno, los sulfuros pueden oxidarse y formar compuestos como sulfatos, lo que también puede alterar las concentraciones de sulfuros en la muestra.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img6.svg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Modificación de los parámetros de la conductividad y pH
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Los parámetros del agua, como la conductividad y el pH, pueden verse afectados por diversas condiciones y reacciones químicas durante la toma y el manejo de las muestras. Dos de estos casos son la modificación de la conductividad y la alteración del pH debido a la interacción con el dióxido de carbono (CO2):
                p #[b Modificación de la conductividad:] la conductividad eléctrica del agua está relacionada con la cantidad de iones disueltos en ella. Cuando se toma una muestra de agua y esta entra en contacto con el aire o con superficies que pueden liberar iones, como algunos tipos de recipientes, puede haber una modificación en la conductividad. Por lo tanto, es importante utilizar recipientes y equipos que no introduzcan contaminantes iónicos en la muestra y que se mantenga la integridad de los iones presentes en el agua durante el proceso de toma y análisis.
                p #[b Alteración del pH debido al dióxido de carbono:] el dióxido de carbono (CO2) presente en el aire y disuelto en el agua puede reaccionar con el agua para formar ácido carbónico (H2CO3), lo que disminuye el pH del agua. Esta reacción es una de las principales causas de la acidificación del agua.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img7.svg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Absorción de compuestos orgánicos y metales
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Se puede ocasionar la absorción, cuando la muestra de agua entra en contacto con las paredes internas de dichos recipientes durante el proceso de toma y almacenamiento. Esto puede tener un impacto significativo en la concentración real de los compuestos en la muestra, lo que, a su vez, podría afectar la precisión de los resultados de los análisis posteriores.
                p Para reducir al mínimo el efecto de la absorción de compuestos, especialmente aquellos que son volátiles o tienden a adherirse a superficies sólidas, es fundamental seguir rigurosamente las buenas prácticas de muestreo. Esto incluye el uso de recipientes especialmente diseñados para la recolección de muestras de agua y la aplicación de procedimientos adecuados de limpieza, etiquetado y almacenamiento de estos recipientes. Estas medidas son esenciales para preservar la integridad de las muestras y garantizar resultados precisos en los análisis posteriores de agua.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img8.svg', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Para prevenir que estos factores afecten la calidad de la muestra, es importante aplicar la preservación de la muestra inmediatamente después de su recolección. La elección del preservante adecuado dependerá del parámetro para el cual se haya tomado la muestra:
    .row.justify-content-center.align-items-center.mb-5      
      .col-lg-8(data-aos="flip-right")
        .cajon.tarj-color.p-4.mb-4
          ul.lista-ul
            li 
              i.fas.fa-circle.fa-2xs
              | En el caso de muestras biológicas, la preservación se realiza para proteger las estructuras morfológicas y prevenir la degradación bioquímica o química de la materia orgánica. Esto garantiza una adecuada identificación de las especies de organismos presentes en la muestra.
            li 
              i.fas.fa-circle.fa-2xs
              | Además de la aplicación de preservantes, el enfriamiento es un método comúnmente utilizado para conservar las muestras. Se utilizan refrigeradores o neveras de plástico o icopor que contienen hielo, manteniendo las muestras a temperaturas entre 1 °C y 5 °C. Estos dispositivos son útiles para transportar las muestras desde el lugar de muestreo hasta el laboratorio y mantenerlas en condiciones adecuadas durante el transporte y en un período corto de tiempo (Icontec, 2004).
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img9.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Para garantizar un manejo adecuado de las muestras, es importante considerar los siguientes aspectos:

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Trazabilidad")
        .col-md-6.mb-4.mb-md-0
          p Se refiere a un conjunto de procedimientos establecidos previamente, que permiten seguir la ruta de la muestra desde el momento en que se toma hasta su llegada al laboratorio para su análisis.
          p El propósito fundamental de la trazabilidad es asegurar que todos los procesos se lleven a cabo con estándares de calidad, que garanticen la integridad de la muestra. Para lograrlo, es necesario:
          .row
            .col-1
              img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
            .col-11              
                p Identificar el origen de la muestra, es decir, el lugar y las condiciones en las que se recolectó.
          .row
            .col-1
              img(src='@/assets/curso/temas/vineta.svg' alt='AvatarTop')(style="max-width:20px;")
            .col-11              
                p Registrar todas las etapas por las que ha pasado la muestra, desde su toma hasta su llegada al laboratorio para su análisis.
          p El establecimiento de un sistema de trazabilidad contribuye a la confiabilidad de los resultados de los análisis de calidad de agua y asegura que se cumplan los estándares establecidos para la toma, preservación y transporte de las muestras.
      
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema3/img10.png', alt='Imagen decorativa')

      .row(titulo="Periodicidad")
        .col-md-6.mb-4.mb-md-0
          p La periodicidad del muestreo de calidad de agua depende de los objetivos y recursos disponibles. Puede variar desde muestreos mensuales o estacionales hasta mediciones en tiempo real, y se divide en etapas de campo, evaluación de procesos y generación de informes de resultados. La frecuencia se adapta a las necesidades de monitoreo y control.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema3/img11.png', alt='Imagen decorativa')
      .row(titulo="Almacenamiento")        
        .col-md-6.mb-4.mb-md-0
          p Una vez que las muestras llegan al laboratorio, se almacenan en neveras que mantienen temperaturas entre 1 °C y 5 °C para preservar su calidad. Además, en algunos casos, se les aplican químicos preservantes específicos dependiendo del parámetro a analizar. Estas medidas garantizan que las muestras se mantengan en condiciones adecuadas hasta su análisis posterior en el laboratorio.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema3/img12.png', alt='Imagen decorativa')
 
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

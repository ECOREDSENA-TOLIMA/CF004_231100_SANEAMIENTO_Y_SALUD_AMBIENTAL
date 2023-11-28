export default {
  global: {
    componenteFormativo: 'Generalidades del muestreo para la calidad de agua',
    descripcionCurso:
      'Este componente contiene los temas necesarios para que el aprendiz adquiera los conocimientos acerca de las características del agua, cómo se desarrolla un muestreo para saber las condiciones en qué se encuentra un cuerpo de agua, los equipos que se utilizan para medir su calidad y la normatividad vigente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Aspectos generales del agua',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Propiedades',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Niveles permisivos para consumo',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Muestreo de agua',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Métodos de muestreo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos de alícuotas y recipientes',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Muestras de agua',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Preservación y conservación',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Equipos de muestreo de aguas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Ficha técnica de los equipos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Manuales técnicos de los equipos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Técnicas de mantenimiento',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Técnicas de calibración',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Productos químicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Método de medición',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Hoja de seguridad',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Fichas técnicas',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Almacenamiento',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Seguridad y salud en el trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Clases de riesgos',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Métodos de prevención',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Elementos de protección individual',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Normatividad ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Calidad del agua',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Vertimientos',
            hash: 't_7_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_004_231100.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Introducción',
      referencia:
        'IDEAM- Instituto de Hidrología, Meteorología y Estudios Ambientales. (2020). <em>Monitoreo integral del agua: cantidad y calidad.</em> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=FOI9yFnAzvA',
    },
    {
      tema: 'Muestreo agua superficial',
      referencia:
        'Laboratorio Fisicoquímico de Aguas. Universidad de El Salvador. (2020). <em>Muestreo de agua en río para análisis fisicoquímico y microbiológico.</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=teFQrY3PwOE',
    },
    {
      tema: 'Muestreo agua potable',
      referencia:
        'Laboratorio Fisicoquímico de Aguas. Universidad de El Salvador. (2020). <em>Muestreo de agua potable para análisis fisicoquímico y microbiológico.</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=01oKI2GvVmI',
    },
    {
      tema: 'Muestreo agua residual',
      referencia:
        'Laboratorio Fisicoquímico de Aguas. Universidad de El Salvador. (2020). <em>Muestreo de aguas residuales para análisis fisicoquímico.</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=OZQi3DLogqE',
    },
  ],
  glosario: [
    {
      termino: 'Agua potable',
      significado:
        'tipo de agua encontrada en las residencias de las personas y en el área urbana.',
    },
    {
      termino: 'Agua residual',
      significado:
        'tipo de agua que proviene de las actividades antropogénicas que pueden ser domésticas, urbanas e industriales y que, para su retorno al ambiente, es necesario realizar un respectivo tratamiento, comúnmente se les llama vertimiento.',
    },
    {
      termino: 'Alícuota',
      significado:
        'parte de una muestra individual o submuestra que se colecta en el sitio para realizar el muestreo compuesto o integrado.',
    },
    {
      termino: 'Fitoplancton',
      significado:
        'conjunto de plantas microscópicas que flotan en el agua y forman parte del plancton.',
    },
    {
      termino: 'Muestreo de agua',
      significado:
        'actividades que tienen que ver con realizar colectas de agua según unos objetivos señalados previamente.',
    },
    {
      termino: 'Niveles permisivos',
      significado:
        'valores establecidos para fines de comparación con los resultados obtenidos.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'procedimientos establecidos que rastrean la muestra para garantizar su confiabilidad.',
    },
    {
      termino: 'Zooplancton',
      significado:
        'grupo de microorganismos animales que flotan en el agua y hacen parte del plancton.',
    },
  ],
  referencias: [
    {
      referencia:
        'Icontec. (1995). NTC- ISO 5667-1 Calidad del agua. Muestreo. Parte 1: Directrices para el diseño de programas y técnicas de muestreo.',
      link:
        'https://tienda.icontec.org/gp-calidad-del-agua-muestreo-parte-1-directrices-para-el-diseno-de-programas-y-tecnicas-de-muestreo-ntc-iso5667-1-2010.html',
    },
    {
      referencia:
        'Icontec. (1995). Norma Técnica Colombiana NTC- ISO 5667- 2 Gestión ambiental. calidad del agua. Muestreo. Técnicas generales de muestreo.',
      link: 'https://vdocuments.mx/ntc-iso-5667-2.html',
    },
    {
      referencia:
        'Icontec. (2004). Norma Técnica Colombiana NTC- ISO 5667- 3. Calidad del agua. Muestreo. Parte 3: Directrices para la preservación y manejo de las muestras.',
      link:
        'https://tienda.icontec.org/gp-calidad-del-agua-muestreo-parte-3-directrices-para-la-preservacion-y-manejo-de-las-muestras-ntc-iso5667-3-2004.html',
    },
    {
      referencia: 'Ideam. (2022). Aguas superficiales.',
      link: 'http://www.ideam.gov.co/web/agua/aguas-superficiales',
    },
    {
      referencia:
        'MADS. (2017). Estrategia nacional para la implementación del sistema globalmente armonizado de clasificación y etiquetado de productos químicos- SGA- en Colombia.',
      link:
        'https://quimicos.minambiente.gov.co/wp-content/uploads/2021/06/2.-Estrategia-nacional-SGA-2017.pdf',
    },
    {
      referencia:
        'MADS. (2015). Decreto 1076 de 2015 por medio del cual se expide el decreto único reglamentario del sector ambiente y desarrollo sostenible.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78153',
    },
    {
      referencia:
        'Marín, G., R. (2022). Características físicas, químicas y biológicas de las aguas.',
      link:
        'https://www.eoi.es/sites/default/files/savia/documents/componente48099.pdf',
    },
    {
      referencia:
        'OMS. (2011). Guías para la calidad del agua de consumo humano: cuarta edición que incorpora la primera adenda.',
      link:
        'https://apps.who.int/iris/bitstream/handle/10665/272403/9789243549958-spa.pdf?ua=1',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Diana Carolina Sánchez Rodríguez ',
          cargo: 'Experta Temática',
          centro: 'Regional Tolima. Centro Agropecuario La Granja',
        },
        {
          nombre: 'Gustavo Santis Mancipe',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial.',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología. ',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura ',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Correctora de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
        },
        {
          nombre: 'Jaslyth Juliana Eraso Casanova ',
          cargo: 'Experta Temática',
          centro:
            'Regional Putumayo - Centro Agroforestal y Acuícola Arapaima. ',
        },
        {
          nombre: 'Sergio Augusto Ardila Ortiz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Regional Tolima  Centro de Comercio y Servicios',
        },
        {
          nombre: 'Veimar Celis Melendez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Alejandra Briceño Vera',
          cargo: 'Produccióon audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Produccióon audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Veimar Celis Melendez',
          cargo: 'Actividad Didactica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

AOS.init();

new Vue({
  el: "#cursos",
  data: {
    title: "Cursos",
    categorias: [
      {
        nombre: "Todo",
        id: null,
      },
      {
        nombre: "Diseño",
        id: 1,
      },
      {
        nombre: "3D y Animación",
        id: 6,
      },
      {
        nombre: "Programación",
        id: 2,
      },
      {
        nombre: "Fotografía",
        id: 3,
      },
      {
        nombre: "Desarrollo personal",
        id: 4,
      },
      {
        nombre: "Emprendimiento",
        id: 5,
      },
    ],
    cursos: [
      //DISEÑO
      {
        img: "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,h_674,pg_1,t_base_params,w_1200/v1592409726/course-covers/000/000/499/499-original.jpg?1592409726",
        nombre: "Introducción a Adobe Illustrator",
        docente: "Aarón Martinez",
        descripcion:
          "Aprende Adobe Illustrator sin conocimientos previos para crear...  ",
        gratis: false,
        calfificacion: 4,
        precio: 150,
        categoria: 1,
      },
      {
        img: "https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_428,pg_1,q_auto:eco,t_base_params,w_760/v1636564341/course-covers/000/003/069/3069-original.jpg?1636564341",
        nombre: "Visualiza y transforma la información en arte",
        docente: "Sonja Kuijpers",
        descripcion:
          "Aprende a dar vida a los datos de forma eficaz con formas, colores y diseños... ",
        gratis: false,
        calfificacion: 3,
        precio: 120,
        categoria: 1,
      },
      {
        img: "https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_428,pg_1,q_auto:eco,t_base_params,w_760/v1624030304/course-covers/000/002/495/2495-original.jpg?1624030304",
        nombre:
          "Visualización de datos y diseño de la información: crea un modelo visual",
        docente: "Federica Fragapane",
        descripcion:
          "Presenta datos complejos de forma clara a través de piezas atractivas que.. ",
        gratis: false,
        calfificacion: 5,
        precio: 140,
        categoria: 1,
      },
      {
        img: "https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_428,pg_1,q_auto:eco,t_base_params,w_760/v1611672158/course-covers/000/001/681/1681-original.jpg?1611672158",
        nombre: "Cake design: técnicas decorativas modernas",
        docente: "Julian Ángel",
        descripcion:
          "Aprende cómo crear texturas, combinar colores y generar efectos para crear...",
        gratis: true,
        calfificacion: 5,
        precio: 0,
        categoria: 1,
      },
      {
        img: "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,h_674,pg_1,t_base_params,w_1200/v1585321929/course-covers/000/001/049/1049-original.jpg?1585321929",
        nombre: "Diseño de logos: del concepto a la presentación",
        docente: "Sagi Haviv",
        descripcion:
          "Aprende los principios básicos del diseño de logos mientras descubres tu.. ",
        gratis: false,
        calfificacion: 5,
        precio: 155,
        categoria: 1,
      },
      {
        img: " https://cdn.domestika.org/c_fill,dpr_auto,f_auto,h_674,pg_1,t_base_params,w_1200/v1616605810/course-covers/000/002/162/2162-original.jpg?1616605810",
        nombre: "Diseño de presentaciones: crea una plantilla profesional",
        docente: "Katya Kovalenko",
        descripcion:
          "Descubre el poder del diseño de presentaciones explorando colores.. ",
        gratis: true,
        calfificacion: 5,
        precio: 155,
        categoria: 1,
      },
      {
        img: "https://i.ytimg.com/vi/FoCNedUiVqU/maxresdefault.jpg",
        nombre: "Figma desde cero",
        docente: "Luis Ignacio",
        descripcion:
          "Aprende la principal herramienta de diseño y prototipado colaborativo y en tiempo real del mercado.",
        gratis: false,
        calfificacion: 5,
        precio: 155,
        categoria: 1,
      },
      {
        img: "https://edteam-media.s3.amazonaws.com/courses/original/242a3c4d-0182-4164-afc2-4649ce119c5b.jpg",
        nombre: "Fundamentos del diseño",
        docente: "Lee Arango ",
        descripcion:
          "El diseño no se trata de inspiración, sino de reglas y conceptos que este curso te enseñará desde cero.",
        gratis: false,
        calfificacion: 5,
        precio: 139,
        categoria: 1,
      },
      {
        img: "https://edteam-media.s3.amazonaws.com/courses/original/a2d8f5c6-3cc5-4ffd-bea7-5b8b8b174db6.png",
        nombre: "Diseño UI",
        docente: "Alvaro Felipe",
        descripcion:
          "Aprende las técnicas y buenas prácticas para crear diseños de interfaces hermosos, funcionales",
        gratis: false,
        calfificacion: 5,
        precio: 155,
        categoria: 1,
      },
      //PROGRAMACION
      {
        img: "img/prg.jpeg",
        nombre: "Programacion desde cero",
        docente: " Beto Quiroga",
        descripcion:
          "Programar no se trata de código, se trata de lógica. Este curso te enseña la lógica que te permitirá..",
        gratis: true,
        calfificacion: 5,
        precio: 0,
        categoria: 2,
      },

      {
        img: "https://edteam-media.s3.amazonaws.com/courses/original/85d3d7e4-19db-4cff-a4cb-cbead813b6b5.png",
        nombre: "Python desde cero",
        docente: "Pablo Spencer",
        descripcion:
          "Aprende los fundamentos de uno de los lenguajes más importantes de la actualidad y crea un..",
        gratis: false,
        calfificacion: 5,
        precio: 150,
        categoria: 2,
      },

      {
        img: "img/JavaScript.jpeg",
        nombre: "JavaScript desde cero",
        docente: "Samuel Miller",
        descripcion:
          "Domina las bases del único lenguaje que te da la oportunidad de trabajar del lado del cliente y del lado del servidor.",
        gratis: false,
        calfificacion: 5,
        precio: 150,
        categoria: 2,
      },
      {
        img: "img/html.jpeg",
        nombre: "HTML desde cero",
        docente: "Diego Alcaraz ",
        descripcion: "Domina el lenguaje con el que se construye toda la web",
        gratis: true,
        calfificacion: 5,
        precio: 150,
        categoria: 2,
      },
      {
        img: "img/css.jpeg",
        nombre: "CSS desde cero",
        docente: "Alvaro Felipe",
        descripcion:
          "Haz hermosa la web con el único lenguaje creado para diseño.",
        gratis: true,
        calfificacion: 5,
        precio: 0,
        categoria: 2,
      },
      {
        img: "https://edteam-media.s3.amazonaws.com/courses/original/3886d909-4c3a-4e5c-a004-68cc5fcdccea.png",
        nombre: "Vue 3 desde cero",
        docente: "Christian Tola",
        descripcion:
          "Aprende la última versión de Vue, el framework frontend más querido por..",
        gratis: false,
        calfificacion: 5,
        precio: 150,
        categoria: 2,
      },
      {
        img: "https://edteam-media.s3.amazonaws.com/courses/original/6af6a692-a841-453a-80ed-e9ecbbcf7f7f.png",
        nombre: "Svelte desde cero",
        docente: "Oscar Moises",
        descripcion:
          "Desarrolla tus apps con la librería más reciente que utiliza un enfoque distinto al..",
        gratis: false,
        calfificacion: 5,
        precio: 150,
        categoria: 2,
      },
      {
        img: "https://edteam-media.s3.amazonaws.com/courses/original/7204fcde-37aa-49a2-a619-63459f834ada.png",
        nombre: "React desde cero",
        docente: "Beto Quiroga",
        descripcion:
          "Crea interfaces de usuario reutilizables y basadas en componentes con la librería...",
        gratis: false,
        calfificacion: 5,
        precio: 130,
        categoria: 2,
      },
      {
        img: "https://couponos.ooo/wp-content/uploads/2021/01/Angular-De-cero-a-experto.jpg",
        nombre: "Angular desde cero",
        docente: "Fernando Herrera",
        descripcion:
          "Componentes, directivas, servicios, gráficas, JWT, GitHub y mucho más",
        gratis: false,
        calfificacion: 5,
        precio: 100,
        categoria: 2,
      },
      //FOTOGRAFIA
      {
        img: "https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_428,pg_1,q_auto:eco,t_base_params,w_760/v1563794713/course-covers/000/000/387/387-original.jpg?1563794713",
        nombre: "Introducción a Adobe Photoshop",
        docente: "Carles Marsal",
        descripcion:
          "Aprende Adobe Photoshop desde cero y domina el mejor software de tratamiento..",
        gratis: false,
        calfificacion: 5,
        precio: 100,
        categoria: 3,
      },
      {
        img: "https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_428,pg_1,q_auto:eco,t_base_params,w_760/v1587655524/course-covers/000/000/404/404-original.jpg?1587655524",
        nombre: "Creación y edición de contenido para Instagram Stories",
        docente: "Mina Barrio",
        descripcion:
          "Descubre los secretos de fotografía y vídeo para triunfar en Instagram",
        gratis: false,
        calfificacion: 5,
        precio: 159,
        categoria: 3,
      },
      {
        img: "https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_428,pg_1,q_auto:eco,t_base_params,w_760/v1611766257/course-covers/000/000/704/704-original.jpg?1611766257",
        nombre: "Fotografía y vídeo profesional con tu móvil",
        docente: "Nay Jiménez",
        descripcion:
          "Aprende las técnicas para crear desde tu smartphone contenidos de calidad para..",
        gratis: false,
        calfificacion: 5,
        precio: 149,
        categoria: 3,
      },
      {
        img: "https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_428,pg_1,q_auto:eco,t_base_params,w_760/v1464254815/course-covers/000/000/122/122-original.jpg?1464254815",
        nombre: "Secretos del fotomontaje y el retoque creativo",
        docente: "Carles Marsal",
        descripcion:
          "Aprende técnicas profesionales de composición, retoque e iluminación..",
        gratis: false,
        calfificacion: 5,
        precio: 149,
        categoria: 3,
      },
      {
        img: "https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_428,pg_1,q_auto:eco,t_base_params,w_760/v1617869545/course-covers/000/002/144/2144-original.jpg?1617869545",
        nombre: "Teoría del color en fotografía",
        docente: "Yaopey Yong",
        descripcion:
          "Descubre los secretos de la armonía y la psicología del color para crear imágenes..",
        gratis: false,
        calfificacion: 5,
        precio: 139,
        categoria: 3,
      },
      {
        img: "https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_428,pg_1,q_auto:eco,t_base_params,w_760/v1558447617/course-covers/000/000/537/537-original.jpg?1558447617",
        nombre: "Introducción a Adobe Premiere Pro",
        docente: "Juanmi Cristobal",
        descripcion:
          "Aprende Adobe Premiere Pro sin conocimientos previos y domina uno de..",
        gratis: true,
        calfificacion: 5,
        precio: 139,
        categoria: 3,
      },
      //DESARROLLO PERSONAL Y PROFESIONAL
      {
        img: "https://edteam-media.s3.amazonaws.com/courses/original/d82cab8f-c357-459b-80dd-c662e6a12597.png",
        nombre: "Desarrollo personal",
        docente: "Cristian Rivera",
        descripcion:
          "Aprende a organizar tu vida, libera tu potencial y alcanza tus metas.",
        gratis: false,
        calfificacion: 4,
        precio: 69,
        categoria: 4,
      },
      {
        img: "https://edteam-media.s3.amazonaws.com/courses/original/d9a528dd-99d0-41d9-ac8e-de3a2f5505ca.png",
        nombre: "Scrum desde cero",
        docente: "Alfredo Barrientos",
        descripcion:
          "Desarrolla proyectos de mejora continua con Metodologías Ágiles y Scrum.",
        gratis: false,
        calfificacion: 5,
        precio: 69,
        categoria: 4,
      },
      {
        img: "https://edteam-media.s3.amazonaws.com/courses/original/701a7931-90a4-472d-a33d-1153a47a966a.png",
        nombre: "Liderazgo",
        docente: "Ivan Chacon",
        descripcion:
          "Aprende y desarrolla las habilidades básicas que debe tener toda persona..",
        gratis: true,
        calfificacion: 5,
        precio: 69,
        categoria: 4,
      },

      {
        img: "https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_428,pg_1,q_auto:eco,t_base_params,w_760/v1639412543/course-covers/000/003/167/3167-original.jpg?1639412543",
        nombre: "Oratoria: encuentra tu voz para hablar en público",
        docente: "Dasha Dollar",
        descripcion:
          "Explora ejercicios prácticos y técnicas de narración de historias para aprende..",
        gratis: false,
        calfificacion: 5,
        precio: 160,
        categoria: 4,
      },
      {
        img: "https://edteam-media.s3.amazonaws.com/courses/original/4feb100b-5d47-4daf-b421-9983c5ecdfa8.png",
        nombre: "Inglés desde cero",
        docente: "David Salomon",
        descripcion:
          "Aprende las bases del lenguaje que te abre las puertas en cualquier parte del mundo.",
        gratis: false,
        calfificacion: 5,
        precio: 69,
        categoria: 4,
      },
      //NEGOCIO Y EMPRENDIMIENTO
      {
        img: "https://edteam-media.s3.amazonaws.com/courses/original/73bf63e2-b91c-4690-b206-bef15e1f2ae2.jpg",
        nombre: "Graba y transmite cursos online",
        docente: "Alexys Lozada",
        descripcion:
          "Aprende a crear cursos para YouTube, Twitch u otras plataformas",
        gratis: true,
        calfificacion: 4,
        precio: 0,
        categoria: 5,
      },
      {
        img: "https://edteam-media.s3.amazonaws.com/courses/original/427ef383-8ee8-4efb-9dff-cca05bf8dafa.png",
        nombre: "Marketing para emprendedores",
        docente: "Eddy Salsedo",
        descripcion:
          "Crea estrategias de marketing efectivas sin los millones de dólares que gastan...",
        gratis: false,
        calfificacion: 5,
        precio: 69,
        categoria: 5,
      },
      {
        img: "https://edteam-media.s3.amazonaws.com/courses/original/24b5cb21-7319-4fe1-a0de-e9e7887d415c.jpg",
        nombre: "Crea tu primer video para internet",
        docente: "Camilo Gutierrez",
        descripcion:
          "Crea proyectos de video impactantes para redes sociales y tu sitio web.",
        gratis: true,
        calfificacion: 5,
        precio: 0,
        categoria: 5,
      },
      {
        img: "https://edteam-media.s3.amazonaws.com/courses/original/927ea68c-c0b0-440c-9c2c-a9bede954906.png",
        nombre: "Cómo iniciar tu primer emprendimiento",
        docente: "Catalina Villarreal",
        descripcion: "Aprende a crear tu propio negocio y hacerlo sostenible.",
        gratis: true,
        calfificacion: 5,
        precio: 0,
        categoria: 5,
      },
      {
        img: "https://edteam-media.s3.amazonaws.com/courses/original/7d1cf9f9-52aa-44b8-bfe9-71f4df75de3f.jpg",
        nombre: "Gestión y Desarrollo de Proyectos web",
        docente: "Daniel Romero",
        descripcion:
          "Conoce todas las etapas de un proyecto web: venta, planificación, diseño..",
        gratis: false,
        calfificacion: 5,
        precio: 69,
        categoria: 5,
      },
      {
        img: "https://edteam-media.s3.amazonaws.com/courses/original/702ee41e-5189-4d93-b1a3-c4818f542888.png",
        nombre: "PrestaShop desde cero",
        docente: "Omar Ruman",
        descripcion:
          "Construye desde cero tu sitio web profesional de comercio electrónico y ..",
        gratis: false,
        calfificacion: 5,
        precio: 110,
        categoria: 5,
      },
      //3D Y ANIMACION
      {
        img: "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,h_674,pg_1,t_base_params,w_1200/v1611759401/course-covers/000/001/702/1702-original.jpg?1611759401",
        nombre: "Ilustración fantástica 3D con Blender",
        docente: "Brellias",
        descripcion:
          "Convierte tus fantasías en realidad creando una pieza de arte conceptual..",
        gratis: false,
        calfificacion: 5,
        precio: 150,
        categoria: 6,
      },
      {
        img: "https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_428,pg_1,q_auto:eco,t_base_params,w_760/v1633677278/course-covers/000/002/912/2912-original.jpg?1633677278",
        nombre: "Personajes ilustrados en 3D desde tu iPad",
        docente: "Roman Garcia",
        descripcion:
          "Aprende a diseñar y modelar criaturas en 3D con Nomad y a convertirlas en..",
        gratis: false,
        calfificacion: 5,
        precio: 150,
        categoria: 6,
      },
      {
        img: "https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_428,pg_1,q_auto:eco,t_base_params,w_760/v1578571708/course-covers/000/000/546/546-original.jpg?1578571708",
        nombre: "Introducción a SketchUp",
        docente: "Alejandro Soriano",
        descripcion:
          "Aprende desde cero a diseñar y modelar en 3D de forma rápida, eficiente..",
        gratis: false,
        calfificacion: 5,
        precio: 160,
        categoria: 6,
      },
      {
        img: "https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_428,pg_1,q_auto:eco,t_base_params,w_760/v1597317292/course-covers/000/001/317/1317-original.jpg?1597317292",
        nombre: "Introducción a AutoCAD",
        docente: "Alicia Sanz",
        descripcion:
          "Aprende desde cero a dibujar los planos de tus proyectos arquitectónicos en..",
        gratis: false,
        calfificacion: 5,
        precio: 140,
        categoria: 6,
      },
      {
        img: "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,h_674,pg_1,t_base_params,w_1200/v1623422172/course-covers/000/001/513/1513-original.jpg?1623422172",
        nombre: "Animación con técnicas mixtas en Procreate",
        docente: "Caroline Kjellberg",
        descripcion:
          "Aprende a contar historias visuales potentes con tu iPad Pro animando",
        gratis: false,
        calfificacion: 5,
        precio: 140,
        categoria: 6,
      },
      {
        img: "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,h_674,pg_1,t_base_params,w_1200/v1628682190/course-covers/000/001/761/1761-original.jpg?1628682190",
        nombre: "Diseño avanzado de videojuegos RPG con Unity",
        docente: "Diego Vázquez",
        descripcion:
          "Aprende conceptos y prácticas nivel experto para crear un videojuego 2D con..",
        gratis: false,
        calfificacion: 5,
        precio: 150,
        categoria: 6,
      },
      {
        img: "https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_428,pg_1,q_auto:eco,t_base_params,w_760/v1569517267/course-covers/000/000/684/684-original.jpg?1569517267",
        nombre: "Animación vectorial estilo cuadro a cuadro con After Effects",
        docente: "Pablo Cuello",
        descripcion:
          "Crea animaciones con personalidad y estilo artesanal sin utilizar plugins",
        gratis: false,
        calfificacion: 4,
        precio: 150,
        categoria: 6,
      },
      {
        img: "https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_428,pg_1,q_auto:eco,t_base_params,w_760/v1604592504/course-covers/000/000/588/588-original.jpg?1604592504",
        nombre: "Introducción a Cinema 4D",
        docente: "Francisco Du",
        descripcion:
          "Aprende 3D desde cero para crear figuras y animaciones únicas y renderiza con..",
        gratis: false,
        calfificacion: 5,
        precio: 150,
        categoria: 6,
      },
    ],
    categoriaActivo: null,

    buscadorCurso: "",

    hover: false,
  },

  computed: {
    listaCursos() {
      if (this.categoriaActivo != null) {
        const cursosPorCategoria = this.cursos.filter(
          (curso) => curso.categoria == this.categoriaActivo
        );

        if (this.buscadorCurso) {
          return cursosPorCategoria.filter(
            (curso) =>
              curso.nombre
                .toUpperCase()
                .search(this.buscadorCurso.toUpperCase()) != -1
          );
        }

        return cursosPorCategoria;
      }

      return this.buscadorCurso
        ? this.cursos.filter(
            (curso) =>
              curso.nombre
                .toUpperCase()
                .search(this.buscadorCurso.toUpperCase()) != -1
          )
        : this.cursos;
    },
  },
  methods: {
    seleccionarCategoria(categoria) {
      console.log(categoria);
      this.categoriaActivo = categoria;
    },
  },
});

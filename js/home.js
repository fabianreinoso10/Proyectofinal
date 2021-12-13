//UNA INSTANCIA DE VUEJS
new Vue({
  el: "#home", // EL ID DEL ARCHIVO HTML
  data: {
    // AQUI SE LE DACLARA TODAS LAS VARIABLES QUE SE USARAN EN EL HTML
    title: "Home page",
    courses: [
      {
        image:
          "https://images.unsplash.com/photo-1536246026435-0cbb2a92952a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        name: "Introducción al diseño web con HTML",
        author: "Duha Samra",
        students: 10,
        price: 24.5,
        rating: 4.3,
      },
      {
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        name: "Enseñanza de necesidades de educación especial",
        author: "Leon Redding",
        students: 10,
        price: 24.5,
        rating: 4.1,
      },
      {
        image:
          "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80",
        name: "Curso de Ciencias Ambientales BTEC",
        author: "Linda Castello",
        students: 10,
        price: 24.5,
        rating: 4.8,
      },
      {
        image:
          "https://images.unsplash.com/photo-1539632346654-dd4c3cffad8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        name: "Gestión de MBA a distancia",
        author: "Michael Arnett",
        students: 10,
        price: 24.5,
        rating: 4.6,
      },
    ],
    categories: [
      {
        title: "Desarrollo Web",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
        subtitle: "",
      },
      {
        title: "Diseño Web",
        image:
          "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1636&q=80",
        subtitle: "",
      },
      {
        title: "Tecnologia",
        image:
          "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      {
        title: "Diseño",
        image:
          "https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      {
        title: "Fotografia",
        image:
          "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FtZXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
    ],

    corousel: [
      {
        img: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y291cnNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      },
      {
        img: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvdXJzZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      },
      {
        img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2938&q=80",
      },
    ],
    services: [
      {
        title: "Gestión de cursos de aprendizaje online",
        icon: "bi bi-kanban",
        color: "text-secondary",
        description:
          "Analiza materiales negativos sobre su marca y abordarlos con análisis de sentimiento y prensa.",
      },
      {
        title: "Aprenda de los maestros del campo en línea",
        icon: "bi bi-person-lines-fill",
        color: "text-info",
        description:
          "Analiza materiales negativos sobre su marca y abordarlos con análisis de sentimiento y prensa.",
      },
      {
        title: "Una introducción: habilidades para estudiantes",
        icon: "bi bi-bookmark-star",
        color: "text-success",
        description:
          "Analiza materiales negativos sobre su marca y abordarlos con análisis de sentimiento y prensa.",
      },
    ],

    news: [
      {
        image:
          "https://images.unsplash.com/photo-1559523275-98fb3c56faf6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1713&q=80",
        tag: "Gobierno",
        title: "Consejos para desarrollar una discusión de calidad",
        date: "Junio 13, 2021",
      },
      {
        image:
          "https://images.unsplash.com/photo-1607013407627-6ee814329547?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWNhZGVtaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        tag: "Academico",
        title:
          "El Ministerio de Educación podrá flexibilizar el calendario académico por la crisis",
        date: "Agosto 18, 2021",
      },
      {
        image:
          "https://images.unsplash.com/file-1635810583070-cc3f45744c3fimage",
        tag: "Diseño",
        title:
          "¿Piensas estudiar diseño gráfico? Conoce las áreas donde puedes desempeñarte",
        date: "Octubre 8, 2021",
      },
      {
        image:
          "https://media.istockphoto.com/photos/successful-business-man-reads-worlds-news-middle-aged-male-person-on-picture-id1285947755?b=1&k=20&m=1285947755&s=170667a&w=0&h=6UMV_5eq4lwQg34BjYJBVi1p1xP6zioSvtsFJKEAfLI=",
        tag: "Negocio",
        title: "Idea de negocio: seis claves para montar una empresa de moda",
        date: "Julio 19, 2021",
      },
    ],
  },
});

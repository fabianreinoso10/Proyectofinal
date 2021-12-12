const menu = [
  { path: "/index.html", title: "Inicio" },
  { path: "/blog.html", title: "Blog" },
  { path: "/courses.html", title: "Cursos" },
  { path: "/events.html", title: "Eventos" },
  { path: "/precios.html", title: "Precios" },
  { path: "/contact.html", title: "Contacto" },
];

new Vue({
  el: "#menu",
  data: {
    menu,
  },
});
new Vue({
  el: "#footer",
  data: {
    menu,
  },
});

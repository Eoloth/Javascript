$(document).ready(function () {
  // Slider
  $(".slider").bxSlider({
    mode: "fade",
    caption: true,
    sidewith: 1200,
  });

  // Post
  var posts = [
    {
      title: "Prueba de titulo 1",
      date:
        "Publicado el día: " +
        moment().date() +
        " de " +
        moment().format("MMMM") +
        " de " +
        moment().format("YYYY"),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci\n" +
        "              cumque dolorum, enim error eveniet id molestiae nobis pariatur\n" +
        "              quas veritatis! Aperiam eligendi molestias nobis, non odio quam\n" +
        "              quisquam quos repudiandae.",
    },
    {
      title: "Prueba de titulo 2",
      date:
        "Publicado el día: " +
        moment().date() +
        " de " +
        moment().format("MMMM") +
        " de " +
        moment().format("YYYY"),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci\n" +
        "              cumque dolorum, enim error eveniet id molestiae nobis pariatur\n" +
        "              quas veritatis! Aperiam eligendi molestias nobis, non odio quam\n" +
        "              quisquam quos repudiandae.",
    },
    {
      title: "Prueba de titulo 3",
      date:
        "Publicado el día: " +
        moment().date() +
        " de " +
        moment().format("MMMM") +
        " de " +
        moment().format("YYYY"),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci\n" +
        "              cumque dolorum, enim error eveniet id molestiae nobis pariatur\n" +
        "              quas veritatis! Aperiam eligendi molestias nobis, non odio quam\n" +
        "              quisquam quos repudiandae.",
    },
    {
      title: "Prueba de titulo 4",
      date:
        "Publicado el día: " +
        moment().date() +
        " de " +
        moment().format("MMMM") +
        " de " +
        moment().format("YYYY"),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci\n" +
        "              cumque dolorum, enim error eveniet id molestiae nobis pariatur\n" +
        "              quas veritatis! Aperiam eligendi molestias nobis, non odio quam\n" +
        "              quisquam quos repudiandae.",
    },
    {
      title: "Prueba de titulo 5",
      date:
        "Publicado el día: " +
        moment().date() +
        " de " +
        moment().format("MMMM") +
        " de " +
        moment().format("YYYY"),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci\n" +
        "              cumque dolorum, enim error eveniet id molestiae nobis pariatur\n" +
        "              quas veritatis! Aperiam eligendi molestias nobis, non odio quam\n" +
        "              quisquam quos repudiandae.",
    },
  ];
  posts.forEach((item, index) => {
    var post = `
    <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>${item.content}</p>
        <a href="#" class="button-more">Leer Mas</a>
    </article>
  `;
    $("#posts").append(post);
  });

  // Selector de tema
  var theme = $("#theme");
  $("#to-green").click(function () {
    theme.attr("href", "css/green.css");
  });
  $("#to-red").click(function () {
    theme.attr("href", "css/red.css");
  });
  $("#to-blue").click(function () {
    theme.attr("href", "css/blue.css");
  });

  // Scroll arriba de la web
  $(".subir").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });

  // Login falso
  $("#login").submit(function () {
    var form = $("#form_name").val();
    localStorage.setItem("form_name", form);
  });

  var form_name = localStorage.getItem("form_name");
  if (form_name != null && form_name !== "undefined") {
    var about_parrafo = $("#about p");
    about_parrafo.html("<strong>Bienvenido:" + form_name + "</strong> ");
    about_parrafo.append("<a href='#' id='logout'>Cerrar Sesion</a>");

    $("#login").hide();

    $("#logout").click(function () {
      localStorage.clear();
      location.reload();
    });
  }
});

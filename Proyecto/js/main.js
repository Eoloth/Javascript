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
});

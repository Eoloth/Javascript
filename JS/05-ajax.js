$(document).ready(function () {
  // Load
  // $("#datos").load("https://reqres.in/");

  // Get y Post
  $.get("https://reqres.in/api/users", { page: 2 }, function (response) {
    response.data.forEach((user, index) => {
      $("#datos").append(`<li>${user.first_name} ${user.last_name}</li>`);
    });
  });

  var usuario = {
    nombre: "Juan",
    apellido: "Perez",
  };
  $.post("https://reqres.in/api/users", usuario, function (response) {
    console.log(response);
  });

  $("#formulario").submit(function (e) {
    e.preventDefault();
    var usuario = {
      nombre: $('input[name="nombre"]').val(),
      apellido: $('input[name="apellido"]').val(),
    };
    /*
    $.post($(this).attr("action"), usuario, function (response) {
      console.log(response);
    }).done(function () {
      alert("Usuario añadido");
    });
  */

    $.ajax({
      type: "POST",
      dataType: "json",
      contentType: "application/json",
      url: "https://reqres.in/api/users",
      data: usuario,
      beforeSend: function () {
        console.log("Enviando usuario...");
      },
      success: function (response) {
        console.log(response);
      },
      error: function (error) {
        console.log("Ha ocurrido un error");
      },
      timeout: 3000,
    });
    return false;
  });
});

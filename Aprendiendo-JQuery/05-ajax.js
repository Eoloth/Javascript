$(document).ready(function () {
  // Load
  // $("#datos").load("https://reqres.in/");

  // Get y Post
  $.get("https://reqres.in/api/users", { page: 2 }, function (response) {
    response.data.forEach((user, index) => {
      $("#datos").append(`<li>${user.first_name} ${user.last_name}</li>`);
    });
  });
});

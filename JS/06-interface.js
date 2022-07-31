$(document).ready(function () {
  // Mover elemento por la pagina
  $(".elemento").draggable();

  // Redimensionar elemento
  $(".elemento").resizable();

  // Seleccionar elemento
  //$(".lista-seleccionable").selectable();

  // Ordenar elemento
  $(".lista-seleccionable").sortable({
    update: function (event, ui) {
      console.log("Ordenando la lista");
    },
  });

  // Soltar y arrastrar elemento (drag and drop)
  $("#elemento-movido").draggable();
  $("#area").droppable({
    drop: function () {
      console.log("Soltando elemento dentro del área");
    },
  });

  // Efectos
  $("#mostrar").click(function () {
    $(".caja-efectos").toggle("explode", 1000);
  });
});

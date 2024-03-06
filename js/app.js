const menuBtn = document.querySelector(".menu-btn");
var elemento = document.getElementById("navbar-cell");
elemento.style.display = "none";
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("open");
});

function cambiarEstado(silla) {
  if (silla.classList.contains("disponible")) {
    silla.src = "../assets/ocupada.png";
    silla.classList.remove("disponible");
    silla.classList.add("ocupada");
  } else {
    silla.src = "../assets/libre.png";
    silla.classList.remove("ocupada");
    silla.classList.add("disponible");
  }
}


function toggleElemento() {
  if (elemento.style.display === "none") {
    elemento.style.display = "block";
  } else {
    elemento.style.display = "none";
  }
}

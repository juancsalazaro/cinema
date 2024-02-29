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

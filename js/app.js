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

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});

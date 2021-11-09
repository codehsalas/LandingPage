console.log("Dentro del archivo");

  window.sr = ScrollReveal();
    sr.reveal('.anima-L', {
      duration: 5000,
      origin: 'left',
      distance: '-1500px'
    });

  window.sr = ScrollReveal();
  sr.reveal(".anima-R", {
    duration: 5000,
    origin: "right",
    distance: "-1500px",
  });

  ScrollReveal().reveal(".howDoScroll1", { delay: 500 });
  ScrollReveal().reveal(".howDoScroll2", { delay: 700 });
  ScrollReveal().reveal(".howDoScroll3", { delay: 900 });
  ScrollReveal().reveal(".howDoScroll4", { delay: 1100 });
  ScrollReveal().reveal(".headline");
  ScrollReveal().reveal(".tagline", { delay: 500 });
  ScrollReveal().reveal(".items", { easing: "ease-in" }, { origin: "top" });



  /* Cards personas */
  let btnUno = document.querySelector(".clientOne_link");
  let btnDos = document.querySelector(".clientTwo_link");
  let btnTres = document.querySelector(".clientThree_link");

  let valoracionUno = document.querySelector(".section_ClientsFour");
  let valoracionDos = document.querySelector(".section_ClientsFive");
  let valoracionTres = document.querySelector(".section_ClientsSix");

  const containerValoracion = document.querySelector(".section_Clients");


containerValoracion.addEventListener("click", e => {
  console.log(e.target)
  console.log(e.target.classList.contains("section_ClientsOne"));
  if(e.target.classList.contains("section_ClientsOne")){
     valoracionDos.style.display = "none";
     valoracionTres.style.display = "none";
     valoracionUno.style.display = "block";
     e.stopPropagation();
  }
  if (e.target.classList.contains("section_ClientsTwo")) {
    valoracionUno.style.display = "none";
    valoracionTres.style.display = "none";
    valoracionDos.style.display = "block";
    e.stopPropagation();
  }
   if (e.target.classList.contains("section_ClientsThree")) {
     valoracionUno.style.display = "none";
     valoracionDos.style.display = "none";
     valoracionTres.style.display = "block";
     e.stopPropagation();
   }
})

  /* Navbar Mobile Version */

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", mobileMenu);

  function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }
  const navLink = document.querySelectorAll(".nav-link");

  navLink.forEach((n) => n.addEventListener("click", closeMenu));

  function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }




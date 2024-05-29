//scroll header

const header = document.querySelector(".header");
function verificarScroll() {
  if (window.pageYOffset >= 300) {
    header.classList.add("visible-background");
  } else if (window.pageYOffset < 300) {
    header.classList.remove("visible-background");
  }
}

window.addEventListener("scroll", verificarScroll);

//Animação Seção sobre

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show-sobre");
    }
  });
});

const sobre = document.querySelectorAll(".hidden-sobre");
sobre.forEach((el) => observer.observe(el));

//animação Projetos

const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show-projeto");
      }
    });
  },

  {
    threshold: 0.5,
  }
);

const projetos = document.querySelectorAll(".hidden-projeto");
projetos.forEach((projeto) => observer2.observe(projeto));

$(".clientes-galeria").slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

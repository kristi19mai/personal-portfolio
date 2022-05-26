const slides = document.querySelectorAll(".slide");

slides.forEach((slide) =>
  slide.addEventListener("click", function () {
    slides[0].classList.remove("active");
    this.classList.add("active");
  })
);
slides.forEach((slide) =>
  slide.addEventListener("mouseout", function () {
    this.classList.remove("active");
    slides[0].classList.add("active");
  })
);

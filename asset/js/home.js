let naviToggle = document.querySelector("#navi-toggle");
let status = true;
let tl = gsap.timeline();

window.onload = function () {
  const hero_heads = document.querySelectorAll(".hero__heading");
  const hero_paras = document.querySelectorAll(".hero__para");
  const hero_footers = document.querySelectorAll(".hero__footer__text");
  const hero_imgs = document.querySelectorAll(".hero__footer__img");

  hero_heads.forEach((hero_head) => {
    _class = hero_head.className;
    gsap.fromTo(
      `.${_class}`,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        duration: 1,
        y: 0,
        ease: "none",
      }
    );
  });

  hero_paras.forEach((hero_para) => {
    _class = hero_para.className;
    gsap.fromTo(
      `.${_class}`,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        duration: 1,
        y: 0,
        ease: "none",
      }
    );
  });
  hero_footers.forEach((hero_footer) => {
    _class = hero_footer.className;
    gsap.fromTo(
      `.${_class}`,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        duration: 1,
        y: 0,
        ease: "none",
      }
    );
  });
  hero_imgs.forEach((hero_img) => {
    _class = hero_img.className;
    gsap.fromTo(
      `.${_class}`,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        duration: 1,
        y: 0,
        ease: "none",
      }
    );
  });
};

naviToggle.addEventListener("click", function () {
  if (status) {
    const bg = document.querySelector(".navigation__background");
    const nav = document.querySelector(".navigation__nav");

    bg.style.transform = "scale(80)";
    bg.style.display = "block";
    nav.style.opacity = 1;
    nav.style.width = "100%";

    gsap.fromTo(
      ".first",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        y: -50,
        ease: "power1",
        delay: 0.2,
      }
    );
    gsap.fromTo(
      ".second",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        y: -45,
        ease: "power1",
        delay: 0.2,
      }
    );
    gsap.fromTo(
      ".third",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        y: -40,
        ease: "power1",
        delay: 0.3,
      }
    );
    gsap.fromTo(
      ".fourth",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        y: -35,
        ease: "power1",
        delay: 0.4,
      }
    );
    gsap.fromTo(
      ".fifth",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        y: -30,
        ease: "power1",
        delay: 0.5,
      }
    );
    gsap.fromTo(
      ".sixth",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        y: -25,
        ease: "power1",
        delay: 0.6,
      }
    );
    gsap.fromTo(
      ".seventh",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        y: -20,
        ease: "power1",
        delay: 0.7,
      }
    );

    status = false;
  } else {
    const bg = document.querySelector(".navigation__background");
    const nav = document.querySelector(".navigation__nav");

    bg.style.transform = "none";
    bg.style.display = "none";
    nav.style.opacity = 0;
    nav.style.width = 0;

    gsap.to(".first", { duration: 0, y: 0, ease: "power1" });
    gsap.to(".second", { duration: 0, y: 0, ease: "power1" });
    gsap.to(".third", { duration: 0, y: 0, ease: "power1" });
    gsap.to(".fourth", { duration: 0, y: 0, ease: "power1" });
    gsap.to(".fifth", { duration: 0, y: 0, ease: "power1" });
    gsap.to(".sixth", { duration: 0, y: 0, ease: "power1" });
    gsap.to(".seventh", { duration: 0, y: 0, ease: "power1" });
    status = true;
  }
});

const overlay = document.querySelector(".overlay");
const overlay2 = document.querySelector(".overlay2");
const hero1 = document.querySelector(".hero--one");
const hero2 = document.querySelector(".hero--two");
const heading = document.querySelector(".hero__heading");
const heading2 = document.querySelectorAll(".hero__heading")[1];
const para = document.querySelector(".hero__para");
const footer_text = document.querySelector(".hero__footer__text");
const footer_img = document.querySelector(".hero__footer__img");
const logo = document.querySelector(".header__menu__logo");

hero1.addEventListener("mouseenter", () => {
  overlay.style.background = "#033C3B";
  // overlay.style.borderRight = "1.5px solid gray";
  heading.style.color = "white";
  para.style.color = "#CBA525";
  footer_text.style.color = "white";
  footer_img.style.filter = "sepia(100%) grayscale(100%)";
  logo.style.zIndex = 2;
  logo.style.filter = "invert(0.35)";
});
hero1.addEventListener("mouseleave", () => {
  overlay.style.background = "transparent";
  overlay.style.borderRight = "";
  heading.style.color = "#033C3B";
  para.style.color = "";
  footer_text.style.color = "";
  footer_img.style.filter = "none";
  logo.style.filter = "none";
});
hero2.addEventListener("mouseenter", () => {
  overlay2.style.background = "url('/asset/img/background-3.png')";
  overlay2.style.zIndex = -1;
  // overlay2.style.borderLeft = "1.5px solid gray";
  heading2.style.color = "#3C6867";
});
hero2.addEventListener("mouseleave", () => {
  overlay2.style.background = "transparent";
  overlay2.style.borderLeft = "";
  heading2.style.color = "";
});

import React from 'react';

const indexAnimation = (gsap, document, useRouter) => {    
  const hero_heads = document.querySelectorAll(".hero__heading");
  const hero_paras = document.querySelectorAll(".hero__para");
  const hero_footers = document.querySelectorAll(".hero__footer__text");
  const hero_imgs = document.querySelectorAll(".hero__footer__img");
  let _class;

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
  const icon = document.querySelector(".header__menu__icon");

  hero1.addEventListener("mouseenter", () => {
    overlay.style.background = "#033C3B";
    // overlay.style.borderRight = "1.5px solid gray";
    heading.style.color = "white";
    para.style.color = "#CBA525";
    footer_text.style.color = "white";
    footer_img.style.filter = "sepia(100%) grayscale(100%)";
    logo.style.zIndex = 2;
    // logo.style.filter = "invert(0.35)";
    logo.src = "../img/logo-3.svg";
    hero1.style.zIndex = "10000";
    icon.classList.add("header__menu__hover");
    icon.classList.remove("header__menu__icon")
  });
  hero1.addEventListener("mouseleave", () => {
    overlay.style.background = "transparent";
    overlay.style.borderRight = "";
    heading.style.color = "#033C3B";
    para.style.color = "";
    footer_text.style.color = "";
    footer_img.style.filter = "none";
    logo.style.filter = "none";
    logo.src = "../img/logo.svg";
    hero1.style.zIndex = "0";
    icon.classList.remove("header__menu__hover");
    icon.classList.add("header__menu__icon");
  });
  hero2.addEventListener("mouseenter", () => {
    overlay2.style.background = "url('../img/background-3.png')";
    overlay2.style.zIndex = -1;
    heading2.style.color = "#3C6867";
  });
  hero2.addEventListener("mouseleave", () => {
    overlay2.style.background = "transparent";
    overlay2.style.borderLeft = "";
    heading2.style.color = "";
  });

}

export default indexAnimation;
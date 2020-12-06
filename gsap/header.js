const headerAnimation = (gsap, document) => {    
  let naviToggle = document.querySelector("#navi-toggle");
  let status = true;

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
}

export default headerAnimation;
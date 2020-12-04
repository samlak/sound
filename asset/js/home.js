$('.navigation__link').hover( 
  function(){
    // $('.navigation__link').addClass('navigation__link__not-active');
    $(this).addClass('navigation__link__active');
  },
  function(){
    // $('.navigation__link').removeClass('navigation__link__not-active');
    $(this).removeClass('navigation__link__active');
  }
);

$('.navigation__list').hover( 
  function(){
    // $('.navigation__link').addClass('navigation__link__not-active');
    $(this).addClass('navigation__link__not-active');
  },
  function(){
    // $('.navigation__link').removeClass('navigation__link__not-active');
    $(this).removeClass('navigation__link__not-active');
  }
);

let  naviToggle = document.querySelector('.navi-toggle');
let bool = false;
let tl = gsap.timeline();

naviToggle.addEventListener('click', function() {
  if (bool === false) {
    gsap.to()
  }
})

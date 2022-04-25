// Custom Scripts
// Custom scripts
// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
        menu.classList.add('active')
        burger.classList.add('active-burger')
        body.classList.add('locked')
      } else {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
      if (window.innerWidth > 991.98) {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
  }
  burgerMenu()
  
  
  // Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
  function fixedNav() {
    const nav = document.querySelector('nav')
  
    // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
    const breakpoint = 1
    if (window.scrollY >= breakpoint) {
      nav.classList.add('fixed__nav')
    } else {
      nav.classList.remove('fixed__nav')
    }
  }
  window.addEventListener('scroll', fixedNav)


// Animations
gsap.registerPlugin(ScrollTrigger)

gsap.from(".hero__subtitle", 1.5, {
  scrollTrigger: {
    trigger: ".section__hero"
  }, // start the animation when ".box" enters the viewport (once)
  y: 100,
  opacity: 0,
});
gsap.from(".hero__title", 1, {
  scrollTrigger: {
    trigger: ".section__hero"
  }, // start the animation when ".box" enters the viewport (once)
  y: 100,
  opacity: 0,
});
gsap.from(".hero__text", 1, {
  scrollTrigger: {
    trigger: ".section__hero"
  }, // start the animation when ".box" enters the viewport (once)
  y: -50,
  delay: 1,
  opacity: 0
});
gsap.from(".form__label", 2, {
  scrollTrigger: {
    trigger: ".section__hero"
  }, // start the animation when ".box" enters the viewport (once)
  width: 0
});
gsap.from(".form__btn", 3, {
  scrollTrigger: {
    trigger: ".section__hero"
  }, // start the animation when ".box" enters the viewport (once)
  opacity: 0,
  delay: 1.5
});

gsap.from(".hero__img", 2, {
  scrollTrigger: {
    trigger: ".section__hero"
  }, // start the animation when ".box" enters the viewport (once)
  opacity: 0,
  delay: 0.5,
  scale: 0
});

gsap.from(".hero-1", 1, {
  scrollTrigger: {
    trigger: ".section__hero"
  }, // start the animation when ".box" enters the viewport (once)
  opacity: 0,
  y: 50,
  delay: 1
});
gsap.from(".hero-2", 1, {
  scrollTrigger: {
    trigger: ".section__hero"
  }, // start the animation when ".box" enters the viewport (once)
  opacity: 0,
  y: 100,
  delay: 1.2
});


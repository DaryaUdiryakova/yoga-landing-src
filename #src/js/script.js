// Swiper

const swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  slidesPerView: 4,
  loop: true,
  roundLengths: true,
  loopAdditionalSlides: 30,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    }
  }
});

const swiperPrev = document.getElementById('swiperPrev')
const swiperNext = document.getElementById('swiperNext')

swiperPrev.addEventListener('click', () => {
  swiper.slidePrev();
})
swiperNext.addEventListener('click', () => {
  swiper.slideNext();
})


// close menu
  function closeMenu(context) {
    context.classList.remove('is-active');
    document.querySelector('.header__nav').classList.remove('nav-active');
    setTimeout(() => document.querySelector('.header__nav').style.transition = '', 1000);
    document.body.classList.remove('wrap-active');
  }

// menu
document.querySelector('.button-menu').addEventListener('click', function (e) {
  e.preventDefault();

  if (this.classList.contains('is-active')) {
    closeMenu(this);
  } else {
    this.classList.add('is-active');
    document.querySelector('.header__nav').classList.add('nav-active');
    document.querySelector('.header__nav').style.transition = 'all ease 1s';
    document.body.classList.add('wrap-active'); 
  }

})

// js accordion

const btnToogle = document.getElementById('btn-toogle');
const container = document.getElementById('toogle-instructors-item');

function toogleFunc(hasclass, newClass, maxHeight) {
  if (hasclass.classList.contains(newClass)) {
    hasclass.classList.remove(newClass);
    hasclass.style.maxHeight = maxHeight;
  } else {
    hasclass.classList.add(newClass);
    hasclass.style.maxHeight = hasclass.scrollHeight + 'px';
  }
}

btnToogle.addEventListener('click', function () { 
  toogleFunc(container, 'active-instructors-item', 0);
  this.innerHTML === 'more ...' ? this.innerHTML = 'hide' : this.innerHTML = 'more ...';
});

const itemFooter = document.querySelectorAll('.footer-mobile');
for (let item of itemFooter) {
  item.addEventListener('click', function () {
    toogleFunc(this, 'item-active', 50 + 'px' );
  });
}

// animation scroll

const smoothLinks = document.querySelectorAll('.header__item, .header__btn');
for (let link of smoothLinks) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const id = link.getAttribute('href');
        closeMenu(document.querySelector('.button-menu'));
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};











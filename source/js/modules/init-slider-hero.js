const breakpoint767 = window.matchMedia('(max-width: 767px');

const initSliderhero = () => {
  const sliders = document.querySelectorAll('.slider-hero');

  if (!sliders.length) {
    return;
  }

  sliders.forEach((slider) => {
    const container = slider.querySelector('.slider-hero__container');
    const prevBtn = slider.querySelector('.slider-hero__btn--prev');
    const nextBtn = slider.querySelector('.slider-hero__btn--next');

    let swiper;

    const initSwiper = () => {
      // eslint-disable-next-line no-undef
      swiper = new Swiper(container, {
        loop: true,
        grabCursor: true,
        mousewheel: {
          forceToAxis: true,
        },
        navigation: {
          prevEl: prevBtn,
          nextEl: nextBtn,
          disabledClass: 'slider-hero__btn--disabled',
        },
        // breakpoints: {
        //   768: {
        //     spaceBetween: 30,
        //   },
        // },
      });
    };

    const breakpointChecker = () => {
      swiper.destroy(true, true);
      initSwiper();
    };

    initSwiper();

    breakpoint767.addListener(breakpointChecker);
  });
};


export {initSliderhero};

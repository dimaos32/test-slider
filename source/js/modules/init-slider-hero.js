const breakpoint767 = window.matchMedia('(max-width: 767px');
const breakpoint1023 = window.matchMedia('(max-width: 1023px');

const initSliderhero = () => {
  const sliders = document.querySelectorAll('.slider-hero');

  if (!sliders.length) {
    return;
  }

  sliders.forEach((slider) => {
    const container = slider.querySelector('.slider-hero__container');
    const slides = slider.querySelectorAll('.slider-hero__slide');
    const paginationElement = slider.querySelector('.slider-hero__pagination');
    const prevBtn = slider.querySelector('.slider-hero__btn--prev');
    const nextBtn = slider.querySelector('.slider-hero__btn--next');

    const mobilePagination = {
      el: paginationElement,
      clickable: true,
      bulletClass: 'slider-hero__bullet',
      bulletActiveClass: 'is-active',
      renderBullet: (index, className) => `<div class="${className}"></div>`,
    };

    const desktopPagination = {
      el: paginationElement,
      clickable: true,
      bulletClass: 'slider-hero__bullet',
      bulletActiveClass: 'is-active',
      renderBullet: (index, className) => {
        const slide = slides[index];
        const title = slide.querySelector('.slider-hero__title');
        const desc = slide.querySelector('.slider-hero__desc .not-mobile');

        return `<div class="${className}">
          <img class="slider-hero__bullet-img" src=${slide.dataset.paginationImg}>
          <div class="slider-hero__bullet-content">
            <p class="slider-hero__bullet-desc">${desc.textContent.split(' по')[0]}</p>
            <p class="slider-hero__bullet-title">${title.textContent}</p>
          </div>
        </div>`;
      },
    };

    let swiper;

    const initSwiper = () => {
      // eslint-disable-next-line no-undef
      swiper = new Swiper(container, {
        loop: true,
        grabCursor: true,
        mousewheel: {
          forceToAxis: true,
        },
        pagination: mobilePagination,
        navigation: {
          prevEl: prevBtn,
          nextEl: nextBtn,
          disabledClass: 'slider-hero__btn--disabled',
        },
        breakpoints: {
          1024: {
            pagination: desktopPagination,
          },
        },
      });
    };

    const breakpointChecker = () => {
      swiper.destroy(true, true);
      initSwiper();
    };

    initSwiper();

    breakpoint767.addListener(breakpointChecker);
    breakpoint1023.addListener(breakpointChecker);
  });
};


export {initSliderhero};

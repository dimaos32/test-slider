
import {initSliderhero} from './init-slider-hero';

const DELAY = 5000; // ms

const initPresentation = () => {
  const heroElement = document.querySelector('.hero');

  if (!heroElement) {
    return;
  }

  const coverElement = heroElement.querySelector('.hero__cover');
  const startBtn = coverElement.querySelector('.hero__start-btn');
  const loaderElement = coverElement.querySelector('.hero__loader');

  const onStartBtnClick = () => {
    startBtn.style.display = 'none';
    loaderElement.style.display = 'block';

    setTimeout(() => {
      coverElement.remove();
      initSliderhero();
    }, DELAY);

    startBtn.removeEventListener('click', onStartBtnClick);
  };

  startBtn.addEventListener('click', onStartBtnClick);
};


export {initPresentation};

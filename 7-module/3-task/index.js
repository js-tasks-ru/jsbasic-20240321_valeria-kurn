import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  config;
  elem;

  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.elem = this.#initSlider();
  }

  get elem() {
    return this.elem;
  } 

  #createSliderTemplate() {
    let template = createElement(`
    <!--Корневой элемент слайдера-->
    <div class="slider">
    
      <!--Ползунок слайдера с активным значением-->
      <div class="slider__thumb">
        <span class="slider__value"></span>
      </div>
    
      <!--Полоска слайдера-->
      <div class="slider__progress"></div>
    
      <!-- Шаги слайдера (вертикальные чёрточки) -->
      <div class="slider__steps">
      </div>
    </div>`);

    return template;
  }

  #insertSpan() {
    let template = this.#createSliderTemplate();
    let sliderSteps = template.querySelector('.slider__steps');

    for(let i=0; i<this.steps; i++) {
      let span = document.createElement('span');
      sliderSteps.appendChild(span);
    }

    return template;
  }

  #initSlider() {
    this.elem = this.#insertSpan();
    this.elem.querySelector('.slider__value').textContent = 0;
    this.elem.querySelector('.slider__steps').firstElementChild.classList.add('slider__step-active');
    this.elem.addEventListener('click', this.#onSliderClick);

    return this.elem;
  }

  #getValue(event, segments) {
    let left = event.clientX - this.elem.getBoundingClientRect().left; 
    let leftRelative = left / this.elem.offsetWidth;
    let approximateValue = leftRelative * segments;
    let value = Math.round(approximateValue);
    return value;
  }

  #onSliderClick = (event) => {
    let segments = this.steps - 1;
    let value = this.#getValue(event, segments);
    let valuePercents = value / segments * 100;
    this.elem.querySelector('.slider__value').textContent = value;
    
    let steps = this.elem.querySelector('.slider__steps').childNodes;
    steps.forEach((step) => {
      if (step.classList && step.classList.contains('slider__step-active')) 
        step.classList.remove('slider__step-active')
    });

    steps[value].classList.add('slider__step-active');
    
    let thumb = this.elem.querySelector('.slider__thumb');
    let progress = this.elem.querySelector('.slider__progress');

    let leftPercents = valuePercents;

    thumb.style.left = `${leftPercents}%`;
    progress.style.width = `${leftPercents}%`;

    let clickOnSliderEvent = new CustomEvent('slider-change', { 
      detail: value, 
      bubbles: true
    })

    this.elem.dispatchEvent(clickOnSliderEvent);
  }

}

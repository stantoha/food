require('es6-promise').polyfill();

import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calculator from './modules/calculator';
import forms from './modules/forms';
import slider from './modules/slider';
import { openModal } from './modules/modal';
window.addEventListener('DOMContentLoaded', () => {
   /*  const tabs= require('./modules/tabs'),
        modal= require('./modules/modal'),
        timer= require('./modules/timer'),
        cards= require('./modules/cards'),
        calculator= require('./modules/calculator'),
        forms= require('./modules/forms'),
        slider= require('./modules/slider');

        tabs();
        cards();
        modal();
        calculator();
        forms();
        slider();
        timer(); */
       
        const modalTimerId = setTimeout(() => openModal( '.modal',modalTimerId), 5000);

        tabs('.tabheader__item','.tabcontent','.tabheader__items','tabheader__item_active');
        cards();
        modal('[data-modal]','.modal',modalTimerId);
        calculator();
        forms('form', modalTimerId);
        slider(
                {
                        container:'.offer__slider',
                        nextArrow:'.offer__slider-next',
                        prevArrow:'.offer__slider-prev',
                        slide:'.offer__slide',
                        totalCounter:'#total',
                        currentCounter:'#current',
                        wrapper:'.offer__slider-wrapper',
                        field:'.offer__slider-inner'

                }
        );
        timer('.timer','2020-06-11');
});

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    controls: false,
    nav: false
});

document.querySelector('.next').addEventListener('click', () => slider.goTo('next'))

document.querySelector('.prev').addEventListener('click', () => slider.goTo('prev'))

// mask for phone inputs
$(document).ready(function () {
    $('input[name=phone]').mask("+7 (999) 999-999-99")
});


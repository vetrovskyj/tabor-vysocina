//$(document).ready(() => {
const carouselSlide = document.querySelector('.sliderphoto');
const carouselImages = document.querySelectorAll('.photo');
const dots = document.querySelectorAll('.rectangle');

let counter = 1;
const size = carouselSlide.clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * 0) + 'px)';
carouselImages[2].style.opacity = '0';
carouselImages[0].style.opacity = '0';

dots[0].addEventListener('click', () => {
    if (counter !== 0) {
        dots[0].style.backgroundColor = 'white';
        dots[counter].style.backgroundColor = 'transparent';
        setTimeout(() => {
            carouselImages[1].style.zIndex = 0;
            carouselImages[2].style.zIndex = 0;
            carouselImages[0].style.zIndex = carouselImages.length + 1;
        }, 400);
        carouselImages[0].style.transition = '';
        carouselImages[0].style.opacity = '1';
        carouselImages[counter].style.transition = 'opacity 0.4s ease-in-out';
        carouselImages[counter].style.opacity = '0';
        counter = 0;
    };
});

dots[1].addEventListener('click', () => {
    if (counter !== 1) {
        dots[1].style.backgroundColor = 'white';
        dots[counter].style.backgroundColor = 'transparent';
        setTimeout(() => {
            carouselImages[0].style.zIndex = 0;
            carouselImages[2].style.zIndex = 0;
            carouselImages[1].style.zIndex = carouselImages.length + 1;
        }, 400);
        carouselImages[1].style.transition = '';
        carouselImages[1].style.opacity = '1';
        carouselImages[counter].style.transition = 'opacity 0.4s ease-in-out';
        carouselImages[counter].style.opacity = '0';
        counter = 1;
    };
});

dots[2].addEventListener('click', () => {
    if (counter !== 2) {
        dots[2].style.backgroundColor = 'white';
        dots[counter].style.backgroundColor = 'transparent';
        setTimeout(() => {
            carouselImages[0].style.zIndex = 0;
            carouselImages[1].style.zIndex = 0;
            carouselImages[2].style.zIndex = carouselImages.length + 1;
        }, 400);
        carouselImages[2].style.transition = '';
        carouselImages[2].style.opacity = '1';
        carouselImages[counter].style.transition = 'opacity 0.4s ease-in-out';
        carouselImages[counter].style.opacity = '0';
        counter = 2;
    };
});

document.querySelector('.slider').addEventListener('touchstart', handleTouchStart, false);
document.querySelector('.slider').addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
    return evt.touches || // browser API
        evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) { /*most significant*/
        if (xDiff > 0) {
            if (counter < 2) {
                dots[counter + 1].style.backgroundColor = 'white';
                dots[counter].style.backgroundColor = 'transparent';
                setTimeout(() => {
                    carouselImages[counter - 1].style.zIndex = 0;
                    carouselImages[counter].style.zIndex = carouselImages.length + 1;
                }, 400);
                carouselImages[counter + 1].style.transition = '';
                carouselImages[counter + 1].style.opacity = '1';
                carouselImages[counter].style.transition = 'opacity 0.4s ease-in-out';
                carouselImages[counter].style.opacity = '0';
                counter++;
            };
        } else {
            if (counter > 0) {
                dots[counter - 1].style.backgroundColor = 'white';
                dots[counter].style.backgroundColor = 'transparent';
                setTimeout(() => {
                    carouselImages[counter + 1].style.zIndex = 0;
                    carouselImages[counter].style.zIndex = carouselImages.length + 1;
                }, 400);
                carouselImages[counter - 1].style.transition = '';
                carouselImages[counter - 1].style.opacity = '1';
                carouselImages[counter].style.transition = 'opacity 0.4s ease-in-out';
                carouselImages[counter].style.opacity = '0';
                counter--;
            };
        };
    };
    /* reset values */
    xDown = null;
    yDown = null;
};
//});
$(document).ready(() => {
    const carouselSlide = document.querySelector('.fotka');
    const carouselImages = document.querySelectorAll('.fotka img');
    const dots = document.querySelectorAll('.tecka input');

    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');

    let counter = 2;
    const size = carouselSlide.clientWidth;

    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    /*carouselSlide.addEventListener('transitionend', () => {
        if(carouselImages[counter].id === 'lastClone'){
            carouselSlide.style.transition = "none";
            counter = carouselImages.length - 2;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
        if(carouselImages[counter].id === 'firstClone'){
            carouselSlide.style.transition = "none";
            counter = carouselImages.length - counter;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
    });*/

    dots[2].style.opacity = "0.3";

    nextBtn.addEventListener('click', () => {
        if (counter >= carouselImages.length - 1) return;
        dots[counter].style.opacity = "1";
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter++;
        dots[counter].style.opacity = "0.3";
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        if (counter <= 3) {
            carouselImages[counter - 1].style.opacity = "0.3";
            carouselImages[counter + 1].style.opacity = "0.3";
            carouselImages[counter].style.opacity = "1";
        }
        if (counter === 4) {
            carouselImages[counter].style.opacity = "1";
            carouselImages[counter - 1].style.opacity = "0.3";
        }
        console.log(counter);

    });

    prevBtn.addEventListener('click', () => {
        if (counter <= 0) return;
        dots[counter].style.opacity = "1";
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter--;
        dots[counter].style.opacity = "0.3";
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        if (counter >= 1) {
            carouselImages[counter + 1].style.opacity = "0.3";
            carouselImages[counter - 1].style.opacity = "0.3";
            carouselImages[counter].style.opacity = "1";
        }
        if (counter === 0) {
            carouselImages[counter].style.opacity = "1";
            carouselImages[counter + 1].style.opacity = "0.3";
        }
    });

    dots[0].addEventListener('click', () => {
        dots[counter].style.opacity = "1";
        carouselImages[counter].style.opacity = "0.3";
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        carouselSlide.style.transform = 'translateX(' + (-size * 0) + 'px)';
        counter = 0;
        carouselImages[counter].style.opacity = "1";
        dots[0].style.opacity = "0.3";
    });

    dots[1].addEventListener('click', () => {
        dots[counter].style.opacity = "1";
        carouselImages[counter].style.opacity = "0.3";
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        carouselSlide.style.transform = 'translateX(' + (-size * 1) + 'px)';
        counter = 1;
        carouselImages[counter].style.opacity = "1";
        dots[1].style.opacity = "0.3";
    });

    dots[2].addEventListener('click', () => {
        dots[counter].style.opacity = "1";
        carouselImages[counter].style.opacity = "0.3";
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        carouselSlide.style.transform = 'translateX(' + (-size * 2) + 'px)';
        counter = 2;
        carouselImages[counter].style.opacity = "1";
        dots[2].style.opacity = "0.3";
    });

    dots[3].addEventListener('click', () => {
        dots[counter].style.opacity = "1";
        carouselImages[counter].style.opacity = "0.3";
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        carouselSlide.style.transform = 'translateX(' + (-size * 3) + 'px)';
        counter = 3;
        carouselImages[counter].style.opacity = "1";
        dots[3].style.opacity = "0.3";
    });

    dots[4].addEventListener('click', () => {
        dots[counter].style.opacity = "1";
        carouselImages[counter].style.opacity = "0.3";
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        carouselSlide.style.transform = 'translateX(' + (-size * 4) + 'px)';
        counter = 4;
        carouselImages[counter].style.opacity = "1";
        dots[4].style.opacity = "0.3";
    });

    document.querySelector('.fotky').addEventListener('touchstart', handleTouchStart, false);
    document.querySelector('.fotky').addEventListener('touchmove', handleTouchMove, false);

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
                if (counter >= carouselImages.length - 1) return;
                dots[counter].style.opacity = "1";
                carouselSlide.style.transition = "transform 0.4s ease-in-out";
                counter++;
                dots[counter].style.opacity = "0.3";
                carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
                if (counter <= 3) {
                    carouselImages[counter - 1].style.opacity = "0.3";
                    carouselImages[counter + 1].style.opacity = "0.3";
                    carouselImages[counter].style.opacity = "1";
                }
                if (counter === 4) {
                    carouselImages[counter].style.opacity = "1";
                    carouselImages[counter - 1].style.opacity = "0.3";
                }
                console.log(counter);
            } else {
                if (counter <= 0) return;
                dots[counter].style.opacity = "1";
                carouselSlide.style.transition = "transform 0.4s ease-in-out";
                counter--;
                dots[counter].style.opacity = "0.3";
                carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
                if (counter >= 1) {
                    carouselImages[counter + 1].style.opacity = "0.3";
                    carouselImages[counter - 1].style.opacity = "0.3";
                    carouselImages[counter].style.opacity = "1";
                }
                if (counter === 0) {
                    carouselImages[counter].style.opacity = "1";
                    carouselImages[counter + 1].style.opacity = "0.3";
                }
            }

        }
        /* reset values */
        xDown = null;
        yDown = null;
    };
});
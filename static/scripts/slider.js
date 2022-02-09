const carouselSlideZero = document.querySelectorAll('#years-preview-zero .years-item-container');
const carouselSlideFirst = document.querySelectorAll('#years-preview-first .years-item-container');
const carouselSlideThird = document.querySelectorAll('#years-preview-third .years-item-container');
const prevBtn = document.querySelectorAll('.prevBtn');
const nextBtn = document.querySelectorAll('.nextBtn');

const nextButtonZero = nextBtn[0];
const prevButtonZero = prevBtn[0];
const nextButtonFirst = nextBtn[1];
const prevButtonFirst = prevBtn[1];
const nextButtonThird = nextBtn[2];
const prevButtonThird = prevBtn[2];
console.log(prevBtn);

let counterZero = 0;
let counterFirst = 0;
let counterThird = 0;

const carouselSlide = document.querySelectorAll('.years-item-container');
let width = document.querySelector('.years-preview').clientWidth / 3;
let widthMargin = '';

if (window.innerWidth > 1000) {
    width = width - 40;
    widthMargin = width + 40;
} else if (window.innerWidth > 750) {
    width = width - 20;
    widthMargin = width + 20;
} else if (window.innerWidth > 500) {
    width = width - 12;
    widthMargin = width + 12;
} else {
    width = width - 6;
    widthMargin = width + 6;
}

console.log(width);

for (let i = 0; i < carouselSlide.length; i++) {
    carouselSlide[i].style.minWidth = width + 'px';
}

console.log(widthMargin);

nextButtonZero.addEventListener('click', () => {
    counterZero++;
    for (let i of carouselSlideZero) {
        if (counterZero == 0) {
            i.style.transform = 'translateX(' + (0) + 'px)';
            i.style.transition = "transform 0.4s ease-in-out";
        }
        if (counterZero == 1) {
            i.style.transform = 'translateX(' + (-widthMargin) + 'px)';
            i.style.transition = "transform 0.4s ease-in-out";
        }
        if (counterZero == 2) {
            i.style.transform = 'translateX(' + (-widthMargin * 2) + 'px)';
            i.style.transition = "transform 0.4s ease-in-out";
        }
        if (counterZero > 2) { counterZero = 2; }
    }
});

prevButtonZero.addEventListener('click', () => {
    counterZero--;
    for (let i of carouselSlideZero) {
        if (counterZero == 0) {
            i.style.transform = 'translateX(' + (0) + 'px)';
            i.style.transition = "transform 0.4s ease-in-out";
        }
        if (counterZero == 1) {
            i.style.transform = 'translateX(' + (-widthMargin) + 'px)';
            i.style.transition = "transform 0.4s ease-in-out";
        }
        if (counterZero == 2) {
            i.style.transform = 'translateX(' + (-widthMargin * 2) + 'px)';
            i.style.transition = "transform 0.4s ease-in-out";
        }
        if (counterZero < 0) { counterZero = 0; }
    };
});

nextButtonFirst.addEventListener('click', () => {
    counterFirst++;
    for (let i of carouselSlideFirst) {
        if (counterFirst == 0) {
            i.style.transform = 'translateX(' + (0) + 'px)';
            i.style.transition = "transform 0.4s ease-in-out";
        }
        if (counterFirst == 1) {
            i.style.transform = 'translateX(' + (-widthMargin) + 'px)';
            i.style.transition = "transform 0.4s ease-in-out";
        }
        if (counterFirst == 2) {
            i.style.transform = 'translateX(' + (-widthMargin * 2) + 'px)';
            i.style.transition = "transform 0.4s ease-in-out";
        }
        if (counterFirst > 2) { counterFirst = 2; }
    }
});

prevButtonFirst.addEventListener('click', () => {
    counterFirst--;
    for (let i of carouselSlideFirst) {
        if (counterFirst == 0) {
            i.style.transform = 'translateX(' + (0) + 'px)';
            i.style.transition = "transform 0.4s ease-in-out";
        }
        if (counterFirst == 1) {
            i.style.transform = 'translateX(' + (-widthMargin) + 'px)';
            i.style.transition = "transform 0.4s ease-in-out";
        }
        if (counterFirst == 2) {
            i.style.transform = 'translateX(' + (-widthMargin * 2) + 'px)';
            i.style.transition = "transform 0.4s ease-in-out";
        }
        if (counterFirst < 0) { counterFirst = 0; }
    };
});

nextButtonThird.addEventListener('click', () => {
    counterThird++;
    for (let i of carouselSlideThird) {
        if (counterThird == 0) {
            i.style.transform = 'translateX(' + (0) + 'px)';
            i.style.transition = "transform 0.4s ease-in-out";
        }
        if (counterThird == 1) {
            i.style.transform = 'translateX(' + (-widthMargin) + 'px)';
            i.style.transition = "transform 0.4s ease-in-out";
        }
        if (counterThird == 2) {
            i.style.transform = 'translateX(' + (-widthMargin * 2) + 'px)';
            i.style.transition = "transform 0.4s ease-in-out";
        }
        if (counterThird > 2) { counterThird = 2; }
    }
});

prevButtonThird.addEventListener('click', () => {
    counterThird--;
    for (let i of carouselSlideThird) {
        if (counterThird == 0) {
            i.style.transform = 'translateX(' + (0) + 'px)';
            i.style.transition = "transform 0.4s ease-in-out";
        }
        if (counterThird == 1) {
            i.style.transform = 'translateX(' + (-widthMargin) + 'px)';
            i.style.transition = "transform 0.4s ease-in-out";
        }
        if (counterThird == 2) {
            i.style.transform = 'translateX(' + (-widthMargin * 2) + 'px)';
            i.style.transition = "transform 0.4s ease-in-out";
        }
        if (counterThird < 0) { counterThird = 0; }
    };
});
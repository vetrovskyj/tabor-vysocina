$(document).ready(() => {
    const lightboxContainer = document.createElement('div');
    lightboxContainer.id = 'lightboxContainer';
    document.body.appendChild(lightboxContainer);

    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightboxContainer.appendChild(lightbox);

    const images = document.querySelectorAll('img');

    const prev = document.createElement('div');
    const prevImg = document.createElement('img');
    prevImg.src = '../../assets/images/leva.png';
    prev.id = 'prev';
    prev.appendChild(prevImg);

    const next = document.createElement('div');
    const nextImg = document.createElement('img');
    nextImg.src = '../../assets/images/prava.png';
    next.id = 'next';
    next.appendChild(nextImg);

    let arr = [];
    for (let i = 0, len = images.length; i < len; i++) {
        (function(index) {
            images[i].onclick = function() {
                arr = [];
                arr.push(index);
            };
        })(i);
    };

    function nextItem() {
        let i = arr[0];
        i = i + 1; // increase i by one
        arr = [];
        arr.push(i);
        i = i % images.length; // if we've gone too high, start from `0` again
        return images[i]; // give us back the item of where we are now
    };

    function prevItem() {
        let i = arr[0];
        if (i === 0) { // i would become 0
            i = images.length; // so put it at the other end of the array
        }
        i = i - 1; // decrease by one
        arr = [];
        arr.push(i);
        return images[i]; // give us back the item of where we are now
    }

    images.forEach(image => {
        image.addEventListener('click', e => {
            lightbox.classList.add('active');
            lightboxContainer.classList.add('active');
            next.classList.add('active');
            prev.classList.add('active');
            let img = document.createElement('img');
            img.src = image.src;
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            };
            lightbox.appendChild(img);
            lightbox.appendChild(prev);
            lightbox.appendChild(next);
        });
    });

    let img = document.createElement('img');
    console.log(images);

    prev.addEventListener('click', e => {
        img.src = prevItem().src;
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        };
        lightbox.appendChild(img);
        lightbox.appendChild(prev);
        lightbox.appendChild(next);
    });

    next.addEventListener('click', e => {
        img.src = nextItem().src;
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        };
        lightbox.appendChild(img);
        lightbox.appendChild(prev);
        lightbox.appendChild(next);
    });

    lightboxContainer.addEventListener('click', e => {
        if (e.target !== e.currentTarget) return
        lightbox.classList.remove('active');
        lightboxContainer.classList.remove('active');
        prev.classList.remove('active');
        next.classList.remove('active');
    });

    lightbox.addEventListener('touchstart', handleTouchStart, false);
    lightbox.addEventListener('touchmove', handleTouchMove, false);

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
                img.src = nextItem().src;
                while (lightbox.firstChild) {
                    lightbox.removeChild(lightbox.firstChild);
                };
                lightbox.appendChild(img);
                lightbox.appendChild(prev);
                lightbox.appendChild(next);
            } else {
                img.src = prevItem().src;
                while (lightbox.firstChild) {
                    lightbox.removeChild(lightbox.firstChild);
                };
                lightbox.appendChild(img);
                lightbox.appendChild(prev);
                lightbox.appendChild(next);
            }

        }
        /* reset values */
        xDown = null;
        yDown = null;
    };
});
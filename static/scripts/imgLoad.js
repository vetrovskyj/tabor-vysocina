window.onload = function() {
    // Allow assets directory listings
    let folder = "../images/Album";

    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    const prev = document.createElement('img');
    prev.src = './images/leva.png';
    prev.id = 'prev';
    document.body.appendChild(prev);

    const next = document.createElement('img');
    next.src = './images/prava.png';
    next.id = 'next';
    document.body.appendChild(next);

    let i = 0;
    const arr = [];
    let image = document.createElement('img');

    function nextItem() {
        i = i + 1; // increase i by one
        i = i % arr.length; // if we've gone too high, start from `0` again
        return arr[i]; // give us back the item of where we are now
    };

    function prevItem() {
        if (i === 0) { // i would become 0
            i = arr.length; // so put it at the other end of the array
        }
        i = i - 1; // decrease by one
        return arr[i]; // give us back the item of where we are now
    }

    $.ajax({
        url: folder,
        success: function(data) {
            $(data).find("a").attr("href", function(i, val) {
                if (val.match(/\.(jpe?g|png|gif)$/)) {
                    const div = document.createElement('div');
                    div.classList.add('grid-item');
                    $(".grid").append(div);
                    div.addEventListener('click', e => {
                        lightbox.classList.add('active');
                        prev.classList.add('active');
                        next.classList.add('active');
                    });
                    const img = document.createElement('img');
                    img.setAttribute('src', val);
                    img.setAttribute('height', 400);
                    img.setAttribute('alt', 'foto');
                    div.appendChild(img);

                    arr.push(img);

                    img.addEventListener('click', e => {
                        image.src = img.src;
                        while (lightbox.firstChild) {
                            lightbox.removeChild(lightbox.firstChild);
                        };
                        lightbox.appendChild(image);
                    });
                    //div.append("<img src='" + val + "' height='400' class='galerie-obrazek'>");
                };
            });
        }
    });

    prev.addEventListener('click', e => {
        image = prevItem();
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        };
        lightbox.appendChild(image);
    });

    next.addEventListener('click', e => {
        image = nextItem();
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        };
        lightbox.appendChild(image);
    });

    lightbox.addEventListener('click', e => {
        if (e.target !== e.currentTarget) return
        lightbox.classList.remove('active');
        prev.classList.remove('active');
        next.classList.remove('active');
    });
}
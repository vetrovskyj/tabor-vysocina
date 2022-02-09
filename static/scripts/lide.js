$(document).ready(() => {
    const osoby = $('.osoba');
    const profilePhoto = $('.profile-description');


    let arr = [];
    for (let i = 0, len = osoby.length; i < len; i++) {
        (function(index) {
            osoby[i].onmouseover = function() {
                setTimeout(() => {
                    profilePhoto[index].className = '';
                }, 200);
                osoby[index].classList.toggle('transition');
            };
            osoby[i].onmouseout = function() {
                setTimeout(() => {
                    profilePhoto[index].className = 'profile-description';
                }, 200);
                osoby[index].className = 'osoba';
            };
        })(i);
    };
});
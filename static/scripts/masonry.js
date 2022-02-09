$(document).ready(function() {
    var elem = document.querySelector('.grid');
    var msnry = new Masonry(elem, {
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
});
$(document).ready(function() {
    $('.spoil').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });
});
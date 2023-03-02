$(document).ready(function() {
    $(".item").hover(function() {
        $(this).toggleClass('active');
        // $(this).addClass('active');
        console.log(this.id + " is active");
    });

    $('.row-2 .col-1').hover(function(){
        $(this).toggleClass('expand');
    });

    $('.row-3 .col-2').hover(function(){
        $(this).toggleClass('expand');
    })
});
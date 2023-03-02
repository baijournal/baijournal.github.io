$(document).ready(function() {
    $("[id^='item-']").click(function() {
        $("[id^='item-']").removeClass('active');
        // $(this).addClass('active');
        console.log(this.id + " is active");
    });

    $('#item-1').click(function() {
        $('#item-1').removeClass().addClass('w-3 h-4 active');
        $('#item-2').removeClass().addClass('w-2 h-2 bg');
        $('#item-3').removeClass().addClass('w-2 h-1');
         $('#item-4').removeClass().addClass('w-2 h-2');
        $('#item-7').removeClass().addClass('w-3 h-1');
    });

    $('#item-2').click(function() {
        $('#item-1').removeClass().addClass('w-1 h-3');
        $('#item-2').removeClass().addClass('w-4 h-3 bg active');
        $('#item-3').removeClass().addClass('w-3 h-1');
        $('#item-4').removeClass().addClass('w-3 h-1 c-3');
        $('#item-7').removeClass().addClass('w-2 h-2 c-1 r-4');
    });
    $('#item-3').click(function() {
        $('#item-1').removeClass().addClass('w-2 h-2');
        $('#item-2').removeClass().addClass('w-3 h-2 bg');
        $('#item-3').removeClass().addClass('w-3 h-3 c-2 active');
        $('#item-4').removeClass().addClass('w-1 h-3');
        $('#item-7').removeClass().addClass('w-1 h-3 c-1 r-3');
    });

    $('#item-4').click(function() {
        $('#item-1').removeClass().addClass('w-2 h-2');
        $('#item-2').removeClass().addClass('w-3 h-2 bg');
        $('#item-3').removeClass().addClass('w-1 h-3 c-3');
        $('#item-4').removeClass().addClass('w-3 h-3 active');
        $('#item-7').removeClass().addClass('w-1 h-3 c-1 r-3');

        // $('#item-8').removeClass().addClass('w-2 h-3 bg');
        // $('#item-5').removeClass().addClass('w-2 h-2');
        // $('#item-6').removeClass().addClass('w-1 h-2');
        // $('#item-9').removeClass().addClass('w-3 h-1');
    });
    
    $('#item-7').click(function() {
        $('#item-1').removeClass().addClass('w-2 h-2');
        $('#item-2').removeClass().addClass('w-3 h-2 bg');
        $('#item-3').removeClass().addClass('w-1 h-3 c-3');
        $('#item-4').removeClass().addClass('w-1 h-3');
        $('#item-7').removeClass().addClass('w-3 h-3 c-1 r-3 active');

        // $('#item-8').removeClass().addClass('w-2 h-3 bg');
        // $('#item-5').removeClass().addClass('w-2 h-2');
        // $('#item-6').removeClass().addClass('w-1 h-2');
        // $('#item-9').removeClass().addClass('w-3 h-1');
    });

    $('#item-8').click(function() {
        
        $('#item-8').removeClass().addClass('w-3 h-3 bg active');
        $('#item-5').removeClass().addClass('w-2 h-1');
        $('#item-6').removeClass().addClass('w-2 h-1');
        $('#item-9').removeClass().addClass('w-2 h-1');

        // $('#item-1').removeClass().addClass('w-3 h-4 active');
        // $('#item-2').removeClass().addClass('w-2 h-2 bg');
        // $('#item-3').removeClass().addClass('w-2 h-1');
        //  $('#item-4').removeClass().addClass('w-2 h-2');
        // $('#item-7').removeClass().addClass('w-3 h-1');
    });
    $('#item-5').click(function() {
        $('#item-8').removeClass().addClass('w-1 h-2 bg');
        $('#item-5').removeClass().addClass('w-3 h-2 active');
        $('#item-6').removeClass().addClass('w-1 h-2');
        $('#item-9').removeClass().addClass('w-5 h-1');

        // $('#item-1').removeClass().addClass('w-3 h-4 active');
        // $('#item-2').removeClass().addClass('w-2 h-2 bg');
        // $('#item-3').removeClass().addClass('w-2 h-1');
        //  $('#item-4').removeClass().addClass('w-2 h-2');
        // $('#item-7').removeClass().addClass('w-3 h-1');
    });
    $('#item-6').click(function() {
        $('#item-8').removeClass().addClass('w-1 h-2 bg');
        $('#item-5').removeClass().addClass('w-1 h-2');
        $('#item-6').removeClass().addClass('w-3 h-2 active');
        $('#item-9').removeClass().addClass('w-5 h-1');

        // $('#item-1').removeClass().addClass('w-3 h-4 active');
        // $('#item-2').removeClass().addClass('w-2 h-2 bg');
        // $('#item-3').removeClass().addClass('w-2 h-1');
        //  $('#item-4').removeClass().addClass('w-2 h-2');
        // $('#item-7').removeClass().addClass('w-3 h-1');
    });
    $('#item-9').click(function() {
        $('#item-8').removeClass().addClass('w-1 h-1 bg');
        $('#item-5').removeClass().addClass('w-2 h-1');
        $('#item-6').removeClass().addClass('w-2 h-1');
        $('#item-9').removeClass().addClass('w-5 h-2 active');
    });


    $('#item-10').click(function() {
        $('#item-10').removeClass().addClass('w-4 h-2 thumb active');
        $('#item-11').removeClass().addClass('w-1 h-2');
        $('#item-12').removeClass().addClass('w-3 h-1 c-1 r-11');
        $('#item-13').removeClass().addClass('w-2 h-1 c-4 thumb');

        // $('#item-8').removeClass().addClass('w-2 h-3 bg');
        // $('#item-5').removeClass().addClass('w-2 h-2');
        // $('#item-6').removeClass().addClass('w-1 h-2');
        // $('#item-9').removeClass().addClass('w-3 h-1');
    });

    $('#item-11').click(function() {
        $('#item-10').removeClass().addClass('w-3 h-1 thumb');
        $('#item-11').removeClass().addClass('w-2 h-2 active');
        $('#item-12').removeClass().addClass('w-3 h-2 c-1 r-10');
        $('#item-13').removeClass().addClass('w-2 h-1 c-4 thumb');
    });

    $('#item-12').click(function() {
        $('#item-10').removeClass().addClass('w-3 h-1 thumb');
        $('#item-11').removeClass().addClass('w-2 h-1');
        $('#item-12').removeClass().addClass('w-3 h-2 c-1 r-10 active');
        $('#item-13').removeClass().addClass('w-2 h-2 c-4 thumb');
    });
    $('#item-13').click(function() {
        $('#item-10').removeClass().addClass('w-3 h-1 thumb');
        $('#item-11').removeClass().addClass('w-2 h-1');
        $('#item-12').removeClass().addClass('w-2 h-2 c-1 r-10');
        $('#item-13').removeClass().addClass('w-3 h-2 c-3 thumb active');
    });




    // $('#item-5').mouseover(function() {
    //     $('#item-5').removeClass().addClass('w-3 h-2');
    //     $('#item-8').removeClass().addClass('w-1 h-2');
    //     $('#item-9').removeClass().addClass('w-4 h-1');
    //     $('#item-5').removeClass().addClass('w-1 h-2');
    //     // $('#item-7').removeClass('w-3 h-1').addClass('w-2 h-1');
    // });
    // $('#item-6').mouseover(function() {
    //     $(this).removeClass('w-1 h-2').addClass('w-3 h-2');
    //     $('#item-8').removeClass('w-2 h-3').addClass('w-1 h-3');
    //     $('#item-9').removeClass('w-3 h-1').addClass('w-4 h-1');
    //     $('#item-5').removeClass('w-2 h-2').addClass('w-1 h-2');
    //     // $('#item-7').removeClass('w-3 h-1').addClass('w-2 h-1');
    // });
    
    // $('#item-4').click(function() {
    //     $('#item-1').removeClass().addClass('item-1').addClass('w-1').addClass('h-2');
    //     $('#item-2').removeClass().addClass('item-2').addClass('bg').addClass('w-2').addClass('h-2');
    //     $('#item-3').removeClass().addClass('item-3').addClass('w-1').addClass('h-2');
    //     $('#item-4').removeClass().addClass('item-4').addClass('thumb').addClass('w-4').addClass('h-3').addClass('active');

    // });

    //previous draft
    $('.section_1').click(function() {
        $('body').removeClass();
    });

    $('.section_2').click(function() {
        $('body').removeClass().addClass('active-2');
    });

    $('.section_3').click(function() {
        $('body').removeClass().addClass('active-3');
    });

    $('.section_4').click(function() {
        $('body').removeClass().addClass('active-4');
    });

});
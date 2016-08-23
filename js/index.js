var flag = 1;

$(function(){
    $('#item001').hover(function() {
        if(flag != 1) {
            $(this).css('background','#757575');
        } else {
            $(this).css('background','#d32f2f');
        }
    },function() {
        if(flag != 1) {
            $(this).css('background','#bdbdbd');
        } else {
            $(this).css('background','#d32f2f');
        }
    });

    $('#item002').hover(function() {
        if(flag != 2) {
            $(this).css('background','#757575');
        } else {
            $(this).css('background','#2196F3');
        }
    },function() {
        if(flag != 2) {
            $(this).css('background','#bdbdbd');
        } else {
            $(this).css('background','#2196F3');
        }
    });

    $('#item003').hover(function() {
        if(flag != 3) {
            $(this).css('background','#757575');
        } else {
            $(this).css('background','#4CAF50');
        }
    },function() {
        if(flag != 3) {
            $(this).css('background','#bdbdbd');
        } else {
            $(this).css('background','#4CAF50');
        }
    });

    $('#item001').click(function() {
        flag = 1;
        $(this).css('background','#d32f2f');
        $('#item002').css('background','#bdbdbd');
        $('#item003').css('background','#bdbdbd');
        $('#value').text("35.2");
    });

    $('#item002').click(function() {
        flag = 2;
        $(this).css('background','#2196F3');
        $('#item001').css('background','#bdbdbd');
        $('#item003').css('background','#bdbdbd');
        $('#value').text("50.4");
    });

    $('#item003').click(function() {
        flag = 3;
        $(this).css('background','#4CAF50');
        $('#item001').css('background','#bdbdbd');
        $('#item002').css('background','#bdbdbd');
        $('#value').text("1010.1");
    });

    $('#display001').hover(function() {
        $(this).fadeTo("fast",0.67);
    },function() {
        $(this).fadeTo("fast",1.0);        
    });
});
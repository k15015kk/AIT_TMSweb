var flag = 1;

$(function(){
    $('#item001').hover(function() {
        if(flag != 1) {
            $(this).css('background','#757575');
        } else {
            $(this).css('background','#d32f2f')
        }
    },function() {
        if(flag != 1) {
            $(this).css('background','#bdbdbd');
        } else {
            $(this).css('background','#d32f2f')
        }
    })

    $('#item002').hover(function() {
        if(flag != 2) {
            $(this).css('background','#757575');
        } else {
            $(this).css('background','#2196F3')
        }
    },function() {
        if(flag != 2) {
            $(this).css('background','#bdbdbd');
        } else {
            $(this).css('background','#2196F3')
        }
    })

    $('#item003').hover(function() {
        if(flag != 3) {
            $(this).css('background','#757575');
        } else {
            $(this).css('background','#4CAF50')
        }
    },function() {
        if(flag != 3) {
            $(this).css('background','#bdbdbd');
        } else {
            $(this).css('background','#4CAF50')
        }
    })
});
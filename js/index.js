var flag = 1;
var csvList = new Array();
var dataList = new Array();

$(function(){
    $.ajax({
        url:'csv/20160823.csv',
        success: function(data) {
            csvList = data.split("\n");
            for(var i = 0; i < csvList.length; i++) {
                
                dataList[i] = csvList[i].split(",");
            }

            $('#value').text(dataList[dataList.length-2][2]);
        }
    });

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
        $('#value').text(dataList[dataList.length-2][2]);
    });

    $('#item002').click(function() {
        flag = 2;
        $(this).css('background','#2196F3');
        $('#item001').css('background','#bdbdbd');
        $('#item003').css('background','#bdbdbd');
        $('#value').text(dataList[dataList.length-2][3]);
    });

    $('#item003').click(function() {
        flag = 3;
        $(this).css('background','#4CAF50');
        $('#item001').css('background','#bdbdbd');
        $('#item002').css('background','#bdbdbd');
        $('#value').text(dataList[dataList.length-2][1]);        
    });

    $('#display001').hover(function() {
        $(this).fadeTo("fast",0.67);
    },function() {
        $(this).fadeTo("fast",1.0);        
    });
});
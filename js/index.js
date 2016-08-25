var flag = 1;
var csvList = new Array();
var dataList = new Array();
var redColorList = ['#FFEBEE','#FFCDD2','#EF9A9A','#E57373','#EF5350','#F44336','#E53935','#D32F2F','#C62828','#B71C1C'];
var blueColorList = ['#E3F2FD','#BBDEFB','#90CAF9','#64B5F6','#42A5F5','#2196F3','#1E88E5','#1976D2','#1565C0','#0D47A1'];
var greenColorList = ['#E8F5E9','#C8E6C9','#A5D6A7','#81C784','#66BB6A','#4CAF50','#43A047','#388E3C','#2E7D32','#1B5E20'];

$(function(){

    function item001Flag () {
        if (dataList[dataList.length-2][2] <= 0) {
                $('#value').css('background',redColorList[0]);
            } else if(dataList[dataList.length-2][2] > 0 && dataList[dataList.length-2][2] <= 5) {
                $('#value').css('background',redColorList[1]);                
            } else if(dataList[dataList.length-2][2] > 5 && dataList[dataList.length-2][2] <= 10) {
                $('#value').css('background',redColorList[2]);
            } else if(dataList[dataList.length-2][2] > 10 && dataList[dataList.length-2][2] <= 15) {
                $('#value').css('background',redColorList[3]);
            } else if(dataList[dataList.length-2][2] > 15 && dataList[dataList.length-2][2] <= 20) {
                $('#value').css('background',redColorList[4]);
            } else if(dataList[dataList.length-2][2] > 20 && dataList[dataList.length-2][2] <= 25) {
                $('#value').css('background',redColorList[5]);
            } else if(dataList[dataList.length-2][2] > 25 && dataList[dataList.length-2][2] <= 30) {
                $('#value').css('background',redColorList[6]);
            } else if(dataList[dataList.length-2][2] > 30 && dataList[dataList.length-2][2] <= 35) {
                $('#value').css('background',redColorList[7]);
            } else if(dataList[dataList.length-2][2] > 35 && dataList[dataList.length-2][2] <= 40) {
                $('#value').css('background',redColorList[8]);
            } else if(dataList[dataList.length-2][2] > 40) {
                $('#value').css('background',redColorList[9]);
            } else {
                $('#value').css('background',redColorList[5]);                
            }
    }

    $.ajax({
        url:'csv/20160823.csv',
        success: function(data) {
            csvList = data.split("\n");
            for(var i = 0; i < csvList.length; i++) {
                
                dataList[i] = csvList[i].split(",");
            }

            $('#value').text(dataList[dataList.length-2][2]);
            
            item001Flag();
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
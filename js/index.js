var flag = 1;
var dataLength = 2;

$(function(){

	function item001BackGroundColor () {

		var valueClass = document.getElementsByClassName('valueArea');		
		
		for(var i = 0; i < dataLength; i++) {
			if (valueClass[0].innerHTML < 0) {
				$('#value00' + ( i + 1) ).css('background',redColorList[0]);
			} else if(valueClass[0].innerHTML >= 0 && valueClass[0].innerHTML < 5) {
				$('#value00' + ( i + 1) ).css('background',redColorList[1]);                
			} else if(valueClass[0].innerHTML >= 5 && valueClass[0].innerHTML < 10) {
				$('#value00' + ( i + 1) ).css('background',redColorList[2]);
			} else if(valueClass[0].innerHTML >= 10 && valueClass[0].innerHTML < 15) {
				$('#value00' + ( i + 1) ).css('background',redColorList[3]);
			} else if(valueClass[0].innerHTML >= 15 && valueClass[0].innerHTML < 20) {
				$('#value00' + ( i + 1) ).css('background',redColorList[4]);
			} else if(valueClass[0].innerHTML >= 20 && valueClass[0].innerHTML < 25) {
				$('#value00' + ( i + 1) ).css('background',redColorList[5]);
			} else if(valueClass[0].innerHTML >= 25 && valueClass[0].innerHTML < 30) {
				$('#value00' + ( i + 1) ).css('background',redColorList[6]);
			} else if(valueClass[0].innerHTML >= 30 && valueClass[0].innerHTML < 35) {
				$('#value00' + ( i + 1) ).css('background',redColorList[7]);
			} else if(valueClass[0].innerHTML >= 35 && valueClass[0].innerHTML < 40) {
				$('#value00' + ( i + 1) ).css('background',redColorList[8]);
			} else if(valueClass[0].innerHTML >= 40) {
				$('#value00' + ( i + 1) ).css('background',redColorList[9]);
			} else {
				$('#value00' + ( i + 1) ).css('background',redColorList[5]);                
			}

			if (valueClass[0].innerHTML < 15) {
				$('#value00' + ( i + 1) ).css('color','#000000');                            
			} else {
				$('#value00' + ( i + 1) ).css('color','#FFFFFF');            
			}
		}
	}
		

	function item002BackGroundColor () {

		var valueClass = document.getElementsByClassName('valueArea');		

		for(var i = 0; i < dataLength; i++) {
			if (valueClass[0].innerHTML >= 0 && valueClass[0].innerHTML < 10) {
				$('#value00' + ( i + 1) ).css('background',blueColorList[0]);
			} else if(valueClass[0].innerHTML >= 10 && valueClass[0].innerHTML < 20) {
				$('#value00' + ( i + 1) ).css('background',blueColorList[1]);                
			} else if(valueClass[0].innerHTML >= 20 && valueClass[0].innerHTML < 30) {
				$('#value00' + ( i + 1) ).css('background',blueColorList[2]);
			} else if(valueClass[0].innerHTML >= 30 && valueClass[0].innerHTML < 40) {
				$('#value00' + ( i + 1) ).css('background',blueColorList[3]);
			} else if(valueClass[0].innerHTML >= 40 && valueClass[0].innerHTML < 50) {
				$('#value00' + ( i + 1) ).css('background',blueColorList[4]);
			} else if(valueClass[0].innerHTML >= 50 && valueClass[0].innerHTML < 60) {
				$('#value00' + ( i + 1) ).css('background',blueColorList[5]);
			} else if(valueClass[0].innerHTML >= 60 && valueClass[0].innerHTML < 70) {
				$('#value00' + ( i + 1) ).css('background',blueColorList[6]);
			} else if(valueClass[0].innerHTML >= 70 && valueClass[0].innerHTML < 70) {
				$('#value00' + ( i + 1) ).css('background',blueColorList[7]);
			} else if(valueClass[0].innerHTML >= 80 && valueClass[0].innerHTML < 90) {
				$('#value00' + ( i + 1) ).css('background',blueColorList[8]);
			} else if(valueClass[0].innerHTML >= 40) {
				$('#value00' + ( i + 1) ).css('background',blueColorList[9]);
			} else {
				$('#value00' + ( i + 1) ).css('background',blueColorList[5]);                
			}

			if (valueClass[0].innerHTML < 50) {
				$('#value00' + ( i + 1) ).css('color','#000000');                            
			} else {
				$('#value00' + ( i + 1) ).css('color','#FFFFFF');            
			}
		}
		
	}

	function item003BackGroundColor () {

		var valueClass = document.getElementsByClassName('valueArea');		

		for(var i = 0; i < dataLength; i++) {
			if (valueClass[0].innerHTML < 920) {
				$('#value00' + ( i + 1) ).css('background',greenColorList[0]);
			} else if(valueClass[0].innerHTML >= 920 && valueClass[0].innerHTML < 930) {
				$('#value00' + ( i + 1) ).css('background',greenColorList[1]);                
			} else if(valueClass[0].innerHTML >= 930 && valueClass[0].innerHTML < 940) {
				$('#value00' + ( i + 1) ).css('background',greenColorList[2]);
			} else if(valueClass[0].innerHTML >= 940 && valueClass[0].innerHTML < 950) {
				$('#value00' + ( i + 1) ).css('background',greenColorList[3]);
			} else if(valueClass[0].innerHTML >= 950 && valueClass[0].innerHTML < 960) {
				$('#value00' + ( i + 1) ).css('background',greenColorList[4]);
			} else if(valueClass[0].innerHTML >= 960 && valueClass[0].innerHTML < 970) {
				$('#value00' + ( i + 1) ).css('background',greenColorList[5]);
			} else if(valueClass[0].innerHTML >= 970 && valueClass[0].innerHTML < 980) {
				$('#value00' + ( i + 1) ).css('background',greenColorList[6]);
			} else if(valueClass[0].innerHTML >= 980 && valueClass[0].innerHTML < 990) {
				$('#value00' + ( i + 1) ).css('background',greenColorList[7]);
			} else if(valueClass[0].innerHTML >= 990 && valueClass[0].innerHTML < 1000) {
				$('#value00' + ( i + 1) ).css('background',greenColorList[8]);
			} else if(valueClass[0].innerHTML > 1000) {
				$('#value00' + ( i + 1) ).css('background',greenColorList[9]);
			} else {
				$('#value00' + ( i + 1) ).css('background',greenColorList[5]);                
			}

			if (valueClass[0].innerHTML <= 960) {
				$('#value00' + ( i + 1) ).css('color','#000000');                            
			} else {
				$('#value00' + ( i + 1) ).css('color','#FFFFFF');            
			}
		}
	}

	item001BackGroundColor();

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
		$('#value001').text(array01[2]);
		$('#value002').text(array02[2]);		
		item001BackGroundColor();
		
	});

	$('#item002').click(function() {
		flag = 2;
		$(this).css('background','#2196F3');
		$('#item001').css('background','#bdbdbd');
		$('#item003').css('background','#bdbdbd');
		$('#value001').text(array01[3]);
		$('#value002').text(array02[3]);	
		item002BackGroundColor();
	});

	$('#item003').click(function() {
		flag = 3;
		$(this).css('background','#4CAF50');
		$('#item001').css('background','#bdbdbd');
		$('#item002').css('background','#bdbdbd');
		$('#value001').text(array01[1]);
		$('#value002').text(array02[1]);		
		item003BackGroundColor();
	});

	$('.displayArea').hover(function() {
		$(this).fadeTo("fast",0.67);
	},function() {
		$(this).fadeTo("fast",1.0);        
	});
});
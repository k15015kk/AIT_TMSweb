var flag = 1;

$(function(){

	function item001BackGroundColor () {

		var valueClass = document.getElementsByClassName('valueArea');		

		if (valueClass[0].innerHTML < 0) {
			$('#value').css('background',redColorList[0]);
		} else if(valueClass[0].innerHTML >= 0 && valueClass[0].innerHTML < 5) {
			$('#value').css('background',redColorList[1]);                
		} else if(valueClass[0].innerHTML >= 5 && valueClass[0].innerHTML < 10) {
			$('#value').css('background',redColorList[2]);
		} else if(valueClass[0].innerHTML >= 10 && valueClass[0].innerHTML < 15) {
			$('#value').css('background',redColorList[3]);
		} else if(valueClass[0].innerHTML >= 15 && valueClass[0].innerHTML < 20) {
			$('#value').css('background',redColorList[4]);
		} else if(valueClass[0].innerHTML >= 20 && valueClass[0].innerHTML < 25) {
			$('#value').css('background',redColorList[5]);
		} else if(valueClass[0].innerHTML >= 25 && valueClass[0].innerHTML < 30) {
			$('#value').css('background',redColorList[6]);
		} else if(valueClass[0].innerHTML >= 30 && valueClass[0].innerHTML < 35) {
			$('#value').css('background',redColorList[7]);
		} else if(valueClass[0].innerHTML >= 35 && valueClass[0].innerHTML < 40) {
			$('#value').css('background',redColorList[8]);
		} else if(valueClass[0].innerHTML >= 40) {
			$('#value').css('background',redColorList[9]);
		} else {
			$('#value').css('background',redColorList[5]);                
		}

		if (valueClass[0].innerHTML < 15) {
			$('#value').css('color','#000000');                            
		} else {
			$('#value').css('color','#FFFFFF');            
		}
	}

	function item002BackGroundColor () {

		var valueClass = document.getElementsByClassName('valueArea');		

		if (valueClass[0].innerHTML >= 0 && valueClass[0].innerHTML < 10) {
			$('#value').css('background',blueColorList[0]);
		} else if(valueClass[0].innerHTML >= 10 && valueClass[0].innerHTML < 20) {
			$('#value').css('background',blueColorList[1]);                
		} else if(valueClass[0].innerHTML >= 20 && valueClass[0].innerHTML < 30) {
			$('#value').css('background',blueColorList[2]);
		} else if(valueClass[0].innerHTML >= 30 && valueClass[0].innerHTML < 40) {
			$('#value').css('background',blueColorList[3]);
		} else if(valueClass[0].innerHTML >= 40 && valueClass[0].innerHTML < 50) {
			$('#value').css('background',blueColorList[4]);
		} else if(valueClass[0].innerHTML >= 50 && valueClass[0].innerHTML < 60) {
			$('#value').css('background',blueColorList[5]);
		} else if(valueClass[0].innerHTML >= 60 && valueClass[0].innerHTML < 70) {
			$('#value').css('background',blueColorList[6]);
		} else if(valueClass[0].innerHTML >= 70 && valueClass[0].innerHTML < 70) {
			$('#value').css('background',blueColorList[7]);
		} else if(valueClass[0].innerHTML >= 80 && valueClass[0].innerHTML < 90) {
			$('#value').css('background',blueColorList[8]);
		} else if(valueClass[0].innerHTML >= 40) {
			$('#value').css('background',blueColorList[9]);
		} else {
			$('#value').css('background',blueColorList[5]);                
		}

		if (valueClass[0].innerHTML < 50) {
			$('#value').css('color','#000000');                            
		} else {
			$('#value').css('color','#FFFFFF');            
		}
	}

	function item003BackGroundColor () {

		var valueClass = document.getElementsByClassName('valueArea');		

		if (valueClass[0].innerHTML < 920) {
			$('#value').css('background',greenColorList[0]);
		} else if(valueClass[0].innerHTML >= 920 && valueClass[0].innerHTML < 930) {
			$('#value').css('background',greenColorList[1]);                
		} else if(valueClass[0].innerHTML >= 930 && valueClass[0].innerHTML < 940) {
			$('#value').css('background',greenColorList[2]);
		} else if(valueClass[0].innerHTML >= 940 && valueClass[0].innerHTML < 950) {
			$('#value').css('background',greenColorList[3]);
		} else if(valueClass[0].innerHTML >= 950 && valueClass[0].innerHTML < 960) {
			$('#value').css('background',greenColorList[4]);
		} else if(valueClass[0].innerHTML >= 960 && valueClass[0].innerHTML < 970) {
			$('#value').css('background',greenColorList[5]);
		} else if(valueClass[0].innerHTML >= 970 && valueClass[0].innerHTML < 980) {
			$('#value').css('background',greenColorList[6]);
		} else if(valueClass[0].innerHTML >= 980 && valueClass[0].innerHTML < 990) {
			$('#value').css('background',greenColorList[7]);
		} else if(valueClass[0].innerHTML >= 990 && valueClass[0].innerHTML < 1000) {
			$('#value').css('background',greenColorList[8]);
		} else if(valueClass[0].innerHTML > 1000) {
			$('#value').css('background',greenColorList[9]);
		} else {
			$('#value').css('background',greenColorList[5]);                
		}

		if (valueClass[0].innerHTML <= 960) {
			$('#value').css('color','#000000');                            
		} else {
			$('#value').css('color','#FFFFFF');            
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
		$('#value').text(array[2]);
		item001BackGroundColor();
		
	});

	$('#item002').click(function() {
		flag = 2;
		$(this).css('background','#2196F3');
		$('#item001').css('background','#bdbdbd');
		$('#item003').css('background','#bdbdbd');
		$('#value').text(array[3]);		
		item002BackGroundColor();
	});

	$('#item003').click(function() {
		flag = 3;
		$(this).css('background','#4CAF50');
		$('#item001').css('background','#bdbdbd');
		$('#item002').css('background','#bdbdbd');
		$('#value').text(array[1]);		
		item003BackGroundColor();
	});

	$('#display001').hover(function() {
		$(this).fadeTo("fast",0.67);
	},function() {
		$(this).fadeTo("fast",1.0);        
	});
});
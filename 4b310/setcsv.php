<html>

<head>
	<meta charset="utf-8">
	<script type="text/javascript">
	//自動更新
		var term = 10*60000;
		setTimeout("location.reload();",term-Date.now()%term+10000);
	</script>
<?php
	//タイムゾーン取得
	date_default_timezone_set('Asia/Tokyo');

	//日付設定
	$date = new DateTime();
	$date->setTimeZone(new DateTimeZone('Asia/Tokyo'));

	$yestaday = $date->format('d') - 1;

	if(($fp = fopen("http://set1.ie.aitech.ac.jp/comfortableIoT/".$date->format('Ym').sprintf("%02d",$yestaday).".csv", "r")) === false){
		exit(1);//エラー処理
	}

	// CSVの中身がダブルクオーテーションで囲われていない場合に一文字目が化けるのを回避
	setlocale(LC_ALL, 'ja_JP');

	$i = 0;
	$hour = $date->format('H') * 6;
	$minitue = $date->format('i') / 10;

	$start = $hour + $minitue;

	while(($line = fgetcsv($fp)) !== FALSE){
		if($i > $start) {
			mb_convert_variables('UTF-8', 'sjis-win', $line);
			$data[] = $line;
		}

		$i++;
	}

	if(($fp = fopen("http://set1.ie.aitech.ac.jp/comfortableIoT/".$date->format('Ymd').".csv", "r")) === false){
		exit(1);//エラー処理
	}

	while(($line = fgetcsv($fp)) !== FALSE){
		mb_convert_variables('UTF-8', 'sjis-win', $line);
			$data[] = $line;
	}

	fclose($fp);
	$length = sizeof($data);
?>
	<!-- AJAX API のロード -->
	<script type="text/javascript" src="https://www.google.com/jsapi">
</script>
	<script type="text/javascript">

// Visualization API と折れ線グラフ用のパッケージのロード
google.load("visualization", "1", {packages:["corechart"]});
var chart1;
var options1;
var data1;
var chart2;
var options2;
var data2;
var chart3;
var options3;
var data3;

// Google Visualization API ロード時のコールバック関数の設定
google.setOnLoadCallback(drawChart1);

// グラフ作成用のコールバック関数
function drawChart1(){

	// データテーブルの作成
	data1 = google.visualization.arrayToDataTable([
	['時間', '温度'],
	<?php
	$num = 0;
	foreach($data as $value){
		echo '['.$value[0].','.$value[2].']';
		$num++;
		if($num !== $length){
			echo ",\n";
		}
	}
	?>
	]);

	// グラフのオプションを設定
	options1 = {
		title: '気温(℃)',
		colors: ['FF0000'],
		legend:{position: 'none'},
		hAxis: {title: "過去24時間分",
			textStyle:{
				fontSize:12
			},
		slantedText:true
		}
	};

	// LineChart のオブジェクトの作成
	chart1 = new google.visualization.LineChart(document.getElementById('chart_div1'));
	// データテーブルとオプションを渡して、グラフを描画
	chart1.draw(data1, options1);
}

google.load("visualization", "1", {packages:["corechart"]});
	
google.setOnLoadCallback(drawChart2);
function drawChart2(){

        // データテーブルの作成
        data2 = google.visualization.arrayToDataTable([
        ['時間', '湿度'],
        <?php
	$num = 0;
	foreach($data as $value){
		echo '['.$value[0].','.$value[3].']';
		$num++;
		if($num !== $length){
			echo ",\n";
		}
	}
	?>
        ]);

        // グラフのオプションを設定
        options2 = {
		title: '湿度(％)',
		legend:{position: 'none'},
		hAxis: {title: "過去24時間分",
			textStyle:{
				fontSize:12
			},
			slantedText:true
		}
        };

        // LineChart のオブジェクトの作成
        chart2 = new google.visualization.LineChart(document.getElementById('chart_div2'));
        // データテーブルとオプションを渡して、グラフを描画
        chart2.draw(data2, options2);
}
google.load("visualization", "1", {packages:["corechart"]});
	
google.setOnLoadCallback(drawChart3);
function drawChart3(){
        // データテーブルの作成
        data3 = google.visualization.arrayToDataTable([
	['時間', '気圧'],
	<?php
	$num = 0;
	foreach($data as $value){
		echo '['.$value[0].','.$value[1].']';
		$num++;
		if($num !== $length){
			echo ",\n";
		}
	}
	?>
        ]);

        // グラフのオプションを設定
        options3 = {
		title: '気圧(hPa)',
		colors:['00FF00'],
		legend:{position: 'none'},
		hAxis: {title: "過去24時間分",
			textStyle:{
				fontSize:12
			},
		slantedText:true
		}
        };

        // LineChart のオブジェクトの作成
        chart3 = new google.visualization.LineChart(document.getElementById('chart_div3'));
        // データテーブルとオプションを渡して、グラフを描画
        chart3.draw(data3, options3);
}
</script>
</head>

<body onresize="chart1.draw(data1, options1);chart2.draw(data2, options2);chart3.draw(data3, options3);">

	<h1>４号館別館310</h1>

	<style>
		h1 {
			text-align: center;
		}
	</style>

	<!-- グラフを描くdiv -->
	<div id="chart_div1" style="width: 100%; height: 250px;"></div>
	<div id="chart_div2" style="width: 100%; height: 250px;"></div>
	<div id="chart_div3" style="width: 100%; height: 250px;"></div>
	<div Align="right" style="margin-right:80px">
		<a href="history/SET3-1.php">過去ログ</a>
	</div>
</body>

</html>
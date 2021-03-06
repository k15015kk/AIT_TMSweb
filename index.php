<!DOCTYPE html>
<html lang="ja">
	<?php
		set_time_limit(10);

		//タイムゾーン取得
		date_default_timezone_set('Asia/Tokyo');

		//日付設定
		$date = new DateTime();
		$date->setTimeZone(new DateTimeZone('Asia/Tokyo'));

		//分・秒取得
		$minitue = $date->format('i');
		$second = $date->format('s');

		//csvファイル名を変数に格納
		$filepath = 'http://set1.ie.aitech.ac.jp/comfortableIoT/'.$date->format('Ymd').".csv";
		//ファイルが無かったらError表示
		if (($fp = fopen($filepath, "r")) === false) {
			echo exit(1);
		//見つかったCSV処理
		}

		setlocale(LC_ALL, 'ja_JP');
		$dataArray01 = array();

		$i=0;
		while (($line = fgetcsv($fp)) !== FALSE) {
			mb_convert_variables('UTF-8', 'sjis-win', $line);
				
			$dataArray01 = $line;
			$i++;
		}

		fclose($fp);
	?>
	<?php
		$filepath = 'http://set1.ie.aitech.ac.jp/comfortableIoT/'.$date->format('Ymd').".csv";
		if (($fp = fopen($filepath, "r")) === false) {
			echo exit(1);
		}

		setlocale(LC_ALL, 'ja_JP');
		$dataArray02 = array();

		$i=0;
		while (($line = fgetcsv($fp)) !== FALSE) {
			mb_convert_variables('UTF-8', 'sjis-win', $line);
			
			$dataArray02 = $line;
			$i++;
		}

		fclose($fp);

	?>
	<head>
		<title>シス研温度管理システム</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="システム工学研究会の部室の温度管理システムです">
		<meta name="keyword" content="愛知工業大学,システム工学研究会,気温,温度,湿度,気圧,工科展2016">
		<meta propery="og:type" content="website">
		<meta propery="og:site_name" content="愛工大シス研 温度管理システム">
		<link href="css/style.css" rel="stylesheet">
		<script type="text/javascript" src="js/jquery-3.1.0.min.js"></script>
	</head>
	<body>
		<header class="topheader">
			<div class="title" id="title001">
				<p class="titleArea" id="titleText">シス研温度管理システム</p>
				<p class="titleArea" id="timeText">
					<?php
						echo trim($dataArray01[0],"'").'現在';
					?>
				</p>				
			</div>
		</header>
		<nav>
			<div class="itemNav">
				<ul class="headerlist" id="headerlist001">
					<li class="headerli" id="item001">
						<p class="itemIcon01" id="icon001">℃</p>
						<p class="itemIcon02" id="icontext001">気温</p>
					</li>
					<li class="headerli" id="item002">
						<p class="itemIcon01" id="icon002">%</p>
						<p class="itemIcon02" id="icontext002">湿度</p>
					</li>
					<li class="headerli" id="item003">
						<p class="itemIcon01" id="icon003">hPa</p>
						<p class="itemIcon02" id="icontext003">気圧</p>
					</li>
				</ul>
			</div>
		</nav>
		<main>
			<div class="displayArea" id="display001">
				<div class="area" id="left001">
					<p class="pliceArea" id="place001">４号館別館３１０</p> 
				</div>
				<div class="area" id="right001">
					<p class="valueArea" id="value001">
						<?php
							echo $dataArray01[2];
						?>
					</p>
				</div>
			</div>
			<div class="displayArea" id="display002">
				<div class="area" id="left002">
					<p class="pliceArea" id="place002">４号館別館３１０</p> 
				</div>
				<div class="area" id="right002">
					<p class="valueArea" id="value002">
						<?php
							echo $dataArray02[2];
						?>
					</p>
				</div>
			</div>
		</main>
		<script type="text/javascript" src="js/index.js"></script>
		<script type="text/javascript">
			var array01 = <?php echo json_encode($dataArray01, JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT);?>;
			var array02 = <?php echo json_encode($dataArray02, JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT);?>;
			var minitue = <?php echo json_encode($minitue, JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT);?>;
			minitue = 9 - (minitue % 10);
			var second = <?php echo json_encode($second, JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT);?>;
			second = 60 - second;
			var time = (minitue * 60 + second) * 1000 + 30000;
			var redColorList = ['#FFEBEE','#FFCDD2','#EF9A9A','#E57373','#EF5350','#F44336','#E53935','#D32F2F','#C62828','#B71C1C'];
			var blueColorList = ['#E3F2FD','#BBDEFB','#90CAF9','#64B5F6','#42A5F5','#2196F3','#1E88E5','#1976D2','#1565C0','#0D47A1'];
			var greenColorList = ['#E8F5E9','#C8E6C9','#A5D6A7','#81C784','#66BB6A','#4CAF50','#43A047','#388E3C','#2E7D32','#1B5E20'];
		</script>
	</body>
</html>
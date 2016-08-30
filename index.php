<!DOCTYPE html>
<html lang="ja">
	<head>
		<title>愛工大温度管理システム</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link href="css/style.css" rel="stylesheet">
		<script type="text/javascript" src="js/jquery-3.1.0.min.js"></script>
	</head>
	<body>
		<header class="topheader">
			<div class="title" id="title001">
				<p id="titleText">愛工大温度管理システム</p>
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
				<div class="area" id="infomation001">
					<p class="textArea" id="place">４号館別館３１０</p> 
				</div>
				<div class="area" id="value001">
					<p class="valueArea" id="value">
						<?php
							date_default_timezone_set('Asia/Tokyo');
							$date = new DateTime();
							$date->setTimeZone(new DateTimeZone('Asia/Tokyo'));

							$filepath = 'http://172.16.0.210/'.$date->format('Ymd').".csv";
							if (($fp = fopen($filepath, "r")) === false) {
								echo 'error';
							}

							setlocale(LC_ALL, 'ja_JP');
							$dataArray = array();

							$i=0;
							while (($line = fgetcsv($fp)) !== FALSE) {
								mb_convert_variables('UTF-8', 'sjis-win', $line);

								$dataArray = $line;
								$i++;
							}

							fclose($fp);

							echo $dataArray[2];
						?>
					</p>
				</div>
			</div>
		</main>
	<script type="text/javascript" src="js/index.js"></script>
	<script>
	     var array = <?php echo json_encode($dataArray, JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT); ?>;
	</script>

	</body>
</html>
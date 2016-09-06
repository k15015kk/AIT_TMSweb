<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>過去ログ</title>
  <link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1/themes/flick/jquery-ui.css">
  <script type="text/javascript"></script>
  <script src="js/jquery-3.1.0.min.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1/jquery-ui.min.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1/i18n/jquery.ui.datepicker-ja.min.js"></script>
  <script>
  $(function() {
    $("#datepicker").datepicker({
		minDate:'-1y',		//１年前まで表示
		maxDate:'+0D',		//未来の表示禁止
		changeYear:true,	//表示年の変更可
		changeMonth:true,	//表示月の変更可
		dateFormat : "yymmdd", //yyyymmdd表記
		onSelect : function(selected_date) {
            $("#textara").val(selected_date);
		}
	});
  });
</script>
  <?php
		date_default_timezone_set('Asia/Tokyo');

$today = $_POST['name'];
if($today == null){
	$today = date("Ymd");
}
$csv_dir = 'http://set1.ie.aitech.ac.jp/comfortableIoT/';
$csv_file = $today.'.csv';
$grapgh = '';
if(($handle = fopen($csv_dir.$csv_file, "r")) !== false) {
	while(($line = fgets($handle)) !== false) {
		$grapgh .= '['.rtrim($line).'],'.PHP_EOL;
	}
	fclose($handle);
}
else {
	echo 'no date';
}
?>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load("visualization","1", {packages:["table"]});
      google.charts.setOnLoadCallback(drawTable);
      function drawTable() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Time');
        data.addColumn('number', 'Pressure');
        data.addColumn('number', 'Temperature');
		data.addColumn('number', 'Humidity');
        data.addRows([
		<?php echo $grapgh;
?>
        ]);
        var table = new google.visualization.Table(document.getElementById('table_div'));
        table.draw(data, {showRowNumber: true});
      }
    </script>
</head>
<body>
  １年以内の日付を選択または入力してください</br>
  <form name="myform" action="SET3-1.php" method="post">
    <input type="text" name="name" id="textara" value="">
    <input type="submit" value="決定">
    <div id="datepicker"></div>
    <div id="table_div"></div>
</body>
</html>
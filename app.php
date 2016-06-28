<?php
set_time_limit(60);
error_reporting(0);

$number = "";
$number = $_POST['number'];
$array = array();
$data = array();
$array[2] = ["a","b","c"];
$array[3] = ["d","e","f"];
$array[4] = ["g","h","i"];
$array[5] = ["j","k","l"];
$array[6] = ["m","n","o"];
$array[7] = ["p","q","r","s"];
$array[8] = ["t","u","v"];
$array[9] = ["w","x","y","z"];
$test_data = array();
// $test_data = ["8","4","3","8","7"];
$test_data = str_split($number);
$temp = array();
$str_temp = array();
$result = array();
for($i=0;$i<count($test_data);$i++){
	$ind = $test_data[$i];
	// print_r($array[$ind]);
	for($j=0;$j<count($array[$ind]);$j++){
		 //print_r($array[$ind][$j]). " ";
			if($i == 0){
				array_push($temp, $array[$ind][$j]);
			}
			else{
				for($k=0;$k<count($temp);$k++){
					array_push($str_temp, $temp[$k] ."". $array[$ind][$j]);
				}
			}
	}
					for($l=0;$l<count($str_temp);$l++){
					$temp[$l] = $str_temp[$l];
				}
}
	for($m=0;$m<count($temp);$m++){
		if(strlen($temp[$m]) == count($test_data)){
			array_push($result, $temp[$m]);
		}
	}


try{
    for($n=0;$n<count($result);$n++){
     if(find_dict($result[$n]) == true){
        array_push($data, array(
          "match" => $result[$n]));
        //echo $result[$n]."<br>";
      }
    }
}
catch(Exception $e) {
   array_push($data, array(
    "match" => $e->getMessage()));
  echo json_encode($data);
  
}


    function find_dict($string){
      $found = false;
      $search = strtolower($string);
      // $lines = file('my-dict.txt');
      $file_handle = fopen("my-dict.txt", "r");
      while (!feof($file_handle)) {
         $line = fgets($file_handle);
         if(strstr($line, $search) !== false)
           {
             $found = true;
            // echo $line."<br>";
           }
      }
      fclose($file_handle);
      if(!$found)
      {
        //echo 'No match found';
      }
      return $found;
    }

if(count($data) > 0)
echo json_encode($data);
else {
  array_push($data, array(
    "match" => "not found"));
  echo json_encode($data);
  }

?>

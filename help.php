<<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="main.js"></script>
</head>
<body>
    


<?php 

//$uname=$_POST['username'];
 
mysql_connect("localhost", "root", "") or die(mysql_error()); 
mysql_select_db("user_registration") or die(mysql_error());
if(isset($_POST['username'])){
    


$data = mysql_query("SELECT coin FROM login where username='".$uname."'") 
or die(mysql_error()); 

while($row = mysql_fetch_assoc($data))
{
   print_r($row);
}
}

?>


</body>
</html>
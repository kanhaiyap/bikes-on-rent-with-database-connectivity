<?php
$a=$_GET['tb1'];
$b=$_GET['tb2'];
$c=$_GET['tb3'];
$d=$_GET['tb4'];
$conn=mysql_connect('localhost','root') or die("error in connection");
mysql_select_db('student1') or die("erreo in db");
mysql_query("insert into student1 values ('$a','$b','$c','$d')") or die("bhak teri maaki chut");
?>
<h4>the contents are</h4>
<?php
$res= mysql_query("select * from student1 ")
?>
<table border=5>
	<tr><th>name</th>
	<th>add1</th>
	<th>add2</th>
	<th>email</th>
	</tr>
<?php
while ($arr=mysql_fetch_row($res)) {
	echo "<tr>
			<td>$arr[0]</td>
			<td>$arr[1]</td>
			<td>$arr[2]</td>
			<td>$arr[3]</td>
			</tr>

	";
}

	  ?></table>
<?php
$host="localhost";
$user="root";
$password="";
$db="login";

mysql_connect($host,$user,$password);
mysql_select_db($db);

if (isset($_POST['username'])){
    $username =$_POST['username'];
    $password = $_POST['password'];

    $sql = "select * from loginform where username= '".$username."' AND password='".$password."'
    limit 1";

    $result=mysql_query($sql);
    if(mysql_num_rows($result)==1){
        echo "you have logged in";
        exit ();
    }else{
       header ("Location: login.html")
        exit();
    }
}
?>
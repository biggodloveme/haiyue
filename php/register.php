<?php
	include "public.php";
	header("content-type:text/html;charset=utf-8");
	$username_regist = $_POST["$uname"];
	$upwd2 = $_POST["$uiphone"];
	echo "用户名：$username,密码：$upwd";
?>
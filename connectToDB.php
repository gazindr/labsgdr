<?php
define ("HOST", "localhost");
define ("USER", "a0675286_reviews");
define ("PASS", "admin");
define ("DB", "a0675286_reviews");
$linkmy = @mysqli_connect(HOST, USER, PASS, DB) or die ('Не удалось из-за проблем с @mysqli_connect');
mysqli_select_db($linkmy, "a0675286_reviews") or die("Нет такой таблицы!");
?>
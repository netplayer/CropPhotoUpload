<?php


$tmp_file_name = $_FILES['Filedata']['tmp_name'];
$fname=  uniqid();
$ok = move_uploaded_file($tmp_file_name, 'upload/'.$fname.$_FILES['Filedata']['name']);

// This message will be passed to 'oncomplete' function
echo $ok ? $fname.$_FILES['Filedata']['name'] :'';
 
?>

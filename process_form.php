<?php
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$subject = $_REQUEST['subject'];
$message = $_REQUEST['message'];

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

$mail_body = "Name : ".$name."<br>"; 
$mail_body .= "Email : " . $email . "<br>";
$mail_body .= "Subject : " . $subject . "<br>";
$mail_body .= "Message : " . $message . "<br>";
if(mail("kartikvips@gmail.com","Kartik Contact Us",$mail_body,$headers)){
    echo "1";
}else{
    echo "0";
}

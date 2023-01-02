<?php

if (isset($_POST['.submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];


    $mailTo = "info@waalre100.com";
    $headers = "Van: " . $mailFrom;
    $txt = "Je hebt een mail van: " . $name . ".\n\n" . $message;


    mail($mailTo, $subject, $text, $headers);
}

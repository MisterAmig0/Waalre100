<?php

if (isset($_POST['.submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];


    $mailTo = "info@waalre100.com";
    $headers = "Van: " . $mailFrom;
    $txt = "Je hebt een mail van: " . $name . ".\n\n" . $message;


    mail($mailTo, $subject, $txt, $headers);
}

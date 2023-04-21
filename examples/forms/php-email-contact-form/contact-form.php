<?php

// Set the variables below to what you want for your form
$email_from = "";  // Put your email here
$email_subject = ""; // Put a custom email subject here
$to = "";  // Put where you want the form sent to


// Checks to see if someone went to the form processing page directly instead of the form
if (!isset($_POST['submit'])) {
	echo "You have reached a form submission page. Please submit the form from the proper page.";
}

// Gets info from the form
$name = $_POST['name'];
$visitor_email = $_POST['email'];

// Process possibly empty fields
if (!isset($_POST['phone'])) {
    $visitor_phone = "";
}
else {
    $visitor_phone = $_POST['phone'];
}

if (!isset($_POST['message'])) {
    $message = "";
}
else {
    $message = $_POST['message'];
}

// Check for injection
if (IsInjected($visitor_email)) {
    echo "Error: Bad email";
    exit;
}

$email_body = "Name: $name\n" .
    "Email: $visitor_email\n\n" .
    "Phone: $visitor_phone\n\n" .
    "Message:\n $message";
    
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";

// Send email
try {
    mail($to,$email_subject,$email_body,$headers);
}
catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

// Redirect to thank you page
header('Location: thanks.html');

// IsInjected takes a string and validates it against any email injection attempts

function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
   
?> 
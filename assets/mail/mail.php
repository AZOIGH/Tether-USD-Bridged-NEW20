<?php
// Simple sanitized mail relay. Ensure your server is configured to send mail.

function sanitize_field($value) {
    return trim(filter_var($value ?? '', FILTER_SANITIZE_STRING));
}

$name    = sanitize_field($_POST['name'] ?? '');
$email   = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL) ?: '';
$subject = sanitize_field($_POST['subject'] ?? 'Website Contact');
$phone   = sanitize_field($_POST['phone'] ?? '');
$message = trim($_POST['message'] ?? '');

$to = "support@usdtn20.online";
$siteSubject = "New Message – TEHTER USDT.w";

$body  = "Name: {$name}\r\n";
$body .= "Email: {$email}\r\n";
$body .= "Subject: {$subject}\r\n";
$body .= "Phone: {$phone}\r\n";
$body .= "Message: {$message}\r\n";

$headers   = "MIME-Version: 1.0\r\n";
$headers  .= "Content-Type: text/plain; charset=UTF-8\r\n";
if (!empty($email)) {
    $headers .= "From: {$name} <{$email}>\r\n";
    $headers .= "Reply-To: {$email}\r\n";
} else {
    $headers .= "From: Website <no-reply@usdtn20.online>\r\n";
}

@mail($to, $siteSubject, $body, $headers);
header("Location: ../../mail-success.html");
exit;
?>



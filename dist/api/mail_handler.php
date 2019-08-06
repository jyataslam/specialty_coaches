
<?php
require_once('functions.php');
require_once('email_config.php');
require_once('config.php');
require_once('./phpmailer/PHPMailer/src/Exception.php');
require_once('./phpmailer/PHPMailer/src/PHPMailer.php');
require_once('./phpmailer/PHPMailer/src/SMTP.php');

// foreach($_POST as $key => $value){
//     $_POST[$key] = htmlentities(addslashes($value));

//     $_POST[$key] = ltrim($_POST[$key]);
//     if (strlen($_POST[$key]) === 0) {
//         echo 'Message could not be sent.';
//         exit();
//     }
// }

$mail = new PHPMailer\PHPMailer\PHPMailer;
$mail->SMTPDebug = 0;           // Enable verbose debug output. Change to 0 to disable debugging output.

$mail->isSMTP();                // Set mailer to use SMTP.
$mail->Host = 'smtp.gmail.com'; // Specify main and backup SMTP servers.
$mail->SMTPAuth = true;         // Enable SMTP authentication


$mail->Username = EMAIL_USER;   // SMTP username
$mail->Password = EMAIL_PASS;   // SMTP password
$mail->SMTPSecure = 'tls';      // Enable TLS encryption, `ssl` also accepted, but TLS is a newer more-secure encryption
$mail->Port = 587;              // TCP port to connect to
$options = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);
$mail->smtpConnect($options);
$mail->From = isset($_POST['email']) ? $_POST['email'] : '';  // sender's email address (shows in "From" field)
$mail->FromName = isset($_POST['name']) ? $_POST['name'] : '';   // sender's name (shows in "From" field)
$mail->addAddress('sconlineinquiry@gmail.com');  // Add a recipient (name is optional)
//$mail->addAddress('ellen@example.com');                        // Add a second recipient
$mail->addReplyTo(isset($_POST['email']) ? $_POST['email'] : '');                          // Add a reply-to address
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');

//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = isset($_POST['subject']) ? $_POST['subject'] : '';
$mail->Body    = isset($_POST['message']) ? $_POST['message'] : '';
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
    $output = [
        'success' => false
    ];
    $json_output = json_encode($output);
    print($json_output);
} else {
    $output = [
        'success' => true
    ];
    $json_output = json_encode($output);
    print($json_output);
}
?>

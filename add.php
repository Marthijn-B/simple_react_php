<?php

    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");

    // Only process POST requests.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      // Get email address from '.credentials' file in the root
      // $credentialsFile = fopen(".credentials","r");
      // $myEmail = fgets($credentialsFile);

      // Get the form fields and remove any potential whitespace.
      // $name = strip_tags(trim($_POST["inputName"]));
      // $name = str_replace(array("\r","\n"),array(" "," "),$name);
      // $email = filter_var(trim($_POST["inputEmail"]), FILTER_SANITIZE_EMAIL);
      // $message = trim($_POST["inputMessage"]);
      // $checkBoth = trim($_POST["inputCheckBoth"]);
      // $checkDesign = trim($_POST["inputCheckDesign"]);
      // $checkDev = trim($_POST["inputCheckDev

      $username = $_POST["username"];
      $comment = $_POST["comment"];

      // Check that data was sent to the mailer.
     if ( empty($username) OR empty($comment) ) {
        // Set a 400 (bad request) response code and exit.
        //http_response_code(400);
        echo "Oops! There was a problem with your submission. Please complete the form and try again.";
        exit;
      } else {
        echo "Thank You " + $username + "! Your message has been saved.";
      }

    } else {
      // Not a POST request, set a 403 (forbidden) response code.
      //http_response_code(403);
      echo "This was not a POST request, please try again.";
    }
?>

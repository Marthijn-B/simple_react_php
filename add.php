<?php
    // Only process POST requests.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      // set defaults
      $result = true;
      $message = "";
      $error = [];

      $username = $_POST["username"];
      $comment = $_POST["comment"];
      //console.log($username, $comment);

      // Check if username is longer than 3 chars
      if (strlen(trim($username)) < 2) {
        $result = false;
        $error[] = "Please enter a name three characters or more";
      }

      // Check if there is a comment longer than 10 chars
      if (strlen(trim($username)) < 9) {
        $result = false;
        $error[] =  "Please enter a comment of 10 characters or more";
      }


      // create message depending on result
     if ( !$result ) {
        // Set a 400 (bad request) response code and exit.
        // http_response_code(400);
        $message =  "Please complete the form and try again.";
      } else {
        $message = "Thank You " . $username . "! Your message has been saved.";
      }

    } else {
      // Not a POST request, set a 403 (forbidden) response code.
      // http_response_code(403);
      $result = false;
      $message =  "This was not a POST request, please try again.";
    }

    // create response to send back to client
    // add headers
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");
    header('Content-type: application/json');

    // data structure
    echo json_encode( [
      'result' => $result,
      'message' => $message,
      'error' => $error,
      'data' => [
        'username' => $username,
        'comment' => $comment ]
      ] );
?>

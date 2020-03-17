<?php require_once('../private/initialize.php'); ?>

<?php
    // Only process POST requests.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      // set defaults
      $result = true;
      $message = "";
      $error = [];

      $username = trim($_POST["username"]);
      $comment = trim($_POST["comment"]);
      //console.log($username, $comment);

      // Check if username is longer than 3 chars
      if (strlen($username) < 2) {
        $result = false;
        $error[] = "Please enter a name three characters or more";
      }

      // Check if there is a comment longer than 10 chars
      if (strlen($username) < 9) {
        $result = false;
        $error[] =  "Your comment must be atleast 10 characters";
      }


      // create message depending on result
     if ( !$result ) {
        // Set a 400 (bad request) response code and exit.
        // http_response_code(400);
        $message =  "Please complete the form and try again.";
      } else {
        $sql_result = add_to_guestbook ($username, $comment);
        if ($sql_result) {
          $message = "Thank You " . $username . "! Your message has been saved.";
        } else {
          $message = "Your entry cannot be saved, please try again.";
        }

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

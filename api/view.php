<?php require_once('../private/initialize.php'); ?>

<?php
    // Only process POST requests.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      // set defaults
      $result = true;
      $message = "";
      $error = [];

      $data = find_all_entries();
      // $data_array = $data->fetch_all();
      $data_array = convert_to_array($data);


      $message = $data ? "Sucess" : "No entries found.";

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
      'data' => $data_array
    ] );
?>

<?php

  require_once('db_credentials.php');

  function db_connect() {
    $connection = mysqli_connect(DB_SERVER, DB_USER, DB_PASS, DB_NAME);
    db_confirm_connect();
    //echo "DB Connected: ".time();
    return $connection;
  }

  function db_disconnect($connection) {
    if (isset($connection)) {
      mysqli_close($connection);
      //echo "DB Disconnected: ".time();
    }
  }

  // to prevent sql injection
  function db_escape($connection, $string) {
    return mysqli_real_escape_string($connection, $string);
  }

  function db_confirm_connect() {
    if(mysqli_connect_errno()) {
      $msg = "Data Base connection error ";
      $msg .= mysqli_connect_error();
      $msg .= " (Error code: ".mysqli_connect_errno().")";
      exit($msg);
    }
  }

  function confirm_result_set($result_set) {
    if(!$result_set) {
      exit("Database Query Failed!");
    }
  }
?>

<?php

  // this is where all the SQL statements are maintained

  function add_to_guestbook ($username, $comment) {
    global $db;

    // $errors = validate_player($player);
    // if(!empty($errors)) {
    //   return $errors;
    // }

    // add user/comment to database
    $sql = "INSERT INTO guestbook ";
    $sql .= "(username, comment) ";
    $sql .= "VALUES (";
    $sql .= "'" . db_escape($db, $username) . "',";
    $sql .= "'" . db_escape($db, $comment) . "' ";
    $sql .= ")";
    $result = mysqli_query($db, $sql);
    // For INSERT statements, $result is true/false
    if($result) {
      return true;
    } else {
      // INSERT failed
      echo mysqli_error($db);
      db_disconnect($db);
      exit;
    }
  }

  function find_all_entries() {
    // find all entries in the guestbook
    global $db;

    $sql = "SELECT * FROM guestbook ";
    $sql .= "WHERE deleted = 'n' ";
    $sql .= "ORDER BY creationdate DESC";

    $result = mysqli_query($db, $sql);
    confirm_result_set($result);
    return $result;
  }

  function delete_message_by_id($id) {
    global $db;

    $sql = "update guestbook ";
    $sql .= " SET deleted = 'y' ";
    $sql .= "WHERE id = '". $id . "' ";

    $result = mysqli_query($db, $sql);
    // For UPDATE statements, $result is true/false
    if($result) {
      return true;
    } else {
      // UPDATE failed
      echo mysqli_error($db);
      db_disconnect($db);
      exit;
    }
  }

 ?>

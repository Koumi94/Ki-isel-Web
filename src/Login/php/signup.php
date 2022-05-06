<?php
    $fname= mysqli_real_escape_string($conn, $_POST['fname']);
    $fname= mysqli_real_escape_string($conn, $_POST['user_email"']);
    $fname= mysqli_real_escape_string($conn, $_POST['user_password']);
    $fname= mysqli_real_escape_string($conn, $_POST['user_pconfirme']);

    if (!empty($fname) && !empty($user_email) && !empty($user_password) && !empty($user_pconfirme)){

    }else{
        echo ""
    }
?>
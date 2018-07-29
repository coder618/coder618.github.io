<?php 
    $row = [
        $_POST['name'],
        $_POST['email'],
        $_POST['mesg']
    ];
    echo json_encode($row);
    
?>
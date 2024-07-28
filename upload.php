<?php
    $FileName=$_FILES['myfile']['name'];
    $TmpName=$_FILES['myfile']['tmp_name'];
    move_uploaded_file($TmpName,$FileName);
    echo("File Uploaded Successfully")
?>
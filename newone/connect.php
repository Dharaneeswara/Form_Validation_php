<?php
$username = $_POST['username'];
$register = $_POST['register'];
$degree = $_POST['degree'];
$branch = $_POST['branch'];
$gender = $_POST['gender'];
$email = $_POST['email'];
$contact = $_POST['contact'];
$cgpa = $_POST['cgpa'];
// $tenth = $_POST['tenth'];
// $twelfth = $_POST['twelfth'];

//DB

$conn = new mysqli('localhost', 'root', '', 'test1');
if($conn->connect_error){
    die('conection failed : '.$conn->connect_error);
}else{
    // $stmt = $conn->prepare("insert into regesteration(username, register, gender, email, contact, tenth, twelfth, cgpa) values(?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt = $conn->prepare("INSERT INTO registration (username, register, degree, branch, gender, email, contact, cgpa) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssii",$username, $register, $degree, $branch, $gender, $email, $contact, $cgpa);
    $stmt->execute();
    echo "regesteration successfully...";
    $stmt->close();
    $conn->close();
}
// INSERT INTO `registration` (username, register, degree, branch, gender, email, contact, cgpa) VALUES ('testt', '1313141414', 'btech', 'ai', 'male', 'vi@gmail.com', '1112223333', '9');
?>

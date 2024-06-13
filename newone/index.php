<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>form validation</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"></script>
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> -->
</head>
<body>
    <div class="container">
        <div class="row">
            <form id="registerform" method="post" novalidate>
                <h1 style="color: green;">Form Validation</h1>
                <div class="form-group">
                    <label for="username">Name
                        <input type="text" class="form-control" name="username" id="username">
                        <span class="error"></span>
                    </label>
                </div>

                <div class="form-group">
                    <label for="register">Regno
                        <input type="text" class="form-control" name="register" id="register">
                        <span class="error"></span>
                    </label>
                </div>

                <div class="form-group">
                    <label for="degree" id="degree">Degree
                        <select name="degree" aria-placeholder="select your branch" class="form-control">
                                <option value="">select your Degree</option>
                                <option value="BE">BE</option>
                                <option value="Btech">Btech</option>
                                <option value="Arts">Art's</option>
                        </select>
                    </label>
                </div>  
                
                <div class="form-group">
                    <label for="branch" id="branch">Branch
                        <select name="branch" aria-placeholder="select your branch" class="form-control">
                                <option value="">select your Branch</option>
                                <option value="CSE">CSE</option>
                                <option value="IT">IT</option>
                                <option value="EEE">EEE</option>
                                <option value="MECH">MECH</option>
                                <option value="AI">AI</option>
                        </select>
                    </label>
                </div> 

                    <div class="form-group">
                        <label for="gender" class="gender" id="gender">Gender                            
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="gender" id="gender" value="male">
                                <label class="form-check-label" for="inlineRadio1">Male</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="gender" id="gender" value="female">
                                <label class="form-check-label" for="inlineRadio2">Female</label>
                            </div>
                        </label>
                    </div>


                    <div class="form-group">
                        <label for="email">Email Id
                            <input type="email" class="form-control" name="email" id="email">
                            <span class="error"></span>
                        </label>
                    </div>    

                    <div class="form-group">
                        <label for="contact">Contact Number
                            <input type="tel" class="form-control" name="contact" id="contact">
                            <span class="error"></span>
                        </label>
                    </div>    

                    <!-- <div class="form-group">
                        <label for="tenth">10th mark</label>
                        <input type="text" class="form-control" name="tenth" id="tenth">
                        <span class="error"></span>
                    </div>

                    <div class="form-group">
                        <label for="twelfth">12th mark</label>
                        <input type="text" class="form-control" name="twelfth" id="twelfth">
                        <span class="error"></span>
                    </div> -->

                    <div class="form-group">
                        <label for="cgpa">CGPA
                            <input type="text" class="form-control" name="cgpa" id="cgpa">
                            <span class="error"></span>
                        </label>
                    </div>

                    <div class="form-group">
                        <input type="submit" value="submit" class="btn btn-primary">
                    </div>
            </form>
            <div>
                <table>
                    <thead>
                        <th></th>
                        <th></th>
                        <th></th>
                    </thead>
                </table>
            </div>
        </div>
    </div>
    
    <script src="./script.js"></script>
</body>
</html>

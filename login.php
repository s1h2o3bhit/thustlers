<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">


<style>
.inp{
    width:40%;
}

.container form{
    height: 100%;
    width : 100%;
    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

button{
    width: 40%;
}

body{
    background:url(https://wallpaperaccess.com/full/960588.jpg);
    
    background-repeat: no-repeat;
    background-attachment:fixed;
    background-size:100% 100%;
}
 </style>

 <body>

 <div class= "container">
 <form action= "index.php">
 <div class= "mb-3 mt-3 inp">
    <lable for= "email" class= "form-lable">email:</lable>
    <input type= "email" class="form-control" id= "email" placeholder= "Enter email" name= "email">
    </div>
<div class="mb-3 inp">
    <lable for="pwd" class="form-lable">Password:</lable>
    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd">
</div>
<div class="form-check mb-3">
    <lable class="form-check-lable">
    <input class="form-check-input" type="checkbox" name="remember">Remember me
</lable>
</div>
<button type="submit" class="btn btn-primary">login</button>
</form>
</div>

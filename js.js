//form 1

function vfun(){
    var uname=document.forms["myform"]["uname"].value;
    var upswd=document.forms["myform"]["upswd"].value;
    var boat=document.forms["myform"]["boat"].value;

if(uname==null || uname=="" ){
          document.getElementById("errorBox").innerHTML =
           "Enter the Username";
         return false;
}

if(upswd==null || upswd==""){
          document.getElementById("errorBox").innerHTML =
           "Enter the Password";
         return false;
}

if(boat==null || boat==""){
            document.getElementById("errorBox").innerHTML =
            "Enter the BoatNo";
         return false;
}
if(Emergency==null || Emergency==""){
  document.getElementById("errorBox").innerHTML =
   "Enter the Emergency Number1";
 return false;
}
if (uname != '' && upswd != ''&& boat !='' ){
 alert("Login Successfully");
                 }

}

//form 2

function vfun1(){
    var uname1=document.forms["myform2"]["uname1"].value;
    var email1=document.forms["myform2"]["email1"].value;
    var boat1=document.forms["myform2"]["boat1"].value;
    var upswd1=document.forms["myform2"]["upswd1"].value;
    var upswd2=document.forms["myform2"]["upswd2"].value;


if(uname1==null || uname1=="" ){
          document.getElementById("errorBox").innerHTML =
           "Enter the Username";
         return false;
}

if(email1==null || email1==""){
          document.getElementById("errorBox").innerHTML =
           "Enter the E-Mail Id";
         return false;
}

if(boat1==null || boat1==""){
    document.getElementById("errorBox").innerHTML =
     "Enter the BoatNumber";
   return false;
}

if(upswd1==null || upswd1=="" ){
          document.getElementById("errorBox").innerHTML =
           "Enter the Password";
         return false;
}

if(upswd2==null || upswd2==""){
          document.getElementById("errorBox").innerHTML =
           "Enter the Password";
         return false;}

 if(upswd1 != upswd2){
          document.getElementById("errorBox").innerHTML =
           "Password Don't Match";
         return false;}



if (uname1 != '' && upswd1 != '' && upswd2 != '' &&email1!= '' && boat1 !='' && upswd1 == upswd2)


  alert("Register Successfull");
                 

}
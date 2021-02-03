
// var errorElement=document.getElementById("error");
// var pwd=document.getElementById("pwd");
// var  email=document.getElementById("email");
// var mobile=document.getElementById("Mob");

// function validate() {
    
//     let messages=[];
//     var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
//     if((pwd.value.match(decimal))===false)
//     {
//         messages.push('password must contain an upperCase, lowerCase and a number');

//     }
       
//     if((pwd.value.length<=8))
//     {
//         messages.push("password must be longer than 8 characters");
//     }
//     var condition=/^([A-za-z0-9\.-]+)@([A-za-z0-9\-]).([a-z]{2,3})?$/;
//     if((email.value.match(condition))===false)
//     {
//         messages.push("enter a valid email id ");
//     }
//     var conditionMob=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

//     if((mobile.value.match(conditionMob))===false)
//     {
//         messages.push("check your phone number");
//     }

    
//     if(message.length>0)
//     {
        
//         errorElement.innerText=messages.join(',');
//         return false;
//     }
//     else
//     {
//         return true;
//     }
    
        
//     }












// /^([A-za-z0-9\.-]+)@([A-za-z0-9\-]).([a-z]{2,3})?$/


var password=document.getElementById("pwd");
var mobile=document.getElementById("Mob");
var email=document.getElementById("email");
var msg=document.getElementById("error");

function validate() 
{ 
if (password.value===""||email.value==""||mobile.value==""){
  alert("fields are empty");
  return false;
}
else
{
   var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
   if(password.value.match(decimal)) 
    { 
        var decimalmob= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
            if(mobile.value.match(decimalmob)) 
        {   
            var decimalmail= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; 
            if(email.value.match(decimalmail)) 
                { 
                    alert('Welcome!You are signed up.');
                    return true;
                 
                }
            else
                { 
                alert('enter a valid email address');
                email.style.border="2px solid red";
                return false;
                }
      
          
         }
            else
        { 
        alert('mobile number in valid format pls');
        mobile.style.border="2px solid red";
        return false;
         }
      
          
 }
 else
 { 
     alert('Password must be at least 8 characters long and should contain an uppercase, lowercase and number');
    return false;
}
}







} 
function check()
{
    if(password.value.length<8)
    {
        msg.innerText= "weak password";
      password.style.border="2px solid red";
    }
    
    if(password.value.length===8)
    {
        msg.innerText= "good password" ;
      password.style.border="2px solid yellow";
    }
    if(password.value.length>8)
    {
        msg.innerText=  'strong password';
      password.style.border="2px solid green";
    }
    msg.innerText=  message;
    
}



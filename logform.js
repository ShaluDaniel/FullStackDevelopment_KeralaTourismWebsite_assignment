var password=document.getElementById("ipwd");

var email=document.getElementById("email");

function ivalidate() 
{ 

var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
if(password.value.match(decimal)) 
    { 
        
            var decimalmail= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; 
            if(email.value.match(decimalmail)) 
                { 
                    alert('Welcome!You are logged in!');
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
     alert('password is wrong!');
    return false;
}

} 
function icheck()
{
    if(password.value.length<8)
    {
        
      password.style.border="2px solid red";
    }
    
    if(password.value.length===8)
    {
        
      password.style.border="2px solid yellow";
    }
    if(password.value.length>8)
    {
        
      password.style.border="2px solid green";
    }
    
    
}
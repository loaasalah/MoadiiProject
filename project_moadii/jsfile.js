var regularEmail,email,emailvalue,password,passwordvalue;
function validateEmail(){
     regularEmail=/^([a-zAZ0-9_\-]+)@([a-zAZ0-9]+)(.com|.net|.edu|.org)$/ig;
     email=document.getElementById("input1");
     emailvalue=email.value;
    if(!regularEmail.test(emailvalue))
    {
        email.focus();
        document.getElementById("div1").innerHTML="البريد الالكتروني غير صحيح ";
        email.style.border="2px solid red";
        
    }
    else{
        document.getElementById("div1").innerHTML =" ";
        email.style.border="2px solid blue";
    }
    
    }


    function validatePassword(){
        password=document.getElementById("input2");
         passwordvalue=password.value.length;
        if(passwordvalue < 4 )
        {
            password.focus();
            document.getElementById("div2").innerHTML="كلمه المرور لابد ان تكون من 4 الي 20 حرف";
            password.style.border="2px solid red";
        }
        else{
            document.getElementById("div2").innerHTML =" ";
            password.style.border="2px solid blue";
        }

    }

  

 

async function registerFormHandler(event) {
    event.preventDefault();
    var data={
      "name": "SequelizeValidationError",
      "errors": [{
        "message": "Validation len on password failed",
        "type": "Validation error",
        "path": "password",
        "value": "demo",
        "origin": "FUNCTION",
        "instance": {
          "id": null,
          "name": "demo",
          "password": "demo"
        },
        "validatorKey": "len",
        "validatorName": "len",
        "validatorArgs": [8],
        "original": {
          "validatorName": "len",
          "validatorArgs": [8]
        }
      }]
    };
   // const obj = JSON.parse(data);
    //alert(data.errors[0].message)

    //return false;
    const name = document.querySelector("#email-login").value.trim();
    const password = document.querySelector('#password-login').value.trim();
    const confirmpassword = document.querySelector('#confirm-password-login').value.trim();
    if (confirmpassword !=password) {
     
      document.querySelector('.error-block').innerHTML="Password and Confirm password do not match !!";
      document.querySelector('.error-block').classList.remove("d-none");
      return false;
    }

    if (name && password) {
      document.querySelector('.error-block').classList.add("d-none");
        const response = await fetch('/api/users/', {
          method: 'POST',
          body: JSON.stringify({ name, password }),
          headers: { 'Content-Type': 'application/json' },
        }).then(res => {
          if (res.ok) {
            document.location.replace('/dashboard');
          } else {
            res.json().then(data =>{
             
               error_message=data.errors[0].message
               document.querySelector('.error-block').innerHTML=error_message
               document.querySelector('.error-block').classList.remove("d-none");
             }
            );
            
            //
  
          //  alert('Failed to log in');
          }
        }) ;
    
        
}
}
 

document
  .querySelector('#register-btn')
  .addEventListener('click', registerFormHandler);
  
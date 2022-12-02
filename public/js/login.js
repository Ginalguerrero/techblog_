async function loginFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector("#email-login").value.trim();
    const password = document.querySelector('#password-login').value.trim();
    if (name && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ name, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
};


document
  .querySelector('#login-btn')
  .addEventListener('click', loginFormHandler);

 
  
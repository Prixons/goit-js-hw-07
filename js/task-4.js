document.addEventListener('DOMContentLoaded', function() {
  var loginForm = document.querySelector('.login-form');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var emailInput = loginForm.elements['email'];
    var passwordInput = loginForm.elements['password'];

    var emailValue = emailInput.value.trim();
    var passwordValue = passwordInput.value;

    if (emailValue === '' || passwordValue === '') {
      alert('All form fields must be filled in');
    }

      console.log(formData);

      loginForm.reset();
    }
  });
});

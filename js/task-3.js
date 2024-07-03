document.addEventListener('DOMContentLoaded', function() {
  var nameInput = document.getElementById('name-input');
  var nameOutput = document.getElementById('name-output');

  nameInput.addEventListener('input', function() {
    var name = nameInput.value.trim(); // Trim whitespace from input
    if (name === '') {
      nameOutput.textContent = 'Anonymous';
    } else {
      nameOutput.textContent = name;
    }
  });
});

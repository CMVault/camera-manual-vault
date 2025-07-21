
function checkPassword() {
  const input = document.getElementById('passwordInput').value;
  const decoded = atob("dmF1bHRwYXNz");
  if (input === decoded) {
    document.getElementById('splash').style.display = 'none';
    document.getElementById('siteContent').classList.remove('hidden');
  } else {
    document.getElementById('error').innerText = 'Incorrect password';
  }
}

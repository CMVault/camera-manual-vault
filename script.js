function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  if (input === "vaultaccess") {
    document.querySelector(".splash-container").style.display = "none";
    document.getElementById("home").style.display = "block";
  } else {
    alert("Incorrect password");
  }
}

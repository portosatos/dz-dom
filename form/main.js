function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    let nameError = emailError = passwordError = false;
    
    if (name === "") {
      document.getElementById("nameError").innerText = "Имя не может быть пустым";
      nameError = true;
    } else document.getElementById("nameError").innerText = "";
    
    if (!email.includes("@") || !email.includes(".")) {
      document.getElementById("emailError").innerText = "Некорректный email";
      emailError = true;
    } else document.getElementById("emailError").innerText = "";
    
    if (password.length < 8) {
      document.getElementById("passwordError").innerText = "Пароль должен быть минимум 8 символов";
      passwordError = true;
    } else document.getElementById("passwordError").innerText = "";
    
    if (!nameError && !emailError && !passwordError) alert("Регистрация успешна");
  }
  
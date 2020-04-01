function access()
{
  let userGivenLogin = document.getElementById("loginInput").value,
      userGivenPassword = document.getElementById("passwordInput").value,
      correctUserLogin = "Admin",
      correctUserPassword = "Admin1",

      loginError = document.getElementById("loginError"),
      passwordError = document.getElementById("passwordError");

      loginError.style.display = "none";
      passwordError.style.dysplay = "none";

  if(userGivenLogin === "" || userGivenPassword === ""){
    loginError.style.display = "block";
    loginError.textContent = "Uzupełnij wszystkie pola";
    return false;

  }
  else if(userGivenLogin !== correctUserLogin){
    loginError.style.display = "block";
    loginError.textContent = "Taki urzytkownik nie istnieje";
    return false;

  }
  else if(userGivenPassword !== correctUserPassword){

    passwordError.style.display = "block";
    passwordError.textContent = "Podano złe hasło";
    return false;

  }
  else{
    document.Access.action = "Logged.html";  
  }
}






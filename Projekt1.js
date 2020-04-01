function userCheck()
{
  let userGivenLogin = document.getElementById("loginInput").value,
      userGivenPassword = document.getElementById("passwordInput").value,
      correctUserLogin = "Admin",
      correctUserPassword = "Admin1";
  
  if(userGivenLogin === ""){
    alert('Podaj Login');
  }
  else if(userGivenPassword === ""){
    alert('Podaj Hasło');
  }
  else if(userGivenLogin !== correctUserLogin){
    alert('Podano zły login');
  }
  else if(userGivenPassword !== correctUserPassword){
    alert('Podano złe hasło');
  }
  else{
    document.location.href = "wejdz.html";  
  }
}






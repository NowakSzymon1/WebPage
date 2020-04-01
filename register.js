//document.Registation.action = "index.html";


function register() {
        //przypisanie i pobranie wszystki wartości pól input
    let givenEmail = document.getElementById("emailInput").value,
        givenPassword = document.getElementById("passwordInput").value,
        givenSecondPassword = document.getElementById("passwordSecondInput").value,
        givenKod = document.getElementById("kodInput").value,

        // przypisanie do zmiennych wszystkich możliwych błędów
        fatallError = document.getElementById("fatallError"),
        wrongEmail = document.getElementById("wrongEmail"),
        wrongPassword = document.getElementById("wrongPassword"),
        wrongSecondPassword = document.getElementById("wrongSecondPassword"),
        wrongKod = document.getElementById("wrongKod");

/*-----------------------------------------------------------------------------------------------*/

        // ustawienie wszystkich możliwych błędów na niewidocze         
        fatallError.style.display = "none";
        wrongEmail.style.display = "none";
        wrongPassword.style.display = "none";
        wrongSecondPassword.style.display = "none";
        wrongKod.style.display = "none";

/*-----------------------------------------------------------------------------------------------*/

        //sprawdzanie pól formularza


        if(givenEmail || givenSecondPassword || givenKod || givenPassword === "")
        // sprawdza czy wszystkie pola zostały uzepełnione
        {
            fatallError.style.display = "block";
            fatallError.textContent = "Proszę o poprawne wypełnienie wszystkich pól";
            // jeżeli nie to sprawia że h2 z id fatallError staje się widoczne 
            return false;
            //zatrzymuje kod?

        }
        else{
            document.Registation.action = "index.html"
        }
        
}

//sprawdzania są bardzo podobne

function emailCheck() {

    let givenEmail = document.getElementById("emailInput").value,
        correctEmail = "szymon@open.pl";
        // przypisanie poprawnego hasło oraz poprawnego e-mail w przyszłości zasady wpisanie poprawnego  e-mail
    if(givenEmail !== correctEmail){
    
        wrongEmail.style.display = "block";
        wrongEmail.textContent = "Proszę o podanie poprawnego e-mail";
        return false;
    }
    else{
        wrongEmail.style.display = "none";
    }
}
function passwordCheck() {

    let givenPassword = document.getElementById("passwordInput").value;
    
    if(givenPassword === ""){
        wrongPassword.style.display = "block";
        wrongPassword.textContent = "Proszę o podanie hasła";
        return false;
    }
    else if(givenPassword.length < 5){
        //sprawdza czy wpisane więcej niż 5 znaków
        wrongPassword.style.display = "block";
        wrongPassword.textContent = "Hasło musi być dłuższe niż 5 znaków";
        return false;
        //jak nie to pokazuje p z errorem 
    }
    else{
        wrongPassword.style.display = "none"
        //jak tak to "chowa" eroor
    }
}

function secondPasswordCheck() {
    
    let givenPassword = document.getElementById("passwordInput").value,
        givenSecondPassword = document.getElementById("passwordSecondInput").value;
    
    if(givenSecondPassword !== givenPassword){
        wrongSecondPassword.style.display = "block";
        wrongSecondPassword.textContent = "Podane hasła są różne";
        return false;
    }
    else{
        wrongSecondPassword.style.display = "none";
    }
}

function kodCheck() {

    let givenKod = document.getElementById("kodInput").value,
        correctKod = "1123!!a";
        // przypisanie dodatkowego kodu bez którego nie będzie można się zarejestrować

    if(givenKod !== correctKod){

        wrongKod.style.display = "block";
        wrongKod.textContent = "Proszę o podanie prawidłowego kodu";
        return false;
    }
    else{
        wrongKod.style.display = "none";
    }

    
}
   

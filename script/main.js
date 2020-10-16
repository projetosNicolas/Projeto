alert("OLÁ  ")
var login = prompt("DIGITE SEU EMAIL");
var senha = prompt("DIGITE O LOGIN");

if (login == "ADM" || senha == "ABC5") {
    alert("BEM VINDO");
}else{
    alert("Login ou senha incorretos");
    window.location.href =("https://www.google.com");
}

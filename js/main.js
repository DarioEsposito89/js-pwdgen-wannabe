// VARIABILI COSTANTI RICHIESTE ALL'UTENTE
const firstName = prompt ("Come ti chiami?");
const lastName = prompt ("Qual è il tuo cognome");
const favouriteColor = prompt ("Qual è il tuo colore preferito");
const yearOfBirth = prompt ("Indicami il tuo anno di nascita");

// Anno corrente
const currentYear = 2023;

// OPERAZIONI
const fullName = firstName + " " + lastName;
const userAge = currentYear - parseInt(yearOfBirth);
const numberForPassword = userAge + 21;

// MODIFICHE HTML IN JS
document.getElementById("title").innerHTML= `Complimenti ${fullName} la tua password è stata generata!!!`
document.getElementById("password-generated").innerHTML= `${firstName}${lastName}${favouriteColor}${numberForPassword}`



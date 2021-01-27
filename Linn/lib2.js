//en funksjon - taimot tekst
function emailChecker(email){
//finnes det en @ i teksten?  indexOf('@')
email = email.trim();
console.log(email.indexOf('@') != -1, email, checkForDots(email))

return checkForAt(email) && checkForDots(email) ;

// if(checkForAt(email)  && checkForDots(email)){
//     return true;
// }
// else { return false}

//return  


}

function checkForAt(email){
    // if(email.indexOf('@') != -1){
    //     return true;
    // }
    // else {
    //     return false;
    // }
    return email.indexOf('@') != -1;
}


function checkForDots(email){
    //punktum før og etter @   - finn posisjonen til @, finn deretter første punktum 
//- se at den sin index er LAVERE enn @, og det motsatte med andre punktumen

var positionOfAt = email.indexOf('@'); //denne har et tall som er posisjonsNr    / 5
var positionOfFirstDot = email.indexOf('.'); //denne har et tall som er posisjonsNr  / 2
var positionOfLastDot =  email.lastIndexOf('.'); //denne har et tall som er posisjonsNr   /10

return positionOfFirstDot < positionOfAt && positionOfLastDot > positionOfAt;

// if(positionOfFirstDot < positionOfAt && positionOfLastDot > positionOfAt){  //Krokkodilla gaper mot det største fordi den er grådig
//    return true;
// }
// else{
//     return false;
// }
}
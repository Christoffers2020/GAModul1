function isThisAnEmailAddress(mayBeAnEmail) {
    let indexOfAt = mayBeAnEmail.indexOf("@");
    let firstDotIndex = mayBeAnEmail.indexOf(".");
    let findSecondDotIndex = mayBeAnEmail.substring(indexOfAt).indexOf(".");
    
    if (mayBeAnEmail.includes("@") && !mayBeAnEmail.includes(" ")) {
        if(firstDotIndex < findSecondDotIndex){

            return true;
        }
        else return false;
    }
    else return false;
}
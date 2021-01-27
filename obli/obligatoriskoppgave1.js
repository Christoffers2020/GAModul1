    // Unit 1 - Finding valid dates. This is the main function.
    function isDateValid(ValidDate) {
        var ValidDate = '03.02.2020';
        ValidDate.length = 10; 
            if (ValidDate.length = 10) {
            return true;
            } else {
                return false;
            }
        }

    //Unit 2 - punktum i 3. og 6. posisjon - se at den 3. index er LAVERE enn 6. punktummet.
    function checkForDots(ValidDate){
        const position3 = ValidDate.indexOf('.');
        const position6 =  ValidDate.lastIndexOf('.');
        if (position3 === ValidDate.indexOf('.') && position6 === ValidDate.lastIndexOf('.')) {
            return true;
        } else {
            return false;
        }
    }

    // Unit 3 - checking for year.
    function checkYear(ValidDate) {
        var year = 'year.length === 4 && year >= '0000' && year <= '9999';
            if (year === ValidDate.indexOf('0000')) {
            return true;
        } else {
            return false;
        }

    // Unit 4 - checking for month. -- indexOf()
    function checkMonth(ValidDate) {
        var month = 'month.length === 2 && month >= '01' && month <= '12';
            if (month === ValidDate.indexOf('01')) {
            return true;
        } else {
            return false;
        }

    // Unit 5 - checking for days.
    function checknormalDays(ValidDate) {
        var days = 'days.length === 2 && days >= '01' && days <= '28';
            if (days) {
        return true;
        } else {
            return false;
        }
    
    // Unit 6 - 
    function checkFebruary(ValidDAte) {
        var february = 'days.length === 2 && days = '29';
            if (february === 29) {
        return true;
    } else
        return false;
    
    // Unit 7 - checking for leap year or not, including February.
    function isLeapYear(year) {
        var LeapYear = ;
            if ((year % 4 == 0)
                return true;
            if ((year % 100 != 0) || (year % 400 == 0))
                return true;
            } else {
                return false;
            }
        }

    function exceptFebruary(ValidDAte) {
        var 
    }


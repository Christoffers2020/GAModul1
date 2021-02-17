


        // show(); for å ikke bytte skjerm.
        //          screen = 'main';  når du er ferdig med innloggingen linje 85/86
        //               show();
        //
        //Controller
        function logIn() {
            if (username === 'chris' && password === 'hemmelig') {
                screen = 'main';
                errorMessage = null;
                isLoggedin = true;
            } else {
                errorMessage = 'Feil brukernavn og/eller passord. Prøv igjen'
            }
            show();
        }


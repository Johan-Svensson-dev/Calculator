/**
 * Se detta som en grund att utgå ifrån.
 * Det är helt fritt att ändra och ta bort kod om ni
 * önskar lösa problemen med andra metoder.
 */

let lcd = null; // displayen

let memory = 0; // Lagrat/gamlat värdet från display
let arithmetic = null; // Vilken beräkning som skall göras +,-, x eller /

function init() {
    lcd = document.getElementById('lcd');
    let keyBoard = document.getElementById('keyBoard')
    keyBoard.onclick = buttonClick;
}

/**
 * Händelsehanterare för kalkylatorns tangentbord
 */
function buttonClick(e) {
    let btn = e.target.id; //id för den tangent som tryckte ner


    // kollar om siffertangent är nedtryckt
    if (btn.substring(0, 1) === 'b') {
        let digit = btn.substring(1, 2); // plockar ut siffran från id:et
        addDigit(digit);
    } else {
        switch (btn) {
            case 'add':
                arithmetic = '+';
                addDigit('+')
                break;
            case 'sub':
                arithmetic = '-';
                break;
            case 'mul':
                arithmetic = '*';
                break;
            case 'div':
                arithmetic = '/';
                break;
            case 'clear':
                clearLCD();
                break;
            case 'enter':
                calculate();
                break;
            case 'comma':
                addComma();
                break;
        }
    }

    /**
     *  Lägger till siffra på display.
     */
    function addDigit(digit) {
        lcd.value += digit;

    }

    /**
     * Lägger till decimaltecken
     */
    function addComma() {
        
    }

    function addPlus(){
        if (onclick == )
    }
    
    }

    /**
     * Sparar operator.
     * +, -, *, /
     */
    function setOperator(operator) {
       

        }
        clearLCD();
    }

    /**
     * Beräknar och visar resultatet på displayen.
     */
    function calculate() {


    }

    /** Rensar display */
    function clearLCD() {
        lcd.value = '';
        isComma = false;
    }

    /** Rensar allt, reset */
    function memClear() {
        memory = 0;
        arithmetic = null;
        clearLCD();
    }

    window.onload = init;

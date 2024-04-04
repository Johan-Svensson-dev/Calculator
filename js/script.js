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
    memoryDisplay = document.getElementById('memoryDisplay'); 
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
                addPlus('+');
                clearLCD();
                showMem();
                break;
            case 'sub':
                arithmetic = '-';
                addMinus('-');
                clearLCD();
                showMem();
                break;
            case 'mul':
                arithmetic = '*';

                addMul();
                clearLCD();
                showMem();
                break;
            case 'div':
                arithmetic = '/';
                addDiv();
                clearLCD()
                showMem();
                break;
            case 'clear':
                clearLCD();
                break;
            case 'enter':
                calculate();
                memory=lcd.value;
                break;
            case 'comma':
                addComma();
                showMem();
                break;
        }
    }
}

function showMem () {
    document.getElementById('memoryDisplay').value = memory + arithmetic;

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
        lcd.value += '.';


    }

    function addPlus() {
        memory=lcd.value;
        lcd.value += '+';
    }

    function addMinus() {
        memory=lcd.value;
        lcd.value += '-';
    }

    function addDiv() {
        memory=lcd.value;
        lcd.value += '/';
    }

    function addMul() {
        memory=lcd.value;
        lcd.value += '*';
    }

    /**
     * Sparar operator.
     * +, -, *, /
     */
    function setOperator(operator) {
        arithmetic = operator;
        }
    

    /**
     * Beräknar och visar resultatet på displayen.
     */
    function calculate() {
        let result 
        switch (arithmetic) {
            case '+':
                result = Number(memory) + Number(lcd.value);
                lcd.value = result;
                break;
            case '-':
                result = Number(memory) - Number(lcd.value);
                lcd.value = result;
                break;
            case '*':
                result = Number(memory) * Number(lcd.value);
                lcd.value = result;
                break;
            case '/':
                result = Number(memory) / Number(lcd.value);
                lcd.value = result;
                break;
        }
        lcd.value = result; 
        memoryDisplay.value = '';
        memory = result 

        
    }

    /** Rensar display */
    function clearLCD() {
        lcd.value = '';
        isComma = false;
        memoryDisplay.value = '';
    }

    function clearMemLCD(){
        memoryDisplay.value = '';
        isComma = false;
        memory=lcd.value
    }
    /** Rensar allt, reset */
    function memClear() {
        memory = 0;
        arithmetic = null;
        clearLCD();
    }

    window.onload = init;

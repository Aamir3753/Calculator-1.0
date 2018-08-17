
    var x = Math.floor(Math.random()*13);
    console.log(x);
    document.getElementById("img").setAttribute("src","./images/"+x+".jpeg");

var input, output, firstValue, secondValue, op;

input = document.getElementById("input-box");
output = document.getElementById("output-box");
function sClear() {
    op = input.value = output.value = "";
}
function del() {
    input.value = input.value.substring(0, input.value.length - 1);
}
function cal(id) {
    input.value = input.value + document.getElementById(id).value;
}
function onOperator(id) {
    op = document.getElementById(id).value;
    firstValue = +input.value;
    output.value = input.value;
    output.value = output.value + " " + op;
    input.value = "";
}
function ok() {
    if (op != "" && input.value != "") {
        secondValue = +input.value;
        input.value = "";
        switch (op) {
            case "+": output.value = output.value + " " + secondValue + " = " + (firstValue + secondValue);
                input.value = op = "";
                break;
            case "-": output.value = output.value + " " + secondValue + " = " + (firstValue - secondValue);
                input.value = op = "";
                break;
            case "*": output.value = output.value + " " + secondValue + " = " + (firstValue * secondValue);
                input.value = op = "";
                break;
            case "/": output.value = output.value + " " + secondValue + " = " + (firstValue / secondValue);
                input.value = op = "";
                break;
            case "%": output.value = output.value + " " + secondValue + " = " + (firstValue % secondValue);
                input.value = op = "";
                break;
        }
    }
    else {
        alert("some thing worng... please enter value and select an operator")
    }
}

document.onkeypress = function (e) {
    var x = e.which || e.keyCode;
    if(x===8){
        
    }
    switch (x) {
        case 48:
            document.getElementById("0").click();
            break;
        case 49:
            document.getElementById("1").click();
            break;
        case 50:
            document.getElementById("2").click();
            break;
        case 51:
            document.getElementById("3").click();
            break;
        case 52:
            document.getElementById("4").click();
            break;
        case 53:
            document.getElementById("5").click();
            break;
        case 54:
            document.getElementById("6").click();
            break;
        case 55:
            document.getElementById("7").click();
            break;
        case 56:
            document.getElementById("8").click();
            break;
        case 57:
            document.getElementById("9").click();
            break;
        case 46:
            document.getElementById("period").click();
            break;
        case 27:
            document.getElementById("clear").click();
            break;
        case 8:
           document.getElementById("del").click();
            break;
        case 47:
            document.getElementById("/").click();
            break;
        case 42:
            document.getElementById("*").click();
            break;
        case 43:
            document.getElementById("+").click();
            break;
        case 42:
            document.getElementById("*").click();
            break;
        case 45:
            document.getElementById("-").click();
            break;
        case 13:
            document.getElementById("ok").click();
            break;
        case 32:
            document.getElementById("ok").click();
            break;

    }
}

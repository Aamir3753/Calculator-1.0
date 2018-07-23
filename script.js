
var input, output, firstValue, secondValue, op;

input = document.getElementById("input-box");
output = document.getElementById("output-box");
function sClear() {
    op = input.value = output.value = "";
}
function del(){
     input.value = input.value.substring(0,input.value.length-1);
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


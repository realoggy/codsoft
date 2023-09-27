let output = document.getElementById("output");

function appendToOutput(value) {
    if (output.textContent === "0") {
        output.textContent = value;
    } else {
        output.textContent += value;
    }
}

function clearOutput() {
    output.textContent = "0";
}

function calculateResult() {
    try {
        output.textContent = eval(output.textContent);
    } catch (error) {
        output.textContent = "Error";
    }
}

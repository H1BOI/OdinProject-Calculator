const screen = document.querySelector("#screen");

function calculate(a, b, operand) {
    switch (operand) {
        case "+":
            add(a,b);
            return;
        case "-":
            subtract(a,b);
            return;
        case "x":
            multiply(a,b);
            return;
        case "/":
            divide(a,b);
            return;
    };
};

function add(a, b) {
    return Number(a) + Number(b);
};

function subtract(a, b) {
    return Number(a) - Number(b);
};

function multiply(a, b) {
    return Number(a) * Number(b);
};

function divide(a, b) {
    return Number(a) / Number(b);
};

function createNumPads() {
    const buttonspart = document.querySelector("#buttons");
    const bottompad = ["CLEAR", 0, "="];

    let counter = 0;
    for (let i = 1; i <= 4; i++) {
        const row = document.createElement("div");
        row.style.display = "flex";
        row.style.flex = 1;
        buttonspart.appendChild(row);

        for (let j = 1; j <= 3; j++) {
            counter += 1;

            const column = document.createElement("div");
            column.style.display = "flex";
            column.style.flex = 1;
            row.appendChild(column);

            const button = document.createElement("button");
            if (i == 4) {
                button.textContent = bottompad[j-1];
            } else {
                button.textContent = counter;
            };
            
            if ("1234567890".includes(button.textContent)) {
                button.classList.add("digit");
            } else if (button.textContent === "CLEAR") {
                button.classList.add("clear");
            } else {
                button.classList.add("equal");
            }

            column.appendChild(button);
        }
    };
};

function createOperands() {
    const operandpart = document.querySelector("#operands");
    const operands = ["+", "-", "x", "/"]

    for (let i = 1; i <= 4; i++) {
        const button = document.createElement("button");
        button.textContent = operands[i-1];
        button.classList.add("operator");
        operandpart.appendChild(button);
    };
};


createNumPads();
createOperands();

const buttons = document.querySelectorAll("button");
let firstNum = "";
let operator = null;
let secondNum = "";

buttons.forEach((element) => {
    element.addEventListener("click", (event) => {
        let screenDisplay = event.target.textContent;
        screen.textContent = screenDisplay;
    });
});
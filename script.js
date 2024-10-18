const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const numberToNumeral = (num) => {
    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    let roman = '';

    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {
            roman += romanNumerals[i].symbol;
            num -= romanNumerals[i].value;
        }
    }

    return roman;
};

const checkUserInput = () => {
    const inputValue = parseFloat(numberInput.value);

    if (isNaN(inputValue)) {
        output.innerText = "Please enter a valid number";
        return;
    } else if (!Number.isInteger(inputValue)) {
        output.innerText = "Please enter a valid number";
        return;
    } else if (numberInput.value <= 0) {
        output.innerText = "Please enter a number greater than or equal to 1";
        return;
    } else if (numberInput.value >= 4000) {
        output.innerText = "Please enter a number less than or equal to 3999";
        return;
    } else {
        output.textContent = numberToNumeral(inputValue);
    }
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUserInput();
    }
});
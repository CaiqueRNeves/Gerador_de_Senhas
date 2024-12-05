// SELEÇÃO DE ELEMENTOS
const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

// FUNÇÕES
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
};

const getSymbol = () => {
    const symbols = "(){}[]=,.<>/!@#$%*";
    return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = () => {
    const passwordLength = 10;
    const generators = [
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    ];

    let password = '';

    
    password += getLetterLowerCase();
    password += getLetterUpperCase();
    password += getNumber();
    password += getSymbol();

    
    while (password.length < passwordLength) {
        const randomGenerator = generators[Math.floor(Math.random() * generators.length)];
        password += randomGenerator();
    }

    
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    
    password = password.slice(0, passwordLength);

    
    generatedPasswordElement.style.display = "block";
    generatedPasswordElement.querySelector("h4").innerText = password;
};

// EVENTOS
generatePasswordButton.addEventListener("click", generatePassword);
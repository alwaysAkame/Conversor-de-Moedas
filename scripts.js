const convertButton = document.querySelector(".convertButton");
const convertOf = document.getElementById("convertOf");
const convertFor = document.getElementById("selectConvertFor");
const usdIcon = document.querySelector(".usd-icon").src;
const convertOfIcon = document.querySelector(".convertOfIcon").src;

const moneyToConvert = document.getElementById("money-to-convert");
const moneyConverted = document.getElementById("money-converted");

function convert() {
    const inputValue = document.querySelector(".inputMain").value;
    const dolarToday = 5.37;
    const euroToday = 6.24;
    const realToday = 1;
    const bitcoinToday = 512221;
    const valueToConvert = document.getElementById("valueToConvert");
    const valueConverted = document.getElementById("convertedValue");

    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue);

    if (convertFor.value == "dolar") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue = inputValue / dolarToday);

        valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue);

        const convertOfIcon = document.querySelector(".convertOfIcon").src = "./assets/brazil_icone.png";
        moneyConverted.innerHTML = "Real";
    }

    if (convertFor.value == "euro") {
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertedValue = inputValue / euroToday);

        valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue);

        const convertOfIcon = document.querySelector(".convertOfIcon").src = "./assets/brazil_icone.png";
        moneyConverted.innerHTML = "Real";
    }

    if (convertOf.value == "real" && convertFor.value == "real") {

        valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue);

        valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(convertedValue = inputValue / realToday);

        const convertOfIcon = document.querySelector(".convertOfIcon").src = "./assets/brazil_icone.png";
        moneyConverted.innerHTML = "Real";
    }

    if (convertOf.value == "real" && convertFor.value == "bitcoin") {

        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 8 
        }).format(inputValue / bitcoinToday);

        valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue);

        const convertOfIcon = document.querySelector(".convertOfIcon").src = "./assets/brazil_icone.png";
        const bitcoinIcon = document.querySelector(".usd-icon").src = "./assets/bitcoin-icone.png";
        moneyConverted.innerHTML = "Bitcoin";
        moneyToConvert.innerHTML = "Real";
    }

    // Icones ----------------

    if (convertFor.value == "euro") {
        const usdIcon = document.querySelector(".usd-icon").src = "./assets/eur-icone.png";
        moneyConverted.innerHTML = "Euro";
    }

    if (convertFor.value == "dolar") {
        const usdIcon = document.querySelector(".usd-icon").src = "./assets/eua_icone.png";
        moneyConverted.innerHTML = "Dólar Americano";
    }

    if (convertFor.value == "real") {
        const usdIcon = document.querySelector(".usd-icon").src = "./assets/brazil_icone.png";
        moneyConverted.innerHTML = "Real";
    }

    // Icones ----------------

    // Converter de Dolar para

    if (convertOf.value == "dolar" && convertFor.value == "real") {

        valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(convertedValue = inputValue * dolarToday);

        valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue);

        const convertOfIcon = document.querySelector(".convertOfIcon").src = "./assets/eua_icone.png";
        moneyConverted.innerHTML = "Real";
        moneyToConvert.innerHTML = "Dólar Americano";
    }

    if (convertOf.value == "dolar" && convertFor.value == "euro") {

        const euroToday = 1.16

        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertedValue = inputValue / euroToday);

        valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue);

        const convertOfIcon = document.querySelector(".convertOfIcon").src = "./assets/eua_icone.png";

        moneyToConvert.innerHTML = "Dólar Americano";
        moneyConverted.innerHTML = "Euro";
    }

    if (convertOf.value == "dolar" && convertFor.value == "dolar") {

        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue = inputValue);

        valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue);

        const convertOfIcon = document.querySelector(".convertOfIcon").src = "./assets/eua_icone.png";
        moneyConverted.innerHTML = "Dólar Americano";
        moneyToConvert.innerHTML = "Dólar Americano";
    }

    if (convertOf.value == "dolar" && convertFor.value == "bitcoin") {

        const bitcoinToday = 95436

        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 8 //
        }).format(inputValue / bitcoinToday);

        valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue);

        const convertOfIcon = document.querySelector(".convertOfIcon").src = "./assets/eua_icone.png";
        const bitcoinIcon = document.querySelector(".usd-icon").src = "./assets/bitcoin-icone.png";
        moneyConverted.innerHTML = "Bitcoin";
        moneyToConvert.innerHTML = "Dólar Americano";
    }

    // Converer De Euro para

    if (convertOf.value == "euro" && convertFor.value == "dolar") {

        const dolarToday = 1.16

        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue = inputValue * dolarToday);

        valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue);

        const convertOfIcon = document.querySelector(".convertOfIcon").src = "./assets/eur-icone.png";
        moneyToConvert.innerHTML = "Euro";
        moneyConverted.innerHTML = "Dólar Americano";
    }

    if (convertOf.value == "euro" && convertFor.value == "real") {

        const realToday = 6.24

        valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(convertedValue = inputValue * realToday);

        valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue);

        const convertOfIcon = document.querySelector(".convertOfIcon").src = "./assets/eur-icone.png";
        moneyConverted.innerHTML = "Real";
        moneyToConvert.innerHTML = "Euro";
    }

    if (convertOf.value == "euro" && convertFor.value == "euro") {

        const realToday = 6.24

        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertedValue = inputValue);

        valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue);

        const convertOfIcon = document.querySelector(".convertOfIcon").src = "./assets/eur-icone.png";
        moneyConverted.innerHTML = "Euro";
        moneyToConvert.innerHTML = "Euro";
    }

    if (convertOf.value == "euro" && convertFor.value == "bitcoin") {

        const bitcoinToday = 81842

        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 8 //
        }).format(inputValue / bitcoinToday);

        valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue);

        const convertOfIcon = document.querySelector(".convertOfIcon").src = "./assets/eur-icone.png";
        const bitcoinIcon = document.querySelector(".usd-icon").src = "./assets/bitcoin-icone.png";
        moneyConverted.innerHTML = "Bitcoin";
        moneyToConvert.innerHTML = "Euro";
    }

    // Converer De Bitcoin para

    if (convertOf.value == "bitcoin" && convertFor.value == "dolar") {

        const bitcoinToday = 94691

        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputValue * bitcoinToday);

        valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue);

        const convertOfIcon = document.querySelector(".convertOfIcon").src = "./assets/bitcoin-icone.png";
        const bitcoinIcon = document.querySelector(".usd-icon").src = "./assets/eua_icone.png";
        moneyConverted.innerHTML = "Dólar Americano";
        moneyToConvert.innerHTML = "Bitcoin";
    }

    if (convertOf.value == "bitcoin" && convertFor.value == "euro") {

        const bitcoinToday = 81536

        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputValue * bitcoinToday);

        valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue);

        const convertOfIcon = document.querySelector(".convertOfIcon").src = "./assets/bitcoin-icone.png";
        const bitcoinIcon = document.querySelector(".usd-icon").src = "./assets/eur-icone.png";
        moneyConverted.innerHTML = "Euro";
        moneyToConvert.innerHTML = "Bitcoin";
    }

    if (convertOf.value == "bitcoin" && convertFor.value == "real") {

        const bitcoinToday = 512221

        valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputValue * bitcoinToday);

        valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue);

        const convertOfIcon = document.querySelector(".convertOfIcon").src = "./assets/bitcoin-icone.png";
        const bitcoinIcon = document.querySelector(".usd-icon").src = "./assets/brazil_icone.png";
        moneyConverted.innerHTML = "Real";
        moneyToConvert.innerHTML = "Bitcoin";
    }

    if (convertOf.value == "bitcoin" && convertFor.value == "bitcoin") {

        const bitcoinToday = 512221

        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
        }).format(inputValue);

        valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue);

        const convertOfIcon = document.querySelector(".convertOfIcon").src = "./assets/bitcoin-icone.png";
        const bitcoinIcon = document.querySelector(".usd-icon").src = "./assets/bitcoin-icone.png";
        moneyConverted.innerHTML = "Bitcoin";
        moneyToConvert.innerHTML = "Bitcoin";
    }

}

convertButton.addEventListener("click", convert)
convertFor.addEventListener("change", convert)
convertOf.addEventListener("change", convert)

console.log(convertFor)
function generateRandomAlphanumericText() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const length = 16;

    let result = "TXN";
    for (let i = 0; i < length - 6; i++) {
        if (i < 4) {
            result += letters.charAt(Math.floor(Math.random() * letters.length));
        } else {
            result += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }
    }
    result += "0001";

    return result;
}

for (let i = 0;i<20;i++){
const randomText = generateRandomAlphanumericText();
console.log(randomText);
}

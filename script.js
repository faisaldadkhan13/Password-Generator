function generatePassword() {
    const length = document.getElementById('length').value;
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;

    document.getElementById('password').value = generateRandomPassword(length, uppercase, lowercase, numbers, symbols);
}

function generateRandomPassword(length, uppercase, lowercase, numbers, symbols) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()-=_+[]{}|;:,.<>?/';

    let allChars = '';
    let password = '';

    if (uppercase) allChars += uppercaseChars;
    if (lowercase) allChars += lowercaseChars;
    if (numbers) allChars += numberChars;
    if (symbols) allChars += symbolChars;

    if (!allChars) {
        alert('Please select at least one character type.');
        return '';
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
    }

    return password;
}

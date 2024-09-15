function reverseString(str) {
    return str.split('').reverse().join('');
}

function validateEmail(email) {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    const passwordRegex = /^.{12,}$/;
    return passwordRegex.test(password);
}
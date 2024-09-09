function Palindrome(str) {
    // transforma a string em minúscula, remove espaços e pontuação ▼
    const cleanStr = str
        .toLowerCase()
        .normalize('NFD')
        .replace(/[^a-z0-9]/g, '');

    // reverte a string e verifica se é um palíndromo ▼
    const reversedStr = cleanStr.split('').reverse().join('');
    cleanStr != reversedStr
    ?console.log(`[${str}] dont is palindrome!`)
    :console.log(`[${str}] is palindrome!`)
}

// só pra definir as frases ▼
Palindrome('No lemon, no melon');
Palindrome('Was it a car or a cat I saw?');
Palindrome('You can always restart from "zero" (Re:Zero)');
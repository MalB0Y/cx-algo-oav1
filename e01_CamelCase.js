//CamelCase
function howManyCamelCase (str) {

    if (!str) {
        return 0
    }
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i)

        if (code >= 65 && code <= 90) {
            count++;
        }
    }

    return count;
}

console.log(howManyCamelCase('HolaJeSuisMael'));
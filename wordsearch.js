const horizontalSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    return false;
};

const verticalSearch = (allWords, word) => {
    let index = 0;
    const words = [];
    for (let i = 0; i < allWords[0].length; i++) {
        let newWord = '';
        allWords.forEach((row, wordsIndex) => {
            newWord += row[index];
            if (wordsIndex === allWords.length - 1) {
                index++;
            }
        });
        words.push(newWord);
    }

    if (words.includes(word)) {
        return true;
    } else if (words.filter((w) => w.includes(word)).length) {
        return true;
    }

    return false;
};

const wordSearch = (letters, word) => {
    if (!letters.length) {
        return false;
    }

    return horizontalSearch(letters, word) || verticalSearch(letters, word);
};

module.exports = wordSearch;
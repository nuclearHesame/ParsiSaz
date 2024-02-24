
function copy(e) {
    var text = document.getElementById('data-txt').value;
    var input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
    e.target.innerHTML = "کپی شد!"
    setTimeout(function () {
        e.target.innerHTML = "کپی متن در حافظه"
    }, 2000);
    return result;

}

function convert() {
    var makesBeforeChasban = ['ب', 'پ', 'ت', 'ث', 'ج', 'چ', 'ح', 'خ', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ک', 'ك', 'گ', 'ل', 'م', 'ن', 'ه', 'ی', 'ي', 'ئ'];
    var makesAfterChasban = ['ا', 'آ', 'أ', 'إ', 'ب', 'پ', 'ت', 'ث', 'ج', 'چ', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'ژ', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ک', 'ك', 'گ', 'ل', 'م', 'ن', 'و', 'ه', 'ی', 'ي', 'ؤ', 'ئ'];
    var reqularAlphabet = [
        'ا',
        'آ',
        'أ',
        'إ',
        'ب',
        'پ',
        'ت',
        'ث',
        'ج',
        'چ',
        'ح',
        'خ',
        'د',
        'ذ',
        'ر',
        'ز',
        'ژ',
        'س',
        'ش',
        'ص',
        'ض',
        'ط',
        'ظ',
        'ع',
        'غ',
        'ف',
        'ق',
        'ک',
        'ك',
        'گ',
        'ل',
        'م',
        'ن',
        'و',
        'ؤ',
        'ه',
        'ی',
        'ي',
        'ئ',
        'ء',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '0',
    ];
    var arabicAlphabet = [
        ['ﺍ', 'ﺍ', 'ﺎ', 'ﺎ'],
        ['ﺁ', 'ﺁ', 'ﺂ', 'ﺂ'],
        ['ﺃ', 'ﺃ', 'ﺄ', 'ﺄ'],
        ['ﺇ', 'ﺃ', 'ﺈ', 'ﺈ'],
        ['ﺏ', 'ﺑ', 'ﺐ', 'ﺒ'],
        ['ﭖ', 'ﭘ', 'ﭗ', 'ﭙ'],
        ['ﺕ', 'ﺗ', 'ﺖ', 'ﺘ'],
        ['ﺙ', 'ﺛ', 'ﺚ', 'ﺜ'],
        ['ﺝ', 'ﺟ', 'ﺞ', 'ﺠ'],
        ['ﭺ', 'ﭼ', 'ﭻ', 'ﭽ'],
        ['ﺡ', 'ﺣ', 'ﺢ', 'ﺤ'],
        ['ﺥ', 'ﺧ', 'ﺦ', 'ﺨ'],
        ['ﺩ', 'ﺩ', 'ﺪ', 'ﺪ'],
        ['ﺫ', 'ﺫ', 'ﺬ', 'ﺬ'],
        ['ﺭ', 'ﺭ', 'ﺮ', 'ﺮ'],
        ['ﺯ', 'ﺯ', 'ﺰ', 'ﺰ'],
        ['ﮊ', 'ژ', 'ﮋ', 'ﮋ'],
        ['ﺱ', 'ﺳ', 'ﺲ', 'ﺴ'],
        ['ﺵ', 'ﺷ', 'ﺶ', 'ﺸ'],
        ['ﺹ', 'ﺻ', 'ﺺ', 'ﺼ'],
        ['ﺽ', 'ﺿ', 'ﺾ', 'ﻀ'],
        ['ﻁ', 'ﻃ', 'ﻂ', 'ﻄ'],
        ['ﻅ', 'ﻇ', 'ﻆ', 'ﻈ'],
        ['ﻉ', 'ﻋ', 'ﻊ', 'ﻌ'],
        ['ﻍ', 'ﻏ', 'ﻎ', 'ﻐ'],
        ['ﻑ', 'ﻓ', 'ﻒ', 'ﻔ'],
        ['ﻕ', 'ﻗ', 'ﻖ', 'ﻘ'],
        ['ک', 'ﻛ ', 'ﻚ', 'ﻜ'],
        ['ک', 'ﻛ ', 'ﻚ', 'ﻜ'],
        ['ﮒ', 'ﮔ', 'ﮓ', 'ﮕ'],
        ['ﻝ', 'ﻟ', 'ﻞ', 'ﻠ'],
        ['ﻡ', 'ﻣ', 'ﻢ', 'ﻤ'],
        ['ﻥ', 'ﻧ', 'ﻦ', 'ﻨ'],
        ['ﻭ', 'ﻭ', 'ﻮ', 'ﻮ'],
        ['ﺅ', 'ﺅ', 'ﺆ', 'ﺆ'],
        ['ﻩ', 'ﻫ', 'ﻪ', 'ﻬ'],
        ['ى', 'ﯾ', 'ﯽ', 'ﯿ'],
        ['ى', 'ﯾ', 'ﯽ', 'ﯿ'],
        ['ﺉ', 'ﺋ', 'ﺊ', 'ﺌ'],
        ['ﺀ', 'ﺀ', 'ﺀ', 'ﺀ'],
        ['١', '١', '١', '١'],
        ['٢', '٢', '٢', '٢'],
        ['٣', '٣', '٣', '٣'],
        ['٤', '٤', '٤', '٤'],
        ['٥', '٥', '٥', '٥'],
        ['٦', '٦', '٦', '٦'],
        ['٧', '٧', '٧', '٧'],
        ['٨', '٨', '٨', '٨'],
        ['٩', '٩', '٩', '٩'],
        ['٠', '٠', '٠', '٠'],
    ];
    var numbers = ['١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩', '٠'];
    var strArray = document.getElementById('info-txt').value.split("\n");
    var convertedStrArray = [];
    for (j = 0; j < strArray.length; j++) {
        var strInner = strArray[j].split(" ");
        var convertedStr = '';
        for (var m = 0; m < strInner.length; m++) {
            var str = strInner[m];
            var atleastOne = false;
            //
            var convertedWord = '';
            for (var i = 0; i < str.length; i++) {
                var beforeChasban, afterChasban;
                var currentCharPos = reqularAlphabet.indexOf(str[i]);
                console.log(currentCharPos)
                console.log(currentCharPos)
                if (currentCharPos >= 0) {
                    if (i > 0) {
                        if (makesBeforeChasban.includes(str[i - 1])) {
                            atleastOne = true;
                            beforeChasban = true;
                        } else {
                            beforeChasban = false;
                        }
                    } else {
                        beforeChasban = false;
                    }
                    if (i < str.length - 1) {
                        if (makesAfterChasban.includes(str[i + 1])) {
                            atleastOne = true;
                            afterChasban = true;
                        } else {
                            afterChasban = false;
                        }
                    } else {
                        afterChasban = false;
                    }

                    if (!beforeChasban && !afterChasban) {
                        convertedWord = arabicAlphabet[currentCharPos][0] + convertedWord;
                    }
                    if (beforeChasban && !afterChasban) {
                        convertedWord = arabicAlphabet[currentCharPos][2] + convertedWord;
                    }
                    if (!beforeChasban && afterChasban) {
                        convertedWord = arabicAlphabet[currentCharPos][1] + convertedWord;
                    }
                    if (beforeChasban && afterChasban) {
                        console.log(currentCharPos);
                        convertedWord = arabicAlphabet[currentCharPos][3] + convertedWord;
                    }
                } else {
                    if (atleastOne) {
                        convertedWord = str[i] + convertedWord;
                    } else {
                        convertedWord += str[i];
                    }

                }
            }
            convertedStr = convertedWord + ' ' + convertedStr;
        }

        convertedStrArray.push(convertedStr);
    }
    console.log(convertedStrArray)
    var finalValue = convertedStrArray.reduce(function (total, value) {
        return (total + "\n" + value).trim();
    });
    var numberWord = '';
    for (var i = 0; i < finalValue.length; i++) {

        if (numbers.indexOf(finalValue[i]) >= 0) {
            numberWord += finalValue[i];
            console.log(numberWord)
        } else {
            if (numberWord !== '') {
                var tempWord = numberWord.split("").reverse().join("");
                finalValue = finalValue.replace(numberWord, tempWord);
                numberWord = '';
            }
        }

    }
    document.getElementById('data-txt').value = finalValue;

}

function remove(){
    document.getElementById('info-txt').value = "";
    document.getElementById('data-txt').value = "";
}

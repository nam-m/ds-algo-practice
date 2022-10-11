/** 
 * Given two strings, write a function to determine if the second string
 * is an anagram of the first.
 * 
 * An anagram is a word, phrase, or name formed by rearranging the letters 
 * of another, such as 'cinema', formed from 'iceman'
*/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */

function validAnagram(str1, str2){
    if (str1.length != str2.length)
        return false;

    let letterCounter = {};
    for (let letter of str1)
        letterCounter[letter] = (letterCounter[letter] || 0) + 1;
    
    for (let letter of str2) {
        if (!letterCounter[letter])
            return false;
        letterCounter[letter]--;
    }
    console.log(str2 + ' is anagram of ' + str1);
    return true;
}

validAnagram('', ''); // true
validAnagram('anagram', 'nagaram'); //true
validAnagram('awesome', 'awesom'); // false
validAnagram('qwerty', 'qeywrt'); // true
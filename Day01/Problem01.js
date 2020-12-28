class Problem {
        /**
     * Have the wordCount(input) take the str string parameter being passed
     * and return the number of words the string contains
     * (e.g. "Never eat shredded wheat or cake" would return 6). Words will be
     * separated by single spaces.
     */
    wordCount(input) {
        // Split string into array by spaces
        let splitArr = input.split(" ");

        // return split array.length
        // code goes here
        return splitArr.length;
    }


    /**
     * Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first 
     letter of each word. Words will be separated by only one space.
    * 
    */
    letterCapitalize(str) {
        let strSplit= str.split(" ");
        for(let i = 0; i < strSplit.length; i++){
            let word = strSplit[i];
            strSplit[i] = word[0].toUpperCase() + word.substring(1);
        }
        return strSplit.join(" ");
    }



    /**
     * Have the function firstReverse(String input) take the input parameter being passed and
     * return the string in reversed order. For example: if the input string is "Hello World and Coders" then your
     * program should return the string sredoC dna dlroW olleH.
     */

    firstReverse(input){
        // create an empty string to store result for for loop
        let result = '';
        // for loop to reverse the string
        for(let i = input.length - 1; i >= 0; i--){
            result += input[i];
        }
        // return result of reversed string
        return result;
    }

    /**
     * Have the longestWord(String input) take the input parameter being passed and return the
     * largest word in the string. If there are two or more words that are the same length,
     * return the first word from the string with that length. Ignore punctuation and assume
     * input will not be empty.
     */
    longestWord(input) {
    // Step 1: Split array, set variable for longest words, and empty for word
        let str = input.split(" ");
        let longest = 0;
        let word = null;
        for (let i = 0; i < str.length; i++) {
            let checkedLetters = "";
            for (let j = 0; j < str[i].length; j++) {
                if (/[a-zA-Z]/.test(str[i][j])) {
                    checkedLetters += str[i][j];
                }
            }
            if (longest < checkedLetters.length) {
                longest = checkedLetters.length;
                word = checkedLetters;
            }
        }
        return word;
    }

    /**
     * Have the swapCase(String input) take the input parameter and swap the case of each
     * character. For example: if str is "Hello World" the output should be hELLO wORLD.
     * Let numbers and symbols stay the way they are.
     */
    swapCase(str) {
    // Step 1: Identify empty variable to return answer
    let string1 = "";
    // Step 2: Loop through array
    for (let i = 0; i < str.length; i++) {
    // Step 3: Use if statement to test for casing
        if (/[A-Z]/.test(str[i])) string1 += str[i].toLowerCase();
        else string1 += str[i].toUpperCase();
    }
    // Step 4: return final string
    return string1;
    }

}

module.exports = Problem;
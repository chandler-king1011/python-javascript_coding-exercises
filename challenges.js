// checking for an anagram

    //sorting strings
const sort = (str) => {
    let strArr = str.split('');
    for (i=0; i < strArr.length; i++) {
        for(j = (i + 1); j < strArr.length; j++) {
            if (strArr[j] < strArr[i]) {
                let temp = strArr[i];
                strArr[i] = strArr[j];
                strArr[j] = temp;
            }
        }
    }
    return strArr.join("");
}

const anagram = (sentOne, sentTwo) => {

    sentOne = sentOne.split(" ").join("").toLowerCase();
    console.log(sentOne);
    sentTwo = sentTwo.split(" ").join("").toLowerCase();
    return sort(sentOne) === sort(sentTwo);
    
}



console.log(anagram("clint eastwood", "old west action"));


// Array pair sum

const pairSum = (arr, answer) => {
    if (arr.length < 2) {
        return console.log("Too Small")
    } else {
        let seen = [];
        let output = [];

        arr.forEach(num => {
            let target = answer - num;
            if (seen.includes(target)) {
                output.push([num, target]);
            } else {
                seen.push(num);
            }
        })
        console.log(output);


    }
}

pairSum([1, 3, 2, 2], 4);


// Largest sum in an array.

const largest = (arr) => {
    if(arr.length < 1) {
        return console.log("Array is too small.")
    } else {
        let largestSum = 0;
        let largestNum = 0;

        arr.forEach((num) => {
            if (largestNum + num > largestSum) {
                largestSum = largestNum + num;
            } 
            if (num > largestNum) {
                largestNum = num;
            }
        })
        return largestSum;
    }
}

console.log(largest([1, 2, 3]));

// Given a string of words return a string with the words in reverse

const reverseSent = (sentence) => {
    let sentArr = sentence.split(" ");
    let reverseArr = [];

    while (sentArr.length > 0) {
        let popped = sentArr.pop();
        reverseArr.push(popped);
    }
    return reverseArr.join(" ");

}

console.log(reverseSent("Hi There Chandler"));

// Given two arrays return the common values.

const commonElements = (arrOne, arrTwo) => {
    let commonArr = [];
    let elementTracker = {};

    arrOne.forEach(item => {
        elementTracker[item] = 1;
    })
    arrTwo.forEach(i => {
        if (elementTracker[i] != null && elementTracker[i] < 2) {
            elementTracker[i] += 1;
            commonArr.push(i);
        }
    })

    return commonArr.sort();
}
console.log(commonElements([1, 2, 3, 4, 5], [3, 5, 6, 7, 5, 1]));


// given an arr return the most frequently occurring item

const mostFrequent = (arr) => {
    let tracker = {};
    let output = 0;
    arr.forEach(el => {
        if(tracker[el] == null) {
            tracker[el] = 1;
        } else {
            tracker[el] += 1;
        }
        if (tracker[el] > output) {
            output = el;
        }
    })
    return output;
}

console.log(mostFrequent([1, 1, 2, 2, 1, 2, 2, 7, 10, 1, 2, 15]));

// Given a string are all the characters unique T/F?

const all_unique = (str) => {
    const newStr = str.split(" ").join("").toLowerCase();
    let characters = [];

    for (i=0; i < newStr.length + 1; i++) {
        if (characters.includes(newStr[i])) {
            return false;
        } else {
            characters.push(newStr[i]);
        }
    }
    return true;
}

console.log(all_unique("hi there"));


// non repeat element. Take a string and return non repeating characters.

const noRepeat = (str) => {
    let tracker = {};
    let result = [];
    let newStr = str.split(" ").join("").toLowerCase();
   

    for(i=0; i < newStr.length + 1; i++) {
        if (tracker[newStr[i]] != null) {
            tracker[newStr[i]] += 1;
        } else {
            tracker[newStr[i]] = 1;
        }
    }


    newStr.split("").forEach(letter => {
        if (tracker[letter] == 1) {
            result.push(letter);
        }
    })

    return result;
}

console.log(noRepeat("hi ther"));
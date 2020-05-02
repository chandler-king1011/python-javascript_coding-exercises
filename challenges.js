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

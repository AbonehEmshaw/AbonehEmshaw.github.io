// test function
function myFunctionTest(expected, found){
    if(expected===found){
        return "TEST SUCCEEDED";
    }else{
        return "TEST FAILED. Expected output is " + expected + " but found " + found;
    }
};

/* test func for arrays */
function myTestFunctionArrays(expected, found){
    if(JSON.stringify(expected) == JSON.stringify(found)){
        return "TEST SUCCEEDED";
    }else{
        return "TEST FAILED. Expected [" + expected + "]" + "found" + found;
    }
};

// maximum of two
function max(a,b){
    if(a.b){
        return a;
    }else{
        return b;
    }
};
console.log("Expected output of max(20,50) is 50 " + myFunctionTest(50,max(20,50)));
console.log("Expected output of max(20,50) is 50 " + myFunctionTest(20,max(20,50)));

//return the max of three numbers 
function maxOfThree(a, b, c){
    var max = a;
    if(max < b){
        max = b;
    }
    if(max < c){
        max = c;
    }
    return max;
};

console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));

//return true if character is a vowel 
function isVowel(c){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(c);
};

console.log("Expected output of isVowel('a') is true " + myFunctionTest(true, isVowel('a')));
console.log("Expected output of isVowel('f') is false " + myFunctionTest(false, isVowel('f')));

//sum elements in the array 
function sum(numbers){
    let sum = numbers.reduce(function(accumulator, currentValue){
        return accumulator + currentValue;
    });
    return sum;
};

console.log("Expected output of sum([1,2,3,4,5]) is 15 " + myFunctionTest(15, sum([1,2,3,4,5])));

//multuply each elements in the array 
function multuply(numbers){
    let result = numbers.reduce((a, b) => a * b);
    return result;
};

console.log("Expected output of sum([1,2,3,4,5]) is 120 " + myFunctionTest(120, multuply([1,2,3,4,5])));

//reverse string 
function reverse(str){
    return str.split("").reverse().join("");
};

console.log("Expected output of reverse('jag testar') is 'ratset gaj' " + myFunctionTest("ratset gaj", reverse("jag testar")));

//findLongestWord 
function findLongestWord(words){
    var length = words[0].length;
    for(i = 1; i < words.length; i++){
        if(length < words[i].length){
            length = words[i].length;
        }
    }
    return length;
};

console.log("Expected output of findLongestWord(['jos', 'jo', 'yoseph']) is 6 " + myFunctionTest(6, findLongestWord(['jos', 'jo', 'yoseph'])));

//function findLongestWords */
function findLongestWords(k,words){
    var newWords = [];
    for(i = 0; i < words.length; i++){
        if(words[i].length > k){
            newWords.push(words[i]);
        }
    }
    return newWords;
};

console.log("Expected output of findLongestWords(['Aboneh', 'Ab', 'Manyazewal']) is ['Aboneh', 'Manyazewal'] " + myTestFunctionArrays(["Aboneh", "Manyazewal"], myTestFunctionArrays(3, ['Aboneh', 'Ab', 'Manyazewal'])));

const a = [1,3,5,3,3]; 

const b = a.map(function(elem, i, array) {
return elem + 3;
})


document.writeln(b.toString() + "<br/>");

const c = a.filter(function(elem, i, array){
return elem !== 3;});

document.writeln(c.toString() + "<br/>");

const d = a.reduce(function(prevValue, elem, i, array){
return prevValue + elem;
});
document.writeln(d+ "<br/>");

const d2 = a.find(function(elem) {return elem > 1;}); //3
const d3 = a.findIndex(function(elem) {return elem > 1;}); //1


document.writeln(d2+ "<br/>");
document.writeln(d3);


const multiplyBy10 = a.map(function(elem, i, array){
return elem * 10;
});
document.writeln("<br/>");
document.writeln(multiplyBy10.toString() + "<br/>");

const only3 = a.filter(function(x){
return x == 3;
});
document.writeln("<br/>");
document.writeln(only3.toString() + "<br/>");

const product = a.reduce((a,b) => a * b);
document.writeln("<br/>");
document.writeln(product.toString() + "<br/>");
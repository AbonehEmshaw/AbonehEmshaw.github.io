
// maximum of two
function max(a,b){
    if(a.b){
        return a;
    }else{
        return b;
    }
};
console.log("Expected output of max(20,50) is 50 " + myFunctionTest(50,max(20,50)));
console.log("Expected output of max(20,50) " + myFunctionTest(20,max(20,50)));

//maximum of three numbers 
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

console.log("Expected output of maxOfThree(3,5,2) is 5  " + myFunctionTest(5, maxOfThree(3,5,2)));

//is a vowel 
function isVowel(c){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(c);
};
console.log("Expected output of isVowel('p') is false " + myFunctionTest(false, isVowel('p')));
console.log("Expected output of isVowel('o') is true " + myFunctionTest(true, isVowel('o')));


//sum of elements in the array 
function sum(num){
    let sum = num.reduce(function(accumulator, value){
        return accumulator + value;
    });
    return sum;
};

console.log("Expected output of sum([1,2,3,4,5]) is 15 " + myFunctionTest(15, sum([1,2,3,4,5])));

//multuply each elements of the array
function multuply(num){
    let result = num.reduce((a, b) => a * b);
    return result;
};

console.log("Expected output of multiply([1,2,3,4,5]) is 120 " + myFunctionTest(120, multuply([1,2,3,4,5])));

//reverse string 
function reverse(str){
    return str.split("").reverse().join("");
};

console.log("Expected output of reverse('jag testar') is 'ratset gaj' " + myFunctionTest("ratset gaj", reverse("jag testar")));

//find Longest Word 
function findLongestWord(words){
    var length = words[0].length;
    for(i = 1; i < words.length; i++){
        if(length < words[i].length){
            length = words[i].length;
        }
    }
    return length;
};

console.log("Expected output of findLongestWord(['Manyazewal', 'Ab', 'Aboneh']) " + myFunctionTest(6, findLongestWord(['Manyazewal', 'Ab', 'Aboneh'])));
console.log("Expected output of findLongestWord(['Manyazewal', 'Ab', 'Aboneh']) is 10 " + myFunctionTest(10, findLongestWord(['Manyazewal', 'Ab', 'Aboneh'])));

//function find Longest Words 
function findLongestWords(k,words){
    var newWords = [];
    for(i = 0; i < words.length; i++){
        if(words[i].length > k){
            newWords.push(words[i]);
        }
    }
    return newWords;
};

console.log("Expected output of findLongestWords(['Aboneh', 'Ab', 'Manyazewal']) is ['Aboneh', 'Manyazewal'] " + myTestFunctionArrays(["Aboneh", "Manyazewal"], findLongestWords(3, ['Aboneh', 'Ab', 'Manyazewal'])));

//Modify the jsfiddle on the map/filter/reduce slide
const a = [1,3,5,3,3]; 

const multiplyByTen = a.map(function(elem, i, array){
return elem * 10;
});

document.writeln("Each element multiplied by 10: " + multiplyByTen.toString());

const onlyThree = a.filter(function(x){
return x == 3;
});
document.writeln("<br/>");
document.writeln("Array with all elements equal to 3: " + onlyThree.toString());

const product = a.reduce((a,b) => a * b);
document.writeln("<br/>");
document.writeln("The product of all elements: " + product.toString());


//Test functions
// test function

function myFunctionTest(expected, found){
    if(expected===found){
        return "TEST SUCCEEDED";
    }else{
        return "TEST FAILED. Expected output is " + expected + " but found " + found;
    }
};

//test function for arrays
function myTestFunctionArrays(expected, found){
    if(JSON.stringify(expected) == JSON.stringify(found)){
        return "TEST SUCCEEDED";
    }else{
        return "TEST FAILED";
    }
};
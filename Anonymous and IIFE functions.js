//a.Print odd numbers in an array
//b.Convert all the strings to title caps in a string array
//c.Sum of all numbers in an array
//d.Return all the prime numbers in an array
//e.Return all the palindromes in an array
//f.Return median of two sorted arrays of the same size.
//g.Remove duplicates from an array
//h.Rotate an array by k times

//a.Print odd numbers in an array
// anonymous Function

let arr = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10];
let oddnumber = arr.filter(function (arr) {
    return arr %2 !== 0;   
}); 
console.log(oddnumber);           //output: [ 1, 3, 5, 7, 9 ]
  
//IIFE Function

let arr = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10];
 (function () { 
    let oddnumber = arr.filter(function (arr) { 
    return arr %2 !== 0;
    });
     console.log(oddnumber);      //output: [ 1, 3, 5, 7, 9 ]
}) ();


//b.Convert all the strings to title caps in a string array
//Anonymous Function

let stringArray = ["good", "morning", "everyone"];
let resultStringArray = (function (stringArray) {
    return (stringArray.map((item) => {
        return item.toUpperCase();
    }));
})(stringArray);
console.log(resultStringArray.join(" ").trim());  //output: GOOD MORNING EVERYONE

//IIFE Function

(function() {
  let stringArray = ['hello world', 'javascript is fun'];
  let titleCasedArray = stringArray.map(function(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  });
  console.log(titleCasedArray);   //output: [ 'Hello World', 'Javascript Is Fun' ]
})();


//c.Sum of all numbers in an array
//anonymous Function

let arr = [1, 2, 3, 4, 5];
let sum = (function(arr) {
    let total = 0;
    for(let i=0; i<arr.length; i++) {
        total += arr[i];
  }
     return total;
}) (arr);
console.log(sum);            //output: 15

//IIFE Function

(function (arr) {
    let total = 0;
    for(let i=0; i<arr.length; i++) {
        total += arr[i];
    }
    console.log(total);      //output: 15
    return total;
}) ([1, 2, 3, 4, 5]);


//d.Return all the prime numbers in an array
//Anonymous Function

let resultPrimeArray = (function (arrayNumber) {
    return (arrayNumber.filter((item) => {
        for (i = 2; i < item; i++) {
            if (item % i === 0)
                return false
        }
        return true
    }))
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log("Prime numbers in an array: " + resultPrimeArray)  //output: [ 2, 3, 5, 7 ]


//e.Return all the palindromes in an array
//Anonymous Function

const isPalindrome = function (str) {
    return str.split('').every((char, index) => char === str[str.length - index - 1]);
  };
   console.log(isPalindrome("121"));    //output: true
  
  //IIFE Function

 const isPalindrome = (function (str) {
    return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
  })("no");
   console.log(isPalindrome);       //output: false
  
  
//f.Return median of two sorted arrays of the same size.
//ananonymous Function

let arr1 = [1, 2, 3, 4, 5, 8, 10]
let arr2 = [8, 9, 10, 12, 16]
let resultMedian = function (arr1, arr2) {
    let result = []
    let lenArr1 = arr1.length
    let lenArr2 = arr2.length
    if (lenArr1 % 2 === 0) {
        console.log("Median of array 1: " + arr1[lenArr1 / 2])
    } else {
        console.log("Median of array 1: " + arr1[(lenArr1 + 1) / 2])
    }
    if (lenArr2 % 2 === 0) {
        console.log("Median of array 2: " + arr2[lenArr2 / 2])
    } else {
        console.log("Median of array 2: " + arr2[(lenArr2 + 1) / 2])
    }
    return
}(arr1, arr2)   //output: Median of array 1: 5 Median of array 2: 12

//g.Remove duplicates from an array
//Anonymous Function

const removeDuplicates = function (arr) {
    return [...new Set(arr)];
  };
 console.log(removeDuplicates([1, 2, 3, 2]));   //output: [1, 2, 3]
  
//IIFE Function

  (function(arr){ 
  let uniqueArray = Array.from(new Set(arr));
   console.log(uniqueArray); 
  })
  ([1,2,2,3]);                // Output: [1, 2, 3]
  
  
  //h.Rotate an array by k times
  //Anonymous Function

  (function(arr, k){
    let result = arr.slice(k).concat(arr.slice(0,k));
    console.log(result);
  })([1, 2, 3, 4, 5], 2);      //Output: [3, 4, 5, 1, 2]
 
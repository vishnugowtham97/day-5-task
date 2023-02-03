//a.Print odd numbers in an array
//b.Convert all the strings to title caps in a string array
//c.Sum of all numbers in an array
//d.Return all the prime numbers in an array
//e.Return all the palindromes in an array

//a.Print odd numbers in an array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers = numbers.filter(number => number % 2 !== 0);

console.log(oddNumbers);             //output: [ 1, 3, 5, 7, 9 ]

//b.Convert all the strings to title caps in a string array

let stringArray = ["good", "morning", "everyone"];
stringArray = stringArray.map((item) => {

    return item.toUpperCase();
});

console.log(stringArray);    //output: [ 'GOOD', 'MORNING', 'EVERYONE' ]


//c.Sum of all numbers in an array

( () =>{
    let arr = [1, 2, 3, 4, 5];
    let sum = +"";
    for (let i=0; i<arr.length; i++) {
        sum += +arr[i];
    } 
    
    console.log(sum);         // output: 15
    return sum;
})();

//d.Return all the prime numbers in an array

const getPrimes = arr => {
  const isPrime = num => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  };
  return arr.filter(isPrime);
};

console.log(getPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));  //output: [ 2, 3, 5, 7 ]

//e.Return all the palindromes in an array

let arrayPallindrome = [121, 123, 686]
console.log("Pallindrome Numbers in array are: " +
    arrayPallindrome.filter((item) => {

        let temp = item + "";

        if (temp.split('').reverse().join('') === item + "")
            return true

        return false

    }))                                 //output: Pallindrome Numbers in array are: 121,686


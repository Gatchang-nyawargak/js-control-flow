//Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last
// two added by 10. Return the array with the new values
function multiplyArr(numbers){
    const multiplyFirstFour = numbers.slice(0,4).map(num => num *num);
    const multiplyLastTwo = numbers.slice(-2).map(num => num *10);
    const newArr = multiplyFirstFour.concat(multiplyLastTwo);
    return newArr;
   };

const numbers = [1,2,3,4,5,5,6];
console.log(multiplyArr(numbers));

//Write a program that takes in the following array and use a while loop to iterate
// and break when the item is equal to the fourth index :


 const arr = (arrNum) =>{
    while(arrNum.length>4){
        console.log("iterarated index");
        arrNum.pop();
     if(arrNum.length===4){
      console.log("last index");  

    break;
    }
    
 }
}
let arrNum = [1,2,3,4,5,6,7,8,9];
arr(arrNum);

//Write a function that takes in a an array of strings and use a continue statement when 
//the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']
const arrayOfString = (arr) => {
   for (let i=0; i <arr.length; i++){
       if (i === 2){
           continue;
       }
       console.log(arr[i]);
   }
};
let fruits= ['apple','plum','banana','strawberries','kiwi']
arrayOfString(fruits);


//Write a function that accepts an array of strings and console.logs each element using a for loop.

function takesInStrings(arr){
   for (let i=0; i <arr.length; i++){
       console.log(arr[i]);
   }
};
let stringsArr = ["Breathe", "Walks", "Talks", "Jumps"]
takesInStrings(stringsArr);


//Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string. 
function stringReverse(str){
   let reversedStr = '';
   let i = str.length-1;
   while (i >= 0){
       reversedStr += str[i];
       i--;
   }
   return reversedStr;
};
 let string = "Monicah";
 console.log(stringReverse(string));

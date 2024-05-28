const inputVal = document.getElementById("number");
const convert = document.getElementById("convert-btn");
const output = document.getElementById("output");

const checkUserInput = () => {
  const input = inputVal.value;
  console.log(input);
  if(input === '' || isNaN(input)){
   output.innerText ="Please enter a valid number";
    
  }else if (Number(input) < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    
  }else if (Number(input) >= 4000){
    output.innerText = "Please enter a number less than or equal to 3999";
  }else {
   output.innerText = convertNumber(input);
  }
} 

const convertNumber = (input) => {
  
  if(input>= 1000) {return "M" + convertNumber(input - 1000)}
  if(input>= 900) {return "CM" + convertNumber(input - 900)}
  if(input>=500) {return "D" + convertNumber(input-500)}
  if(input>= 100) {return "C" + convertNumber(input-100)}
  if(input>= 90) {return "XC" + convertNumber(input-90)}
  if(input>= 50) {return "L" + convertNumber(input- 50)}
  if (input>= 40) {return "XL" + convertNumber(input-40)}
  if(input>=10) {return "X" + convertNumber(input-10)}
  if(input >= 9) {return 'IX' + convertNumber(input-9);}
  if(input>=5) {return "V" + convertNumber(input-5)}
  if(input >= 1) {return "I" + convertNumber(input-1)}
  return ''

}




convert.addEventListener("click", checkUserInput);

console.log(900 % 1000)
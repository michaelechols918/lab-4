console.log('Hey there!');
console.log('This is the sum() function!');
function sum(x,y){
  var sumTotal = x + y;
  //console.log('The sum of ' + x + ' and ' + y + ' is ' + sumTotal);
  return sumTotal;
}
console.log('This is the multiply() function!');
function multiply(a,b){
  var productTotal = a * b;
  //console.log ('The product of ' + a + ' and ' + b + ' is ' + productTotal);
  return productTotal;
}
console.log('This is the sumAndMultiply() function!');
function sumAndMultiply(m, n, o){
  var sumAnswer = sum(m, n) + o;
  var multiplyAnswer = multiply(m, n) * o;
  console.log('The numbers of ' + m + ' and ' + n + ' and ' + o + ' have a sum of ' + sumAnswer);
  console.log('The numbers of ' + m + ' and ' + n + ' and ' + o + ' have a product of ' + multiplyAnswer);
  return [sumAnswer, multiplyAnswer];
}
console.log('This is the sumArray() function!');
function sumArray(thisArray){
  var arrayOne = 0;
  for(var i = 0; i < thisArray.length; i++){
    arrayOne = arrayOne + thisArray[i];
  }
  console.table(thisArray);
  console.log(+ m + ',' + n + ',' + o + 'were passed through an array and ' + thisArray +
  ' is their sum');
}
console.log('This is the multiplyArray() function!');
function multiplyArray(thatArray){
  var arrayTwo = 1;
  for(var i = 1; i < thatArray.length; i++){
    arrayTwo = arrayTwo * thatArray[i];
  }
console.table(thatArray);
console.log(+ m + ',' + n + ',' + o + 'were passed through an array and ' + thatArray + ' is their product');

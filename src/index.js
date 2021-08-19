exports.min = function min (array) { 
   if (array == 0 || !array)
  return 0;
array.sort((a, b) => a - b);
return array[0];
}


exports.max = function max (array) {
  if (array == 0 || !array)
  return 0;
  let number = array[0];
    for (let i = 1; i < array.length - 1; i++){
      if (number < array[i + 1]){
       number = array[i + 1];
      }
    }
  return number
};


exports.avg = function avg (array) {
  if (array == 0 || !array)
  return 0;

  let sum = +0;
  let i = 0;
 while (i < array.length){
sum = sum + array[i];
i = i + 1;
 }
 return sum / array.length;
}

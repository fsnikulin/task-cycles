export function rangeSum(start, end) {
  let sum = 0;
  for(let i = start; i <= end; i++){
    if(i % 2 === 0){
      sum += i;
    }
  }
  return sum;
}

export function iterationCount(a) {
  let iterations = 0;
  while(a > 0.1){
    a /= 2;
    iterations++;
  }
  return iterations;

}

export function symbolsReplace(message) {
  let result = "";

  for(let i = 0; i < message.length; i++){
    if((i+1) % 3 === 0){
      result += "_";
    }
    else{
      result += message[i];
    }
  }
  return result;
}

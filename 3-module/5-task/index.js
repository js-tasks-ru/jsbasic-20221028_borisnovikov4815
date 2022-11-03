//const inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';



function getMinMax(str) {
  let result = {
    min: 0,
    max: 0
  };
  let output = str.split(' ').filter(item => Number(item)).sort((a, b) => a - b);
  result.min = Math.min(...output); 
  result.max = Math.max(...output);
  return result;
};

//console.log(getMinMax(inputData))





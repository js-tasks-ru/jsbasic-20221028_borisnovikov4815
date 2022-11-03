function sumSalary(salaries) {
  let sum = 0;

for(key in salaries){

  properties = salaries[key];
  
  if(typeof(properties) == "number" && isFinite(properties) == true){

    sum += properties;
  }
}
  return sum;
}

//console.log(sumSalary(salaries))

function showSalary(users, age) {
  let sal = users.filter(item => item.age <= age).map(item => item.name + ', ' + item.balance).join('\n');
  
  return sal;
};
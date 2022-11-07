function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  document.body.append(ul);
  
  for (i in friends){
    let plus = friends[i].firstName + " " + friends[i].lastName;
    let li = document.createElement('li');
    li.innerHTML = plus;
    ul.append(li);
  };
  
  return ul;
};

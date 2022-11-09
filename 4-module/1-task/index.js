function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  for (friend of friends){
    let li = document.createElement('li');
    ul.append(li);
    li.append(friend.firstName + ' ' + friend.lastName)
  };
  return ul;
};

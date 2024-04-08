function makeFriendsList(friends) {
  let friendsList = friends.map(friend => friend.firstName + ' ' + friend.lastName)
  let ul = document.createElement('ul');
  
  for (let friend of friendsList) {
    ul.innerHTML = ul.innerHTML + `<li>${friend}</li>`
  }

  return ul
}

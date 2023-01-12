function userTopFriends(firstFriend, secondFriend,
    thirdFriends, fourthFriend) {
    console.log(firstFriend);
    console.log(secondFriend);
    console.log(thirdFriends);
    console.log(fourthFriend); // undefined since we are not passing any value for this param if we add 4 th param in the array then we'll get the value.
    }
userTopFriends(...['Alice', 'Bob', 'Michelle']);
    
function makeUser(name, age) {
    return {
      name: name,
      age: age,
    };
  }
  
  let user = makeUser("John", 30);
  console.log(user.name,user.age)
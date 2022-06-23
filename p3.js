function findProp(obj, prop) {
  var result = [];
  function recursivelyFindProp(o, keyToBeFound) {
    Object.keys(o).forEach(function (key) {
      if (typeof o[key] === 'object') {
        recursivelyFindProp(o[key], keyToBeFound);
      } else {
        if (key === keyToBeFound) result.push(o[key]);
      }
    });
  }
  recursivelyFindProp(obj, prop);
  return result;
}


// Testing:
const obj = {
  firstname: 'John',
  lastname: 'Doe',
  age: 25,
  mobile: 1234567890,
  email: 'john.doe@gmail.com',
  salary: 0,
  address: {
  street: '123 Main St',
  city: 'New York',
  state: 'NY',
  zip: '12345'
  },
  friends: ['Jane', 'Bob', 'Mary'],
  eduction: [
  { name: 'High School', year: '2010' },
  { name: 'Bachelor', year: '2014' },
  ],
  interset: {
  work:
  {
  code: 'JavaScript',
  company: 'JIO',
  salary: '$100k'
  },
  home: {
  food: 'Pizza',
  music: 'Jazz'
  }
  }
  };

console.log(findProp(obj, "name"));
console.log(findProp(obj, "code"));
console.log(findProp(obj, "salary"));
console.log(findProp(obj, "food"));

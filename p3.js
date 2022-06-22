function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
  
  
  const map = {"first" : "1", "second" : "2"};
  console.log(getKeyByValue(map,"second"));
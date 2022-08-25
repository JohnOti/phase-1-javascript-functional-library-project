// Array.prototype.myEach = function (callback) {
//   for (let i=0; i < this.length; i++){
//     callback(this[i]);
//   }
// };
const myInput = function(collection) {
  return (collection instanceof Array) ? collection.slice() : Object.values(collection);
}
const myEach = function(collection, callback) {
  const newCollection = myInput(collection);
  for (let i = 0; i < newCollection.length; i++) {
    callback(newCollection[i]);
  }

  return collection;
}
const myMap = function(collection, callback) {
  const newCollection = myInput(collection);
  const newArray = [];

  for (let i = 0; i < newCollection.length; i++) {
    newArray.push(callback(newCollection[i]));
  }

  return newArray;
}

const myReduce = function(collection, callback, acc) {
  let newCollection = myInput(collection);

  if (!acc) {
    acc = newCollection[0];
    newCollection = newCollection.slice(1);
  }

  const len = newCollection.length;

  for (let i = 0; i < len; i++) {
    acc = callback(acc, newCollection[i], newCollection);
  }
  return acc;
}

const myFind = function(collection, predicate) {
  const newCollection = myInput(collection);

  for (let i = 0; i < newCollection.length; i++) {
    if (predicate(newCollection[i])) return newCollection[i];
  }

  return undefined;
}

const myFilter = function(collection, predicate) {
  const newCollection = myInput(collection);

  const newArray = [];

  for (let i = 0; i < newCollection.length; i++) {
    if (predicate(newCollection[i])) newArray.push(newCollection[i]);
  }

  return newArray;
}

const mySize = function(collection) {
  const newCollection = myInput(collection);
  return newCollection.length;
}

const myFirst = function(array, stop=false) {
  return (stop) ? array.slice(0, stop) : array[0];
}

const myLast = function(array, start=false) {
  return (start) ? array.slice(array.length-start, array.length) : array[array.length-1];
}

const mySortBy = function(array, callback) {
  const newArray = [...array];
  return newArray.sort(function(a, b) {
    if (callback(a) > callback(b)) {
      return 1;
    } else if (callback(b) > callback(a)) {
      return -1;
    } else {
      return 0;
    }
  });
}
const unpack = function(receiver, array) {
  for (let val of array) {
    receiver.push(val);
  }
}
const myFlatten = function(collection, shallow, newArray=[]) {
  if (shallow) {
    for (let val of collection) {
      Array.isArray(val) ? unpack(newArray, val) : newArray.push(val);
    }
  } else {
    for (let val of collection) {
      if (Array.isArray(val)) {
        
        myFlatten(val, false, newArray);
      } else {
        newArray.push(val);
      }
    }
  }
  return newArray;
}
const myKeys = function(obj) {
  const keys = [];
  for (let key in obj){
    keys.push(key);
  }
  return keys;
}
const myValues = function(obj) {
  const values = [];
  for (let key in obj){
    values.push(obj[key]);
  }
  return values;
}
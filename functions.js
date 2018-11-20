//@format

const axios = require('axios');

const crazyFunctions = {
  //Using add as the example, below, if you have the curly braces
  //after the arrow, you need to add the 'return' keyword, and you
  //will need to do this if there are more than one expression, or
  //you can have the whole thing on one line without curlies and no return word
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  createUser: () => {
    const user = {firstName: 'Brad'};
    user['lastName'] = 'Traversy';
    return user;
  },
  fetchUser: () => {
    return axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.data)
      .catch(err => 'error');
  },
  //Your promise (like fetch) can be a function or variable. Here it
  //is a function so I can pass in an argument to it - which you might use
  //to determine whether the promise resolves or rejects. If it resolves successfully,
  //'resolve' then calls the '.then(function...)' in the calling method, passing it
  //an argument back potentially.
  orderTotal: function(order) {
    return new Promise((resolve, reject) => {
      if (order < 3) {
        return resolve(order * 2);
      } else {
        return reject(new Error('error bro'));
      }
    });
  },
  //Here I use a resolved Promise object, simply, not as the return of a function
  resolvedPromise: Promise.resolve(6),
  aNumber: 6,
};

module.exports = crazyFunctions;

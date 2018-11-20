//@format

//Note that NodeJS doesn't natively work with ES6 import/export
//statements yet (I think there's a way of doing it using Babel?)
//- so you must continue to use the module.exports and requires without this
const crazyFunctions = require('./functions.js');

test('Adds 2 + 2 to equal 4', () => {
  expect(crazyFunctions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to not equal 5', () => {
  expect(crazyFunctions.add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
  expect(crazyFunctions.isNull()).toBeNull;
});

test('User should be Brad Traversy object', () => {
  expect(crazyFunctions.createUser()).toEqual({
    firstName: 'Brad',
    lastName: 'Traversy',
  });
});

// Test axios.get but actually making the API hit
// Note that you should ideally have both the assertion expectation
// and the return before the crazyFunctions - if both are missing, the
// test will pass even if the name is wrong
test('User fetched name should be Leanne Graham', () => {
  expect.assertions(1);
  return crazyFunctions.fetchUser().then(data => {
    expect(data.name).toEqual('Leanne Graham');
  });
});

// Async-await:
test('User fetched name should be Leanne Graham - using async', async () => {
  expect.assertions(1);
  const data = await crazyFunctions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});

it('Order total', () => {
  return crazyFunctions.orderTotal(2).then(result => {
    expect(result).toBe(4);
  });
});

it('Order total - wrong', () => {
  return crazyFunctions.orderTotal(2).then(result => {
    expect(result).not.toBe(5);
  });
});

it('resolved promise', () => {
  expect.assertions(1);
  return crazyFunctions.resolvedPromise.then(result => {
    expect(result).toBe(6);
  });
});

it('is a number', () => {
  expect(crazyFunctions.aNumber).toBe(6);
});

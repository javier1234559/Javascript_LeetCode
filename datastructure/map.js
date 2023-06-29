// Create a new Map
const map = new Map();

// Add key-value pairs to the Map
map.set('key1', 'value1'); // string key and string value
map.set(2, 'value2'); // number key and string value
map.set(true, 'value3'); // boolean key and string value
map.set({ key: 'objKey' }, 'value4'); // object key and string value
map.set(5, () => console.log('This is a function value')); // number key and function value

// Access the value by key
const value1 = map.get('key1'); // 'value1'

// Check if a key exists in the Map
const hasKey = map.has(2); // true

// Delete a key-value pair from the Map
map.delete(true);

// Clear all key-value pairs from the Map
map.clear();

// Check the number of key-value pairs in the Map
const size = map.size;

// Get an array containing all keys in the Map
const keysArray = Array.from(map.keys());

// Get an array containing all values in the Map
const valuesArray = Array.from(map.values());

// Get an array containing all key-value pairs in the Map
const entriesArray = Array.from(map.entries());

// Iterate over all key-value pairs in the Map using the forEach loop
map.forEach((value, key) => {
  console.log(`Key: ${key}, Value: ${value}`);
});

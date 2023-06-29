const set = new Set([1,2,3]);

// Add an element to the Set
set.add(4);
set.add(5);

// Check the size of the Set
const setSize = set.size; // 5

// Check if an element exists in the Set
const hasElement = set.has(3); // true

// Delete an element from the Set
const isDeleted = set.delete(4); // true

// Clear all elements from the Set
set.clear();

// Convert Set to an Array
const setToArray = Array.from(set);

// Iterate over the Set using forEach
set.forEach((element) => {
  console.log(element);
});

// Retrieve an iterator for the Set keys
const keysIterator = set.keys();

// Retrieve an iterator for the Set values
const valuesIterator = set.values();

// Retrieve an iterator for the Set entries (key-value pairs)
const entriesIterator = set.entries();
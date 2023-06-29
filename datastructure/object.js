const object = {
    name: 'object',
    type: 'data structure',
}

// Retrieve an array containing all keys of the object
const keysArray = Object.keys(object); // ['name', 'type']

// Retrieve an array containing all values of the object
const valuesArray = Object.values(object); // ['object', 'data structure']

// Retrieve an array containing arrays of key-value pairs of the object
const entriesArray = Object.entries(object); // [['name', 'object'], ['type', 'data structure']]

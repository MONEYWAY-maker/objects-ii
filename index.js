// This file has no tests. We'll be using it to learn about a new data structure: objects!

// Like arrays, objects they can store multiple values at once. However,
// instead of simply storing a list of items they store mappings
// from properties (also known as keys) --> values. In some situations, 
// storing data as mappings makes much more sense. Each property/key is
// a unique string, and a value can be any type

// There are two main use cases for objects:
// 1. To group pieces of data that describes a single entity.
// 2. As a way to store key-value pairs, like a dictionary.

// We'll start with 1.

// ----- Example -----

// Let's say Spotify wants to keep track of each user's email, number of
// hours spent listening to music, and their favorite genre.
// 
// That data might look like:
//     * User Taylor has email taylor@gmail.com, spent 105 hours listening
//       to music last year, and his favorite genre is EDM
//     * User Ryan has email ryan@gmail.com, spent 73 hours listening to
//       to music last year, and his favorite genre is R&B
//     * User Alice has email alice@gmail.com, spent 27 hours listening to
//       to music last year, and her favorite genre is Indie Rock

// Using arrays we could represent this data like so:
let emails = ["taylor@gmail.com", "ryan@gmail.com", "alice@gmail.com"];
let timeSpentListening = [105, 73, 27];
let favoriteGenre = ["EDM", "R&B", "Indie Rock"];

// But representing the data like this is less than ideal.
// If I want to access all information about a specific user, I have to figure out their index, then access the data in each array at that index. There's no easy way to 'bundle' information about a users.

// We can bundle pieces of data that describe a single thing (like a user) with objects!

let taylorData = {
  name: "Taylor",
  email: "taylor@gmail.com",
  timeSpentListening: 105,
  favoriteGenre: "EDM",
};

taylorData.email;
taylorData['email'];

let ryanData = {
  "name": "Ryan",
  "email": "ryan@gmail.com",
  "timeSpentListening": 73,
  "favoriteGenre": "R&B",
};

let aliceData = {
  "name": "Alice",
  "email": "alice@gmail.com",
  "timeSpentListening": 27,
  "favoriteGenre": "Indie Rock",
};

// Now all the data about each user is logically grouped together in
// a single variable!

let testUsers = [taylorData, ryanData, aliceData];



// let's log out the emails of our top users. A top user is someone who has listened to more than 50 minutes of music on spotify.

// function logTopUsers(users) {
//   for (let user of users) {
//     if (user.timeSpentListening > 50) {
//       console.log(user.email);  
//     }
//   }
// }


// function logTopUser(users) {
//   let topUserSoFar;

//   for (let user of users) {
//      if (topUserSoFar == null) {
//        topUserSoFar = user;

//      } else if (user.timeSpentListening > topUserSoFar.timeSpentListening) {
//        topUserSoFar = user;
//      }
//   }

//   console.log(topUserSoFar.email);
// }


// logTopUser([ryanData, taylorData]);

// Now we'll go through syntax + some more advanced uses of objects


// ----- Creating an Object -----

// Creating an empty object
let newObj = {};

// Creating an object with a single property
let person = {
  name: "steve",
};

let person2 = {
  "first name": "gwen",
}

// Creating an object with multiple properties
let dinosaur = {
  breed: "T-Rex",
  definition: "a fossil reptile of the Mesozoic era",
  "periods": ["Triassic", "Jurassic", "Cretaceous"],
  isExtinct: true,
  children: [{ name: 'Timmy' }]
};

// ----- Accessing an Object -----

// We can access a property of an object using bracket notation
person["name"]  // outputs "steve"

// Or using dot notation
person.name     // outputs "steve"

let key = "name";
// console.log(person[key]); 
// Dot notation is easier to read and is generally preferred, but only
// bracket notation will work if:
//    * The property is not alpha-numeric (_ and $ are also allowed)
//    * The property is being _derived_ (e.g. from a variable or expression)
//
// Example:

let objAccess = {
  "My Fish": "Jerry",
}

// TODO: Try accessing the property "My Fish" using dot notation


// ----- Modifying an Object -----

// Properties can be added in a similar manner to accessing them.
// The same rules about using dot notation vs. bracket notation
// apply.
//
// Example:
let objModify = {};
objModify["newProperty"] = "wow!!"; // via bracket notation
objModify.secondNewProperty = 17; // via dot notation

// Updating an existing property is done using the same syntax as adding
// one
objModify["newProperty"] = "changed wow!!"; // via bracket notation
objModify.secondNewProperty = 18; // via dot notation

console.log('before delete', objModify);

// Deleting a property can be done using the `delete` keyword
delete objModify["newProperty"]; // via bracket notation
delete objModify.secondNewProperty; // via dot notation
console.log('after delete', objModify);
// TODO: Try printing out `objModify` and see what changes when you remove
//       various lines from above

const empty = {};
console.log('empty foo', empty.foo);
// ------ Dictionaries ------

// Another powerful data type in programming is the *dictionary*. A dictionary is a collection of keys and values; think of it like an array, but instead of indexing into it with a number, you can index into it with a key (e.g. a string, like a name). 

// In JS, you can use objects as dictionaries. Here's an example: suppose you're managing students' grades in a class, and the following students have the following grades: 
// John - 85 
// Anne - 95 
// Sammy - 77

// As we discussed above, one way to represent them is with two arrays: 

let gradeArray = [85, 95, 77];
let nameArray = ["John", "Anne", "Sammy"]

// Another way is to have each student as an object, as we also discussed. For example

let john = {
  name: "John",
  grade: 85
};

// and so on... 

// However -- what if we just want to have the grades, accessible by using the name as an index? Here's a way: 

let grades = {
  "John": 85,
  "Anne": 95,
  "Sammy": 77
};

// This way, if we want Sammy's grade, we can just say 

console.log(grades["Sammy"]);

// The difference between objects and dictionaries in JS can seem a bit subtle; objects are meant to have a fixed set of attributes (like, say, the name and age of a person), while dictionaries are meant to have a changing set of keys (like the students in a class). 


// Now let's make a dictionary, "user_info", that takes in names (Taylor, Alice, Ryan) as keys and has the user info objects (from above) as values:

let userInfo = {
  // TODO: Fill this in!
};

// Now -- suppose we have a dictionary (say, grades) and we want to get just the keys. How can we do this? 

// JS provides us some neat functions, Object.keys and Object.values. Object.keys gives you an array of the keys of an object/dictionary (so in the case of grades, ["John", "Anne", "Sammy"]), while Object.values gives you the values ([85, 95, 77])

console.log("These are the keys:", Object.keys(grades));
console.log("These are the values:", Object.values(grades));

// If we want to loop through an object, though, there are even easier ways to do so!

// ----- Iterating through an Object -----

// We can iterate over the properties of an object using the syntax:
//   for (let property in object) {
//     ...
//   }
// 
// Example:

let objIterate = {
  "property1": 1,
  "property2": 2,
  "property3": 3,
  "x": ["3", "2"],
}



// TODO: Try iterating over the users object we defined earlier
//       and printing out each user's favorite genre



for (let property in objIterate) {
  let value = objIterate[property];
  // TODO: Try printing out `value`!
}
// let taylorData = {
//   name: "Taylor",
//   email: "taylor@gmail.com",
//   timeSpentListening: 105,
//   favoriteGenre: "EDM"

// Taylor: EDM
// Alice: [genre]
// Ryan: [genre]


let testUsersDict = {
  "Taylor": taylorData,
  "Alice": aliceData,
  "Ryan": ryanData
};

for (let x in testUsersDict) {
  // x = Taylor
  console.log(testUsersDict[x].favoriteGenre);
}

let carDict = {
  "Honda": "Japanese",
  "Ford": "American",
  "BMW": "German"
}



// Honda 
// Ford
// BMW 


// Taylor 
// Alice 
// Ryan 

// Challenge problem (if time): 
// Here's a dictionary of students and grades: 

let nameToGrades = {
  "Anna": 100,
  "Simon": 85,
  "Dan": 88,
  "Carl": 92,
  "Sara": 92,
  "Sarah": 88,
  "Harmony": 99,
  "George": 100,
  "Joel": 100
}

// Make a dictionary called "gradeToNames" that has grades as keys and arrays as values, where the array has the names of every student who has that grade. For example, gradeToNames[92] = ["Carl", "Sara"]. Hint: Use loops!


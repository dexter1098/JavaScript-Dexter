// STRINGS- characters are inside a quotation marks ""  ''
const firstName = "John";
const lastName = "Doe";
const myPassword = "password";

// STRINGS PROPERTIES - length
// STRING CONCATINATION (JOINING OF STRING +)
console.log(firstName.length);
console.log(lastName.length);
console.log(myPassword);
console.log(myPassword.length);

const fullName = firstName + " " + lastName;
console.log(fullName);
// log the length of the full name to the console
console.log(fullName.length);

//string methods - built in functions that can be don on string

const email = "jjdoe@google.co.uk";
console.log(email);

// toUpperCase toLowerCase
console.log(email.toUpperCase());
console.log(email.toLowerCase());

// indexOf, lastIndexOf, cherAt

console.log(email.charAt(1));
console.log(email.indexOf("o"));
console.log(email.lastIndexOf("o"));

//startsWith true or false , endsWith, includes

console.log(email.startsWith("jj"));
console.log(email.endsWith(".uk"));
console.log(email.includes("Doe".toLowerCase()));
console.log(email.toUpperCase().includes(".CO"));

// trim , trimStart and  trimEnd

const username = "   ade001   ";
console.log(username.trim());
console.log(username.trimEnd());
console.log(username.trimStart());

// replace replaceAll

// 01********98

const myName = "Jane doe";
console.log(myName.replace("e", "*"));
console.log(myName.replaceAll("e", "*"));

// extract portions of a string--  slice, substring, substr
console.log(myName.slice(5, 7));
console.log(myName.substring(0, 3));

// substr (start, num of characters)
console.log(myName.substr(0, 2));

const accountNumber = "1234567890";
console.log(accountNumber.replace(accountNumber.substr(2, 6), "******"));

// refactot the algorithm to use slice instead of sub str

console.log(accountNumber.replace(accountNumber.slice(2, 8), "******"));

const userName = "Johnpaul";

console.log("welcome" + " " + userName.toUpperCase());
console.log(`welcome ${userName.toUpperCase} `);

// concatenation

const author = "Jax Draxx";
const book = "The Ghost";
// template literals use dto formart variables inside a stringd
const sentence = author + " wrote the book " + book;

console.log(sentence);

// /````

const sentence2 = `${author} wrote the book ${book}`;
console.log(sentence2);

const person = "Adam Sandler";
const movie = "Romance Scam";

//ADAM SANDLER  featured in the mobie Romance scam

const sentence3 = `${person.toUpperCase()} featured in the movie ${movie}`;
console.log(sentence3);

// declare a country var set it to any

const country = "Nigeria";
console.log(country.length);
console.log(country.toUpperCase());
console.log(country.slice(0, 5));
console.log(country.substring(0, 5));
console.log(country.startsWith("e"));
console.log(country.includes("h"));



const lagos= `i live in ${country.toUpperCase()}`
console.log(lagos);








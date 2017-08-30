const weekdays: ReadonlyArray<string> = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

// [ts] Index signature in type 'ReadonlyArray<string>'
// only permits reading.
weekdays[0] = "Fancyday"


// NOTE: This is only compile time protection. 
// TypeScript does not force immutability
console.log(weekdays);
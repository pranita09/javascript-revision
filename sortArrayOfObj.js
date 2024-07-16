// Sort an array of objects with DOB

const users = [
  {
    name: "John",
    city: "London",
    dob: "12-04-2001",
  },
  {
    name: "Jane",
    city: "NYC",
    dob: "02-06-2005",
  },
];

const descSort = users.sort((a, b) => new Date(b.dob) - new Date(a.dob));
console.log("Descending Sort: ", descSort);

const ascSort = users.sort((a, b) => new Date(a.dob) - new Date(b.dob));
console.log("Ascending Sort: ", ascSort);

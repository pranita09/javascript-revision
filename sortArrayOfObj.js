// Sort an array of objects with DOB

// Example 1
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

// Example 2
const people = [
  {
    name: "Alice",
    info: {
      DOB: "1990-01-05",
      address: "123 Main St",
      phone: "9876543210",
    },
  },
  {
    name: "Bob",
    info: {
      DOB: "1985-07-20",
      address: "456 Elm St",
      phone: "6789054321",
    },
  },
  {
    name: "Charlie",
    info: {
      DOB: "1992-12-15",
      address: "789 Oak St",
      phone: "2134567234",
    },
  },
];

const descPeopleSort = people.sort(
  (a, b) => new Date(b.info.DOB) - new Date(a.info.DOB)
);
console.log(descPeopleSort);

const ascPeopleSort = people.sort(
  (a, b) => new Date(a.info.DOB) - new Date(b.info.DOB)
);
console.log(ascPeopleSort);

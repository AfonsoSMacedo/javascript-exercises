const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
  },
];

let oldestAge = 0;
let oldestName = "";

for (let i = 0; i < people.length; i++) {
  if (people.at(i).yearOfDeath === undefined) {
    yearOfDeath = 2026;
  } else {
    yearOfDeath = people.at(i).yearOfDeath;
  }

  let age = yearOfDeath - people.at(i).yearOfBirth;
  if (age > oldestAge) {
    oldestAge = age;
    oldestName = people.at(i).name;
  }
}

console.log("The oldest is " + oldestName);

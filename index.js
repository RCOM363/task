const people = [
  { age: 25, name: "John", id: 1 },
  { age: 30, name: "Alice", id: 2 },
  { age: 22, name: "Bob", id: 3 },
  { age: 35, name: "Emily", id: 4 },
];

const lastnames = [
  { id: 1, lastname: "Patel" },
  { id: 2, lastname: "Sinha" },
  { id: 3, lastname: "Paul" },
  { id: 4, lastname: "Bachan" },
];

const users = people.map((user) => {
  const lname = lastnames.filter((ln) => ln.id === user.id);
  const { lastname } = lname[0];
  return {
    ...user,
    lastname,
  };
});

console.log(users);

// const sortedUsers = users

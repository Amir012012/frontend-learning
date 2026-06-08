const users = [
  { name: "amir", age: 18, active: true },
  { name: "sara", age: 15, active: false },
  { name: "mina", age: 22, active: true },
  { name: "ali", age: 13, active: true },
  { name: "mobina", age: 25, active: false },
  { name: "mohammad", age: 30, active: true },
];

(function () {
  const resutl = users
    .filter(function (user) {
      return user.age >= 18;
    })
    .filter(function (user) {
      return user.active === true;
    })
    .map((user) => {
      return {
        username: "USER_" + user.name.toUpperCase(),
        age: user.age,
      };
    });

  console.log("====ACTIVE ADULT USERS====");

  resutl.forEach(function (user) {
    console.log(`Name:${user.username} Age:${user.age}`);
  });
})();

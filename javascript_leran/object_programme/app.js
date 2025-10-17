// OBJECT LITERAL
const brud = {
  name: "Brad",
  age: 30,
};

console.log(brud);
console.log(brud.name, brud.age);

// CREATING MULTIPLE INSTANCES
// CONSTRUCTOR FOR OBJECT/ PROTOTYPE (must start with a capital letter)

function People(name, age, dob) {
  this.name = name;
  this.age = age;
  this.birthday = new Date(dob);
  /*  THIS GIVES ALL THE INSTANCES  (note: this ON A GLOBAL SCOPE PERTAINS TO THE WINDOW OBJECT)*/

  //   console.log(this);
}

// INSTANTIATING AN OBJECT
const brad = new People("brad", 9);
// console.log(brad);
const job = new People("job", 20);
// console.log(job);
// console.log(job.age);

const luke = new People("john", 20, "9-10-2002");
console.log(luke);

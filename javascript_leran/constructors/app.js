// USING CONSTRUCTORS

// CREATING A SIMPLE OBKJECT
const info = {
  name: "mattheew",
  age: 16,
  town: "Makurdi",
};

console.log("\n This is a simple object \n ");

console.log(info);
console.log(info.age);

// CREATING A CONSTRUCTOR

function PersonsInfo() {
  this.name = "Ayo";
  this.age = 10;
}

// INSTANTIATING THE CONSTRUCTOR

const Ayomide = new PersonsInfo();

console.log("\n This is a simple constructor for single instances \n ");

console.log(Ayomide);

// MAKING THE CONSTRUCTOR BE USED FOR MULTIPLE INSTANCES

function PersonalInfo(name, age) {
  this.name = name;
  this.age = age;
}

// INSTANTIATING

const tolu = new PersonalInfo("Tolu", 10);

console.log(`\n This is a constructor for multiple instances \n `);

console.log(tolu);

const Karim = new PersonalInfo("Karim", 20);
console.log(Karim);
console.log(Karim.age);

// USING A METHOD IN A CONSTUCTOR

// Calculating the age using the Date method

function Biodata(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
  this.calAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const newAge = new Date(diff);
    return Math.abs(newAge.getUTCFullYear() - 1970);
  };
}

// INSTANTIATING

const josh = new Biodata("joshua", "10-12-2010");

console.log("\n This is adding the DATE METHOD the constructor \n ");

console.log(josh.birthday);
console.log(josh.calAge());

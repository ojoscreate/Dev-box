// var generateName = require("sillyname");
import generateName from "sillyname";
import { randomSuperhero } from "superheroes";

var randomName = generateName();
console.log(`My name is ${randomName}`);

var mySuperHero = randomSuperhero();
console.log(`I am ${mySuperHero}!!!, a super hero!!!`);

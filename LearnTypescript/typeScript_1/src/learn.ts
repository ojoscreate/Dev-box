console.log("Hello, TypeScript!");
let unKnown: string = "iamme";
unKnown = "nothing";
unKnown = unKnown.toUpperCase();
console.log(unKnown);
let known = "20";
// known = 20;
known = unKnown + known;
console.log(known);

// Union type uses the OR (|) to get diffent types or use any
let tax : number | string = 10;

tax = "$20";
console.log(tax);


let Status: "Pending"| "Success" | "Error";
Status = "Error";
Status = "Success";
// Status = "random"
console.log(Status);


let notSure : any = 23;
notSure = "strong";
console.log(notSure);


// ARRAY/OBJECT DEPLOKRATDION AND CHECKING

const books = ["beverly Hills","Brave World", "Water World", "2029"];

let foundBook: string | undefined;

for (let book of books) {
    if (book === "2029") {
        foundBook = book;

        break;
    }
    
}
console.log(foundBook?.length, foundBook)

let age: number[] = [20,10,23,23,23,43];
// age.push("www");
console.log(age);


let food: string[] = ["Apu", "egusi", "ofada-rice"];
console.log(food[1]);


// CONSTANT EMPTY ARRAY
let random:[] = [];
console.log(random);


// ANY IN ARRAY
let empty = [];
empty.push("yah", 10);
console.log(empty);

// SETTING TO TWO TYPES IN AN ARRAY
// PREDETERMINED BY TYPESCRIPT
let names = ["peter", 10, true]; // CAREFULL CAUSE IT CAN TURN IT TO ANY
console.log(names);

// SETTING YOURSELF
let arr: (String | boolean)[] = ["hdhkdj", false];
arr.push("10")
console.log(arr);

// OBJECT IN TYPESCRIPT

let car: {brand: String; year: number} = {brand: "Toyota",year: 2050,};
console.log(car);
//  you can reassign contents of an object
car.brand = "Nissan";
console.log(car);


// WITHOUT EXPLICIT TYPE (this make typescript useless)
let car1 = {brand:"Audi",color: "red", year: 2019};
console.log(car1);

// USING THE OPTIONAL PROPERTISES

let items = {title: "items",cost: 50};
let story = {title: "story",cost: 53};
let chair = {title: "chair"};

// use the option(?) pearameter to join objects of different values together
// The readonly mean u can't reassign the objects again

let inventory:{readonly title: String; cost?: number}[] = [items,story,chair]
console.log(inventory);

// FUNCTION IN TYPESCRIPT
/* types are compulsory which can be set by using:
 -any (which makes it normal javascript)
 -config (navigate to the tsconfig ans change strict to false)
 -type (declare the exact type the function accepts) */

function sayHello(name:string) {
    console.log(`Hello ${name.toLocaleUpperCase()} Nice to meet you`);
    
}
sayHello("job");
// sayHello(10)

// while using return add a return type so it doesn't chnage regerdless
function CalPrice(price: number) : number {

    const hasDiscount:boolean = true;
    if(hasDiscount){
        // return (` 25% discount is applied to ${price}`)
        return price* 0.75;
    }
    return price ;
}

const finalPrice = CalPrice(200);
console.log(finalPrice);



let register: string[] = ["joe","facquard", "favour"];
function checker(check:string) : boolean {
    // includes checks an array for content
    
    return register.includes(check)
}
let nameToCheck: string = "facquard"
if (checker(nameToCheck)){
    console.log(`True ${nameToCheck} is present`);
    
}else{
    console.log(`False ${nameToCheck} is Not present`);
    
}

// OPTIONAL AND DEFAULT PERAMETERS IN FUNCTION
// optional prameters
// optional parameters is done by adding __?__ to the end of ur params
function calcu(price:number, discount?: number): number {
    return price - (discount || 0);
}
let ans = calcu(20,2);
console.log(ans);

// default parameters
// default parameters is done by adding __= (value)__ to the end of ur params

function calScore(initialScore:number, penaltyScore: number = 0) : number {
    return initialScore -penaltyScore;
}
let scoreAns = calScore(30,3);
console.log(scoreAns);
scoreAns = calScore(20);
console.log(scoreAns);

function namr(message:string, ...numbers:number[]) {
    const double = numbers.map((num) => num *2);
    console.log(double);
    
    let total = numbers.reduce((previous, current) =>{
        return previous + current
    },0);
    return `This is the doubled value ${double}, and  ${message} ${total}`
}
let sol = namr("This is the total", 1,2,3,4,5,6);
console.log(sol);

// TO CREATE AN EMPTY FUNCTION/ A FUNCTION THAT RETURNS NOTHING
// can't return in type void
function name(params:string):void {
    console.log(params);
    // return "params";
}
name("This this it")   

// FUNCTIONS - USING UNION TYPES AS FUNCTION PARAMETER (TYPEGUARD)

function processInput(inp:number | string):number|string {
    if (typeof inp === "number") {
        return inp * 2
    }
    return inp.toUpperCase()
}
let resProcessInput = processInput("eds");
console.log(resProcessInput);
resProcessInput = processInput(10);
console.log(resProcessInput);

// FUNCTIONS - OBJRCT

function createEmployee({id}:{id: number} ):{id: number, activenw: boolean} {
    return {id, activenw: id % 2 === 0}
}
let first = createEmployee({id: 1})
console.log(first);
let second = createEmployee({id: 2})
console.log(second);

// alternative method

function createStudentProfile(student:{id:number; name: string}):void{
    
    console.log(`welcome ${student.name.toUpperCase()}\nMatric Number: ${student.id}`);
     
}
const newStudent:{id:number, name:string, email: string} = {
    id: 500,
    name: "Immaculate",
    email: "ojore@gmail.com",
}
createStudentProfile(newStudent);
// createStudentProfile({id: 2, name: "smith", email: "ojore@gmail.com"})
// UNCOMMENT TO SEE HOW THIS WORKS

/*
// function studentProfile(student:{id:number; name: string}):{id: number, name: string, activeNw: boolean | null}{
    
//     return {student, activeNw: student.id % 2 === 0}
// }
// let profile = studentProfile({id:1, name: "John"});
// console.log(profile); */

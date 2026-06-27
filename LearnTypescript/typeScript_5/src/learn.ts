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

let Status: "Pending"| "Success" | "Error";
Status = "Error";
Status = "Success";
// Status = "random"

let notSure : any = 23;
notSure = "strong";

// ARRAY/OBJECT DEPLOKRATDION AND CHECKING

const books = ["beverly Hills","Brave World", "Water World", "2029"];

let foundBook: string | undefined;

for (let book of books) {
    if (book === "2029") {
        foundBook = book;

        break;
    }
    
}
console.log(foundBook?.length)

let age: number[] = [20,10,23,23,23,43];
// age.push("www");

let food: string[] = ["Apu", "egusi", "ofada-rice"];

// CONSTANT EMPTY ARRAY 
let random:[] = [];

// ANY IN ARRAY
let empty = [];



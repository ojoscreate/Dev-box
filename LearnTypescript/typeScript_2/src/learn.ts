console.log("WECOME TO TYPESCRIPT 2");
function processData(input:string|number, config:{reverse:boolean} = {reverse: false}):number|string {
    if (typeof input == "number"){
        return input**2;
    }else{ 
        if(typeof input == "string"&& config.reverse){
        return input.toUpperCase().split('').reverse().join('');
        } else {
            return input.toUpperCase();
        }
        // TERNARY OPERATOR (optional (uncomment))
        // return typeof input == "string"&&config.reverse? input.toUpperCase().split('').reverse().join(''):input.toUpperCase();
    }
}

const showData1 = processData(6);
console.log(showData1);

const showData2 = processData("jeff");
console.log(showData2);


const showData3 = processData("jeff", {reverse: true});
console.log(showData3);


// CREATING PROFILES 

// to avoid retyping reusability of a type byt using the key word -- type --
// you can also -- export -- by adding export to the beginninng of the -- type --
// export type User = {id: number; name: string; isActive: boolean} // ----uncomment--

type User = {id: number; name: string; isActive: boolean}
const job: User = {
    id: 1,
    name: "job",
    isActive: true
}

const lydia: User = {
    id: 1,
    name: "lydia",
    isActive: true
}
console.log(`This is ${job.name.toUpperCase()} and  ${lydia.name.toUpperCase()}`);


function createProfile(user: User): User  {
        console.log(`Hello there ${user.name.toUpperCase()}!!!!`)
        return user
}

console.log(createProfile({id:1,name:"jonah",isActive:false}));


type StringOrNumber = string | number;

let value: StringOrNumber = "Ohhanah";
console.log(value);

value = 1233;
console.log(value);

type Theme = "dark" | "light";

let theme:Theme;
theme = "dark";
theme ="light";

function changeTheme(t:Theme) {
    theme = t;
    return t
}
console.log(changeTheme("dark"))

// EMPLOYEE AND MANAGER

type Employee = {id:number, name:string, department: string};
type Manager = {id:number, name:string, employees: string[]};
type Staff = Employee|Manager;

const john:Employee = {id: 1, name: "john", department: "sales"};
const alice:Employee = {id: 1, name: "alice", department: "sales"};
const daina:Employee = {id: 1, name: "daina", department: "sales"};
const andrew:Manager = {id: 1, name: "andrew", employees: ["John", "Alice", "Daine","Mark"]}
const gift:Manager = {id: 1, name: "gift", employees: ["John", "Alice", "Daine",]}


function printStaffDetails(info:Staff) {
    
    if ("employees" in info) {
        console.log(`${info.name} is a manager, and manages ${info.employees.length} employees `);
        
    } else { 
        console.log(`${info.name} is an employee,works at ${info.department} Department`);
    }
}

printStaffDetails(andrew)

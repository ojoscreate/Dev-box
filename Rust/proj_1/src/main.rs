//  STRUCTS

struct User {
    // THERE ARE truple struct , unit struct
    name: String,
    age: u32,
    active: bool,
}

// ENUM
enum Shape {
    Circle(f64),
    Square(f64),
    Rectangle(f64, f64),
}

fn calculate_area(shape: Shape) -> f64 {
    // instead of if else use pattern matching
    let ans = match shape {
        Shape::Circle(radius) => 3.14 * radius * radius,
        Shape::Rectangle(width, height) => width * height,
        Shape::Square(side) => side * side,
    };
    return ans;
}
fn main() {
    //VARIABLES IN RUST

    //println in rust

    println!("Hello, bitch!");

    //number / intergers i = signed numbers, u = unsigned nymbers
    let num: i8 = -127;
    println!("{}", num);
    let num1: i64 = 012345678901;
    println!("{}", num1);

    let num2: u32 = 233;
    println!("{}", num2);

    // Strings in rust

    let name = "dhhdfhhdh"; // can  change spav=ce at run time
    println!("{}", name);

    let greeting: String = String::from("Hi Rust");
    println!("{}", greeting);

    // for checking character

    let charc = greeting.chars().nth(0);

    match charc {
        Some(charc) => println!("{}", charc),
        None => println!("There is none Here"),
    }

    // Uncomment for almternative method
    // println!("{}", charc.unwrap());

    // Using / Declaring boolean in rust

    let is_male: bool = false;
    let is_above_18: bool = false;

    // using if conditions

    if is_male && is_above_18 {
        println!("You are a male and you above 18/n welcome");
    } else if is_male || is_above_18 {
        println!("You are a male  but bye this is not for you");
    } else {
        println!("Get out Liar");
    }

    // Using loops in Rust (note for iteration u have to add 1 to the number u want to iterate)

    // for numbers
    for i in 0..11 {
        println!("hi {}", i)
    }

    let any_name: String = String::from("My name is Job");
    // using with enumerate() ==== gives you in ja truple
    for checker in any_name.chars().enumerate() {
        // println!("seen {:?}", checker);
        if checker == (3, 'n') {
            println!("Found {:?}", checker);
        }
    }

    // it is case sensitive use to_lowercase() to covert to one case
    // using .chars() shows it in characters i.e  chars
    for looker in any_name.to_lowercase().chars() {
        // println!("seen it {:?}", looker);
        if looker == 'j' {
            println!("Got it {:?}", looker.to_string());
            println!("Got it {:?}", looker);
        }
    }

    // BY DEFAULT EVERY VARIABLE IS IMMUTABLE i.e cannot change UNLESS SAID TO MULTABLE (mut)

    let mut j: String = String::from("joe");
    println!("{}", j);
    j = j + " job";
    println!("{}", j);

    // VARIABLES FOR FUNCTION

    let a: i32 = 10;
    let b: i32 = 12;
    println!("{}", sum(a, b));

    // MEMORY POINTER
    let s1: String = String::from("shut up");
    println!(
        "Capacity: {}, Length: {}, Pointer: {:p}",
        s1.capacity(),
        s1.len(),
        s1.as_ptr()
    );
    // OWNERSHIPIN RUST
    println!("{}", s1);
    let s2 = s1;
    // ownershio changed can't access s1 again but if clone() { expensive}is used the s1 can be assessed ***uncomment to see **
    // println!("{}", s1);
    println!("{}", s2);

    // PASSING REFERENCE/ BRROWERS

    let s5: String = String::from("shit");
    let s6 = &s5;
    println!("{} {}", s6, s5);

    // MUTABLE REFRENCES
    // can only have a single mutable refrence at once
    // can only have a single immutable refrence at once

    let mut welcome: String = String::from("Hello");
    welcome.push_str(" World");
    mut_string(&mut welcome);
    println!("{}", welcome);

    // FOR STRUCT
    user();

    // FOR ENUM
    calculater();

    // FOR ERROR HANDLINNG
    error()

    // FOR OPTION ENUM
    string_to_check()
}

// WRITNG FUNCTIONS

fn sum(a: i32, b: i32) -> i32 {
    return a + b;
}

// UPDATING MUTABLE REFERENCE FUNCTION
// can only have a single mutable refrence at once
// can only have a single immutable refrence at once

fn mut_string(s: &mut String) {
    s.push_str(" End!");
}

fn user() {
    let name: String = String::from("Job");
    let user: User = User {
        name, // or name: name
        age: 12,
        active: true,
    };
    println!("{} is {} years old", user.name, user.age);
}
fn calculater() {
    let circle: Shape = Shape::Circle(6.0);
    let square: Shape = Shape::Square(6.0);
    let rectangle: Shape = Shape::Rectangle(5.0, 3.0);

    let area = calculate_area(circle);
    println!("Area of the circle: {}\n", area)
}

// ERROR HANDLING
fn error(){
    let res: Result<String, Error> =fs::read_to_string{path:"example.txt"};
    match res{
        Ok(content: String){
            println!("File Content: {}", content);
        },
        Err(err: Error){
            println!("Error: {}", err);
        }
    }
    println!("Guess it worked")
}

// OPTION ENUM
// IF CONTENTS MAY CONTAIN NULL
fn string_to_check() {
    let my_name: String = String::from("rndoms");
    let res: Option<i32> = read_first_a(my_name);

    match res {
        Some(index) => println!("The Letter 'a' was found at index: {}", index),
        None => println!("The Letter 'a' was not found in the Name"),
    };
}
//  THE FIRST LETTER READER
fn read_first_a(s: String) -> Option<i32> {
    for (index, character) in s.chars().enumerate() {
        if character == 'a' {
            return Some(index as i32);
        }
    }
    return None;
}

use std::io;


fn main() {
    println!("Guess the number!");

    println!("Please input your guess.");

    let mut guess = String::new();
    // String::new() -- a function that returns a new instance of a String.
    // The above line, has created a mutable variable that is currently bound to a new, empty instance of a String.println!



    io::stdin()
        .read_line(&mut guess)
        .expect("Failed to read line");

    println!("You guessed: {}", guess);

}

/*
    - io library 
        To obtain user input an then print the result
        as output, we need to bring the io (input/output) library into scope.

    - The io library comes from the standard library STD

    use std::io;

    By default, Rust brings only a few types into the scope
    of every program in the prelude.

    - PRELUDE -- Rust comes with a variety of things in its standard library.println!
        The prelude is the list of things that Rust automatically imports into every Rust program.println!

        - The difference between "the prelude" and these other preludes is that they
        are not automatically use'd, and must be imported manually.
        This is still easier than importing all of their constituent components.

    - The main function is the entry point into the program
        fn main() {}

    - println! is a macro that prints a string to the screen

    ### Storing Values and Variables

    let mut guess = String::new();

    - let statement, used to create a new variable
    
    - In Rust, variables are immutable by default.println!

    - mut -- is used to make a variable mutable.

    let apples = 5; // immutable
    let mut bananas = 5; // mutable


    - String::new() -- a function that returns a new instance of a String.
        String - string type, provided by the standard library, that is growable, UTF-8 encoded bit of text.println!

    - The :: syntax in the ::new line indicates that new is an associated function of
      the String type. An associated function is implemented on a type, in this case String.println!

    - The new function creates a new, empty string.

    - The above line, has created a mutable variable that is currently bound to a new, empty instance of a String.println!

    - The stdin func, returns an instance of std::io::stdin, 
        which is a type that represents a handle to the standard input for your terminal.

    - read_line($mut guess), calls the read_line method of the standard input handle
        to get input from the user.println!

    - The & indicates that this argument is a reference.

    - For Result, the variants are ok or Err. The ok variant indicates
    the operation was successful, and inside ok is the successfully generated value.println!

    - The purpose of these Result types is to encode error-handling information.
        Values of the Result type, like values of any type, have methods defined on them.  


    */
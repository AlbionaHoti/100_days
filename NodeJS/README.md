# Node.js, JavaScript Portolio projects

1. Note taking app
   Using yargs, chalk and ... npm modules.

   Through out the assigment, these JavaScript functions were used:

   - JSON.stringify
     This method converts a JavaScript object or value to a JSON string.
   - JSON.parse
     This method takes in a JSON string and returns a parsed object.

## Node.js Module System

### Node

Has global and process

On process there is a property, that's where we can access all the command line arguments passed in to our app.

### The browser

Has window and document

### File System Module

This is the module that's going to allow us to access the operating systems file system.
We'll be able to read, write, and append files and figure it out if a given file exists in a directory.

### `module.exports`

Whatever you assign to module.exports, it will be available as a return value for when you require the value.

## we can define all the things we want to share from a file.

In cases when we export functions, we know that we are exporting the content of the function, in the first case the add functionality.

## loading npm packages

We can use npm modules to solve common problems.

### Initializing npm in our project

- Using `npm init`.

- When we install npm packages, it's going to go to the npm servers, will get all of the code for that package and add it into our application.

### Global NPM modules

There are two ways to load NPM modules, locally and globally.
What we did with chalk and validator npm packages, we've used them.

Using an npm module globally it's going to allow us to run the application and automatically restart the application wherever the app code changes.
-- and that is Nodemon.

## File system and command line arguments

### file systems

Will allow us to store the uers's note data, and command line args are going to allow us to get input from the user.

## Yargs

We'll use this node module to set up our command line commands.

## JavaScript METHODS

### 1. JSON.stringify

This method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.

### 2. The opposite of JSON.stringify --- JSON.parse

JSON.parse(); --> Parse takes in the JSON data or JSON variable and returns back the parser or array, it returns back the parsed object.

Parsed data is indeed a JavaScript object.

### The Buffer data, what's that?

What comes back from the JSON file that we read using the file system method which is `readFileSync` --- is not a string, it is actually a buffer, which is a way for Node.js to represent the BINARY data.

const dataBuffer = fs.readFileSync('1-json.json');
To get the real text or content from this buffer, we need to use the toString() method.

### JSON

JSON is nothing more than a string representation of it looks like an object or an array.

### Arrow functions

Within the methods, with our functions as object properties, we have access to the original object via the `this` binding.

- `This` is a reference to the object.
- Arrow functions they don't bind their own `this` value, that means if we use an arrow function, we don't have access to the `this` of the object.
- Arrow functions aren't suited for methods, properties that are functions where we want to access this.
  - In these cases, it would be best to use a standard function.

## Debugging Node.js

### Debugging strategies

There are two types of error you're going to run into with Node.js.

1. Explicit type of error, when you make types in the class
2. When things go wrong and there is no error message which is likely some logic problem in our code, which we'll figure it out where it is and second solve the error.

- The most basic debugging tool we have is the console.log.
- Debugger is another tool for debugging node.js
  The debugger like console.log needs to be added at a specific point in your application.

  debugger will pause the application at a specific time, and we'll use the developer tools to see the values we want in that specific time.

  - When we have `debugger` in our application, we're not going to pause the application by default, we have to run node with a special option which is `node inspect file...`

## Challenges

### 1. Append a message to notes.txt

1. Use appendFilesync to append to the file
2. Run the script
3. Check your work by opening the file and viewing the appended text

### 2. Define and use a function in a new file

1. Create a new file called notes.js
2. Create getNotes function that return "Your notes..."
3. Export getNotes function
4. From app.js, load in and call the function printing message to console

### 3. Use the chalk library in your project

1. Install version 2.4.1 of chalk
2. Load chalk into index.js
3. Use it to print the string "Success!" to the console in green
4. Test your work

Bonus: Use docs to mess around with other styles. Make text bold and inversed.

### 4. Add two new commands

1. Setup command to support "list" command (print placeholder message for now)
2. Setup command to support "read" command (print placeholder message for now)
3. Test your work by running both commands and ensure correct output

### 5. Add an option to yargs

1. Setup a body option for the add command
2. Configure s description, make it required, and for it to be a string
3. Log the body value in the handler function
4. Test your work

### 6. Work with JSON and the file system

1. Load and parse the JSON data
2. Change the name and age property using your info
3. Stringify the changed object and overwrite the original data
4. Test your work by viewing data in the JSON file

### 7. Setup command option and function

1. Setup the remove command to take a required "-- title" option
2. Create and export a removeNote function from notes.js
3. Call removeNote in remove command handler
4. Have removeNote log the title of the note to be removed
5. Test your work using: node app.js remove --title="some title"

### 8. Refactor all functions

1. If function is a method, use ES6 method definition syntax
2. Otherwise, use most concise arrow function possible
3. Test your work!

### 9. Wire up list command

1. Create and export listNotes from notes.js
   - "Your notes" using chalk
   - Print note title for each note
2. Call listNotes from command handler
3. Test your work!

### 10. Wire up read command

1. Setup --title option for read command
2. Create readNote in notes.js
   - Search for note by title
   - Find note and print title (styled) and body (plain)
   - No note found? Print error in red.
3. Have the command handler call the function
4. Test your work by running a couple commands

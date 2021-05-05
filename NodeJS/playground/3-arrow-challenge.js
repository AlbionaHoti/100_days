/*
    Goal: Create method to get incomplete tasks

    1. Define getTasksToDo method
    2. Use filter to return just the incompleted tasks (arrow function)
    3. Test your work by running the script
*/

const tasks = {
  tasks: [
    {
      text: 'Grocery shopping',
      completed: true,
    },
    {
      text: 'Clean yard',
      completed: false,
    },
    {
      text: 'Fil course',
      completed: false,
    },
  ],
  getTasksToDo() {
    const incompletedTasks = this.tasks.filter((task) => !task.completed);
    return incompletedTasks;
  },
};

// function getTasksToDo(tasks) {
//   const incompletedTasks = tasks.filer((task) => !task.completed);

//   return incompletedTasks;
// }

console.log(tasks.getTasksToDo());

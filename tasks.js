
// 1. Variables and Data Types
const name = "Sakkthi";
let age = 20;
const isStudent = true;
const address = null;
let phone;

console.log("1. VARIABLES & DATA TYPES");

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof address);
console.log(typeof phone);


// 2. Objects
const user = {
    name: "Sakkthi",
    email: "sakkthi@gmail.com",
    role: "Student"
};

// Object Destructuring
const { name: userName, email, role } = user;

console.log("\n2. OBJECTS");
console.log(userName, email, role);

// Spread Operator
const updatedUser = {
    ...user,
    role: "Developer"
};

console.log("Original User:", user);
console.log("Updated User:", updatedUser);


// 3. Arrays
let tasks = [
    { id: 1, title: "Learn JavaScript", done: false },
    { id: 2, title: "Practice HTML", done: true },
    { id: 3, title: "Learn CSS", done: false }
];

console.log("\n3. INITIAL TASKS");
console.log(tasks);


// 4. Functions (Arrow Functions)

// Add Task
const addTask = (title) => {
    const newTask = {
        id: tasks.length ? Math.max(...tasks.map(task => task.id)) + 1 : 1,
        title,
        done: false
    };

    tasks.push(newTask);
    return newTask;
};

// Delete Task
const deleteTask = (id) => {
    tasks = tasks.filter(task => task.id !== id);
    return tasks;
};

// Mark Task as Done
const markDone = (id) => {
    tasks = tasks.map(task =>
        task.id === id ? { ...task, done: true } : task
    );
    return tasks;
};

// Get Task By ID
const getTaskById = (id) => {
    return tasks.find(task => task.id === id);
};

// Get Pending Tasks
const getPendingTasks = () => {
    return tasks.filter(task => !task.done);
};

// Get Task Titles
const getTaskTitles = () => {
    return tasks.map(task => task.title);
};


// 5. Testing All Functions

console.log("\n4. ADD TASK");
console.log(addTask("Learn React"));

console.log("\n5. MARK DONE");
console.log(markDone(1));

console.log("\n6. GET TASK BY ID");
console.log(getTaskById(2));

console.log("\n7. PENDING TASKS");
console.log(getPendingTasks());

console.log("\n8. TASK TITLES");
console.log(getTaskTitles());

console.log("\n9. DELETE TASK");
console.log(deleteTask(2));


// Bonus: Task Summary
const getTaskSummary = () => {
    const total = tasks.length;
    const completed = tasks.filter(task => task.done).length;
    const pending = total - completed;

    return { total, completed, pending };
};

console.log("\n10. TASK SUMMARY");
console.log(getTaskSummary());

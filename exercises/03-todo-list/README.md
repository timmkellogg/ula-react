# Exercise: To Do List 

## Instructions

### Part 1: Adding and Rendering Tasks

- Create a new functional component called `ToDoList` using the `useState` hook.
    - Use `useState` to manage the following state properties:
      - `tasks`: an array to store task items.
      - `input`: a string to store the current input value.
- In the component's JSX, return the following:
    - An `<input>` element to capture user input.
    - A `<button>` element to submit the task.
    - An empty `<ul>` element to display the list of tasks.
- Bind the value of the `<input>` element to the `input` state.
- Create a function called `handleChange()` to update the `input` state when the user types into the `<input>` element.
- Create a function called `handleSubmit()` to capture the value of `input` when the user clicks the `<button>`. Add the input value to the `tasks` array and clear the input field afterward.
- Inside the `<ul>`, use the `map()` method to loop over the `tasks` array and return a `<li>` element for each task. Each `<li>` should display the task.
- Test that you are able to:
    - Type into the `<input>` element.
    - Click the `<button>` to add the task to the `tasks` state.
    - See a new `<li>` element added to the list for each task.

---

### Part 2: Toggling and Deleting Tasks

Next, you will add functionality to "cross-off" tasks and delete them from the list.

1. **Update the Task Structure:**
   - Modify `handleSubmit()` so that instead of adding just a string to the `tasks` array, you add an object representing each task. This object should have two properties:
     - `taskName`: the task string.
     - `completed`: a boolean initially set to `false`.

2. **Toggling Tasks:**
   - Inside the `map()` function, update the expression so that it renders the `taskName` property of each task object inside the `<li>` element.
   - Create a function called `handleToggle()` to toggle the `completed` property of a task when a `<li>` is clicked. Use the index of the task to identify which task to update.
   - Apply the `"text-decoration: line-through"` CSS style to `<li>` elements where the `completed` property is `true`, visually indicating completed tasks.

3. **Deleting Tasks:**
   - Create a function called `handleDelete()` that takes the index of a task and removes it from the `tasks` array.
   - Inside each `<li>`, add a `<button>` element next to the task name to trigger `handleDelete()` and remove the task from the list.

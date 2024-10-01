# Exercise: Jeopardy Lite

In this exercise, you will build a simple Jeopardy game by consuming the [jService](http://jservice.io/) API using functional components and hooks.

## Instructions

### Setting Up

- Copy the `Jeopardy.js` file into your `src` folder.
- In your `src/App.js` file, import `Jeopardy.js` and add the component to `App.js`'s return.
- Install the `axios` package by running `npm i axios` from the terminal.
- Verify that you can see the stringified JSON of a question when the browser is loaded.

### Part 1

- **Display the data:** In `Jeopardy.js`, display the question, category, and point value returned from the API.

- **User score:** Create a way to keep track of the user's score.

- **Answer submission:** Provide a way for the user to submit an answer to the question.

- **Scoring logic:** 
  - If the answer is correct, add the point value of the question to the user's score.
  - If the answer is wrong, subtract the point value from the user's score.

- **New question:** After the user answers a question, display another random question from the API.

### Part 2

- **Display component:** Create a stateless functional component that handles the display of the Jeopardy game, including the question, category, point value, and user input for the answer.

- **Pass props:** Update the `Jeopardy.js` component to render the new display component, and pass the necessary props to it so it can display the game data and handle the user's answer.

- **Prop-based rendering:** Ensure the display component shows the correct data and allows the user to submit an answer, using the props passed from the parent component.

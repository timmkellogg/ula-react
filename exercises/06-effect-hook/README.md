# Exercise: Using the `useEffect` Hook

In this exercise, you will learn how to use the `useEffect` hook to perform side effects in a React component. This could include fetching data, updating the DOM, or subscribing to external services. In this task, we will focus on fetching data from an API.

## Instructions

### Part 1: Basic Data Fetching with `useEffect`

- Create a new component called `RandomUser`.
- Use the `useState` hook to manage a piece of state called `user`, which will store the user data fetched from the [Random User API](https://randomuser.me/).
- Use the `useEffect` hook to fetch a random user from the API (`https://randomuser.me/api/`) when the component is mounted.
  - Ensure that `useEffect` only runs **once** when the component is first rendered.
  - When the data is fetched, update the `user` state with the result.
- Display the user's name, email, and picture in your component.

### Part 2: Fetching Data on Button Click

- Add a button labeled **"Get New User"**.
- When the button is clicked, fetch a new random user from the API and update the component with the new user data.

### Example Output

Your component should render something similar to:

```
Name: John Doe 
Email: john.doe@example.com 
[Profile Picture]
```

## Bonus Challenge

- Add a loading indicator while the user data is being fetched.
- Display an error message if the fetch request fails.

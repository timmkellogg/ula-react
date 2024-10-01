# Exercise: useState Enhancement

In this exercise, students will add additional state functionality to a functional counter component that already uses the `useState` hook.

## Instructions

### Setting Up

- Copy the `Counter.jsx` file into your `src` folder.

- In your `src/main.jsx` file, import `Counter.jsx` and ensure the component is rendered in `App.js`.

- Verify that the component displays the current count and includes increment and decrement buttons.

### Adding Additional State Functionality

1. **Adding Step Functionality**:
   - Introduce a new state variable to allow users to specify the increment/decrement step. 
   - Use the `useState` hook to create a new state variable called `step`, initialized to a value of `1`.
   - Add an `<input>` element that allows the user to set the step value. Bind this input to the `step` state variable.

2. **Updating Increment/Decrement Logic**:
   - Update the increment and decrement functions to use the `step` value. Instead of adding or subtracting `1`, they should add or subtract the `step` value.

3. **Display Current Step**:
   - Display the current step value below the counter so the user can see what the current step is.

4. **Reset Functionality**:
   - Add a reset button that, when clicked, sets the count back to `0` and the step back to `1`.

### Final Touches

- Ensure that all new features are working correctly and are user-friendly.
- Test the functionality by changing the step value and observing the changes in the counter's behavior.

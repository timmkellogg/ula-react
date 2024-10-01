# Demo: Managing Form Inputs in React

There are two common approaches to managing form elements: managing each piece of input state separately or grouping all inputs together in a single state object.

## Approach 1: Managing Each Input Separately

This approach uses a separate piece of state for each input field.

```js
import React, { useState } from 'react'

const SeparateInputExample = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [dob, setDob] = useState('')
  const [likesReading, setLikesReading] = useState(false)
  const [likesTraveling, setLikesTraveling] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ firstName, lastName, email, dob, likesReading, likesTraveling })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='First Name'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <input
        placeholder='Last Name'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <input
        placeholder='Email'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder='Date of Birth'
        type='date'
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />

      <label>
        <input
          type='checkbox'
          checked={likesReading}
          onChange={() => setLikesReading(!likesReading)}
        />
        Likes Reading
      </label>

      <label>
        <input
          type='checkbox'
          checked={likesTraveling}
          onChange={() => setLikesTraveling(!likesTraveling)}
        />
        Likes Traveling
      </label>

      <button type='submit'>Submit</button>
    </form>
  )
}

export default SeparateInputExample
```

### Explanation

- Each input has its own `useState` hook to track its value (e.g., `firstName`, `lastName`, `email`, `dob`).
- The `value` of each input is bound to its corresponding state, and `onChange` updates that state when the input changes.
- For checkboxes (e.g., `likesReading`, `likesTraveling`), we track whether they are checked or not using boolean state. The `onChange` handler toggles the checked value.
- In `handleSubmit`, the form values are logged as an object.

---

## Approach 2: Grouping All Inputs in a Single State Object

This approach manages all input fields together in a single state object, which can simplify updating multiple fields.

```js
import React, { useState } from 'react'

const GroupedInputExample = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    likesReading: false,
    likesTraveling: false
  })

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='First Name'
        name='firstName'
        value={formData.firstName}
        onChange={handleChange}
      />

      <input
        placeholder='Last Name'
        name='lastName'
        value={formData.lastName}
        onChange={handleChange}
      />

      <input
        placeholder='Email'
        type='email'
        name='email'
        value={formData.email}
        onChange={handleChange}
      />

      <input
        placeholder='Date of Birth'
        type='date'
        name='dob'
        value={formData.dob}
        onChange={handleChange}
      />

      <label>
        <input
          type='checkbox'
          name='likesReading'
          checked={formData.likesReading}
          onChange={handleChange}
        />
        Likes Reading
      </label>

      <label>
        <input
          type='checkbox'
          name='likesTraveling'
          checked={formData.likesTraveling}
          onChange={handleChange}
        />
        Likes Traveling
      </label>

      <button type='submit'>Submit</button>
    </form>
  )
}

export default GroupedInputExample
```

### Explanation

- All input values are stored in a single state object `formData`.
- The `handleChange` function dynamically updates the state based on the `name` attribute of each input.
- Checkboxes are handled by checking if the input type is `checkbox`, then updating the state accordingly.
- This method is useful when you have many inputs, as it simplifies the state management into one `useState` hook.

---

### Key Differences:

- **Separate State**: Good for smaller forms with fewer inputs, provides direct access to each individual input's state.
- **Grouped State**: Better for larger forms, keeps all inputs organized within a single state object, and simplifies management of form data.

# Demo: Component Styling in React

In this demo, we’ll explore several ways to style components in React. You’ll learn how to use inline styles, CSS stylesheets, and CSS modules to apply styles to your components.


## 1. Inline Styles

Inline styles in React are applied using the \`style\` attribute. The value of this attribute is an object where the keys are the camel-cased CSS properties, and the values are the CSS property values.

### Example

```jsx
const InlineStyledComponent = () => {
  return (
    <div style={{ backgroundColor: 'lightblue', padding: '20px' }}>
      <h1 style={{ color: 'white' }}>Inline Styled Component</h1>
      <p>This component uses inline styles.</p>
    </div>
  )
}

export default InlineStyledComponent
```

### Key Points

- The CSS properties are written in **camelCase** (e.g., \`backgroundColor\` instead of \`background-color\`).
- The values of the CSS properties are passed as strings, except for numeric values (e.g., \`padding: '20px'\`).

## 2. CSS Stylesheets

You can style components using external or local CSS files by importing the stylesheet in your component. This approach separates style logic from the component code.

### Example

1. **Create a CSS file** (e.g., \`styles.css\`):

```css
.container {
  background-color: lightcoral;
  padding: 20px;
}

.title {
  color: white;
  font-size: 2rem;
}
```

2. **Import the CSS file into the component**:

```jsx
import './styles.css'

const CSSStyledComponent = () => {
  return (
    <div className="container">
      <h1 className="title">CSS Styled Component</h1>
      <p>This component uses styles from an external CSS file.</p>
    </div>
  )
}

export default CSSStyledComponent
```

### Key Points

- Import CSS files directly in the component where they’re needed.
- Use **className** instead of **class** to apply CSS classes in JSX.
- This method is ideal for larger projects where you want to keep styling logic separate from the component code.

## 3. CSS Modules

CSS Modules allow you to scope your CSS locally by automatically creating unique class names. This ensures that styles don’t leak or conflict across components.

### Example

1. **Create a CSS module file** (e.g., \`styles.module.css\`):

```css
.container {
  background-color: lightgreen;
  padding: 20px;
}

.title {
  color: white;
  font-size: 2rem;
}
```

2. **Import and use the CSS module in the component**:

```jsx
import styles from './styles.module.css'

const CSSModuleStyledComponent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CSS Module Styled Component</h1>
      <p>This component uses CSS Modules for scoped styling.</p>
    </div>
  )
}

export default CSSModuleStyledComponent
```

### Key Points

- CSS Modules automatically generate unique class names, avoiding conflicts across components.
- To use CSS Modules, the stylesheet should be named with the \`.module.css\` extension.
- Import the styles object and use the classes with \`styles.className\`.


## 4. Using a Component Library: React Bootstrap

Component libraries, like **React Bootstrap**, provide pre-built and styled components that can be easily used in your React applications. They allow you to implement consistent and responsive UI elements without writing custom styles.

### Setting up React Bootstrap

1. **Install React Bootstrap** and **Bootstrap**:

```bash
npm install react-bootstrap bootstrap
```

2. **Import Bootstrap CSS** into your `index.js` or `App.js`:

```jsx
import 'bootstrap/dist/css/bootstrap.min.css'
```

---

### Example

In this example, we’ll use React Bootstrap to create a styled button and layout component using Bootstrap’s grid system:

```jsx
import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const BootstrapStyledComponent = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <h1>React Bootstrap Component</h1>
          <p>This component uses styles from React Bootstrap</p>
          <Button variant="primary">Click Me!</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default BootstrapStyledComponent
```

### Key Points

- **React Bootstrap** provides pre-built components like `Button`, `Container`, `Row`, and `Col` that follow Bootstrap's grid system
- You can pass variant props (e.g., `variant="primary"`) to modify the appearance of components
- This is an efficient way to handle responsive design and quickly build styled UIs without writing custom CSS


## Summary

1. **Inline Styles**: Best for small, dynamic styles directly within the JSX.
2. **CSS Stylesheets**: Ideal for global or shared styles in external files.
3. **CSS Modules**: Useful for scoped styling to prevent conflicts between components.

Each method has its strengths and is appropriate in different situations depending on the complexity of your project and your team’s preference.


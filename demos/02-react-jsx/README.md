# Demo: React with JSX

## Adding JSX via CDN

To work with JSX in a browser environment, we’ll need to add Babel to transpile JSX into regular JavaScript. Add the following script tag to your HTML file:

\```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script crossorigin src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
\```

Ensure Babel is available by logging it to the console:

\```js
console.log(Babel)
\```

## Writing JSX

JSX allows you to write HTML-like syntax directly in JavaScript. Here’s how to use it:

\```html
<!-- Your DOM container -->
<div id="app"></div>

<!-- Script that uses JSX -->
<script type="text/babel">
  // Create a root on the selected DOM element
  const domContainer = document.querySelector('#app')
  const root = ReactDOM.createRoot(domContainer)

  // Define a component using JSX
  const Component = <div>Hello World with JSX!</div>

  // Render the component at the root
  root.render(Component)
</script>
\```

## Expressions in JSX

You can embed JavaScript expressions within JSX by wrapping them in curly braces:

\```html
<script type="text/babel">
  const name = 'React Student'

  const Component = <div>Hello, {name}!</div>

  root.render(Component)
</script>
\```

## Self-Closing Tags

In JSX, elements with no children should use self-closing tags:

\```html
<script type="text/babel">
  const Component = <img src="logo.png" alt="Logo" />

  root.render(Component)
</script>
\```

## Resources

* [https://react.dev/learn#writing-markup-with-jsx](https://react.dev/learn#writing-markup-with-jsx)
* [https://babeljs.io/docs/en/babel-standalone](https://babeljs.io/docs/en/babel-standalone)

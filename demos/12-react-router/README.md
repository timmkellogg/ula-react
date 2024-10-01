# React Router

## createBrowserRouter and RouterProvider

Set up your browser router in your React app's JS entry file. Use `RouterProvider` to render the router instead of directly rendering your components.

``` js
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/nested-path',
        element: <div>nested component</div>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
```

## The Root Route and Outlet

The `Root` component is rendered at all routes, making it suitable to global content such as navigation components. 

The `Outlet` component is rendered inside of the `Root` component as a placeholder for nested content. Child components will render their content at this location.

```js
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <>
      <h1>Root location, rendered at all (valid) routes</h1>
      <Outlet />
    </>
  )
}
```

## The Link Component

The `Link` component can be used inside of `RouterProvider` to allow React Router to handle client-side navigation. Since we nested our entire application inside of `RouterProvider` in the step above, we can import and use the `Link` component at any level of our component tree navigation is required.

```js
import { Link } from 'react-router-dom'

function SomeDeepNestedComponent() {

  return (
    <>
      <Link to={`new-route`}>Link Text</Link>
    <>
  )
}

```

## Resources

* [https://reactrouter.com/en/main/start/tutorial](https://reactrouter.com/en/main/start/tutorial)
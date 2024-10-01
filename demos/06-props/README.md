# Props

Components accept arbitrary inputs (called “props”) and can use the props to help shape the output delivered to the UI. Props are passed in as JSX attributes to the component and treated as a single object inside the component.

``` js 
//functional component using props.*
function Potato(props) {
    return <h1>{props.name} loves {props.type} potatos!</h1>;
}

//the attributes passed in when rendering the components become part of the props object inside the component
ReactDOM.render(
    <div>
        <Potato name="Tim" type="Yukon Gold"/>
    </div>,
    document.getElementById('root')
);
```

> NOTE: A Component must never modify its own props. React is pretty flexible but it has a single strict rule:  **All React components must act like pure functions with respect to their props.**

## Resources

* [https://reactjs.org/docs/components-and-props.html](https://reactjs.org/docs/components-and-props.html)
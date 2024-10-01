# useEffect Hook

The `useEffect()` hook is used to manage side-effects of state changes in stateful functional application. 

## `useEffect()` on Mount 

```js
import { useState, useEffect } from 'react'

function GiphyApp() {
    const [gifs, setGifs] = useState([])

    useEffect(() => { 
        axios.get('giphyAPIURL').then((res) => {
            setGifs(res.data.data)
        })
    }, []) // empty array as second arg tells useEffect to only run after initial render
}
```

## `useEffect()` on Update 

```js
import { useState, useEffect } from 'react'

function Counter() {
    const initCount = () => {
        return Number(localStorage.getItem('count') || 0)
    }

    const [count, setCount] = useState(initCount)

    useEffect(() => {
        localStorage.setItem('count', count)
    }, [count]) // runs after count is updated

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>increment</button>
        </div>
    )
}
```

## `useEffect()` Before Unmount 

```js
import { useState, useEffect } from 'react'

function Clock() {

    useEffect(() => {

        return () => {
            console.log('cleanup') // runs before component is unmounted
        }
    })

    return (
        <div></div>
    )
}
```

## Resources

* [https://react.dev/reference/react/useEffect](https://react.dev/reference/react/useEffect)
* [https://www.w3schools.com/react/react_useeffect.asp](https://www.w3schools.com/react/react_useeffect.asp)
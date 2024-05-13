import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(count + 1)
        
    }


return (
    <div>
        <button onClick={increaseCount}>Increase Count</button>

        <h2>{count}</h2>

    </div>
)
}
export default Counter
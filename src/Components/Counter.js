import React , {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0)
    

    return (
        <div>
            <h2 className="count flex">
                {count}
            </h2>
            <div className="flex button-container ">
                <button className="button-items app-text count" onClick={() => setCount(count + 1)}>
                    Plus
                </button>
                <button className="button-items app-text count" onClick={() => setCount(count - 1)}>
                    Minus
                </button>
            </div>
        </div>
    )
}

export default Counter
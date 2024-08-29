import React, { useMemo, useState } from 'react'

const App = () => {

    const[first, setFirst] = useState([])
    const[count, setCount] = useState(0)
    const[text, setText] = useState("")
    const[todos, setTodos] = useState([])


    const memoizedTodoCount = useMemo(() => first.length, [first]);
  return (
    <div>
        
        <h1>My Todos</h1>

        <ul>
            {
                first.map((item) => {
                    return <li>{item}</li>
                })
            }
        </ul>


        <button onClick={() => {
            setFirst([...first, "New Todo"])
        }}>Add Todo</button>



        <hr></hr>



        {count}
        <button onClick={() => {
            setCount(count + 1)
        }}>+</button>


        <hr></hr>


        <h1>React.memo</h1>
        <input type='text' value={text} onChange={(e) => {
            setText(e.target.value)
        }}/>
        <button onClick={() => {
            setTodos([...todos, text])
            setText("")
        }}>Add Skill</button>

        <ul>
            {todos.map((item) => {
                return <li>{item}</li>
            })}
        </ul>


        <hr></hr>



        <UseMemoComponent count={memoizedTodoCount} />
        <ReactMemoComponent text={text} />
    </div>
  )
}

export default App



const UseMemoComponent = ({ count }) => {
    return (
        <div>
            <h2>UseMemo Component</h2>
            <p>Total todos: {count}</p>
        </div>
    );
};


const ReactMemoComponent = React.memo(({ text }) => {
    console.log('React.memo component rendered!');
    return (
        <div>
            <h2>React.memo Component</h2>
            <p>Current input: {text}</p>
        </div>
    );
});

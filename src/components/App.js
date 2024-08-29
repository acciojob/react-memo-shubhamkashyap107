import React, { useMemo, useState } from 'react';

const App = () => {
    const [first, setFirst] = useState([]);
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);

    const memoizedTodoCount = useMemo(() => first.length, [first]);

    const addNewTodo = () => {
        setFirst([...first, "New Todo"]);
    };

    const incrementCounter = () => {
        setCount(count + 1);
    };

    const addSkill = () => {
        if (text.length > 5) {
            setTodos([...todos, text]);
            setText("");
        }
    };

    return (
        <div id='main'>
            <h1>My Todos</h1>
            <ul>
                {first.map((item, index) => (
                    <li key={index} id={`todo-${index}`}>{item}</li>
                ))}
            </ul>
            <button id='add-todo-btn' onClick={addNewTodo}>Add Todo</button>

            <hr />

            <div id='counter'>
                {count}
                <button id='incr-cnt' onClick={incrementCounter}>+</button>
            </div>

            <hr />

            <h1>React.memo</h1>
            <input id='skill-input' type='text' value={text} onChange={(e) => setText(e.target.value)} />
            <button id='skill-btn' onClick={addSkill}>Add Skill</button>

            <ul>
                {todos.map((item, index) => (
                    <li key={index} id={`skill-${index}`}>{item}</li>
                ))}
            </ul>

            <hr />

            <UseMemoComponent count={memoizedTodoCount} />
            <ReactMemoComponent text={text} />
        </div>
    );
};

export default App;

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

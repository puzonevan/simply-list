import { useReducer, useState } from 'preact/hooks';
import Header from './header';
import TaskList from './list';
import AddTask from './addTask';

const initialTodos= [
    {
        id: 1, 
        emoji: '🔴', 
        task: 'create this app', 
        completed: false,
        editing: false,
    },
    {
        id: 2,
        emoji: '🔵', 
        task: 'deploy this app', 
        completed: false,
        editing: false,
    },
    {
        id: 3,
        emoji: '🔴', 
        task: 'create this app', 
        completed: false,
        editing: false,
    },
    {
        id: 4,
        emoji: '🔵', 
        task: 'create this app', 
        completed: false,
        editing: false,
    },
    {
        id: 5,
        emoji: '🔵', 
        task: 'create this app', 
        completed: false,
        editing: false,
    },
    {
        id: 6,
        emoji: '🔵', 
        task: 'create this app', 
        completed: false,
        editing: false,
    },
    {
        id: 7,
        emoji: '🔵', 
        task: 'create this app', 
        completed: false,
        editing: false,
    },
    {
        id: 8,
        emoji: '🔵', 
        task: 'create this app', 
        completed: false,
        editing: false,
    }
];

const todoReducer = (state, action) => {
    switch(action.type) {
        case 'editItem': {
            return state.map(todo => {
                if (todo.id !== action.payload.id) return todo;
                else if (todo.id === action.payload.id) {
                    return {
                        ...todo, 
                        task: action.payload.task
                    }
                } 
            })
        }
        case 'addItem': {
            const newItem = {
                id: state.length + 1,
                ...action.payload
            }
            return state.concat(newItem)
        }
    }
};

const App = () => {

	const [emoji, setEmoji] = useState('🌈');
	const [list, dispatch] = useReducer(todoReducer, initialTodos);

	return (
		<div id="app">
			<Header emoji={emoji} setEmoji={setEmoji} />
			<TaskList todos={list} dispatch={dispatch} />
            <AddTask dispatch={dispatch} />
		</div>
	)
	}

export default App;

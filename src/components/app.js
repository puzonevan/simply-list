import { useReducer, useState } from 'preact/hooks';

import Header from './header';
import TaskList from './list';
import AddTask from './addTask';
import { confetti, labels } from '../constants';

const initialTodos= [
    {
        id: 1, 
        label: labels[0], 
        emoji: confetti[0],
        task: 'create this app', 
        completed: false,
    },
    {
        id: 2,
        label: labels[1], 
        emoji: confetti[1],
        task: 'deploy this app', 
        completed: false,
    },
    {
        id: 3,
        label: labels[2], 
        emoji: confetti[2],
        task: 'create this app', 
        completed: false,
    },
    {
        id: 4,
        label: labels[3], 
        emoji: confetti[3],
        task: 'create this app', 
        completed: false,
    },
    {
        id: 5,
        label: labels[4], 
        emoji: confetti[4],
        task: 'create this app', 
        completed: false,
    },
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

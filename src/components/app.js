import { useState } from 'preact/hooks';
import Header from './header';
import AddTask from './addtask';
import TaskList from './list'

const todos = [
	{
		emoji: '🌈', 
		task: 'create this app', 
		completed: false,
	},
	{
		emoji: '⚡️', 
		task: 'deploy this app', 
		completed: false,
	},
	{
		emoji: '🌈', 
		task: 'create this app', 
		completed: false,
	},
	{
		emoji: '🌈', 
		task: 'create this app', 
		completed: false,
	},
	{
		emoji: '🌈', 
		task: 'create this app', 
		completed: false,
	},
	{
		emoji: '🌈', 
		task: 'create this app', 
		completed: false,
	},
	{
		emoji: '🌈', 
		task: 'create this app', 
		completed: false,
	},
	{
		emoji: '🌈', 
		task: 'create this app', 
		completed: false,
	},
	{
		emoji: '🌈', 
		task: 'create this app', 
		completed: false,
	},
	{
		emoji: '🌈', 
		task: 'create this app', 
		completed: false,
	},
	{
		emoji: '🌈', 
		task: 'create this app', 
		completed: false,
	},
	{
		emoji: '🌈', 
		task: 'create this app', 
		completed: false,
	},
]

const App = () => {

	const [emoji, setEmoji] = useState('🌈');
	const [list] = useState(todos);

	return (
		<div id="app">
			<Header emoji={emoji} setEmoji={setEmoji} />
			<TaskList todos={list} />
			<AddTask emoji={emoji} />
		</div>
	)
	}

export default App;

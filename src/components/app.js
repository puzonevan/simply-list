import { useState } from 'preact/hooks';
import Header from './header';
import Home from './home';
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
	}
]

const App = () => {

	const [emoji, setEmoji] = useState('🌈');
	const [list , setList] = useState(todos);

	return (
		<div id="app">
			<Header emoji={emoji} setEmoji={setEmoji} />
			<TaskList todos={list} />
			<Home emoji={emoji} />
		</div>
	)
	}

export default App;

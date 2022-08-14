import { useState } from 'preact/hooks';
import Header from './header';
import Home from './home';



const App = () => {

	const [emoji, setEmoji] = useState('🌈');

	return (
		<div id="app">
			<Header emoji={emoji} setEmoji={setEmoji} />
			<Home emoji={emoji}/>
		</div>
	)
	}

export default App;

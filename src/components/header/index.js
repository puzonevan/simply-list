import style from './style.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const emojis = ['🌈', '⚡️', '💥', '✨', '💫', '🌸'];

const Header = ({emoji, setEmoji}) => {

	return (
		<header class={style.header}>
			<h1>Simply Lists</h1>
			<nav>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Age</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={emoji}
						label="Age"
						onChange={(e) => setEmoji(e.target.value)}
					>
						<MenuItem value={emojis[0]}>{emojis[0]}</MenuItem>
						<MenuItem value={emojis[1]}>{emojis[1]}</MenuItem>
						<MenuItem value={emojis[2]}>{emojis[2]}</MenuItem>
					</Select>
				</FormControl>
			</nav>
		</header>
	)
};

export default Header;

import style from './style.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const emojis = ['🌈', '⚡️', '💥', '✨', '💫', '🌸'];

const Header = ({emoji, setEmoji}) => {

	return (
		<header class={style.header}>
			<h1>Simply List</h1>
			<nav>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Age</InputLabel>
					<Select
						labelId="emoji-select-label"
						id="emoji-select"
						value={emoji}
						label="Emoji"
						onChange={(e) => setEmoji(e.target.value)}
					>
						{emojis.map(emoji => <MenuItem key={`emoji-${emoji}`}value={emoji}>{emoji}</MenuItem>)}
					</Select>
				</FormControl>
			</nav>
		</header>
	)
};

export default Header;

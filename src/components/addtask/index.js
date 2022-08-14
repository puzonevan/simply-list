import JSConfetti from 'js-confetti'
import style from './style.css';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const jsConfetti = new JSConfetti()

const AddTask = ({emoji}) => (
	<>
		<TextField 
			variant='outlined' 
			label='Task'  
			fullWidth={true}
		/>
		<div class={style.home}>
			<Button 
				variant='contained' 
				onClick={() => jsConfetti.addConfetti({
					emojis: [emoji],
				})}
				fullWidth={true}
				disableElevation
			>
				Add
			</Button>
		</div>
	</>

);

export default AddTask;

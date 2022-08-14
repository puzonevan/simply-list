import JSConfetti from 'js-confetti'
import style from './style.css';

import Button from '@mui/material/Button';

const jsConfetti = new JSConfetti()

const Home = ({emoji}) => (
	<div class={style.home}>
		<Button 
			variant='contained' 
			onClick={() => jsConfetti.addConfetti({
				emojis: [emoji],
			})}
			fullWidth={true}
		>
			Add
		</Button>
	</div>
);

export default Home;

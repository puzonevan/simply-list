import JSConfetti from 'js-confetti'
import style from './style.css';

const jsConfetti = new JSConfetti()

const Home = ({emoji}) => (
	<div class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
		<button type="button" onClick={() => jsConfetti.addConfetti({
   emojis: [emoji],
})}>Hello</button>
	</div>
);

export default Home;

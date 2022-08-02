import { Footer, NavBar } from './components';
import { Home } from './pages';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
	return (
		<div>
			<NavBar />
			<Home />
			<Footer />
		</div>
	);
}

export default App;

import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import data from './data';
function App() {
	// console.log(data[0]);
	const cards = data.map((item) => {
		return <Card key={item.title} item={item} />;
	});
	return (
		<div className='App'>
			<Header />
			{cards}
			<Footer />
		</div>
	);
}

export default App;

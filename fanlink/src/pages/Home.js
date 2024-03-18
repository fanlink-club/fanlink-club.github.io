import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Hero from '../components/hero';
import About from '../components/taglineabout';
import FAQ from '../components/faq';
import Explore from '../components/explore';
import Footer from '../components/footer';
import '../App.css';

const Home = () => {
    return (
		<div className="App">
		  <header>
			<Navbar></Navbar>
			<Banner></Banner>
			<Hero></Hero>
		  </header>
		  
		  <body className="homepage">
			<About></About>
			<FAQ></FAQ>
			<Explore></Explore>
		  </body>
		<Footer></Footer>
		</div>
	  );
}

export default Home;

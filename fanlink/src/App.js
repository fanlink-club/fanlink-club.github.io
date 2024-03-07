import Navbar from './components/navbar';
import Banner from './components/banner';
import Hero from './components/hero';
import About from './components/about';
import FAQ from './components/faq';
import Explore from './components/explore';
import './App.css';

function App() {
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
    </div>
  );
}

export default App;

import './App.css';
import Navigation from './navbar.js';
import ImageGallery from './images.js';
import Cards from './cards.js'
import About from './about.js';
import Projects from './projects.js';
import Contact from './contact.js'


function App() {
  return (
    <div className='App'>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
      <Navigation/>
      <ImageGallery/>
      <h1 id='headersMain'>Services</h1>
      <Cards/>
      <h1 id='headersMain'>About</h1>
      <About/>
      <h1 id='headersMain'>Projects</h1>
      <Projects/>
      <h1 id='headersMain'>Contact</h1>
      <Contact/>
    </div>
  );
}

export default App;

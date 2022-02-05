import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  // The hooks have two parameters. The first parameter is the hook variable has the data; The second parameter is the function to update the hook variable.
  const [currentPage, setCurrentPage] = useState("Home")
  // To display current webpage
  const displayPage = () => {
    if (currentPage === "Home") {
      return <Home />
    }
    else if (currentPage === "About") {
      return <About />
    }
    else if (currentPage === "Projects") {
      return <Projects />
    }
    else if (currentPage === "Contact") {
      return <Contact />
    }
    else {
      return <Home />
    }
  }
  return (
    // Use an empty parant element to wrap all the children elements.
    <>
  <NavBar setCurrentPage={setCurrentPage} />
    {console.log(currentPage)}

    {displayPage()}

    <Footer />
  
    </>
  );
}

export default App;

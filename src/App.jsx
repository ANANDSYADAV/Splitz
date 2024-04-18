import { useState } from 'react'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Creator from './pages/Creator';
import AboutSplitz from './pages/AboutSplitz';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <div>
        <Navbar />
        {/* <Home /> */}
        {/* <Creator /> */}
        <AboutSplitz />
        <Footer />
      </div>
    </>
  )
}

export default App
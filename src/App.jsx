import Home from './pages/Home';
import Navbar from './components/Navbar';
import Creator from './pages/Creator';
import AboutSplitz from './pages/AboutSplitz';
import Footer from './components/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UseSplitz from './pages/UseSplitz';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/creator' element={<Creator />} />
          <Route path='/aboutsplitz' element={<AboutSplitz />} />
          <Route path='/use_splitz' element={<UseSplitz />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
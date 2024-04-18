import { useState } from 'react'
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(null);

  const updateCount = (e) => {
    setCount(e.target.value);
  }

  function showIndividual() {
    if (count >= 0) {
      console.log('button clicked');
    }
  }

  return (
    <>
      <div>
        <Navbar />
        <Home />
      </div>
    </>
  )
}

export default App
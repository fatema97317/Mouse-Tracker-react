
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouse = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener('mousemove', handleMouse);

    return () => {
      window.removeEventListener('mousemove', handleMouse)
    }
  }, [])
  return (
    <div className="App">
      <p>
        X : {position.x}
      </p>
      <p>
        Y : {position.y}

      </p>
      <div className='cursor'
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: ' transform  0.2s ease-out'
        }}
      >

      </div>

    </div>
  );
}

export default App;

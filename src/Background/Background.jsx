import "./Background.css";
import { useState, useEffect } from 'react';

export default function Background() {
  const [isPhone, setIsPhone] = useState(window.innerWidth <= 900);
      const handleResize = () => {
        setIsPhone(window.innerWidth <= 900);
      };
      useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
    
        return () => {
    
          window.removeEventListener('resize', handleResize);
        };
      }, );


  const cols = Math.floor(window.innerWidth / 40);
  const squareSize = window.innerWidth / cols;
  const rows = Math.ceil(window.innerHeight*5 / squareSize);
  const total = rows * cols + 15;

  // State to store the indices of transparent squares
  const [transparentIndices, setTransparentIndices] = useState(new Set());

  // Function to generate new transparent indices
  const generateTransparentIndices = () => {
    const newIndices = new Set();
    for (let i = 0; i < total; i++) {
      if (Math.random() > 0.99) {
        newIndices.add(i);
      }
    }
    setTransparentIndices(newIndices);
  };

  // Use useEffect to update transparent indices every second
  useEffect(() => {
    const interval = setInterval(generateTransparentIndices, 1000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: isPhone ? "217rem" : "505vh",
        overflow: 'hidden',
        backgroundColor: 'black',
      }}
    >
      <div className="flex flex-wrap gap-0.5 absolute top-0" style={{ width: '110%' }}>
        {Array.from({ length: total }).map((_, index) => {
          const isTransparent = transparentIndices.has(index);
          return (
            <div
              key={index}
              style={{
                backgroundColor: isTransparent ? 'transparent' : 'var(--squarecolor)',
                height: `${squareSize}px`,
                width: `${squareSize}px`,
                transition: 'background-color 0.5s ease', // Add transition for smooth animation
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
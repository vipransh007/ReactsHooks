import React from 'react'
import { useState, useEffect } from 'react';

function ResizeComponent() {

    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        const handeResize = () => setWindowSize(window.innerWidth);

        window.addEventListener('resize', handeResize);
        return () => {
            window.removeEventListener('resize', handeResize);
        };
    }, []);

  return (
    <div>
      <h1>Window Width : {windowSize}</h1>
    </div>
  )
}

export default ResizeComponent

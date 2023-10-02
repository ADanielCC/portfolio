import React, { useEffect, useRef, useState } from 'react';
import './customScrollBar.css';

function CustomScrollbar() {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const container = containerRef.current;

    function handleScroll() {
      const scrollTop = container.scrollTop;
      const maxScrollHeight = container.scrollHeight - container.clientHeight;
      const middlePosition = maxScrollHeight / 2;
      const distanceFromMiddle = Math.abs(scrollTop - middlePosition);

      // Calculate a scale value based on the distance from the middle
      const scale = 1 + distanceFromMiddle / 100; // Adjust the factor as needed

      // Update the scrollbar style with scaling and translation
      container.style.setProperty('--scrollbar-scale', scale);
      container.style.setProperty('--scrollbar-translate', scrollTop - middlePosition);

      setScrollPosition(scrollTop);
    }

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="custom-scrollbar-container" ref={containerRef}>
      <div className="custom-scrollbar">
        {/* Your scrollable content here */}
      </div>
    </div>
  );
}

export default CustomScrollbar;
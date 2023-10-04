import React, { useEffect, useRef, useState } from 'react';
import './customScrollBar.css';

function CustomScrollbar(props) {
  const { topRef, aboutRef, projectsRef, contactRef, children } = props;
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const container = containerRef.current;

    function handleScroll() {
      // Access and use the provided refs for scroll calculations
      const topSection = topRef.current;
      const aboutSection = aboutRef.current;
      const projectsSection = projectsRef.current;
      const contactSection = contactRef.current;

      // Calculate scroll position based on sections
      // Add your scroll logic here
      console.log('Scroll event triggered');
      console.log('Top section ref:', topSection);
      setScrollPosition(/* your calculated scroll position */);
    }

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [topRef, aboutRef, projectsRef, contactRef]);

  return (
    <div className="custom-scrollbar-container" ref={containerRef}>
      <div className="custom-scrollbar">
        {props}
      </div>
    </div>
  );
}

export default CustomScrollbar;
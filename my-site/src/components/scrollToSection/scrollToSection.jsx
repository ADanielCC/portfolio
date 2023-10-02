import React from 'react';

function ScrollToSection({ sectionRef }) {
  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  

  return (
    <button onClick={scrollToSection}>
      Scroll to Section
    </button>
  );
}

export default ScrollToSection;
import React from 'react';
import Footer from './Footer';
import BottomSVG from './BottomSVG';

const PageWrapper = ({ children, theme, idx }) => {
  return (
    <div className={`${theme} text-foreground bg-background`}>
      {React.Children.map(children, child => {
        return React.cloneElement(child, { theme: theme, idx: idx });
      })}
      <BottomSVG kind={theme} />
      <Footer />
    </div>
  );
};

export default PageWrapper;

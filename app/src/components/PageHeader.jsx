import React, { useEffect, useState } from "react";

export default function PageHeader({ imageUrl, children }) {
  const [blurValue, setBlurValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let num = (window.scrollY / window.innerHeight) * 6;
      setBlurValue(num);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const style = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: `blur(${blurValue}px)`
  };

  return (
    <div className="relative h-[510px]">
      <div className="absolute h-[500px] inset-0" style={style}></div>
      <div className={`absolute inset-0 bg-gradient-to-t from-background`} />
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
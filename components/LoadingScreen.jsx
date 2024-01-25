import React, { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[1000] bg-deepBlue flex items-center justify-center transition-opacity duration-500 ease-in-out" style={{ opacity: visible ? 1 : 0 }}>
      <img src="/logo-sub.webp" alt="Loading" className="w-20 h-20 animate-bounce" />
    </div>
  );
};

export default LoadingScreen;

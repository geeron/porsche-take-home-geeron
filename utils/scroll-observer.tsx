import React, { useCallback, useEffect, useState } from "react";

interface ScrollValue {
  scrollY: number;
}

interface ScrollObserverInterface {
  children?: any;
}

export const ScrollContext = React.createContext<ScrollValue>({
  scrollY: 0,
});

//TODO: Update/extend React.FC interface so it does not throw error. This is because of new types in React 18

const ScrollObserver: React.FC<ScrollObserverInterface> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollObserver;

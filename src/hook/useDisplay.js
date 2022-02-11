import { useEffect, useState } from "react";

const useDisplay = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const { width, height } = windowSize;
  const isMobile = Boolean(width && width <= 500);
  return { width, height, isMobile };
};

export default useDisplay;

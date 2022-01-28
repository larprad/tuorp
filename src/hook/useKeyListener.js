import { useEffect, useState } from "react";

export const useKeyListener = (eventName = "keydown", element = window) => {
  const [keyPressed, setKeyPressed] = useState("");
  const eventListener = (e) => {
    setKeyPressed(e.key);
  };

  useEffect(() => {
    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);

  return { keyPressed };
};

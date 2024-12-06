import React, { useEffect } from "react";

// Define the callback type as a function that takes an event as argument and returns void
export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Check if the click/touch is outside the referenced element
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      callback(event); // Call the callback if the click/touch is outside
    };

    // Add event listeners for mouse and touch events
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // Cleanup the event listeners on component unmount
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]); // Add ref and callback as dependencies
};

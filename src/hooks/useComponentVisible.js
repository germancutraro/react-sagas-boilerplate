import { useState, useEffect, useRef } from 'react';

const useComponentVisible = (
  initialIsVisible, // initial state
  animationTime, // animation on close
  onClose // onclose function
) => {
  const [isComponentVisible, setIsComponentVisible] = useState(
    initialIsVisible
  );
  const ref = useRef(null);

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      if (isComponentVisible) {
        if (animationTime) {
          setIsComponentVisible(0.5);
          setTimeout(() => {
            onClose && onClose();
            setIsComponentVisible(false);
          }, animationTime);
        } else {
          setIsComponentVisible(false);
          onClose && onClose();
        }
      }
    }
  };

  const handleEscape = e => e.key === 'Escape' && handleClickOutside(e);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    document.addEventListener('keydown', handleEscape, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
      document.removeEventListener('keydown', handleEscape, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
};

export default useComponentVisible;

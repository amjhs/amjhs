
import { useEffect, useRef } from 'react';

// Hook to handle scroll animations
export const useScrollAnimation = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Options for the intersection observer
    const options = {
      root: null, // use the viewport
      rootMargin: '0px',
      threshold: 0.15, // when 15% of the element is visible
    };

    // Callback function for the observer
    const handleIntersect: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the visible class to trigger the animation
          entry.target.classList.add('aos-visible');
          
          // Once the animation has played, no need to observe it anymore
          observer.unobserve(entry.target);
        }
      });
    };

    // Create the observer
    observerRef.current = new IntersectionObserver(handleIntersect, options);

    // Find all elements with animation classes
    const animatedElements = document.querySelectorAll(
      '.aos-fade-up, .aos-fade-right, .aos-fade-left, .aos-fade-in, .aos-zoom-in'
    );

    // Observe each element
    animatedElements.forEach(el => {
      observerRef.current?.observe(el);
    });

    // Clean up
    return () => {
      observerRef.current?.disconnect();
    };
  }, []); // Empty dependency array ensures this runs once

  return null;
};

import { useEffect, useState, RefObject } from "react";

function useIntersectionObserver(ref: RefObject<HTMLElement>): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (entries && entries[0]) {
        setIsIntersecting(entries[0].isIntersecting);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold as needed
    });

    if (ref.current) {
      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [ref]);

  return isIntersecting;
}

export default useIntersectionObserver;

import { useEffect, useState } from "react";

interface IProps {
  root?: Element;
  threshold?: number;
  // root?: Element | null;
  // threshold?: number | number[];
  enabled: boolean;
  rootMargin?: string;
  onIntersect: IntersectionObserverCallback;
}

export function useIntersectionObserver({
  root,
  rootMargin = "0px",
  threshold = 0.1,
  onIntersect,
  enabled = true,
}: IProps) {
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const observer: IntersectionObserver = new IntersectionObserver(
      onIntersect,
      { root, rootMargin, threshold }
    );

    if (!target) return;

    observer.observe(target);

    return () => observer.unobserve(target);
  }, [enabled, onIntersect, root, rootMargin, target, threshold]);

  return { setTarget };
};

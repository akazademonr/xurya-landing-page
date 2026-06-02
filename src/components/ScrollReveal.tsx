// FIXED: Changed 'ReactNode' to use a type-only import to satisfy verbatimModuleSyntax
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up";
  delay?: number;
  className?: string; 
}

export default function ScrollReveal({ 
  children, 
  variant = "fade-up", 
  delay = 0, 
  className = "" 
}: ScrollRevealProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const variants = {
    "fade-up": {
      hidden: "opacity-0 translate-y-12",
      visible: "opacity-100 translate-y-0",
    },
    "fade-in": {
      hidden: "opacity-0",
      visible: "opacity-100",
    },
    "slide-left": {
      hidden: "opacity-0 -translate-x-16",
      visible: "opacity-100 translate-x-0",
    },
    "slide-right": {
      hidden: "opacity-0 translate-x-16",
      visible: "opacity-100 translate-x-0",
    },
    "scale-up": {
      hidden: "opacity-0 scale-95 translate-y-4",
      visible: "opacity-100 scale-100 translate-y-0",
    },
  };

  const delayStyle = delay ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div
      ref={ref}
      style={delayStyle}
      className={`transition-all duration-1000 ease-out transform-gpu ${
        isIntersecting ? variants[variant].visible : variants[variant].hidden
      } ${className}`}
    >
      {children}
    </div>
  );
}
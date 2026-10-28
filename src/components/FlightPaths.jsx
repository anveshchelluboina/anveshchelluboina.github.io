import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const ROUTES = [
  "M 18 372 C 106 380 102 300 180 300 S 250 360 318 310 382 120 510 112",
  "M 12 116 C 118 92 155 206 248 214 S 376 228 500 350"
];

export function FlightPaths() {
  const svg = useRef(null);
  const [inView, setInView] = useState(true);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!svg.current || !("IntersectionObserver" in window)) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
      if (typeof svg.current?.pauseAnimations !== "function") return;
      if (entry.isIntersecting && !reducedMotion) svg.current.unpauseAnimations();
      else svg.current.pauseAnimations();
    }, { rootMargin: "80px" });
    observer.observe(svg.current);
    return () => observer.disconnect();
  }, [reducedMotion]);

  const animateRoute = inView && !reducedMotion;

  return <div className="passport-flight-layer" aria-hidden="true">
    <svg ref={svg} className="passport-flight-svg" viewBox="0 0 520 470" preserveAspectRatio="none" focusable="false">
      <defs>
        <path id="passport-route-primary" d={ROUTES[0]} />
      </defs>
      <motion.path d={ROUTES[0]} className="passport-route passport-route-primary" initial={{ pathLength: 0 }} animate={{ pathLength: reducedMotion ? 1 : animateRoute ? 1 : 0 }} transition={{ duration: 2.8, ease: "easeInOut", repeat: animateRoute ? Infinity : 0, repeatType: "mirror", repeatDelay: 1.5 }} />
      <motion.path d={ROUTES[1]} className="passport-route passport-route-secondary" initial={{ pathLength: 0 }} animate={{ pathLength: reducedMotion ? 1 : animateRoute ? 1 : 0 }} transition={{ duration: 3.8, ease: "easeInOut", delay: 0.25, repeat: animateRoute ? Infinity : 0, repeatType: "mirror", repeatDelay: 2 }} />
      <circle className="passport-waypoint" cx="318" cy="310" r="4" style={{ animationPlayState: animateRoute ? "running" : "paused" }} />
      {!reducedMotion && <g className="passport-route-plane">
        <animateMotion dur="18s" repeatCount="indefinite" rotate="auto" path={ROUTES[0]} />
        <path d="M0-8 2-2 9 1 9 3 2 2 1 8-1 8-1 2-7 3-7 1-1-2Z" />
      </g>}
      {reducedMotion && <path className="passport-plane-still" d="M12 364 14 370 21 373 21 375 14 374 13 380 11 380 11 374 5 375 5 373 11 370Z" />}
    </svg>
  </div>;
}
import React, { lazy, Suspense, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const PassportCanvas = lazy(() => import("./PassportCanvas.jsx").then(module => ({ default: module.PassportCanvas })));

const COUNTRIES = [
  ["India", "IND", "🇮🇳", "stamp-red", "12 JAN 2018"], ["Egypt", "EGY", "🇪🇬", "stamp-blue", "04 MAR 2018"],
  ["Saudi Arabia", "SAU", "🇸🇦", "stamp-green", "19 NOV 2018"], ["United Arab Emirates", "ARE", "🇦🇪", "stamp-blue", "10 FEB 2019"],
  ["Oman", "OMN", "🇴🇲", "stamp-purple", "22 APR 2019"], ["Turkey", "TUR", "🇹🇷", "stamp-red", "15 MAY 2019"],
  ["Georgia", "GEO", "🇬🇪", "stamp-blue", "02 JUL 2019"], ["Armenia", "ARM", "🇦🇲", "stamp-purple", "14 JUL 2019"],
  ["Switzerland", "CHE", "🇨🇭", "stamp-red", "30 AUG 2019"], ["Germany", "DEU", "🇩🇪", "stamp-blue", "05 SEP 2019"],
  ["Slovakia", "SVK", "🇸🇰", "stamp-purple", "12 SEP 2019"], ["Czech Republic", "CZE", "🇨🇿", "stamp-red", "18 SEP 2019"],
  ["Austria", "AUT", "🇦🇹", "stamp-blue", "25 SEP 2019"], ["Slovenia", "SVN", "🇸🇮", "stamp-green", "02 OCT 2019"],
  ["Croatia", "HRV", "🇭🇷", "stamp-red", "10 OCT 2019"], ["Hungary", "HUN", "🇭🇺", "stamp-purple", "17 OCT 2019"],
  ["France", "FRA", "🇫🇷", "stamp-blue", "03 NOV 2019"], ["Belgium", "BEL", "🇧🇪", "stamp-red", "12 NOV 2019"],
  ["Uzbekistan", "UZB", "🇺🇿", "stamp-green", "20 JAN 2020"], ["Kazakhstan", "KAZ", "🇰🇿", "stamp-blue", "05 FEB 2020"],
  ["Azerbaijan", "AZE", "🇦🇿", "stamp-purple", "14 MAR 2021"], ["Kyrgyzstan", "KGZ", "🇰🇬", "stamp-red", "28 JUL 2021"],
  ["Malaysia", "MYS", "🇲🇾", "stamp-blue", "10 AUG 2022"], ["Nepal", "NPL", "🇳🇵", "stamp-green", "15 SEP 2023"]
].map(([name, code, flag, style, date], index) => ({ id: index + 1, name, code, flag, style, date }));

function Stamp({ country, index, reducedMotion }) {
  const rotation = (index * 17) % 35 - 15;
  return <motion.div className={`immigration-stamp ${country.style}`} initial={reducedMotion ? false : { y: -52, rotate: rotation - 12, scale: 0.72, opacity: 0 }} animate={{ y: 0, rotate: rotation, scale: 1, opacity: 0.88 }} transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 560, damping: 23, mass: 0.55, delay: index * 0.05 }}>
    <div className="passport-stamp-head"><span>{country.flag}</span><b>{country.code}</b></div>
    <strong>{country.name}</strong>
    <small>{country.date}</small>
  </motion.div>;
}

function PassportFallbackCover({ onOpen, stamps, reducedMotion }) {
  return <motion.button type="button" className="passport-cover passport-cover-button" aria-label="Open the travel passport and reveal its country stamps" onClick={onOpen} whileHover={reducedMotion ? undefined : { y: -5, rotateY: -5, rotateX: 2 }} whileTap={reducedMotion ? undefined : { scale: 0.98 }}>
    <span className="gold-foil passport-cover-country">UNITED ARAB EMIRATES</span>
    <svg className="passport-cover-emblem" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="43"/><circle cx="50" cy="50" r="34"/><path d="M22 50q28-22 56 0-28 22-56 0zm28-27c-16 17-16 37 0 54 16-17 16-37 0-54zm-27 27h54"/></svg>
    <span className="gold-foil passport-cover-title">PASSPORT</span>
    <span className="gold-foil passport-cover-edition">FIELD NOTES · 24 COUNTRIES</span>
    <span className="gold-foil passport-cover-owner">ANVESH CHELLUBOINA</span>
    <span className="gold-foil passport-cover-hint">OPEN TO EXPLORE · 24 COUNTRIES</span>
    <span className="passport-ink-stamps" aria-hidden="true">{stamps.slice(-3).map((country, index) => <span key={country.id} className={`immigration-stamp dropped ${country.style}`} style={{ "--rot": `${index * 11 - 8}deg` }}>{country.code}</span>)}</span>
  </motion.button>;
}

function PassportSpread({ activeSpread, setActiveSpread, stamps, onClose, isAnimating, reducedMotion }) {
  const firstIndex = (activeSpread - 1) * 8;
  const spreadCountries = stamps.slice(firstIndex, firstIndex + 8);
  return <motion.div className="passport-open" style={{ transformOrigin: "left center" }} initial={reducedMotion ? false : { rotateY: -82, opacity: 0, scale: 0.94 }} animate={{ rotateY: 0, opacity: 1, scale: 1 }} exit={{ rotateY: reducedMotion ? 0 : -42, opacity: 0, scale: reducedMotion ? 1 : 0.98 }} transition={{ duration: reducedMotion ? 0 : 0.78, ease: [0.2, 0.8, 0.2, 1] }}>
    <div className="passport-page-left">
      <div className="passport-page-heading"><span>ENTRY RECORD · 0{activeSpread}</span><span>{String(firstIndex + 1).padStart(2, "0")}—{String(Math.min(firstIndex + 8, 24)).padStart(2, "0")}</span></div>
      <div className="passport-page-stamps">{spreadCountries.slice(0, 4).map((country, index) => <Stamp key={country.id} country={country} index={index} reducedMotion={reducedMotion} />)}</div>
      <small className="passport-page-footer">ANVESH CHELLUBOINA · FIELD NOTES</small>
    </div>
    <span className="passport-spine" aria-hidden="true" />
    <div className="passport-page-right">
      <div className="passport-page-heading"><span>VISA & IMMIGRATION</span><span>COUNTRIES EXPLORED</span></div>
      <div className="passport-page-stamps">{spreadCountries.slice(4, 8).map((country, index) => <Stamp key={country.id} country={country} index={index + 4} reducedMotion={reducedMotion} />)}</div>
      <div className="passport-page-controls">
        <button type="button" aria-label="Previous passport spread" disabled={activeSpread === 1} onClick={() => setActiveSpread(page => Math.max(1, page - 1))}>←</button>
        <span aria-live="polite">{activeSpread} / 3{isAnimating ? " · adding stamps" : ""}</span>
        <button type="button" aria-label="Next passport spread" disabled={activeSpread === 3} onClick={() => setActiveSpread(page => Math.min(3, page + 1))}>→</button>
        <button type="button" className="passport-close" onClick={onClose}>Close passport</button>
      </div>
    </div>
  </motion.div>;
}

function FieldNotesPage({ onClose, reducedMotion }) {
  return <motion.div className="passport-field-page" initial={reducedMotion ? false : { opacity: 0, scale: 0.96, rotateY: 10 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: reducedMotion ? 0 : 0.35 }}>
    <div className="passport-field-heading"><span>FIELD NOTES</span><strong>24 COUNTRIES · 2018—2023</strong></div>
    <div className="passport-flag-grid">{COUNTRIES.map((country, index) => <motion.div className={`passport-flag-entry ${country.style}`} key={country.id} initial={reducedMotion ? false : { opacity: 0, y: 7 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reducedMotion ? 0 : 0.2, delay: reducedMotion ? 0 : index * 0.018 }}>
      <span className="passport-entry-flag" aria-hidden="true">{country.flag}</span><span className="passport-entry-details"><strong>{country.name}</strong><small>{country.code} · {country.date}</small></span>
    </motion.div>)}</div>
    <div className="passport-field-footer"><span>ANVESH CHELLUBOINA · TRAVEL ARCHIVE</span><button type="button" className="passport-close" onClick={onClose}>Close passport</button></div>
  </motion.div>;
}

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

export function PassportViewer() {
  const [isOpen, setIsOpen] = useState(false);
  const [passportMode, setPassportMode] = useState("countries");
  const [activeSpread, setActiveSpread] = useState(1);
  const [stamps, setStamps] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [webglAvailable, setWebglAvailable] = useState(false);
  const [canvasRequested, setCanvasRequested] = useState(false);
  const hostRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateCapability = () => {
      const available = window.innerWidth >= 768 && finePointer.matches && !motionPreference.matches && supportsWebGL();
      setWebglAvailable(available);
      if (!available) setCanvasRequested(false);
    };
    updateCapability();
    window.addEventListener("resize", updateCapability, { passive: true });
    finePointer.addEventListener?.("change", updateCapability);
    motionPreference.addEventListener?.("change", updateCapability);
    return () => {
      window.removeEventListener("resize", updateCapability);
      finePointer.removeEventListener?.("change", updateCapability);
      motionPreference.removeEventListener?.("change", updateCapability);
    };
  }, [reducedMotion]);

  useEffect(() => {
    if (!webglAvailable || !hostRef.current) return undefined;
    if (!("IntersectionObserver" in window)) {
      setCanvasRequested(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setCanvasRequested(true);
      observer.disconnect();
    }, { rootMargin: "160px" });
    observer.observe(hostRef.current);
    return () => observer.disconnect();
  }, [webglAvailable]);

  useEffect(() => {
    if (!isOpen) return undefined;
    setActiveSpread(1);
    if (passportMode === "field-notes") {
      setStamps(COUNTRIES);
      setIsAnimating(false);
      return undefined;
    }
    setStamps([]);
    setIsAnimating(true);
    const timers = COUNTRIES.map((country, index) => window.setTimeout(() => {
      setStamps(current => [...current, country]);
      if (index === COUNTRIES.length - 1) setIsAnimating(false);
    }, index * 56));
    return () => timers.forEach(window.clearTimeout);
  }, [isOpen, passportMode]);

  const openPassport = mode => {
    setPassportMode(mode);
    setIsOpen(true);
  };

  const closePassport = () => {
    setIsOpen(false);
    setStamps([]);
    setActiveSpread(1);
  };

  return <div className="passport-viewer" ref={hostRef}>
    <div className="passport-viewer-route" aria-hidden="true" />
    {!isOpen && <div className="passport-viewer-actions" role="group" aria-label="Open passport view">
      <button type="button" onClick={() => openPassport("field-notes")}>FIELD NOTES</button>
      <button type="button" onClick={() => openPassport("countries")}>24 COUNTRIES EXPLORED</button>
    </div>}
    <div className="passport-object-slot">
      <AnimatePresence mode="wait" initial={false}>
        {isOpen ? passportMode === "field-notes" ? <FieldNotesPage key="field-notes" onClose={closePassport} reducedMotion={Boolean(reducedMotion)} /> : <PassportSpread key="country-stamps" activeSpread={activeSpread} setActiveSpread={setActiveSpread} stamps={stamps} onClose={closePassport} isAnimating={isAnimating} reducedMotion={Boolean(reducedMotion)} /> : <div className="passport-cover-stage" key="closed-passport">
          {webglAvailable && canvasRequested && <div className="passport-canvas" aria-hidden="true"><ErrorBoundary onError={() => setWebglAvailable(false)}><Suspense fallback={null}><PassportCanvas onOpen={() => openPassport("countries")} reducedMotion={Boolean(reducedMotion)} hostRef={hostRef} /></Suspense></ErrorBoundary></div>}
          <PassportFallbackCover onOpen={() => openPassport("countries")} stamps={stamps} reducedMotion={Boolean(reducedMotion)} />
        </div>}
      </AnimatePresence>
    </div>
    <span className="sr-only" role="status" aria-live="polite">{isOpen ? "Passport opened. Country stamps are being revealed." : "Passport closed."}</span>
  </div>;
}

class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch() { this.props.onError?.(); }
  render() { return this.state.hasError ? null : this.props.children; }
}
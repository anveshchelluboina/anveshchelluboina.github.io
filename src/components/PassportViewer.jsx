import React, { lazy, Suspense, useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const PassportCanvas = lazy(() => import("./PassportCanvas.jsx").then(module => ({ default: module.PassportCanvas })));

const COUNTRIES = [
  ["India", "IND", "stamp-red", "12 JAN 2018"], ["Egypt", "EGY", "stamp-blue", "04 MAR 2018"],
  ["Saudi Arabia", "SAU", "stamp-green", "19 NOV 2018"], ["Oman", "OMN", "stamp-purple", "22 APR 2019"],
  ["Turkey", "TUR", "stamp-red", "15 MAY 2019"], ["Georgia", "GEO", "stamp-blue", "02 JUL 2019"],
  ["Armenia", "ARM", "stamp-purple", "14 JUL 2019"], ["Switzerland", "CHE", "stamp-red", "30 AUG 2019"],
  ["Germany", "DEU", "stamp-blue", "05 SEP 2019"], ["Slovakia", "SVK", "stamp-purple", "12 SEP 2019"],
  ["Czech Republic", "CZE", "stamp-red", "18 SEP 2019"], ["Austria", "AUT", "stamp-blue", "25 SEP 2019"],
  ["Slovenia", "SVN", "stamp-green", "02 OCT 2019"], ["Croatia", "HRV", "stamp-red", "10 OCT 2019"],
  ["Hungary", "HUN", "stamp-purple", "17 OCT 2019"], ["France", "FRA", "stamp-blue", "03 NOV 2019"],
  ["Belgium", "BEL", "stamp-red", "12 NOV 2019"], ["Uzbekistan", "UZB", "stamp-green", "20 JAN 2020"],
  ["Kazakhstan", "KAZ", "stamp-blue", "05 FEB 2020"], ["Azerbaijan", "AZE", "stamp-purple", "14 MAR 2021"],
  ["Kyrgyzstan", "KGZ", "stamp-red", "28 JUL 2021"], ["Malaysia", "MYS", "stamp-blue", "10 AUG 2022"],
  ["Nepal", "NPL", "stamp-green", "15 SEP 2023"]
].map(([name, code, style, date], index) => ({ id: index + 1, name, code, style, date }));

const COUNTRY_COUNT = COUNTRIES.length;
const PAGE_BREAK = Math.ceil(COUNTRY_COUNT / 2);

function horizontalStripes(colors) {
  return colors.map((color, index) => <rect key={color + index} y={index * 20 / colors.length} width="30" height={20 / colors.length + 0.1} fill={color} />);
}

function verticalStripes(colors) {
  return colors.map((color, index) => <rect key={color + index} x={index * 30 / colors.length} width={30 / colors.length + 0.1} height="20" fill={color} />);
}

const COUNTRY_FLAG_ART = {
    IND: <>{horizontalStripes(["#ff9933", "#fff", "#138808"])}<circle cx="15" cy="10" r="2.6" fill="none" stroke="#000080" strokeWidth=".55" /><circle cx="15" cy="10" r=".55" fill="#000080" /><path d="M15 7.5v5m-2.5-2.5h5m-4.25-1.75 3.5 3.5m0-3.5-3.5 3.5" stroke="#000080" strokeWidth=".3" /></>,
    EGY: <>{horizontalStripes(["#ce1126", "#fff", "#000"])}<path d="m13 7 2-1 2 1-1 2h-2zm-2 2h8v1h-8z" fill="#c09300" /></>,
    SAU: <><rect width="30" height="20" fill="#006c35" /><path d="M7 13h16M8 11h13" stroke="#fff" strokeWidth=".9" strokeLinecap="round" /><path d="m20 11 2 2-2 2" fill="none" stroke="#fff" strokeWidth=".55" /></>,
    OMN: <><rect x="7" width="23" height="6.67" fill="#fff" /><rect x="7" y="6.67" width="23" height="6.66" fill="#d01c1f" /><rect x="7" y="13.33" width="23" height="6.67" fill="#008000" /><rect width="7" height="20" fill="#d01c1f" /><path d="M2.3 5.2v9.6m0-8.5 2 1.2m-2 1.1 2 1.2m-2 1.1 2 1.2" fill="none" stroke="#fff" strokeWidth=".8" /></>,
    TUR: <><rect width="30" height="20" fill="#e30a17" /><circle cx="12" cy="10" r="5" fill="#fff" /><circle cx="14" cy="9" r="4" fill="#e30a17" /><path d="m20 6.7 1 2.2 2.4.2-1.8 1.5.6 2.3-2.2-1.2-2.1 1.2.5-2.3-1.8-1.5 2.4-.2z" fill="#fff" /></>,
    GEO: <><rect width="30" height="20" fill="#fff" /><path d="M13.5 0h3v20h-3zM0 8.5h30v3H0zM5 3h1.5v5H5zm18 0h1.5v5H23zM5 12h1.5v5H5zm18 0h1.5v5H23zM3.3 4.7H8v1.5H3.3zm18.7 0H27v1.5h-5zM3.3 13.8H8v1.5H3.3zm18.7 0H27v1.5h-5z" fill="#e31e24" /></>,
    ARM: <>{horizontalStripes(["#d90012", "#0033a0", "#f2a800"])}</>,
    CHE: <><rect x="5" width="20" height="20" fill="#d52b1e" /><path d="M13 4h4v4h4v4h-4v4h-4v-4H9V8h4z" fill="#fff" /></>,
    DEU: <>{horizontalStripes(["#000", "#dd0000", "#ffce00"])}</>,
    SVK: <>{horizontalStripes(["#fff", "#0b4ea2", "#ee1c25"])}<path d="m5 5 4 .8 4-.8v5c0 3-2.4 4.4-4 5.2-1.6-.8-4-2.2-4-5.2z" fill="#fff" stroke="#d7141a" strokeWidth=".5" /><path d="M8.5 7v6m-2.5-3h5" stroke="#0b4ea2" strokeWidth=".8" /></>,
    CZE: <><>{horizontalStripes(["#fff", "#d7141a"])}</><path d="M0 0 15 10 0 20z" fill="#11457e" /></>,
    AUT: <>{horizontalStripes(["#ed2939", "#fff", "#ed2939"])}</>,
    SVN: <>{horizontalStripes(["#fff", "#005da4", "#ed1c24"])}<path d="m5 3 3 .6 3-.6v4c0 2-1.8 3-3 3.6C6.8 10 5 9 5 7z" fill="#fff" stroke="#ed1c24" strokeWidth=".35" /></>,
    HRV: <>{horizontalStripes(["#ff0000", "#fff", "#171796"])}<path d="M12 5h6v5c0 2.4-1.8 3.6-3 4.2-1.2-.6-3-1.8-3-4.2z" fill="#fff" stroke="#171796" strokeWidth=".35" />{Array.from({ length: 5 }, (_, i) => <rect key={i} x={12.5 + (i % 2) * 1.35} y={6 + Math.floor(i / 2) * 1.25} width="1.35" height="1.25" fill={i % 2 ? "#fff" : "#ed1c24"} />)}</>,
    HUN: <>{horizontalStripes(["#ce2939", "#fff", "#477050"])}</>,
    FRA: <>{verticalStripes(["#002395", "#fff", "#ed2939"])}</>,
    BEL: <>{verticalStripes(["#000", "#fae042", "#ed2939"])}</>,
    UZB: <><rect width="30" height="6.3" fill="#1eb5d5" /><rect y="6.3" width="30" height=".65" fill="#d22630" /><rect y="6.95" width="30" height="6.1" fill="#fff" /><rect y="13.05" width="30" height=".65" fill="#d22630" /><rect y="13.7" width="30" height="6.3" fill="#1eb53a" /><path d="M7 2.5a3 3 0 1 0 3.8 4.1A3.5 3.5 0 1 1 7 2.5" fill="#fff" /><circle cx="13" cy="3" r=".55" fill="#fff" /><circle cx="15" cy="3" r=".55" fill="#fff" /><circle cx="17" cy="3" r=".55" fill="#fff" /><circle cx="13" cy="5" r=".55" fill="#fff" /><circle cx="15" cy="5" r=".55" fill="#fff" /></>,
    KAZ: <><rect width="30" height="20" fill="#00afca" /><circle cx="15" cy="8" r="3" fill="#f3d02f" /><path d="M15 4v8m-4-4h8m-6.8-2.8 5.6 5.6m0-5.6-5.6 5.6M4 3v14m-1-2 1 2 1-2m-1-9-1 2h2z" fill="none" stroke="#f3d02f" strokeWidth=".55" /></>,
    AZE: <><>{horizontalStripes(["#00b5e2", "#ef3340", "#509e2f"])}</><circle cx="13.2" cy="10" r="3" fill="#fff" /><circle cx="14.3" cy="9.3" r="2.4" fill="#ef3340" /><path d="m17 7.2.7 1.5 1.7.1-1.3 1.1.4 1.6-1.5-.8-1.5.8.4-1.6-1.3-1.1 1.7-.1z" fill="#fff" /></>,
    KGZ: <><rect width="30" height="20" fill="#e8112d" /><circle cx="15" cy="10" r="5.2" fill="none" stroke="#ffdf00" strokeWidth=".8" /><circle cx="15" cy="10" r="2.2" fill="none" stroke="#ffdf00" strokeWidth=".8" /><path d="M15 4v12M9 10h12M10.8 5.8l8.4 8.4m0-8.4-8.4 8.4" stroke="#ffdf00" strokeWidth=".65" /></>,
    MYS: <><>{Array.from({ length: 7 }, (_, i) => <rect key={i} y={i * 20 / 7} width="30" height={20 / 7 + .1} fill={i % 2 ? "#fff" : "#cc0001"} />)}</><rect width="14" height="10.5" fill="#010066" /><circle cx="5.5" cy="5" r="3.1" fill="#ffcc00" /><circle cx="6.5" cy="4.3" r="2.5" fill="#010066" /><path d="m9.5 2.8.65 1.45 1.6.1-1.2 1 .35 1.5-1.4-.75-1.4.75.35-1.5-1.2-1 1.6-.1z" fill="#ffcc00" /></>,
    NPL: <><path d="M5 1h16L13 9h8L9 19H5z" fill="#dc143c" stroke="#003893" strokeWidth="2" strokeLinejoin="round" /><circle cx="10.5" cy="5" r="1.5" fill="#fff" /><path d="M10 12a3 3 0 0 0 5.5 1.7A4 4 0 0 1 10 12" fill="#fff" /></>
};

function CountryFlag({ code }) {
  return <svg className="country-flag" viewBox="0 0 30 20" role="img" aria-label={`${code} flag`} focusable="false">{COUNTRY_FLAG_ART[code]}</svg>;
}

function Stamp({ country, index, reducedMotion, isSelected }) {
  const rotation = (index * 17) % 35 - 15;
  return <motion.div className={`immigration-stamp ${country.style}${isSelected ? " is-selected-stamp" : ""}`} initial={reducedMotion ? false : { y: -52, rotate: rotation - 12, scale: 0.72, opacity: 0 }} animate={{ y: 0, rotate: rotation, scale: 1, opacity: 0.88 }} transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 560, damping: 23, mass: 0.55, delay: index * 0.02 }}>
    <div className="passport-stamp-head"><CountryFlag code={country.code} /><b>{country.code}</b></div>
    <strong>{country.name}</strong>
    <small>{country.date}</small>
  </motion.div>;
}

function PassportFallbackCover({ onOpen, stamps, reducedMotion }) {
  return <motion.button type="button" className="passport-cover passport-cover-button" aria-label="Open the travel passport and reveal its country stamps" onClick={onOpen} whileHover={reducedMotion ? undefined : { y: -5, rotateY: -5, rotateX: 2 }} whileTap={reducedMotion ? undefined : { scale: 0.98 }}>
    <svg className="passport-cover-emblem" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="43"/><circle cx="50" cy="50" r="34"/><path d="M22 50q28-22 56 0-28 22-56 0zm28-27c-16 17-16 37 0 54 16-17 16-37 0-54zm-27 27h54"/></svg>
    <span className="gold-foil passport-cover-title">PASSPORT</span>
    <span className="gold-foil passport-cover-edition">FIELD NOTES · {COUNTRY_COUNT} COUNTRIES</span>
    <span className="gold-foil passport-cover-owner">ANVESH CHELLUBOINA</span>
    <span className="gold-foil passport-cover-hint">OPEN TO EXPLORE · {COUNTRY_COUNT} COUNTRIES</span>
    <span className="passport-ink-stamps" aria-hidden="true">{stamps.slice(-3).map((country, index) => <span key={country.id} className={`immigration-stamp dropped ${country.style}`} style={{ "--rot": `${index * 11 - 8}deg` }}>{country.code}</span>)}</span>
  </motion.button>;
}

function PassportSpread({ stamps, onClose, isAnimating, reducedMotion, stampedCountryId, stampSelection }) {
  const leftPageCountries = stamps.slice(0, PAGE_BREAK);
  const rightPageCountries = stamps.slice(PAGE_BREAK, COUNTRY_COUNT);
  const pageLabel = (start, end) => `${String(start + 1).padStart(2, "0")}—${String(end).padStart(2, "0")}`;
  return <motion.div className="passport-open" style={{ transformOrigin: "left center" }} initial={reducedMotion ? false : { rotateY: -82, opacity: 0, scale: 0.94 }} animate={{ rotateY: 0, opacity: 1, scale: 1 }} exit={{ rotateY: reducedMotion ? 0 : -42, opacity: 0, scale: reducedMotion ? 1 : 0.98 }} transition={{ duration: reducedMotion ? 0 : 0.78, ease: [0.2, 0.8, 0.2, 1] }}>
    <div className="passport-page-left">
      <div className="passport-page-heading"><span>ENTRY RECORD · {pageLabel(0, leftPageCountries.length)}</span><span>DEPARTURES</span></div>
      <div className="passport-page-stamps">{leftPageCountries.map((country, index) => <Stamp key={`${country.id}-${country.id === stampedCountryId ? stampSelection : "idle"}`} country={country} index={index} reducedMotion={reducedMotion} isSelected={country.id === stampedCountryId} />)}</div>
      <small className="passport-page-footer">ANVESH CHELLUBOINA · FIELD NOTES</small>
    </div>
    <span className="passport-spine" aria-hidden="true" />
    <div className="passport-page-right">
      <div className="passport-page-heading"><span>ENTRY RECORD · {pageLabel(PAGE_BREAK, PAGE_BREAK + rightPageCountries.length)}</span><span>ARRIVALS</span></div>
      <div className="passport-page-stamps">{rightPageCountries.map((country, index) => <Stamp key={`${country.id}-${country.id === stampedCountryId ? stampSelection : "idle"}`} country={country} index={index + 12} reducedMotion={reducedMotion} isSelected={country.id === stampedCountryId} />)}</div>
      <div className="passport-page-controls">
        <span aria-live="polite">{isAnimating ? `STAMPING ${stamps.length} / ${COUNTRY_COUNT}` : `${COUNTRY_COUNT} COUNTRIES EXPLORED`}</span>
        <button type="button" className="passport-close" onClick={onClose}>Close passport</button>
      </div>
    </div>
  </motion.div>;
}

function FieldNotesPage({ onClose, onStampCountry, iconOnly, onToggleIconOnly, reducedMotion }) {
  return <motion.div className="passport-field-page" initial={reducedMotion ? false : { opacity: 0, scale: 0.96, rotateY: 10 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: reducedMotion ? 0 : 0.35 }}>
    <div className="passport-field-heading"><span>FIELD NOTES</span><strong>{COUNTRY_COUNT} COUNTRIES · 2018—2023</strong></div>
    <button type="button" className="passport-grid-toggle" aria-pressed={iconOnly} onClick={onToggleIconOnly}>{iconOnly ? "Show country details" : "Show flags only"}</button>
    <div id="passport-country-grid" className={`passport-flag-grid${iconOnly ? " icon-only-mode" : ""}`} role="group" aria-label="Countries explored">{COUNTRIES.map((country, index) => <motion.button type="button" layout={!reducedMotion} className={`passport-flag-entry ${country.style}`} key={country.id} data-country-stamp data-country={country.name} aria-label={`Stamp ${country.name} in the passport`} title={`Stamp ${country.name}`} onClick={() => onStampCountry(country.name)} initial={reducedMotion ? false : { opacity: 0, y: 7 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reducedMotion ? 0 : 0.2, delay: reducedMotion ? 0 : index * 0.018 }}>
      <span className="passport-entry-flag"><CountryFlag code={country.code} /></span><span className="passport-entry-details"><strong>{country.name}</strong><small>{country.code} · {country.date}</small></span>
    </motion.button>)}</div>
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
  const [stamps, setStamps] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [webglAvailable, setWebglAvailable] = useState(false);
  const [canvasRequested, setCanvasRequested] = useState(false);
  const [stampedCountryId, setStampedCountryId] = useState(null);
  const [stampSelection, setStampSelection] = useState(0);
  const [iconOnly, setIconOnly] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const hostRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    document.querySelectorAll(".field-notes").forEach(button => {
      button.setAttribute("aria-pressed", String(iconOnly));
    });
  }, [iconOnly]);

  const openPassport = useCallback(mode => {
    setPassportMode(mode);
    setIsOpen(true);
  }, []);

  const stampCountry = useCallback(identifier => {
    const value = String(identifier || "").trim().toLocaleLowerCase();
    const country = COUNTRIES.find(item => item.name.toLocaleLowerCase() === value || item.code.toLocaleLowerCase() === value);
    if (!country) {
      setAnnouncement(`No passport country matches “${identifier}”.`);
      return;
    }
    setStampedCountryId(country.id);
    setStampSelection(selection => selection + 1);
    setAnnouncement(`${country.name} passport stamp selected.`);
    openPassport("countries");
  }, [openPassport]);

  useEffect(() => {
    const openFieldNotes = () => openPassport("field-notes");
    const toggleCountryView = () => {
      setIconOnly(current => !current);
      openPassport("field-notes");
    };
    const handleStampCountry = event => stampCountry(event.detail?.country);
    const handleExternalTrigger = event => {
      const trigger = event.target instanceof Element
        ? event.target.closest(".field-notes, [data-country-stamp]")
        : null;
      if (!trigger || hostRef.current?.contains(trigger)) return;
      const country = trigger.dataset.country || trigger.dataset.countryName;
      if (country) {
        window.dispatchEvent(new CustomEvent("stamp-country", { detail: { country } }));
      } else {
        window.dispatchEvent(new CustomEvent("passport:toggle-country-view"));
      }
      hostRef.current?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "center" });
    };
    window.addEventListener("passport:open-field-notes", openFieldNotes);
    window.addEventListener("passport:toggle-country-view", toggleCountryView);
    window.addEventListener("stamp-country", handleStampCountry);
    document.addEventListener("click", handleExternalTrigger);
    return () => {
      window.removeEventListener("passport:open-field-notes", openFieldNotes);
      window.removeEventListener("passport:toggle-country-view", toggleCountryView);
      window.removeEventListener("stamp-country", handleStampCountry);
      document.removeEventListener("click", handleExternalTrigger);
    };
  }, [openPassport, reducedMotion, stampCountry]);

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
    }, index * 36));
    return () => timers.forEach(window.clearTimeout);
  }, [isOpen, passportMode]);

  const closePassport = () => {
    setIsOpen(false);
    setStamps([]);
    setStampedCountryId(null);
    setAnnouncement("");
  };

  return <div className="passport-viewer" ref={hostRef}>
    <div className="passport-viewer-route" aria-hidden="true" />
    {!isOpen && <div className="passport-viewer-actions" role="group" aria-label="Open passport view">
      <button type="button" onClick={() => openPassport("field-notes")}>FIELD NOTES</button>
      <button type="button" aria-pressed={iconOnly} onClick={() => {
        setIconOnly(current => !current);
        openPassport("field-notes");
      }}>{COUNTRY_COUNT} COUNTRIES EXPLORED</button>
    </div>}
    <div className="passport-object-slot">
      <AnimatePresence mode="wait" initial={false}>
        {isOpen ? passportMode === "field-notes" ? <FieldNotesPage key="field-notes" onClose={closePassport} onStampCountry={stampCountry} iconOnly={iconOnly} onToggleIconOnly={() => setIconOnly(current => !current)} reducedMotion={Boolean(reducedMotion)} /> : <PassportSpread key="country-stamps" stamps={stamps} onClose={closePassport} isAnimating={isAnimating} reducedMotion={Boolean(reducedMotion)} stampedCountryId={stampedCountryId} stampSelection={stampSelection} /> : <div className="passport-cover-stage" key="closed-passport">
          {webglAvailable && canvasRequested && <div className="passport-canvas" aria-hidden="true"><ErrorBoundary onError={() => setWebglAvailable(false)}><Suspense fallback={null}><PassportCanvas onOpen={() => openPassport("countries")} reducedMotion={Boolean(reducedMotion)} hostRef={hostRef} /></Suspense></ErrorBoundary></div>}
          <PassportFallbackCover onOpen={() => openPassport("countries")} stamps={stamps} reducedMotion={Boolean(reducedMotion)} />
        </div>}
      </AnimatePresence>
    </div>
    <span className="sr-only" role="status" aria-live="polite">{announcement || (isOpen ? "Passport opened. Country stamps are being revealed." : "Passport closed.")}</span>
  </div>;
}

class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch() { this.props.onError?.(); }
  render() { return this.state.hasError ? null : this.props.children; }
}
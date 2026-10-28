import React from "react";
import { FlightPaths } from "./FlightPaths.jsx";
import { PassportViewer } from "./PassportViewer.jsx";

export function HeroSection() {
  return <section className="hero section-wrap">
    <FlightPaths />
    <div className="hero-copy">
      <p className="eyebrow"><span className="eyebrow-line" /> Dubai, UAE · Open to meaningful opportunities</p>
      <h1><span className="line"><span>Good work.</span></span><span className="line"><em>Curious journeys.</em></span></h1>
      <p className="hero-intro">I’m Anvesh — an engineering and operations professional who enjoys bringing structure to complex work, helping people tell their stories, and finding the beauty in places beyond the usual route.</p>
      <div className="hero-actions"><a className="button button-dark" href="#contact">Get in touch <span>↘</span></a><a className="text-link" href="#work">Explore my services <span>↘</span></a></div>
      <div className="hero-facts"><div><strong>12+</strong><span>years in engineering & operations</span></div><div><strong>MSc</strong><span>Project Management · Merit</span></div><div><strong>24</strong><span>countries explored</span></div></div>
    </div>
    <div className="hero-visual" role="group" aria-label="Interactive travel passport">
      <PassportViewer />
    </div>
  </section>;
}
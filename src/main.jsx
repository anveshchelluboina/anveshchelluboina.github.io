import React from "react";
import { createRoot } from "react-dom/client";
import { HeroSection } from "./components/HeroSection.jsx";
import "./styles/passport.css";

const root = document.getElementById("hero-root");
if (root) createRoot(root).render(<HeroSection />);
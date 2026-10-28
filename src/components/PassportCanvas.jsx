import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei/core/ContactShadows.js";
import { RoundedBox } from "@react-three/drei/core/RoundedBox.js";
import * as THREE from "three";

function makeCoverTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 640;
  canvas.height = 940;
  const context = canvas.getContext("2d");
  context.fillStyle = "#112A1B";
  context.fillRect(0, 0, canvas.width, canvas.height);
  let seed = 28;
  for (let index = 0; index < 850; index += 1) {
    seed = seed * 16807 % 2147483647;
    const x = seed / 2147483647 * canvas.width;
    seed = seed * 16807 % 2147483647;
    const y = seed / 2147483647 * canvas.height;
    context.fillStyle = index % 2 ? "rgba(255,255,255,.025)" : "rgba(0,0,0,.055)";
    context.fillRect(x, y, 2, 2);
  }
  context.strokeStyle = "rgba(207,174,113,.75)";
  context.lineWidth = 3;
  context.beginPath();
  context.roundRect(30, 30, 580, 880, 22);
  context.stroke();
  context.fillStyle = "#D4AF37";
  context.textAlign = "center";
  context.font = "600 24px Georgia, serif";
  context.fillText("UNITED ARAB EMIRATES", 320, 104);
  context.beginPath();
  context.arc(320, 375, 93, 0, Math.PI * 2);
  context.stroke();
  context.beginPath();
  context.arc(320, 375, 78, 0, Math.PI * 2);
  context.stroke();
  context.fillStyle = "#F5F2EB";
  context.font = "500 55px Georgia, serif";
  context.fillText("PASSPORT", 320, 548);
  context.fillStyle = "#D4AF37";
  context.font = "600 20px sans-serif";
  context.fillText("FIELD NOTES  ·  24 COUNTRIES", 320, 603);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

function PassportModel({ onOpen, reducedMotion }) {
  const group = useRef();
  const coverTexture = useMemo(makeCoverTexture, []);
  const { pointer } = useThree();
  useEffect(() => () => coverTexture.dispose(), [coverTexture]);
  useFrame((_, delta) => {
    if (!group.current) return;
    const targetX = reducedMotion ? 0 : pointer.y * 0.12;
    const targetY = reducedMotion ? 0 : -pointer.x * 0.2;
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, targetX, 4, delta);
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetY, 4, delta);
  });

  return <group ref={group}>
    <RoundedBox args={[2.12, 3.12, 0.18]} radius={0.09} smoothness={5} castShadow receiveShadow onClick={onOpen}>
      <meshPhysicalMaterial color="#112A1B" roughness={0.36} metalness={0.08} clearcoat={0.3} clearcoatRoughness={0.42} />
    </RoundedBox>
    <mesh position={[0, 0, 0.094]} onClick={onOpen}>
      <planeGeometry args={[2.08, 3.08]} />
      <meshBasicMaterial map={coverTexture} transparent toneMapped={false} />
    </mesh>
  </group>;
}

function PassportCanvasLifecycle({ hostRef }) {
  const { gl } = useThree();
  useEffect(() => {
    hostRef.current?.classList.add("passport-webgl-ready");
    return () => hostRef.current?.classList.remove("passport-webgl-ready");
  }, [hostRef]);
  useEffect(() => {
    const canvas = gl.domElement;
    const lost = event => {
      event.preventDefault();
      hostRef.current?.classList.add("passport-webgl-fallback");
    };
    canvas.addEventListener("webglcontextlost", lost);
    return () => canvas.removeEventListener("webglcontextlost", lost);
  }, [gl, hostRef]);
  return null;
}

function PassportScene({ onOpen, reducedMotion }) {
  return <>
    <ambientLight intensity={1.15} />
    <directionalLight position={[-3, 5, 6]} intensity={2.1} castShadow shadow-mapSize={[512, 512]} />
    <directionalLight position={[4, 1, 2]} intensity={0.65} color="#e4c78e" />
    <PassportModel onOpen={onOpen} reducedMotion={reducedMotion} />
    <ContactShadows position={[0, -1.72, -0.1]} opacity={0.24} scale={4.2} blur={2.4} far={3.5} resolution={256} />
  </>;
}

export function PassportCanvas({ onOpen, reducedMotion, hostRef }) {
  const [inView, setInView] = useState(true);
  useEffect(() => {
    if (!("IntersectionObserver" in window) || !hostRef.current) return undefined;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin: "80px" });
    observer.observe(hostRef.current);
    return () => observer.disconnect();
  }, [hostRef]);

  return <Canvas shadows dpr={[1, 1.5]} frameloop={inView && !reducedMotion ? "always" : "demand"} camera={{ position: [0, 0, 6.6], fov: 34 }} gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}>
    <Suspense fallback={null}>
      <PassportCanvasLifecycle hostRef={hostRef} />
      <PassportScene onOpen={onOpen} reducedMotion={reducedMotion} />
    </Suspense>
  </Canvas>;
}
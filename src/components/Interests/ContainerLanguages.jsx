import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Languages from "./Languages";
const ContainerLanguages = () => {
  return (
    <>
    <Canvas>
    <Suspense fallback={null}>
      <Stage environment="city" intensity={0.6} scale={1}>
        <Languages />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate />
    </Suspense>
  </Canvas>
  <p className="description_interests">I'm B2 in English, B1+ in Spanish and i have some basics of German and japanese</p>
  </>
  )
}

export default ContainerLanguages

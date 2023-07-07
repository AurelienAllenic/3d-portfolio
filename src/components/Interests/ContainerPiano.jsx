import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Piano from "./Piano";

const ContainerPiano = () => {
  return (
    <>
    <Canvas>
    <Suspense fallback={null}>
      <Stage environment="city" intensity={0.6} scale={1}>
        <Piano />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate />
    </Suspense>
  </Canvas>
  <p className="description_interests">Practicing on classical and sometimes on joe Hisaishi's music</p>
  </>
  )
}

export default ContainerPiano

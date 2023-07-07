import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Chess from "./Chess";

const ContainerMartial = () => {
  return (
    <>
    <Canvas>
    <Suspense fallback={null}>
      <Stage environment="city" intensity={0.6} scale={1}>
        <Chess />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate />
    </Suspense>
  </Canvas>
  <p className="description_interests">I learned for myself and I'm playing for fun since 2007</p>
  </>
  )
}

export default ContainerMartial

import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Card from "./Card";

const ContainerCard = () => {
  return (
    <>
    <Canvas>
    <Suspense fallback={null}>
      <Stage environment="city" intensity={0.6} scale={1}>
        <Card />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate />
    </Suspense>
  </Canvas>
  <p className="description_interests">Since 2013, I've been practicing and sometimes perfoming in events</p>
  </>
  )
}

export default ContainerCard

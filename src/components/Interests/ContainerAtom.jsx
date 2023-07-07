import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Atom from './Atom'


const ContainerAtom = () => {
  return (
    <>
    <Canvas>
    <Suspense fallback={null}>
      <Stage environment="city" intensity={0.6} scale={1}>
        <Atom />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate />
    </Suspense>
  </Canvas>
  <p className="description_interests">I would like to work as a front or fullStack developer, using Reactjs and nodejs</p>
  </>
  )
}

export default ContainerAtom

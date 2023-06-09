import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Mac from './Mac';

const ContainerMac = () => {
  return (
<>
    <Canvas>
    <Suspense fallback={null}>
      <Stage environment="city" intensity={0.6}>
        <Mac />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate />
    </Suspense>
  </Canvas>
  <p className="description">I am fully ready to design and create innovative websites!<br />Do not hesitate to take a look...</p>
  </>
  )
}

export default ContainerMac

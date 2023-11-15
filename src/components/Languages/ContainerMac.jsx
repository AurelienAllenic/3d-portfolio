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
        
      </Stage>
      <OrbitControls enableZoom={false} autoRotate />
    </Suspense>
  </Canvas>
  </>
  )
}

export default ContainerMac

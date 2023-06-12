import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import { Clock } from "three";
import Mail from "./Mail";

const ContainerMail = () => {
  const modelRef = useRef();
  const clock = new Clock();
  const speed = 3; // Adjust the speed value to increase/decrease animation speed

  const animate = () => {
    const delta = clock.getDelta();

    // Update rotation based on the delta and speed
    modelRef.current.rotation.y += delta * speed * (Math.PI * 2); // Increase the rotation speed (three times faster)

    // Request the next animation frame
    requestAnimationFrame(animate);
  };

  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6} scale={3}>
            <Mail ref={modelRef} />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
    </>
  );
};

export default ContainerMail;
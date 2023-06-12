import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";
import Martial from "./Martial";

const Desc = styled.div`
  width: 350px;
  height: auto;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  bottom: 200px;
  right: 100px;
  letter-spacing: 0.07em;
@media(max-width: 1073px){
    font-size: 0.8em;
    right: 20px;
}
@media(max-width: 603px){
    font-size: 0.8em;
    right: 20px;
    width: 250px;
}
@media(max-width: 443px){
    font-size: 0.7em;
    right: 20px;
    width: 200px;
}
@media(max-width: 368px){
    font-size: 0.67em;
    bottom: 220px;
    right: 10px;
}
`;
const ContainerMartial = () => {
  return (
    <>
    <Canvas>
    <Suspense fallback={null}>
      <Stage environment="city" intensity={0.6} scale={1}>
        <Martial />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate />
    </Suspense>
  </Canvas>
    <Desc>
    J'ai pu commencer jeune les arts martiaux par le judo, j'ai ensuite pratiqué du Wing Chun avant de me tourner vers le Fut Ga, un art martial de Chine du nord.
  </Desc>
  </>
  )
}

export default ContainerMartial

import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";
import Card from "./Card";

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
    <Desc>
    Je m'entraîne depuis l'âge de treize ans et ai déja performé lors de soirées privées mais aussi lors d'animations pour enfants.
  </Desc>
  </>
  )
}

export default ContainerCard

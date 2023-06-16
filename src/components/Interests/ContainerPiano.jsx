import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";
import Piano from "./Piano";

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
    bottom: -45%;
    right: 40px;
    width: 250px;
}
@media(max-width: 330px){
    right: 0px;
}
@media(max-width: 292px){
    width: 200px;
}
@media(max-width: 246px){
    width: 150px;
    font-size: 0.6em;
}
`;
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
    <Desc>
    Ayant commencé à pratiquer dès l'âge de sept ans, je m'entraîne tant sur du Beethoven, Debussy que du Joe Hisaishi.
  </Desc>
  </>
  )
}

export default ContainerPiano

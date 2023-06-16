import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";
import Atom from './Atom'

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
    <Desc>
    Suite à une pratique autodidacte, je suis entré en année de Bachelor à l'ETNA pour finalement choisir de suivre une formation de développeur web chez Openclassrooms, avant d'enchaîner sur une formation React.
  </Desc>
  </>
  )
}

export default ContainerAtom

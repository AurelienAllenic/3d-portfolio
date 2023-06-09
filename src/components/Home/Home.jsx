import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stage } from "@react-three/drei";
import Globe from "./Globe"
import './home.css'

const Home = () => {
  return (
<section id="home" className="section-home">

<div className="container">
    <article className="container_infos">
      <h1 className="main-title">Aurélien Allenic</h1>
      <h2 className="second-title">Web Developper</h2>
      <div className="container-cv-letter">
            <button className="btn">
                <a href="" className="linkHome cv">Download CV</a>
            </button>
            <button className="btn">
            <a href="" className="linkHome letter">Read Motivation Letter</a>
        </button>
      </div>
    </article>
    <article className="container-3D-globe" >
    <Canvas className="animation-apparition">
    <Suspense fallback={null}>
      <Stage environment="city" intensity={0.5}>
        <Globe />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate/>
    </Suspense>
  </Canvas>
    </article>
    </div>
</section>
  )
}

export default Home





import React, { useState, useRef, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, OrbitControls } from "@react-three/drei";

const FrontEnd = () => {
  const [isInView, setIsInView] = useState(false);
  const canvasRef = useRef();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    return () => {
      if (canvasRef.current) {
        observer.unobserve(canvasRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className='card_front' >
        <h1 className='main_title_card underline'>Front End</h1>
        <div className='container_list_dev'>
          <ul className='list_card'>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>ThreeJs</li>
          </ul>
        </div>
      </div>
      <div className='position-animation-front' ref={canvasRef}>
        {isInView && (
          <Canvas id='canva'>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.5}>
              <MeshDistortMaterial color="#101010" distort={0.5} speed={1} />
            </Sphere>
          </Canvas>
        )}
      </div>
    </>
  );
}

export default FrontEnd;

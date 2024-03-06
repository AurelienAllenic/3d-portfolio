import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, OrbitControls, Stage } from "@react-three/drei";
import { Python } from './Python';

const BackEnd = () => {
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
      <div className='card_front'>
        <h1 className='main_title_card underline'>Back End</h1>
        <div className='container_list_dev'>
          <ul className='list_card'>
            <li>nodeJS</li>
            <li>MongoDb</li>
            <li>Python</li>
            <li>Django</li>
          </ul>
        </div>
      </div>
      <div className='position-animation-front' ref={canvasRef}>
        {isInView && (
          <Canvas>
          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.6} scale={1.5}>
              <Python />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
          </Suspense>
        </Canvas>
        )}
      </div>
    </>
  );
}

export default BackEnd;
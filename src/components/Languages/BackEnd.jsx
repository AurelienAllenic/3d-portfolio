import React from 'react'
import { Canvas } from "@react-three/fiber"
import { MeshDistortMaterial, Sphere, OrbitControls } from "@react-three/drei"

const BackEnd = () => {
  return (
    <>
    <div>
          <div className='card_front'>
        <h1 className='main_title_card underline'>Back End</h1>
        <div className='container_list_dev'>
        <ul className='list_card'>
            <li>nodeJS</li>
            <li>MongoDb</li>
            <li>Php</li>
            <li>MySql</li>
        </ul>
        </div>
    </div>
    </div>
     <div className='position-animation-front'>
     <Canvas id='canva'>
     <OrbitControls enableZoom={false}/>
     <ambientLight intensity={1} />
     <directionalLight position={[3,2,1]}/>
    <Sphere args={[1,100,200]} scale={2.5}>
     <MeshDistortMaterial color="#093542" distort={0.5} speed={1} />
    </Sphere>
    
 
 </Canvas>
 </div>
 </>
  )
}

export default BackEnd

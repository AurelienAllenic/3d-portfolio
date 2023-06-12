import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Piano(props) {
  const { nodes, materials } = useGLTF("/piano.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/piano.gltf");

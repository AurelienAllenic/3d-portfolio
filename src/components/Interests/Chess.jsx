/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: syeds shoaib (https://sketchfab.com/syeds)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/chess-piece-king-6cfbb5175042404381393d564d74dfc3
title: Chess Piece King
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Chess(props) {
  const { nodes, materials } = useGLTF("/chess.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[537.55, 101.98, 345.61]}
            rotation={[-Math.PI / 2, 0, 2.03]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle_Material002_0.geometry}
              material={materials["Material.002"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/chess.gltf");

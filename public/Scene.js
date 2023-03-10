/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Ivanix88 (https://sketchfab.com/Ivanix88)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/christmas-ball-36868988285f4b60b3e389e1aa1bab3f
title: Christmas Ball
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 110, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.glass_glass_0.geometry} material={materials.glass} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.christmass_ball_inside_0.geometry} material={materials.inside} />
            <mesh geometry={nodes.christmass_ball_ouline_0.geometry} material={materials.ouline} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')

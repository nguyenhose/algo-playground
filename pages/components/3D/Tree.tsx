
import React, {  useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import { GhibliShader } from "./GhibliShader";
import { Vector3 } from 'three';
export const Tree  = ((props) => {
  const { nodes } = useGLTF('/trees.glb')
  const uniforms = useMemo(
    () => ({
      colorMap: {
        value: props.colors,
      },
      brightnessThresholds: {
        value: [0.6, 0.35, 0.001],
      },
      lightPosition: { value: new Vector3(15, 15, 15) },
    }),
    [props.colors]
  );
  return (
    <group  dispose={null} position={[-3, 3, -3]}>
      <mesh
        castShadow
        receiveShadow
         //@ts-expect-error nodes expose
        geometry={nodes.Foliage.geometry}
        position={[0.327, -0.046, -0.684]}
      >
          <shaderMaterial attach="material" {...GhibliShader}
          uniforms={uniforms} />
          {/* <meshStandardMaterial /> */}
      </mesh>
      <mesh position={[.5, -2, -1]}>
        <cylinderGeometry args={[.3, .5, 3, 10]}/>
        <meshToonMaterial color={0xac6722} />
      </mesh>    
    </group>
  )
});

useGLTF.preload('/trees.glb')

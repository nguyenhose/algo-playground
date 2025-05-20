
import React, {  useMemo, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GhibliShader } from "./GhibliShader";
import { Vector3, Object3D } from 'three';
import { useFrame } from '@react-three/fiber';
export const Tree  = ((props) => {
  console.log("props", props)
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
  const t = useRef(Object3D);
  useFrame(() => {
    // this.rotation.x = this.rotation.y += 0.01;
    // t.rotation.x = t.rotation.y += 0.01
    // t.current!.rotation.y += 0.01;
  })
  return (
    <group  dispose={null} position={props.position} ref={t}>
      <mesh
        castShadow
        receiveShadow
         //@ts-expect-error nodes expose
        geometry={nodes.Foliage.geometry}
        position={[0, 4, 0]}
      >
        {/* <shaderMaterial attach="material" {...GhibliShader}
          uniforms={uniforms} />  */}
          {/* <meshStandardMaterial /> */}
          <meshToonMaterial color={0xeeffff} />
      </mesh>
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[.3, .5, 3, 10]}/>
        <meshToonMaterial color={0xac6722} />
        {/* <meshStandardMaterial /> */}
      </mesh>    
    </group>
  )
});

useGLTF.preload('/trees.glb')

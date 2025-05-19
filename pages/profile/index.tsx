import { Canvas } from '@react-three/fiber';
import Plane  from '../components/3D/Plane'
import {Tree}  from '../components/3D/Tree'
import { OrbitControls } from '@react-three/drei';
import { Color } from 'three';
import { useRef } from 'react';
import FlickeringFireLight from '../components/3D/PointLight';
export default function Profile() {
  const refTree = useRef(null);
  return (
    <div className="w-screen h-screen bg-amber-950 text-white">
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [15, 5, 0]} } shadows> 
        <ambientLight intensity={.1} />
        <directionalLight    
          color="white"
          position={[15, 15, 15]}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <Plane />
        <Tree
        ref={refTree}
        position={[0, 0, 4]}
        colors={[
          new Color("#4a8d7e").convertLinearToSRGB(),
          new Color("#377f6a").convertLinearToSRGB(),
          new Color("#184f52").convertLinearToSRGB(),
          new Color("#143b36").convertLinearToSRGB(),
        ]}/>
        <OrbitControls />
        <mesh position={[0, -4, 5]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial emissive="orange" emissiveIntensity={3} />
        </mesh>
        <FlickeringFireLight />
      </Canvas>
      <div className="font-mono absolute top-[70%] text-white text-center text-4xl  w-screen justify-center">
        Have some chill..
      </div>
    </div>
  )
}
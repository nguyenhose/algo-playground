import { Canvas } from '@react-three/fiber';
import Plane from '../components/3D/Plane'
import { Tree } from '../components/3D/Tree'
import { OrbitControls } from '@react-three/drei';
import { Color } from 'three';
import {  useEffect, useRef } from 'react';
import FlickeringFireLight from '../components/3D/PointLight';
import Guard from '../components/3D/Guard';
export default function Profile() {
  const _canvas = useRef(null)
  useEffect(() => {
    console.log("use effect") ;
  })
  return (
    <div className="w-screen h-screen bg-black text-white">

      <Canvas 
      camera={{ fov: 75, near: 0.1, far: 1000, position: [15, 5, 0] }} shadows ref={_canvas}>
        <ambientLight intensity={.01} />
        <directionalLight
          color="orange"
          position={[15, 15, 15]}
          // castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={512}
          intensity={.5}
        />
        <Plane />
        <Tree
          position={[-5, 0, 4]}
          colors={[
            new Color("#4a8d7e").convertLinearToSRGB(),
            new Color("#377f6a").convertLinearToSRGB(),
            new Color("#184f52").convertLinearToSRGB(),
            new Color("#143b36").convertLinearToSRGB(),
          ]} />
        <Tree
          position={[-3, 0, -4]}
          colors={[
            new Color("#4a8d7e").convertLinearToSRGB(),
            new Color("#377f6a").convertLinearToSRGB(),
            new Color("#184f52").convertLinearToSRGB(),
            new Color("#143b36").convertLinearToSRGB(),
          ]} />
        <Tree
          position={[-8, 0, 0]}
          colors={[
            new Color("#4a8d7e").convertLinearToSRGB(),
            new Color("#377f6a").convertLinearToSRGB(),
            new Color("#184f52").convertLinearToSRGB(),
            new Color("#143b36").convertLinearToSRGB(),
          ]} />
            <Tree
          position={[-10, 0, -3]}
          colors={[
            new Color("#4a8d7e").convertLinearToSRGB(),
            new Color("#377f6a").convertLinearToSRGB(),
            new Color("#184f52").convertLinearToSRGB(),
            new Color("#143b36").convertLinearToSRGB(),
          ]} />
        <OrbitControls />
        <FlickeringFireLight
        />
        <Guard position={[-2, 0, 3]} />
      </Canvas>
      <div className="font-mono absolute top-[70%] text-white text-center text-4xl  w-screen justify-center">
        Well met, wanderer...
      </div>
    </div>
  )
}
import { Canvas } from '@react-three/fiber';
import Plane  from '../components/3D/Plane'
import {Tree}  from '../components/3D/Tree'
import { OrbitControls } from '@react-three/drei';
import { Color } from 'three';
export default function Profile() {
  return (
    <div className="w-screen h-screen bg-black text-white">
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [15, 5, 0]} }> 
        <ambientLight intensity={.5} />
        <directionalLight position={[0, 0, 5]} color="red" />
        <pointLight position={[0, 2, 0]} color="red"  distance={50} intensity={100}  castShadow/>
        <Plane />
        <Tree  position={[0, 0, 4]}
        colors={[
          new Color("#4a8d7e").convertLinearToSRGB(),
          new Color("#377f6a").convertLinearToSRGB(),
          new Color("#184f52").convertLinearToSRGB(),
          new Color("#143b36").convertLinearToSRGB(),
        ]}/>
        <OrbitControls />
      </Canvas>
      <div className="absolute top-[55%] text-white text-center text-7xl  w-screen justify-center">
        Have some chill..
      </div>
    </div>
  )
}
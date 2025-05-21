import { Canvas } from '@react-three/fiber';
import { gsap } from "gsap"
import Plane from '../../components/Plane'
import { Tree } from '../../components/Tree'
import { OrbitControls } from '@react-three/drei';
import { Color } from 'three';
import { useRef } from 'react';
import FlickeringFireLight from '../../components/PointLight';
import Guard from '../../components/Guard';
import { CameraInitial } from '@/components/CameraInitial';
import {SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

export default function Profile() {
  const _canvas = useRef(null);
  const welcomeText = "Well met, traveler!";
  let splitText: SplitText;
  const textRef = useRef<HTMLDivElement>(null);
  return (
    <div className="w-screen h-screen bg-black text-white">
      <Canvas
        shadows ref={_canvas}
        camera={{
          position: [0, 5, 100],
          fov: 50,
          near: 0.1,
          far: 1000,
        }}
      >
        <CameraInitial onStopAnimation={() => {
          if (textRef.current) {
            textRef.current.textContent = welcomeText;
            splitText = new SplitText(textRef.current, { type: "chars" });
            gsap.from(splitText.chars, {
              y: 20,
              autoAlpha: 0,
              stagger: 0.05
            })
          }

        }} />
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
          position={[-2.5, 0, 3.5]}
          colors={[
            new Color("#4a8d7e").convertLinearToSRGB(),
            new Color("#377f6a").convertLinearToSRGB(),
            new Color("#184f52").convertLinearToSRGB(),
            new Color("#143b36").convertLinearToSRGB(),
          ]} />
        <Tree
          position={[-1, 0, -4]}
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
          position={[-12, 0, -3]}
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
      <div className="font-mono absolute top-[70%] text-white text-center text-4xl  w-screen justify-center" ref={textRef}>
      </div>
    </div>
  )
}
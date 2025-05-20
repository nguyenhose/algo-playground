import { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { getParticleSystem } from './particle';
import { log } from 'console';

function FlickeringFireLight(prop) {
  const lightRef = useRef();
  const time = useRef(0);
  const _fire = useRef(0);
  let fireComponent = null;
const { camera, scene } = useThree();
  useEffect(() => {
      fireComponent = getParticleSystem({
        camera: camera,
        emitter: _fire.current,
        parent: scene,
        rate: 50,
        texture: '/fire.png'
      })
  })

  useFrame((_, delta) => {
    time.current += delta;

    const baseIntensity = 22;
    const flicker =
      Math.sin(time.current * 4) * .1 +  // slow
      Math.sin(time.current * 13.7) * .1 + // mid
      Math.sin(time.current * 27.5) * .5; // fast jitter

    if (lightRef.current) {
      lightRef.current.intensity = baseIntensity + flicker;
    }
    if (fireComponent) {
      fireComponent.update(0.006);
    }
  });

  return (
    <mesh position={[0, -.1, 0]} ref={_fire} rotation={[-Math.PI / 2, 0, 0]} >
      {/* <sphereGeometry args={[0.3, 32, 32]} /> */}
      <torusGeometry args={[.8, .2, 10, 20]}  />
      <meshToonMaterial color={0xac6722}  />
      <pointLight
        ref={lightRef}
        color="orange"
        distance={20}
        decay={2}
        castShadow
      />
    </mesh>
  );
}
export default FlickeringFireLight;
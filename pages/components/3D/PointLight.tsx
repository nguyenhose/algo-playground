import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function FlickeringFireLight() {
  const lightRef = useRef();

  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.intensity = 10 + Math.random() * 3;
      lightRef.current.position.x = 3 * (Math.random() - 0.5);
      lightRef.current.position.z = 3* (Math.random() - 0.5);
    }
  });

  return (
    <pointLight
      ref={lightRef}
      position={[0, 1, 0]}
      color="orange"
      distance={10}
      decay={2}
      castShadow
    />
  );
}
export default FlickeringFireLight;
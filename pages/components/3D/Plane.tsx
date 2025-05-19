
export default function Plane() {
  return (
  <mesh rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow position={[0, -3.3, 0]}>
    <planeGeometry args={[10, 10, 1, 1]} />
    <shadowMaterial opacity={0.4} />
  </mesh>
  )
}
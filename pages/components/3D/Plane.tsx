
export default function Plane() {
  return (
  <mesh rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow position={[-5, 0, 0]}>
    <planeGeometry args={[15, 20, 1, 1]} />
    {/* <shadowMaterial opacity={0.4} /> */}
    <meshStandardMaterial color={'gray'}/>
  </mesh>
  )
}
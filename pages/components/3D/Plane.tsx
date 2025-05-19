
export default function Plane() {
  return (
  <mesh rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow>
    <planeGeometry args={[10, 10, 1, 1]} />
    <meshStandardMaterial color={0xac6722}/>
  </mesh>
  )
}
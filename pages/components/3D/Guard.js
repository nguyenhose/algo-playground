import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Guard(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Sitting Idle (1).glb')
  const { actions } = useAnimations(animations, group)
  console.log(actions);
  useEffect(() => {
    actions["Armature|mixamo.com|Layer0"].play()
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 180]} scale={0.015}>
          <skinnedMesh
            name="Guard03_Mesh"
            geometry={nodes.Guard03_Mesh.geometry}
            material={materials.Guard_03}
            skeleton={nodes.Guard03_Mesh.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Sitting Idle (1).glb')
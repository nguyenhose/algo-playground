import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Knight(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/cb_knight.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    // actions["Take 001"]?.play();
  }, [actions]);
  return (
    <group ref={group} {...props} dispose={null} position={props.position} rotation={[0, 40, 0]}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={3.472}>
          <group name="lowfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Material_25}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <group name="Object_6" scale={0.01} />
                  <group name="re" position={[-0.002, -0.375, 0]} scale={0.116} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/cb_knight.glb')

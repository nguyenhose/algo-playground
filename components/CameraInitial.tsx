import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { Vector3 } from "three";

interface CameraInitialProps {
  onStopAnimation: () => void
 }
export const CameraInitial = (props: CameraInitialProps) => {
  const { camera } = useThree();
  let stopAnimation = false;
  useEffect(() => {
    camera.position.set(500, 2, 0);
    camera.lookAt(-30, 0, 0);
  })
  useFrame(() => {
    if (camera.position.x < 21) {
      if (stopAnimation == false) {
        stopAnimation = true;
        console.log("stop");
        props.onStopAnimation();
      }
    } else {
      camera.position.lerp(new Vector3(20, 5, 0), 0.1);
      camera.lookAt(-35, 0, -10);
    }
  })
  return (null)
}
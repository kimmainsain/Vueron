import { useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

const Cube = () => {
  const cubeRef = useRef<Mesh>(null);

  useFrame(() => {
    if (cubeRef.current) cubeRef.current.rotation.y -= 0.01;
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry />
    </mesh>
  );
};

export default Cube;

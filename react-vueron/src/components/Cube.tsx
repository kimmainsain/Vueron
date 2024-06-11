import { useState, useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import { CUBE_COLORS } from "../constants/cubeColor";

const Cube = () => {
  const cubeRef = useRef<Mesh>(null);
  const [colorIndex, setColorIndex] = useState(0);

  useFrame(() => {
    if (cubeRef.current) cubeRef.current.rotation.y -= 0.01;
  });

  const handleCubeClick = () => {
    console.log("클릭 확인");
    console.log(CUBE_COLORS[colorIndex]);
    setColorIndex((prev) => (prev + 1) % CUBE_COLORS.length);
  };

  return (
    <>
      <ambientLight />
      <mesh ref={cubeRef} onClick={handleCubeClick}>
        <boxGeometry />
        <meshStandardMaterial color={CUBE_COLORS[colorIndex]} />
      </mesh>
    </>
  );
};

export default Cube;

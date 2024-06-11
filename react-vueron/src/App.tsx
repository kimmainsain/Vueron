import React from "react";
import { Canvas } from "@react-three/fiber";
import Cube from "./components/Cube";

function App() {
  return (
    <Canvas style={{
      width: "100vw",
      height: "100vh",
      backgroundColor: "black",
    }}>
      <Cube />
    </Canvas>
  );
}

export default App;

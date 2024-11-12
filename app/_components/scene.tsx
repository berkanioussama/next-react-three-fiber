'use client'

import { Canvas } from "@react-three/fiber";
import Drone from "@/app/_components/drone";
import { Environment, OrbitControls } from "@react-three/drei";

const Scene = () => {
  return (
    <div className="w-svw h-svh fixed top-0 left-0 z-20">
      <Canvas camera={{ position: [0, 0, 0], fov: 25 }}>
        <Environment preset="city" />
        {/*<OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />*/}
        <Drone/>
      </Canvas>
    </div>
  );
}
 
export default Scene;
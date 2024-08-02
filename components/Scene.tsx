"use client"
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Suspense } from "react";
import { Html, OrbitControls, ScrollControls, useProgress } from "@react-three/drei";

function Loader() {
    const { progress, active } = useProgress()
  
    return <Html center>{progress.toFixed(1)} % loaded</Html>
  }
export default function Scene(){
    return(
        <div className="h-[100vh] w-[100vw]">
         <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="relative h-svh">
            <directionalLight position={[-5,-5,5]} intensity={4}/>
            {/* <OrbitControls/> */}
            <Suspense fallback={<Loader/>}>
                <ScrollControls damping={0.2} pages={2}> 
                    <Model/>
                </ScrollControls>
            </Suspense>
        </Canvas>
        </div>
    )
}
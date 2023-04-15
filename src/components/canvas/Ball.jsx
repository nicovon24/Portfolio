import React, {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Decal, Float, OrbitControls, Preload, useTexture
} from "@react-three/drei"
import CanvasLoader from "../Loader"

const Ball = (props) => {
  const [decal] = useTexture([props.imgURL])
  return (
    <Float speed={1.75} rotationIntensity={0.75} floatIntensity={1.75}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0, 0, 0.05]}/>
      <mesh castShadow receiveShadow scale={2.2}> {/* ball size */}
        <icosahedronGeometry args={[1,1]} />
        <meshStandardMaterial
          color="#e4e2ee"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[ 2 * Math.PI, 0, 6.25]}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  )
}

export const BallCanvas = ({icon}) => {
  return(
    <Canvas
      frameLoop="demand"
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense
        fallback={<CanvasLoader/>} //loader until threejs animation loads
      >
        <OrbitControls 
          enableZoom={false}
        />

        <Ball imgURL={icon}/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default Ball
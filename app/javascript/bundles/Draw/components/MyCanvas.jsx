import React from 'react'
import { Canvas } from 'react-three-fiber'
import MyControls from './MyControls'
import Cloud from './Cloud'

export default function MyCanvas(props) {
  return(
    <Canvas className='h-100' 
      camera={{position:[0, 0, 2]}} 
      gl={{ alpha: false, antialias: false, logarithmicDepthBuffer: true }} >

      <Cloud {...props}/>
      <MyControls />
    </Canvas>
  )
}
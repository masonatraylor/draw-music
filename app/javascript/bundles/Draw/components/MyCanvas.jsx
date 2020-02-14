import React from 'react'
import { Canvas } from 'react-three-fiber'
import MyControls from './MyControls'
import Cloud from './Cloud'
import { VRButton } from 'three/examples/jsm/webxr/VRButton'


export default function MyCanvas(props) {
  return(
    <Canvas className='h-100' 
      camera={{position:[0, 0, 2]}} 
      gl={{ alpha: false, antialias: false, logarithmicDepthBuffer: true }}
      vr
      onCreated={({ gl }) => document.body.appendChild(VRButton.createButton(gl))} >

      <Cloud {...props}/>
      <MyControls />
    </Canvas>
  )
}
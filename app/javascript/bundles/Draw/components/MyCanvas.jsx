import ReactDOM from 'react-dom'
import React, { useRef, useState, useMemo } from 'react'
import { Canvas, extend } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Cloud from './Cloud'
import MyControls from './MyControls'
import { useThree } from 'react-three-fiber'
import Box from './Box'
extend({ OrbitControls })

export default function MyCanvas(props) {
  return(
    <Canvas className='h-100' 
      camera={{position:[0, 0, 2]}} 
      gl={{ alpha: false, antialias: false, logarithmicDepthBuffer: true }} >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cloud {...props} />
      <MyControls />
    </Canvas>
  )
}
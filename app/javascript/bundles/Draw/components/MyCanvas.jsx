import ReactDOM from 'react-dom'
import React, { useRef, useState } from 'react'
import { Canvas, useThree, useFour } from 'react-three-fiber'
import Cloud from './Cloud'
import Box from './Box'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

export default function MyCanvas(props, railsContext, domNodeId) {
  ReactDOM.render(
    <ErrorBoundary>
      <Canvas className='h-100' 
        camera={{position:[0, 0, 8]}} 
        gl={{ alpha: false, antialias: false, logarithmicDepthBuffer: true }} >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Cloud {...props} /> 
      </Canvas>
    </ErrorBoundary>,
    document.getElementById(domNodeId)
  )
}
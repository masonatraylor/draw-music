import React, { useState } from 'react'
import Editor from './Editor'
import MyCanvas from './MyCanvas'

export default function EditorCanvas(props) {
  const [shape, setShape] = useState('plane');
  const [fft, setFft] = useState(Math.pow(2, 14));
  const [particleCount, setParticleCount] = useState(Math.pow(10, 5));
  return (
    <div>
      <Editor {...props} shape={shape} onShapeChange={setShape} fft={fft} onFftChange={setFft} particleCount={particleCount} onParticleCountChange={setParticleCount} />
      <MyCanvas {...props} shape={shape} fft={fft} particleCount={particleCount} />
    </div>
  )
}
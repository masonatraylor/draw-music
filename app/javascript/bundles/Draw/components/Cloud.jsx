import React, { useRef, useMemo } from 'react'
import { useFrame } from 'react-three-fiber'
import * as THREE from 'three'

export default function Cloud(props) {
  const mesh = useRef()
  
  const circleGeometry = new THREE.CircleBufferGeometry(1, 6);
  const circleTexture = useMemo(() => new THREE.TextureLoader().load('/small/circle.png'), []);
  const audioTexture = useMemo(() => new THREE.DataTexture(amplitudeArray, fftSize / 2, 1, THREE.LuminanceFormat ), []);

  useFrame(() => {
    analyserNode.getByteFrequencyData(amplitudeArray);
    if (Math.random() < 0.01)
      console.log(amplitudeArray);
    mesh.current.material.uniforms.tAudioData.value.needsUpdate = true;
    mesh.current.material.uniforms.time.value = performance.now() * 0.0005;
  })


  return (
    <mesh
      ref={mesh}>
      <instancedBufferGeometry attach="geometry" attributes={circleGeometry.attributes} index={circleGeometry.index} >
        <instancedBufferAttribute attachObject={['attributes', 'translate']} count={translateArray.length / 3} array={translateArray} itemSize={3} />
      </instancedBufferGeometry>
      <rawShaderMaterial attach="material" args={[{
        vertexShader: props.v_shader,
        fragmentShader: props.f_shader,
        uniforms: {
          time: {value: 0.0},
          map: {value: circleTexture},
          tAudioData: {value: audioTexture}
        },
        depthTest: true,
        depthWrite: true
      }]} />
    </mesh>
  )
}
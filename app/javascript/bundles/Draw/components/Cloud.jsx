import React, { useRef, useMemo } from 'react'
import { useFrame } from 'react-three-fiber'
import * as THREE from 'three'

export default function Cloud(props) {
  const mesh = useRef()
  
  const translateArray = useMemo(() => {
    const array = new Float32Array(3*props.particleCount);
    for (let i = 0; i < array.length; i++)
      array[i] = Math.random() * 2 - 1;

    return array;
  }, []);

  const circleTexture = useMemo(() => new THREE.TextureLoader().load('/small/circle.png'), []);
  const audioTexture = useMemo(() => new THREE.DataTexture(amplitudeArray, fftSize / 2, 1, THREE.LuminanceFormat ), []);
  const indexes = useMemo(() => new THREE.CircleBufferGeometry(1, 6).index);
  const attributes = useMemo(() => {
    const attributes = new THREE.CircleBufferGeometry(1, 6).attributes;
    attributes.translate = new THREE.InstancedBufferAttribute(translateArray, 3);
    attributes.translate.count = props.particleCount;
    return attributes;
  }, []);

  useFrame(state => {
    analyserNode.getByteFrequencyData(amplitudeArray);
    mesh.current.material.uniforms.tAudioData.value.needsUpdate = true;
    mesh.current.material.uniforms.time.value = state.clock.getElapsedTime() * 0.0005;
  })


  return (
    <mesh ref={mesh}>
      <instancedBufferGeometry attach="geometry" index={indexes} attributes={attributes} />
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
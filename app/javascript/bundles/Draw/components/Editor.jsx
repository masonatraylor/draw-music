import React, { useState } from 'react'
import { Button, Slider } from '@material-ui/core';

export default function Editor(props) {
  const [fft, setFft] = useState(props.fft);
  const [particleCount, setParticleCount] = useState(props.particleCount);

  const toggle = (() => {
    const states = ['cloud', 'plane', 'line'];
    const index = (states.indexOf(props.shape) + 1) % states.length;
    props.onShapeChange(states[index]);
  });

  const transformFft = value => Math.pow(2, value);
  const reverseFft = value => Math.round(Math.log2(value, 2));

  const handleFftSlider = (event, value) => {
    setFft(transformFft(value));
    props.onFftChange(fft);
  }

  const min = 0
  const max = Math.pow(10, 8);
  const power = 12;

  const transformParticleCount = value => Math.round((Math.exp(power * value / max) - 1) / (Math.exp(power) - 1) * max);
  const reverseParticleCount = value => (1 / power) * Math.log(((Math.exp(power) - 1) * value / max) + 1) * max;

  const handleParticleCountSliderChange = (event, value) => {
    setParticleCount(transformParticleCount(value));
    props.onParticleCountChange(particleCount);
  }

  const handleParticleCountSliderStop = (event, value) => {
    console.log('dingo!')
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={toggle}>
        Toggle Line/Plane/Cloud
      </Button>
      <Slider
        min={5}
        max={14}
        step={1}
        value={reverseFft(fft)}
        onChange={handleFftSlider} />
        <p>
          <span>{'The value of this slider is: '}</span>
          <span>{fft}</span>
        </p>
      <Slider
        min={min}
        max={max}
        step={max / 500}
        value={reverseParticleCount(particleCount)}
        onChange={handleParticleCountSliderChange} 
        onDragEnd={handleParticleCountSliderStop}
        />
        <p>
          <span>{'The value of this slider is: '}</span>
          <span>{particleCount}</span>
        </p>
    </div>
  )
}
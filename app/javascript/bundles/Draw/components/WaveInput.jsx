import React from 'react'

export default function WaveInput(props) {
  return(
  <form>
    <label>
      Name:
      <input type="text" name="name" />
    </label>
    <input type="submit" value="Submit" />
  </form>
  )
}
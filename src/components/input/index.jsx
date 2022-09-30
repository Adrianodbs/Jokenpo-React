import React from 'react'
import {StyledInput} from './style'

function Input({placeholder, onChange}) {
  return (
    <StyledInput placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
  )
}

export default Input
import React, { FC } from 'react'
import { Input as IInput } from '../../types/index'

const Input: FC<IInput> = ({ value, onChange }) => {
  return (
    <input className="input" type="text" value={ value } onChange={ onChange }/>
  )
}

export default Input
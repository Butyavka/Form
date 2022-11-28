import React, { FC } from 'react'
import { Button as IButton } from '../../types/index'

const Button: FC<IButton> = ({ text, onClick }) => <button className="button" type="button" onClick={ onClick }>{text}</button>

export default Button
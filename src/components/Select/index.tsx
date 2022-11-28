import React, {ChangeEvent, FC} from 'react'
import { Select as ISelect } from '../../types'

const Select: FC<ISelect> = ({ values, selectValue, onChange }) => {
  return (
    <select className="select" value={ selectValue } onChange={ (event: ChangeEvent<HTMLSelectElement>) => onChange(event) }>
      {values.map((value => (
        <option key={ value.id } value={ value.id }>{value.label}</option>
      )))}
    </select>
  )
}

export default Select
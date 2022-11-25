import React, {useState, ChangeEvent} from 'react'
import Select from '../Select'
import {Field, id} from '../../types'

const inputNames = [
  {
    label: 'Name',
    id: 'name'
  },
  {
    label: 'Email',
    id: 'email'
  },
  {
    label: 'Phone',
    id: 'phone'
  }
]
const currentId = 0

const Form = () => {
  const defaultInput = { type: inputNames[0].id, value: '', id: currentId }
  const [fields, setFields] = useState({ [currentId]: defaultInput })

  const changeSelectHandler = (id: id) => (event: ChangeEvent<HTMLSelectElement>) => {
    const type = event.target.value

    setFields({
      ...fields,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      [id]: { ...fields[id], type }
    })
  }

  return (
    <form>
      {Object.values(fields).map(field => (
        <div key={ field.id }>
          <Select
            onChange={ changeSelectHandler(field.id) }
            values={ inputNames }
            selectValue={ field.type }
          />
        </div>
      ))}
    </form>
  )
}

export default Form
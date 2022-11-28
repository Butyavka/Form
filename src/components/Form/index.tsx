import React, {useState, ChangeEvent, MouseEvent} from 'react'
import Select from '../Select'
import {Field, id} from '../../types'
import Input from '../Input'
import Button from '../Button'

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

const Form = () => {
  const [currentId, setCurrentId] = useState(0)
  const defaultInput = { type: inputNames[0].id, value: '', id: currentId }
  const [fields, setFields] = useState<Field>({ [currentId]: defaultInput })

  const changeSelectHandler = (id: id) => (event: ChangeEvent<HTMLSelectElement>) => {
    const type = event.target.value

    setFields({
      ...fields,
      [id]: { ...fields[id], type }
    })
  }

  const changeInputHandler = (id: id) => (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    setFields({
      ...fields,
      [id]: { ...fields[id], value }
    })
  }

  const addItem = () => {
    const updateCurrentId = currentId + 1
    const updateFields = {
      ...fields,
      [updateCurrentId]: {
        ...defaultInput,
        id: updateCurrentId
      }
    }

    setCurrentId(updateCurrentId)
    setFields(updateFields)
  }

  const removeItem = (id: id) => {
    const updateFields = fields
    delete updateFields[id]

    setFields({ ...updateFields })
  }

  const submitForm = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const fieldsArray = Object.values(fields)
    let info = ''

    for (let i = 0; i < fieldsArray.length; i++) {
      const row = `type: ${fieldsArray[i].type}; value: ${fieldsArray[i].value};\n`
      info = info + row
    }

    alert(info)
  }

  return (
    <form className="form">
      {Object.values(fields).map(field => (
        <div key={ field.id } className="field">
          <Select
            onChange={ changeSelectHandler(field.id) }
            values={ inputNames }
            selectValue={ field.type }
          />
          <Input onChange={ changeInputHandler(field.id) } value={ field.value }/>
          <div className="button-box">
            <Button text="+" onClick={ addItem }/>
            {Object.values(fields).length > 1 && <Button text="-" onClick={ () => removeItem(field.id) }/>}
          </div>
        </div>
      ))}
      <button onClick={ (e) => submitForm(e) } className="button" type="submit">Get info</button>
    </form>
  )
}

export default Form
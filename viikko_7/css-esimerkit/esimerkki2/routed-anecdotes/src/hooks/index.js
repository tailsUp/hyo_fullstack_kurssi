import { useState } from 'react'

export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  /*const onClick = (event) => {
    console.log(event)
    setValue('')
  }*/

  const onClick = () => {
    setValue('')
  }

  return {
    type,
    value,
    onChange,
    onClick,
  }
}

export const useReset = (value) => {

  const onClick = () => {
    value = ''
  }

  return (
    value,
    onClick
  )
}

// moduulissa voi olla monta nimettyä eksportia

export const useAnotherHook = () => {
  // ...
}
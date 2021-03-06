import React, {useState} from 'react'

export function useInput(initialValue: string) {
    const [value, setValue] = useState(initialValue);
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    }
    const clear = () => setValue('');
    return {
      bind: {value, onChange},
      value,
      clear
    }
  }
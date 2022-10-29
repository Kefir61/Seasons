import React, { useEffect, useState } from 'react'


export const useInput = (initialValue: string, validations: any) => {
     const [value, setValue] = useState(initialValue)
     const [isDirty, setDirty] = useState(false)

     const valid = useValidation(value, validations)
     const onChange = (e: any) => {
          setValue(e.target.value)
     }

     const onBlure = (e: any) => {
          setDirty(true)
     }

     return {
          value,
          onChange,
          onBlure,
          ...valid,
          isDirty
     }
}

export const useValidation = (value: string, validations: any) => {
     const [isEmpty, setEmpty] = useState(true)
     const [emailError, setEmailError] = useState(true)
     const [nameError, setNameError] = useState(true)
     const [inputValid, setInputValid] = useState(true)
     useEffect(() => {
          for (const validation in validations) {
               switch (validation) {
                    case 'isEmpty':
                         value ? setEmpty(false) : setEmpty(true)
                         break;
                    case 'isEmail':
                         const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                         re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
                         break;
                    case 'isName':
                         const result = /^[A-Za-zА-Яа-яёЁ]+(?:[-'\s][A-Za-zА-Яа-яёЁ]+)*$/
                         result.test(String(value).toLowerCase()) ? setNameError(false) : setNameError(true)
                         break;
               }
          }
     }, [value])

     useEffect(() => {
          if (isEmpty || emailError || nameError) {
               setInputValid(false)
          }
          else {
               setInputValid(true)
          }
     }, [isEmpty, emailError, nameError])
     return {
          isEmpty,
          emailError,
          inputValid,
          nameError
     }
}
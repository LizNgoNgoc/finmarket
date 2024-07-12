import { useState, useEffect } from "react"

export function useValidationForm(inputs = {}, inputsValidation = {}) {
 
    const [formElements, setFormElements] = useState(inputs)
    const [formErrors, setFormErrors] = useState(inputsValidation)
    const [btnDisabled, setBtnDisabled] = useState(true)

    useEffect(() => {
        const arrKeys = Object.keys(formElements)
        arrKeys.forEach(key => {
            if (!formErrors[key].pattern?.test(formElements[key]) || formElements[key] === '') {
                setFormErrors((prev) => ({...prev, [key] : {...prev[key], validity: false}}))
            } else {
                setFormErrors((prev) => ({...prev, [key] : {...prev[key], validity: true}}))
            }
        })
        setBtnDisabled((Object.keys(formErrors).every(key=> formErrors[key].validity)) )
    }, [formElements])

    function handleChange(e) {
         setFormElements({...formElements, [e.target.name]: e.target.value})
    }

    return [
        formElements,
        handleChange,
        formErrors,
        btnDisabled
    ]

}


export const validationFin = {
    select: {
        pattern: /^$|\s+/,
        message: 'Поле обязательно к заполнению',
        validity: false
    },
    phone: {
        pattern: /^[0-9]{11}$/,
        message: 'Номер телефона должен быть в формате 8XXXXXXXXXX',
        validity: false
    },
    email: {
        pattern:  /^[\w+]+@[\w+]+\.[\w]{2,}$/,
        message: 'Email должен быть в формате ******@***.***',
        validity: false
    },
    password: {
        pattern: /^[а-яА-ЯёЁa-zA-Z0-9]{6,}$/,
        message: 'Пароль должен быть больше 6 символов и сожедержать кирилицу, цифры и спецсимвол',
        validity: false
    },
}
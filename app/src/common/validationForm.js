import { useState, useEffect } from "react"

export function useValidationForm(inputs = {}, inputsValidation = {}) { //в качестве аргументов передаем объект с инпутами 
 
    const [formElements, setFormElements] = useState(inputs) //передаем состояние инпутов
    const [formErrors, setFormErrors] = useState(inputsValidation) //передаем состояние, применяющее валидацию
    const [btnDisabled, setBtnDisabled] = useState(true) //передаем состояние блокировки кнопки

    useEffect(() => {
        const arrKeys = Object.keys(formElements) //обращаемся к объектам по ключам
        arrKeys.forEach(key => { //перебираем массив объектов по ключам
            if (!formErrors[key].pattern?.test(formElements[key]) || formElements[key] === '') { //проверяем начальное состояние ключа, если оно имеет значение паттерна валидации, либо пустоту
                setFormErrors((prev) => ({...prev, [key] : {...prev[key], validity: false}})) //возвращаем ошибку
            } else {
                setFormErrors((prev) => ({...prev, [key] : {...prev[key], validity: true}})) //иначе успешно проходим валидацию
            }
        })
        setBtnDisabled((Object.keys(formErrors).every(key=> formErrors[key].validity)) ) //кнопка блокируется если  хотя бы один инпут не прошел валидацию
    }, [formElements])

    function handleChange(e) { //функция изменения значений инпутов
         setFormElements({...formElements, [e.target.name]: e.target.value})
    }

    return [
        formElements,
        handleChange,
        formErrors,
        btnDisabled
    ]

}


export const validationFin = { //паттерны валидации
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
export default function validationForm(formElements, formErrors, setFormErrors) {
    const arrKeys = Object.keys(formElements)
    arrKeys.forEach(key => {
        if (!formErrors[key].pattern?.test(formElements[key]) || formElements[key] === '') {
            setFormErrors((prev) => ({...prev, [key] : {...prev[key], validity: false}}))
            console.log(!formErrors[key].pattern?.test(formElements[key]));
        } else {
            setFormErrors((prev) => ({...prev, [key] : {...prev[key], validity: true}}))
        }
    })
}
export const validateInput = (value, rules) => {
    if (!rules) return true

    let isValid = true

    if (rules.required === true) {
        isValid = isValid && value && !!value.trim()
    }

    if (rules.minLength) {
        isValid = isValid && value && value.trim().length >= rules.minLength
    }

    return isValid
}
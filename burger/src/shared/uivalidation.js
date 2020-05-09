export const validateInput = (value, rules) => {
    if (!rules) return true

    let isValid = true

    if (rules.required === true) {
        isValid = isValid && !!value.trim()
    }

    if (rules.minLength) {
        isValid = isValid && value.trim().length >= rules.minLength
    }

    return isValid
}
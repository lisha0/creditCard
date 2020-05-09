export const handleInputFocus = e => {
    return {
        type: 'INPUT_FOCUS',
        payload: e.target.name
    }
}
export const handleInputChange = e => {
    const { name, value } = e.target;
    return {
        type: 'INPUT_CHANGE',
        payload: {[name]: value}
    }
}

export const handleInputChangeNumber = e => {
    const number = e.target.value.replace(/ /g, '');
    return {
        type: 'INPUT_CHANGE_NUMBER',
        payload: number
    }
}



const initStat = {
    cvc: '',
    expiryMonth: '',
    expiryYear: '',
    focus: '',
    name: '',
    number: ''
}
const formReducer = (state = initStat, action) => {
    switch (action.type) {
        case 'INPUT_FOCUS':
            return {
                ...state,
                focus: action.payload
            };
        case 'INPUT_CHANGE':
            return {
                ...state,
                ...action.payload
            };
        case 'INPUT_CHANGE_NUMBER':
            return {
                ...state,
                number: action.payload
            };

        default:
            return state;
    }
}
export default formReducer;
const initState = {};

const giveAwayFormReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE-FORM-DATA':
            console.log('created formData', action.date);
            return state;
        case 'CREATE-FORM-DATA-error':
            console.log('create formData error');
            return state;
        default:
            return state;

    }


}
export default giveAwayFormReducer
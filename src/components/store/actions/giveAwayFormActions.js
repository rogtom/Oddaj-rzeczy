export const saveFormToFirestore = (data, userID) => {

    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        // const firestore = getFirestore();

        firebase.firestore().collection('charityFormData').add({
            ...data,
            user_id: userID,
            createdTime: new Date()



        }).then(() =>{
            dispatch({type: 'CREATE-FORM-DATA', data, userID});
        }).catch((err) => {
            dispatch({type: 'CREATE-FORM-DATA-error', err});
        })

        // firebase.firestore.signInWithEmailAndPassword(
        //     credentials.email,
        //     credentials.password
        // ).then(() => {
        //         dispatch({type: 'LOGIN_SUCCESS'})
        //     }
        // ).catch((error) => {
        //     dispatch({type: 'LOGIN_ERROR', error})
        // })
    }
}
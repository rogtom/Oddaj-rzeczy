


export const signIn = (credentials) => {

    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
                dispatch({type: 'LOGIN_SUCCESS'})
            }
        ).catch((error) => {
            dispatch({type: 'LOGIN_ERROR', error})
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut()
            .then(() => {
                dispatch({type: 'SIGNOUT_SUCCESS'})
            })

    }
}

// export const signUp = (newUser) =>
//     async (dispatch, getState, getFirebase) => {
//         const firebase = getFirebase();
//         try {
//             let createdUser = await firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password);
//             console.log('createdUser', createdUser);
//             // updateProfile adds these to the correct users document
//             await firebase.updateProfile({
//                 displayName: newUser.displayName,
//                 createdAt: firebase.firestore.FieldValue.serverTimestamp()
//             }
//
//
//     .then(() => {
//             dispatch({ type: 'SIGNUP_SUCCESS' })
//         }).catch(error => {
//             dispatch({ type: 'SIGNUP_ERROR', error})
//         })
//     }
// }

export const signUp = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().createUserWithEmailAndPassword(
            credentials.email,
            credentials.password1
        )
            .then(() => firebase.updateProfile({
                user: credentials.email,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
                .then(() => {
                    dispatch({type: 'SIGNUP_SUCCESS'})
                })
                .catch(error => {
                    dispatch({type: 'SIGNUP_ERROR', error})
                })
            )

    }

}
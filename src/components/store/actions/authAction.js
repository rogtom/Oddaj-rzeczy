import { getFirebase } from "react-redux-firebase";
import { getFirestore } from "redux-firestore";

export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase } ) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
                dispatch({type: 'LOGIN_SUCCESS'})
            }
        ).catch((error) => {
            dispatch( { type: 'LOGIN_ERROR', error})
        })
    }
}

export const signUp = (newUser) => {
    return  (dispatch, getState, ) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp)=> {
            return firestore.collection('users').doc(resp.user.uid).set({
                email: resp.user.email
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).catch(error => {
            dispatch({ type: 'SIGNUP_ERROR', error})
        })
    }
}
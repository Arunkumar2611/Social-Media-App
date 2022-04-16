import * as api from '../api';
import { AUTH } from '../constant/constant';

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        /* Log in the user */
        /* we use navigate bcz after login we will navigate to the home page */
        const { data } = await api.signIn(formData);
        
        dispatch({type: AUTH, data});

        navigate('/')
    } catch (error) {
        console.log(error.message);
    }
}


export const signup = (formData, navigate) => async (dispatch) => {
    try {
        /* Sign up in the user */
        /* we use navigate bcz after login we will navigate to the home page */
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });

        navigate('/')
    } catch (error) {
        console.log(error.message);
    }
}
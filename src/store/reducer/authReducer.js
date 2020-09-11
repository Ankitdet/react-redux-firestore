const initState = {
    authError: null
}
const authReducer = (state = initState, action) => {

    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('Login failed')
            return {
                ...state,
                authError: 'Login failed'
            }

            case 'LOGIN_SUCCESS':
            console.log('login success')
            return {
                ...state,
                authError: 'Login success'
            }
        case 'SIGNOUT_SUCCESS' :
            console.log('signOut success');
            return {
                ...state,
                authError: 'Signout succee'
            }
        case 'SIGNUP_SUCCESS' :
            console.log('singup success');
            return {
                ...state,
                authError : null
            }
        case 'SIGNUP_ERROR' :
            console.log('signup error');
            return {
                ...state,
                authError : action.err.message
            }
        default:
            return state;
    }
}
export default authReducer;
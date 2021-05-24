

export const LOGIN = "LOGIN"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_ERROR = "LOGIN_ERROR"
export const loginAction = (input) => {
    // console.log('loginAction==',input);
    return ({
        type: LOGIN,
        input: input
    })
}
export const CHECKEMAIL = "CHECKEMAIL"
export const CHECKEMAIL_SUCCESS = "CHECKEMAIL_SUCCESS"
export const CHECKEMAIL_ERROR = "CHECKEMAIL_ERROR"
export const checkEmailAction = (input) => {
    // console.log('checkEmailAction==',input);
    return ({
        type: CHECKEMAIL,
        input: input
    })
}



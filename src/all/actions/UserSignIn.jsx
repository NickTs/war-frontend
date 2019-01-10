import {ActionType} from "./ActionType";
import axiosBackendApi from "../axios/axiosBackendApi"
import {alertErrApi} from "./AlertErrApi";
import {alertInfo} from "./AlertInfo";
import {push} from 'connected-react-router'
import Cookies from 'universal-cookie'

const _userSignIn = (authIntSession) => ({
    type: ActionType.USER_SIGN_UP,
    authIntSession
});

const _apiSignIn = (dispatch, loginValue, pswValue, lang, authIntInfo) => {
    const authIntSignIn = {
        id: authIntInfo.id,
        psw: pswValue
    }
    axiosBackendApi.post('auth/int/signin', authIntSignIn, {
        headers: {
            "x-lang": lang
        }
    })
        .then(result => {
            dispatch(_userSignIn(result.data))
            const cookies = new Cookies();
            cookies.set('jwt', result.data.jwt, {path: '/', maxAge: 5 * 365 * 24 * 60 * 60})
            document.location.href = "/";
        })
        .catch((error) => {
            if (error.response) {
                if (error.response.data.errorCode) {
                    dispatch(alertErrApi("API-" + error.response.data.errorCode, error.response.data.message, true))
                } else {
                    dispatch(alertErrApi("HTTP-" + error.response.status, "Network error2", true))
                }
            } else {
                console.log("Error2",error)
                dispatch(alertErrApi("HTTP-", "Network error", true))
            }
        })

}

export const userSignIn = (loginValue, pswValue, lang) => {
    return (dispatch) => {
        console.log("userSignIn.login=", loginValue)
        return axiosBackendApi.get('auth/int/getuserauth?login=' + loginValue, {
            headers: {
                "x-lang": lang
            }
        })
            .then(result => {
                _apiSignIn(dispatch, loginValue,pswValue, lang, result.data)
            })
            .catch((error) => {
                if (error.response) {
                    if (error.response.data.errorCode) {
                        dispatch(alertErrApi("API-" + error.response.data.errorCode, error.response.data.message, true))
                    } else {
                        dispatch(alertErrApi("HTTP-" + error.response.status, "Network error2", true))
                    }
                } else {
                    console.log("Error1",error)
                    dispatch(alertErrApi("HTTP-", "Network error", true))
                }
            })
    }
}
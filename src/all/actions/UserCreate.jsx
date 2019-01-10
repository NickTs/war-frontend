import {ActionType} from "./ActionType";
import axiosBackendApi from "../axios/axiosBackendApi"
import {GetBaseUrl} from "../Utils";
import {alertErrApi} from "./AlertErrApi";
import {dlgRegisterDialog2} from './DlgRegisterDialog2'
import {dlgRegisterDialog2Ok} from './DlgRegisterDialog2Ok'

const _userCreate = (user) => ({
    type: ActionType.USER_CREATE,
    user
});

export const userCreate = (userData, lang) => {
    return (dispatch) => {
        const user = {
            userType: userData.userType,
            email: userData.email,
            phone: userData.phone
        };
        console.log("userCreate=", user)
        return axiosBackendApi.post('users', user, {
            headers: {
                "x-lang": lang,
                "x-verifyemail-path": GetBaseUrl() + "/public/" + lang + "/?tkn="
            }
        })
            .then(result => {
                dispatch(_userCreate(result.data))
                dispatch(dlgRegisterDialog2("", false))
                dispatch(dlgRegisterDialog2Ok(result.data, true))
            })
            .catch((error) => {
                if (error.response) {
                    console.log("osw.error.response.status", error.response.status)
                    console.log("osw.error.response.data", error.response.data)
                    console.log("osw.error.response.headers", error.response.headers)
                    console.log("osw.error.response.data.message", error.response.data.message)
                    console.log("osw.error.response.data.errorCode", error.response.data.errorCode)
                    if (error.response.data.errorCode) {
                        dispatch(alertErrApi("API-" + error.response.data.errorCode, error.response.data.message, true))
                    } else {
                        dispatch(alertErrApi("HTTP-" + error.response.status, "Network error2", true))
                    }
                } else {
                    dispatch(alertErrApi("HTTP-", "Network error", true))
                }
            })

    };
};
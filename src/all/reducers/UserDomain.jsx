import { Map } from 'immutable';
import {ActionType} from '../actions/ActionType'

function UserDomain(state = Map(), action) {
    switch (action.type) {
        case ActionType.USER_CREATE:
            return state.set("user", action.user)
        case ActionType.USER_VERIFY_EMAIL:
            console.log("UserDomain.verifyEmail.user",action.user)
            return state.set("user", action.user)
        case ActionType.USER_SIGN_UP:
            return state.set("user", action.user)
        case ActionType.USER_SIGN_IN:
            return state.set("authIntSession", action.authIntSession)
        case ActionType.SESSION_REFRESH:
            return state.set("user", action.session.user).set("session", action.session.user)
        default:
            return state
    }
}

export default UserDomain
import {ActionType} from "./ActionType";

export function dlgRegisterDialog3(showValue) {
    const dlgData = {
        show: showValue
    }
    return {type: ActionType.DLG_REGISTER_DIALOG_3, dlgData}
}
import React from 'react'
import {connect} from 'react-redux'
import {dlgRegisterDialog1} from '../actions/DlgRegisterDialog1'
import {dlgRegisterDialog2} from '../actions/DlgRegisterDialog2'
import RegisterDialog1 from "../components/RegisterDialog1";

const mapStateToProps = (state) => ({
    lang: state.LangDomain.get("lang"),
    dlgData: state.DlgDomain.get("register1Dialog")
})

const mapDispatchToProps = (dispatch) => ({
    goSubmit:
        (lang, userType) => {
            dispatch(dlgRegisterDialog1(false))
            dispatch(dlgRegisterDialog2(userType,true))
        },
    goCancel:
        () => {
            dispatch(dlgRegisterDialog1(false))
        },
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterDialog1);


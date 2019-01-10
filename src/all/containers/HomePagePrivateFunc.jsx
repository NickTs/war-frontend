import React from 'react'
import {connect} from 'react-redux'
import HomePagePrivate from '../components/HomePagePrivate'
import {alertInfo} from "../actions/AlertInfo"
import {push} from "connected-react-router";

const mapStateToProps = (state) => ({
    lang: state.LangDomain.get("lang"),
})

const mapDispatchToProps = (dispatch) => ({
    goHome: (lang) => dispatch(push("/private/"+lang)),
    goUserValues: (lang) => dispatch(alertInfo("Заглушка", "Здесь будет переход на страницу своих ценностей.", true)),
    goOperations: (lang) => dispatch(alertInfo("Заглушка", "Здесь будет переход на страницу операций.", true)),
    goServices: (lang) => dispatch(alertInfo("Заглушка", "Здесь будет переход на страницу услуг.", true)),
    goValues: (lang) => dispatch(alertInfo("Заглушка", "Здесь будет переход на страницу общего каталога.", true)),
    goProfile: (lang) => dispatch(alertInfo("Заглушка", "Здесь будет переход на страницу профиля.", true)),
    goSetting: (lang) => dispatch(alertInfo("Заглушка", "Здесь будет переход на страницу настроек.", true)),
    goLogout: (lang) => dispatch(alertInfo("Заглушка", "Здесь будет выход из сессии.", true)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePagePrivate);


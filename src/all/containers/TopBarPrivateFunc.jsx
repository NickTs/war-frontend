import React from 'react'
import {connect} from 'react-redux'
import TopBarPrivate from '../components/TopBarPrivate'



const mapStateToProps = (state) => ({
    lang: state.LangDomain.get("lang"),
})


export default connect(mapStateToProps)(TopBarPrivate);


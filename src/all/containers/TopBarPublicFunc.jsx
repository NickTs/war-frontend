import React from 'react'
import {connect} from 'react-redux'
import TopBarPublic from '../components/TopBarPublic'

const mapStateToProps = (state) => ({
    lang: state.LangDomain.get("lang"),
})


export default connect(mapStateToProps)(TopBarPublic);


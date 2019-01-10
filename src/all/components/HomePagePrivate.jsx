import React from 'react'
import TopBarPrivateFunc from '../containers/TopBarPrivateFunc'
import {withStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import {injectIntl} from "react-intl"
import {GetRequestParam} from "../Utils";
import {pageDefault} from "../styles/ThemeDefault";
import BottomBarPrivate from "./BottomBarPrivate";


class HomePagePrivate extends React.Component {
    componentDidMount() {
        const {goRegister2, lang} = this.props;
        var tkn = GetRequestParam('tkn')
        if (tkn) {
            goRegister2(lang, tkn)
        }
    }

    render() {
        const {classes, intl, lang, goHome, goUserValues, goOperations, goServices, goValues, goProfile, goSetting, goLogout} = this.props;
        return (
            <div className={classes.root}>
                <TopBarPrivateFunc visibleHome={true} lang={lang} goHome={goHome} goUserValues={goUserValues} goOperations={goOperations} goServices={goServices}  goValues={goValues} goProfile={goProfile} goSetting={goSetting} goLogout={goLogout}/>
                <div style={{width:20,height:20}}></div>
                <BottomBarPrivate lang={lang}/>
            </div>
        );
    }
}

HomePagePrivate.propTypes = {
    classes: PropTypes.object.isRequired,
    intl: PropTypes.object.isRequired
};

export default injectIntl(withStyles(pageDefault)(HomePagePrivate));
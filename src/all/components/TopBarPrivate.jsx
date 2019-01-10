import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LanguageSelect from './LanguageSelect';
import {injectIntl} from "react-intl";
import {topBarPrivate} from "../styles/ThemeDefault";
import ExpandMore from '@material-ui/icons/ExpandMore'
import Person from '@material-ui/icons/PermIdentity'
import Search from '@material-ui/icons/Search'

const renderMenuButton = (label, classes, goClick) => {
    return (
        <Button className={classes.menuButton} onClick={goClick}>
            {label}
            <ExpandMore/>
        </Button>
    )
}

function TopBarPrivate(props) {
    const {classes, intl, lang, goHome, goUserValues, goOperations, goServices, goValues, goProfile, goSetting, goLogout} = props;
    return (
        <AppBar position="static" className={classes.bar}>
            <Toolbar>
                <img src="/static/logo.png" width="198" height="108"/>
                <div style={{flexGrow: 1}}/>
                {renderMenuButton(intl.formatMessage({id: 'TopBarPrivate.home.label'}), classes, () => goHome(lang))}
                {renderMenuButton(intl.formatMessage({id: 'TopBarPrivate.userValues.label'}), classes, () => goUserValues(lang))}
                {renderMenuButton(intl.formatMessage({id: 'TopBarPrivate.operations.label'}), classes, () => goOperations(lang))}
                {renderMenuButton(intl.formatMessage({id: 'TopBarPrivate.services.label'}), classes, () => goServices(lang))}
                {renderMenuButton(intl.formatMessage({id: 'TopBarPrivate.values.label'}), classes, () => goValues(lang))}
                <div style={{flexGrow: 1}}/>
                <IconButton className={classes.iconButton}>
                    <Search className={classes.icon}/>
                </IconButton>
                <IconButton className={classes.iconButton} onClick={() => goLogout(lang)}>
                    <Person className={classes.icon}/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

TopBarPrivate.propTypes = {
    classes: PropTypes.object.isRequired,
    intl: PropTypes.object.isRequired,
    lang: PropTypes.string.isRequired,
    visibleHome: PropTypes.bool,

};

export default injectIntl(withStyles(topBarPrivate)(TopBarPrivate));

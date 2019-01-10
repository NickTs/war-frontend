import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LanguageSelect from './LanguageSelect';
import {injectIntl} from "react-intl";
import {topBarPublic} from "../styles/ThemeDefault";
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

function TopBarPublic(props) {
    const {classes, intl, lang, visibleHome, goRegister, goLogin, goValues, goArtists, goGalleries} = props;
    return (
        <AppBar position="static" className={classes.bar}>
            <Toolbar>
                <img src="/static/logo.png" width="198" height="108"/>
                <div style={{flexGrow: 1}}/>
                {renderMenuButton(intl.formatMessage({id: 'TopBarPublic.collections.label'}), classes, () => goValues(lang))}
                {renderMenuButton(intl.formatMessage({id: 'TopBarPublic.artists.label'}), classes, () => goArtists(lang))}
                {renderMenuButton(intl.formatMessage({id: 'TopBarPublic.galleries.label'}), classes, () => goGalleries(lang))}
                <div style={{flexGrow: 1}}/>
                <IconButton className={classes.iconButton} onClick={() => goLogin(lang)}>
                    <Person className={classes.icon}/>
                </IconButton>
                <IconButton className={classes.iconButton}>
                    <Search className={classes.icon}/>
                </IconButton>
                <LanguageSelect lang={lang}/>
            </Toolbar>
        </AppBar>
    );
}

TopBarPublic.propTypes = {
    classes: PropTypes.object.isRequired,
    intl: PropTypes.object.isRequired,
    lang: PropTypes.string.isRequired,
    visibleHome: PropTypes.bool,

};

export default injectIntl(withStyles(topBarPublic)(TopBarPublic));

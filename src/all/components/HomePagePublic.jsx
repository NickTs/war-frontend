import React from 'react'
import TopBarPublicFunc from '../containers/TopBarPublicFunc'
import {withStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import {injectIntl} from "react-intl"
import {GetRequestParam} from "../Utils";
import {pageDefault} from "../styles/ThemeDefault";
import HomePagePublicInfo from "./HomePagePublicInfo";
import HomePagePublicForSale from "./HomePagePublicForSale";
import BottomBarPublic from "./BottomBarPublic";
import HomePagePublicArtists from "./HomePagePublicArtists";


class HomePagePublic extends React.Component {
    componentDidMount() {
        const {goRegister2, lang} = this.props;
        var tkn = GetRequestParam('tkn')
        if (tkn) {
            goRegister2(lang, tkn)
        }
    }

    render() {
        const {classes, intl, goRegister, goLogin, goAbout, goRegister2, goValues, goArtists, goGalleries, goInfoMore, goAllSales, lang} = this.props;
        return (
            <div className={classes.root}>
                <TopBarPublicFunc visibleHome={true} goRegister={goRegister} goLogin={goLogin} lang={lang} goValues={goValues} goArtists={goArtists}  goGalleries={goGalleries}/>
                <HomePagePublicInfo lang={lang} goInfoMore={goInfoMore}/>
                <HomePagePublicForSale lang={lang} goAllSales={goAllSales} goLogin={goLogin}/>
                <HomePagePublicArtists lang={lang} goArtists={goArtists}/>
                <div style={{width:20,height:20}}></div>
                <BottomBarPublic lang={lang}/>
            </div>
        );
    }
}

HomePagePublic.propTypes = {
    classes: PropTypes.object.isRequired,
    intl: PropTypes.object.isRequired
};

export default injectIntl(withStyles(pageDefault)(HomePagePublic));
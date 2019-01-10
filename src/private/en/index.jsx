import React from 'react'
import ReactDOM from 'react-dom'
import '../../index.css'
import Root from './Root'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles'
import ConfigureStore from "../../all/store/ConfigureStore"
import {langChange} from '../../all/actions/LangChange'
import {addLocaleData, IntlProvider} from 'react-intl'
import en from 'react-intl/locale-data/en'
import axios from "../../all/axios/axios"
import createHistory from 'history/createBrowserHistory'
import Cookies from 'universal-cookie'
import axiosBackendApi from "../../all/axios/axiosBackendApi";
import {sessionRefresh} from "../../all/actions/SessionRefresh";

const cookies = new Cookies();

if (cookies.get('jwt') === null || cookies.get('jwt') === undefined) {
    document.location.href = '/public/en/?signin'
}

cookies.set('l', 'en', {path: '/', maxAge: 5 * 365 * 24 * 60 * 60})
addLocaleData([...en])
const locale = "en"

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#888888',
            main: '#6b6b6b',
            dark: '#4a4a4a',
            contrastText: '#fff',
        },
        secondary: {
            light: '#888888',
            main: '#6b6b6b',
            dark: '#4a4a4a',
            contrastText: '#fff',
        },
    },
    typography: {
        useNextVariants: true,
    }
})

const history = createHistory()
const store = ConfigureStore(history);
store.dispatch(langChange(locale));

const jwt = cookies.get('jwt')
axiosBackendApi.get('auth/int/session?jwt='+jwt, {
    headers: {
        "x-lang": locale
    }
})
    .then(result => {
        store.dispatch(sessionRefresh(result.data));
    })
    .catch((error) => {
        cookies.remove('jwt')
        document.location('/public/'+locale+'/?signin')
    })

axios.get('/private/assets/' + locale + '.json')
    .then(result => {
        if (result.status >= 400) {
            throw new Error('World Art Registry is temporarily unavailable.')
        }
        return result.data;
    })
    .then(localeData => {
        ReactDOM.render(
            <IntlProvider locale={locale} messages={localeData}>
                <MuiThemeProvider theme={theme}>
                    <Root store={store} history={history}/>
                </MuiThemeProvider>
            </IntlProvider>,
            document.getElementById('root')
        )
    })



import React from 'react'
import {Provider} from 'react-redux'
import PropTypes from 'prop-types'
import LoginPageFunc from '../../all/containers/LoginPageFunc'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router'
import RegisterFirstPageFunc from "../../all/containers/RegisterFirstPageFunc";
import RegisterFirstPageOkFunc from "../../all/containers/RegisterFirstPageOkFunc";
import AlertErrApiFunc from "../../all/containers/AlertErrApiFunc";
import RegisterTwoPageFunc from "../../all/containers/RegisterTwoPageFunc";
import AboutPageFunc from "../../all/containers/AboutPageFunc";
import RegisterTwoPageOkFunc from "../../all/containers/RegisterTwoPageOkFunc";
import AlertInfoFunc from "../../all/containers/AlertInfoFunc";
import HomePagePrivateFunc from "../../all/containers/HomePagePrivateFunc";

const Root = ({store, history}) => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Switch>
                    <Route exact path="/private/ru" component={HomePagePrivateFunc} />
                    <Route exact path="/private/ru/about" component={AboutPageFunc} />
                    <Route exact path="/private/ru/register" component={RegisterFirstPageFunc} />
                    <Route exact path="/private/ru/register/ok" component={RegisterFirstPageOkFunc} />
                    <Route exact path="/private/ru/register2" component={RegisterTwoPageFunc} />
                    <Route exact path="/private/ru/register2/ok" component={RegisterTwoPageOkFunc} />
                    <Route exact path="/private/ru/login" component={LoginPageFunc} />
                    <Route render={() => (<div>Страница не найдена</div>)} />
                </Switch>
                <AlertErrApiFunc/>
                <AlertInfoFunc/>
            </div>
        </ConnectedRouter>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}

export default Root;
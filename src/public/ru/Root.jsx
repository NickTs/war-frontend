import React from 'react'
import {Provider} from 'react-redux'
import PropTypes from 'prop-types'
import HomePagePublicFunc from '../../all/containers/HomePagePublicFunc'
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
import LoginDialogFunc from "../../all/containers/LoginDialogFunc";
import RegisterDialog1Func from "../../all/containers/RegisterDialog1Func";
import RegisterDialog2Func from "../../all/containers/RegisterDialog2Func";
import RegisterDialog2OkFunc from "../../all/containers/RegisterDialog2OkFunc";
import RegisterDialog3Func from "../../all/containers/RegisterDialog3Func";

const Root = ({store, history}) => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Switch>
                    <Route exact path="/public/ru" component={HomePagePublicFunc} />
                    <Route exact path="/public/ru/about" component={AboutPageFunc} />
                    <Route exact path="/public/ru/register" component={RegisterFirstPageFunc} />
                    <Route exact path="/public/ru/register/ok" component={RegisterFirstPageOkFunc} />
                    <Route exact path="/public/ru/register2" component={RegisterTwoPageFunc} />
                    <Route exact path="/public/ru/register2/ok" component={RegisterTwoPageOkFunc} />
                    <Route exact path="/public/ru/login" component={LoginPageFunc} />
                    <Route render={() => (<div>Страница не найдена</div>)} />
                </Switch>
                <AlertErrApiFunc/>
                <AlertInfoFunc/>
                <LoginDialogFunc/>
                <RegisterDialog1Func/>
                <RegisterDialog2Func/>
                <RegisterDialog2OkFunc/>
                <RegisterDialog3Func/>
            </div>
        </ConnectedRouter>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}

export default Root;
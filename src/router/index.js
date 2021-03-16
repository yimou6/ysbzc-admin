import React from 'react'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import Login from '../pages/login'
import Layout from '../components/Layout'
import Cookie from 'js-cookie'

const NO_AUTH = [
    '/login'
]

class RouterConfig extends React.Component {
    auth = Cookie.get('auth')

    setRoute = () => {
        if (NO_AUTH.includes(this.props.location.pathname)) {
            return <Switch>
                <Route path="/login" component={Login}/>
            </Switch>
        }
        if (this.auth) {
            return <Switch>
                <Route path="/" component={Layout}/>
            </Switch>
        } else {
            return <Redirect to="/login"/>
        }
    }
    render = () => this.setRoute()
}
export default withRouter(RouterConfig)

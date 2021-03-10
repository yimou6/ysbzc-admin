import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../pages/login'
import Layout from '../components/Layout'

class RouterConfig extends React.Component {
    render() {
        return <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/" component={Layout}/>
        </Switch>
    }
}
export default RouterConfig

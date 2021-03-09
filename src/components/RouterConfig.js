import React from 'react'
import Pages from '../pages'
import { Route } from 'react-router-dom'

const routes = [
    {
        path: '/login',
        name: 'Login'
    }
]

class RouterConfig extends React.Component {
    render() {
        return routes.map(route => {
            return <Route key={route.path} path={route.path} render={props => {
                const Comp = route.name && Pages[route.name]
                return <Comp {...props}/>
            }}/>
        })
    }
}

export default RouterConfig

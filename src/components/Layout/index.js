import { Component } from 'react'
import { Route } from 'react-router-dom'
import { routes } from '../../router/config'
import './index.scss'
import Aside from './Aside'
import Header from './Header'

const createRoute = (route) => <Route key={route.path} path={route.path} render={() => <route.component/>}/>

class Layout extends Component {
    state = {
        collapsed: false,
    }

    onChangeCollapsed = (collapsed) => {
        this.setState({
            collapsed
        })
    }

    render() {
        return <div className="layout" onClick={this.toWrite}>
            <Aside collapsed={this.state.collapsed}/>
            <div className="container">
                <Header collapsed={this.state.collapsed} onChangeCollapsed={this.onChangeCollapsed}/>
                {routes.map(route => createRoute(route))}
            </div>
        </div>
    }
}

export default Layout

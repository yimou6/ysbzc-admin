import React, { Component } from 'react'
import { Menu } from 'antd'
import { withRouter } from 'react-router-dom'
import { menus } from '../../router/config'

class Aside extends Component {
    constructor(props) {
        super(props)
        this.state = {
            defaultSelectedKeys: ['/write'],
            asideStyle: {
                'width': !this.props.collapsed ? '220px' : '80px'
            }
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.collapsed !== prevProps.collapsed) {
            const width = !this.props.collapsed ? '220px' : '80px'
            this.setState({
                asideStyle: {
                    width
                }
            })
        }
    }

    handleClick = (menu) => {
        this.props.history.push(menu.key)
    }

    render() {
        return <div className="aside" style={this.state.asideStyle}>
            <div className="aside-logo"></div>
            <Menu mode="inline"
                  theme="dark"
                  defaultSelectedKeys={this.state.defaultSelectedKeys}
                  inlineCollapsed={this.props.collapsed} onClick={this.handleClick}>
                {menus.map(menu => <Menu.Item key={menu.path} title={menu.title} icon={<menu.icon/>}>{menu.title}</Menu.Item>)}
            </Menu>
        </div>
    }
}

export default withRouter(Aside)

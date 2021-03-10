import React, { Component } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

class Header extends Component {
    changeCollapsed = () => {
        const collapsed = this.props.collapsed
        this.props.onChangeCollapsed(!collapsed)
    }
    render() {
        return <div className="header">
            <div onClick={this.changeCollapsed} className="collapsed">
                {this.props.collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
            </div>
        </div>
    }
}

export default Header

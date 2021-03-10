import React from 'react'
import { withRouter } from 'react-router-dom'

class Write extends React.Component {
    toHome = () => {
        this.props.history.push('/home')
    }
    render() {
        return <div className="home" onClick={this.toHome}>
            Write
        </div>
    }
}

export default withRouter(Write)

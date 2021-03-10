import React from 'react'
import { withRouter } from 'react-router-dom'
class Home extends React.Component {
    toWrite = () => {
        this.props.history.push('/write')
    }
    render() {
        return <div className="home" onClick={this.toWrite}>
            HOme
        </div>
    }
}

export default withRouter(Home)

import React from 'react'
import { withRouter } from 'react-router-dom'

class Article extends React.Component {
    toHome = () => {
        this.props.history.push('/home')
    }
    render() {
        return <div className="home" onClick={this.toHome}>
            Article
        </div>
    }
}

export default withRouter(Article)

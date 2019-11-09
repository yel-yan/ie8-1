import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getLoggedUser } from './redux/actions/loggedUserReducer'

class AuthorizedRoute extends React.Component {

    componentWillMount() {
        this.props.getLoggedUser()
    }

    render() {
        const { component: Component, pending, logged, ...rest } = this.props
        console.log(pending,logged)
        return (
            <Route {...rest} render={props => {
                if (pending) return <div>Loading...</div>
                return logged
                ? <Component {...props} />
                : <Redirect to="/auth/login" />
            }} />
        )
    }
}

const mapStateToProps = ({loggedUserReducer}) => {
    return {
        pending: loggedUserReducer.pending,
        logged: loggedUserReducer.logged
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getLoggedUser: () => {
            dispatch(getLoggedUser())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizedRoute);
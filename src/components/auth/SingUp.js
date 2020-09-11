import React from 'react'
import { connect } from 'react-redux'
import { signUpUser } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class SingUp extends React.Component {

    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }
    handledChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handledSubmit = (e) => {
        e.preventDefault();
        this.props.signUpUser(this.state);
    }
    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <div className="container">
                <form onSubmit={this.handledSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sing In</h5>
                    <div className="input-field">
                        <label htmlFor="firstName">FirstName</label>
                        <input type="text" id="firstName" onChange={this.handledChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">LastName</label>
                        <input type="text" id="lastName" onChange={this.handledChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handledChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handledChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">SignUp</button>
                        <div className="red-text center">
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUpUser: (project) => dispatch(signUpUser(project))
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingUp);

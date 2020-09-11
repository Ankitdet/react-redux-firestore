import React from 'react'
import { Link } from 'react-router-dom'
import SingedInLinks from './SingedInLinks'
import SingedOutLinks from './SingOutLinks'
import { connect } from 'react-redux';

function Navbar(props) {
    const { auth, profile} = props;
    console.log('auth here nav', profile);
    const links = auth.uid ? <SingedInLinks profile={profile} /> : <SingedOutLinks />;
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Mario Plan</Link>
                {links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile : state.firebase.profile
    }
}
export default connect(mapStateToProps)(Navbar);

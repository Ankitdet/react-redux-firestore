import React from 'react'
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom';

class CreateProject extends React.Component {
    state = {
        title: '',
        content: ''
    }
    handledChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handledSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state);
        this.props.history.push("/");   
    }
    render() {
        const { auth } = this.props;
        if(!auth.uid) return <Redirect to="/singin"/>
        return (
            <div className="container">
                <form onSubmit={this.handledSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handledChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea name="text" id="content" cols="30" rows="10" className="materialize-textarea" onChange={this.handledChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);

import React from 'react';

import { authService } from './auth.service';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            credential: '',
            submitted: false,
            loading: false,
            error: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({
            submitted: true
        });
        const { username, credential } = this.state;

        if (!(username && credential)) {
            return;
        }

        this.setState({
            loading: true
        });

        authService.login(username, credential)
            .then(
                path => {
                    const { from } = this.props.location.state || { from: { pathname: "/search" } };
                    this.props.history.push(from);
                },
                error => this.setState({ error, loading: false })
            );
    }

    render() {
        const { username, credential, submitted, loading, error } = this.state;

        return (
            <div className="section-centered session">
                    <div className="card">
                        <h2>Login</h2>
                        <form name="form" onSubmit={this.handleSubmit}>
                            <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                <label htmlFor="username" className="accesiblity-text">Username</label>
                                <input type="text"
                                       className="form-control"
                                       name="username"
                                       value={username}
                                       onChange={this.handleChange} />
                                {submitted && !username &&
                                <div className="help-block">Username is required</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !credential ? ' has-error' : '')}>
                                <label htmlFor="credential" className="accesiblity-text">credential</label>
                                <input
                                    type="credential"
                                    className="form-control"
                                    name="credential"
                                    value={credential}
                                    onChange={this.handleChange} />
                                {submitted && !credential &&
                                <div className="help-block">Credential is required</div>
                                }
                            </div>
                            <div className="actions-section">
                                <button
                                    className="btn btn-primary"
                                    disabled={loading}>Login</button>
                            </div>
                            {error && <div className={'alert alert-danger'}>{error}</div>}
                        </form>
                    </div>
            </div>
        );
    }
}

export { Login };

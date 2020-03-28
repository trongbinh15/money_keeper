import React, { Fragment, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';
import styled from './Login.module.scss';

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        login(email, password);
    }

    // Redirect if logged in
    if (isAuthenticated) {
        return <Redirect to='/dashboard'></Redirect>
    }

    return (
        <Fragment>
            <div className={styled.body}>
                <form className={styled['form']} onSubmit={e => onSubmit(e)}>
                    <h1 >Sign In</h1>
                    <div className={styled['form-group']}>
                        <input
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            value={email}
                            onChange={e => onChange(e)} />
                    </div>
                    <div className={styled['form-group']}>
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={e => onChange(e)}
                            minLength="6"
                        />
                    </div>
                    <input type="submit" className="btn btn-primary" value="Login" />
                    <p className={styled.note}>
                        Don't have an account? <Link to="register">Sign Up</Link>
                    </p>
                </form>
            </div>
        </Fragment>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
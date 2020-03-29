import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import styled from './Register.module.scss';



const Register = ({ register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('Password do not match', 'error');
        } else {
            register({ name, email, password });
        }
    }

    if (isAuthenticated) {
        return <Redirect to='/dashboard'></Redirect>
    }
    return (
        <Fragment>
            <div className={styled['body']}>
                <form className={styled['form']} onSubmit={e => onSubmit(e)}>
                    <h1 >Sign Up</h1>
                    <div className={styled['form-group']}>
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={name}
                            onChange={e => onChange(e)}
                        />
                    </div>
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
                        />
                    </div>
                    <div className={styled['form-group']}>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            name="password2"
                            value={password2}
                            onChange={e => onChange(e)}
                        />
                    </div>
                    <input type="submit" className="btn btn-primary" value="Register" />
                    <p className={styled['note']}>
                        Already have an account? <Link to="login">Sign In</Link>
                    </p>
                </form>
            </div>
        </Fragment>
    )
}

Register.propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(Register);
import React, { Fragment } from 'react'
import { Button } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'
import styled from './Dashboard.module.scss';

const Dashboard = ({ logout, isAuthenticated }) => {
    if (!isAuthenticated) {
        return <Redirect to='/login'></Redirect>
    }
    return (
        <Fragment>
            <div className={styled['body']}>
                <div className={styled['anounment']}>
                    <p className={styled['text']}>This is dashboard</p>
                    <Button type="primary"
                        icon={<LogoutOutlined />}
                        onClick={() => logout()}
                    >
                        Logout
            </Button>

                </div>
            </div>
        </Fragment>
    )
}

Dashboard.propTypes = {
    logout: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Dashboard);

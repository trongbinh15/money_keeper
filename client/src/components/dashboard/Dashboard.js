import React, { Fragment } from 'react'
import { Button } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'
import PropTypes from 'prop-types';

const Dashboard = ({ logout }) => {
    return (
        <Fragment>
            <div>
                This is dashboard
        </div>
            <Button type="primary"
                icon={<LogoutOutlined />}
                onClick={() => logout()}
            >
                Logout
            </Button>

        </Fragment>
    )
}

Dashboard.propTypes = {
    logout: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, { logout })(Dashboard);

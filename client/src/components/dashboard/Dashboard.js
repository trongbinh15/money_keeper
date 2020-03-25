import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { DatePicker } from 'antd';

const Dashboard = props => {
    return (
        <Fragment>
            <div>
            This is dashboard
        </div>
        <DatePicker></DatePicker>
        </Fragment>
    )
}

Dashboard.propTypes = {

}

export default Dashboard

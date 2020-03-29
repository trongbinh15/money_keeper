import { message } from 'antd'

export const setAlert = (msg, alertType) => {
    switch (alertType) {
        case 'error':
            message.error(msg);
            break;
        case 'warning':
            message.warning(msg);
            break;
        case 'success':
            message.success(msg);
            break;
        default:
            message.success(msg);
            break;
    }
}
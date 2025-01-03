import React from 'react';
import Alert from './Alert';

type AlertSuccessProps = {
    message: string;
};

const AlertSuccess: React.FC<AlertSuccessProps> = ({ message }) => <Alert type="success" message={message} />;

export default AlertSuccess;

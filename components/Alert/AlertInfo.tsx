import React from 'react';
import Alert from './Alert';

type AlertInfoProps = {
    message: string;
};

const AlertInfo: React.FC<AlertInfoProps> = ({ message }) => <Alert type="info" message={message} />;

export default AlertInfo;

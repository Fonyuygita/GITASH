import React from 'react';

type AlertProps = {
    type: 'info' | 'success' | 'error';
    message: string;
};

const Alert: React.FC<AlertProps> = ({ type, message }) => {
    const getAlertStyle = (): string => {
        switch (type) {
            case 'info':
                return 'bg-blue-100 text-blue-800';
            case 'success':
                return 'bg-green-100 text-green-800';
            case 'error':
                return 'bg-red-100 text-red-800';
            default:
                return '';
        }
    };

    return (
        <div className={`p-4 rounded-md ${getAlertStyle()}`}>
            <p>{message}</p>
        </div>
    );
};

export default Alert;

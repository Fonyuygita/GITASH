import React from 'react';

type TerminalHistoryProps = {
    history: Array<{ type: string; content: string }>;
    isDarkMode: boolean;
};

const TerminalHistory: React.FC<TerminalHistoryProps> = ({ history, isDarkMode }) => {
    const getEntryStyle = (type: string): string => {
        switch (type) {
            case 'input':
                return 'text-blue-400';
            case 'error':
                return 'text-red-400';
            case 'success':
                return 'text-green-400';
            case 'info':
                return isDarkMode ? 'text-gray-400' : 'text-gray-600';
            default:
                return '';
        }
    };

    return (
        <>
            {history.map((entry, index) => (
                <div key={index} className={`mb-2 ${getEntryStyle(entry.type)}`}>
                    {entry.type === 'input' ? `> ${entry.content}` : entry.content}
                </div>
            ))}
        </>
    );
};

export default TerminalHistory;

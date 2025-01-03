import React from 'react';

type NextCommandCardProps = {
    nextCommand: string | null;
    explanation: string | null;
    isDarkMode: boolean;
};

const NextCommandCard: React.FC<NextCommandCardProps> = ({ nextCommand, explanation, isDarkMode }) => {
    if (!nextCommand || !explanation) return null;

    return (
        <div
            className={`sticky bottom-4 left-0 right-0 mx-auto max-w-2xl p-4 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-800'
                }`}
        >
            <h3 className="font-bold text-lg mb-2">Next Command</h3>
            <p>
                <span className="font-mono text-blue-400">{nextCommand}</span>
            </p>
            <p className="mt-2 text-sm">{explanation}</p>
        </div>
    );
};

export default NextCommandCard;

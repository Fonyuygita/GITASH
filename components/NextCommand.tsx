import React from 'react';

type NextCommandCardProps = {
    nextCommand: string | null;
    explanation: string | null;
    isDarkMode?: any;
};

const NextCommandCard: React.FC<NextCommandCardProps> = ({ nextCommand, explanation, isDarkMode }) => {
    if (!nextCommand || !explanation) return null;

    return (
        <>
            <h2 className="text-lg text-blue-400 font bold">NEXT COMMAND</h2>
            <div

                className={`fixed bottom-9 border-4 border-green-300 bg-green-600 font-sans font-bold right-3  w-[440px] p-4 rounded-lg shadow-lg ${isDarkMode
                    ? 'bg-gray-800 text-white hover:bg-gray-700'
                    : 'bg-white text-black  hover:bg-gray-100'
                    }`}
            >
                <h3 className="font-bold text-lg mb-2">Next Command</h3>
                <p>
                    <span className="font-mono text-blue-400">{nextCommand}</span>
                </p>
                <p className="mt-2 text-sm">{explanation}</p>
            </div>

        </>
    );

};

export default NextCommandCard;

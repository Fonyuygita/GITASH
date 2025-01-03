import React, { useRef } from 'react';

type TerminalInputProps = {
    input: string;
    setInput: (value: string) => void;
    handleSubmit: (e: React.FormEvent) => void;
    isDarkMode: boolean;
};

const TerminalInput: React.FC<TerminalInputProps> = ({ input, setInput, handleSubmit, isDarkMode }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form onSubmit={handleSubmit} className="flex items-center">
            <span className="text-blue-400 text-lg">{'>'}</span>
            <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className={`flex-1 text-lg border-none outline-none text-blue-400 ml-2 p-1 ${isDarkMode ? 'bg-transparent' : ''
                    }`}
                autoFocus
            />
        </form>
    );
};

export default TerminalInput;

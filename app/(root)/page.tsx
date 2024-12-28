"use client"
import { ScrollArea } from '@radix-ui/react-scroll-area';
import React, { useState, useRef, useEffect } from 'react';

type CommandHistory = {
    command: string;
    output: React.ReactNode;
    timestamp: string;
}

const commands = {
    help: () => (
        <div className="text-green-400">
            Available commands:
            • about - Learn about me
            • skills - View my technical skills
            • projects - See my projects
            • contact - Get my contact info
            • clear - Clear terminal
            • theme - Toggle dark/light mode
            • help - Show this help message
        </div>
    ),
    about: () => (
        <div className="text-blue-400">
            {"Hi! I'm [Your Name] 👋"}
            A Full Stack Developer passionate about building great user experiences.
            {"Type 'skills' to see what I work with!"}
        </div>
    ),
    skills: () => (
        <div className="space-y-2">
            <p className="text-yellow-400">Frontend:</p>
            <div className="pl-4 text-gray-300">
                React • Next.js • TypeScript • Tailwind CSS • Redux
            </div>
            <p className="text-yellow-400">Backend:</p>
            <div className="pl-4 text-gray-300">
                Node.js • Express • Python • PostgreSQL • MongoDB
            </div>
            <p className="text-yellow-400">Tools:</p>
            <div className="pl-4 text-gray-300">
                Git • Docker • AWS • Linux • Jest
            </div>
        </div>
    ),
    projects: () => (
        <div className="space-y-4">
            <div className="border-l-2 border-purple-500 pl-4">
                <h3 className="text-purple-400">Project 1</h3>
                <p className="text-gray-300">Description of your amazing project</p>
                <a href="#" className="text-blue-400 hover:underline">View Project →</a>
            </div>
            <div className="border-l-2 border-purple-500 pl-4">
                <h3 className="text-purple-400">Project 2</h3>
                <p className="text-gray-300">Another cool project description</p>
                <a href="#" className="text-blue-400 hover:underline">View Project →</a>
            </div>
        </div>
    ),
    contact: () => (
        <div className="space-y-2 text-gray-300">
            <p>📧 email@example.com</p>
            <p>🐙 github.com/yourusername</p>
            <p>💼 linkedin.com/in/yourusername</p>
        </div>
    ),
};

const TerminalPortfolio = () => {
    const [input, setInput] = useState('');
    const [isDark, setIsDark] = useState(true);
    const [history, setHistory] = useState<CommandHistory[]>([{
        command: 'help',
        output: commands.help(),
        timestamp: new Date().toLocaleTimeString()
    }]);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        let output: React.ReactNode;

        switch (trimmedCmd) {
            case 'help':
                output = commands.help();
                break;
            case 'about':
                output = commands.about();
                break;
            case 'skills':
                output = commands.skills();
                break;
            case 'projects':
                output = commands.projects();
                break;
            case 'contact':
                output = commands.contact();
                break;
            case 'clear':
                setHistory([]);
                return;
            case 'theme':
                setIsDark(!isDark);
                output = <p className="text-green-400">Theme toggled!</p>;
                break;
            default:
                output = <p className="text-red-400">{"Command not found. Type 'help' for available commands."}</p>;
        }

        setHistory(prev => [...prev, {
            command: cmd,
            output,
            timestamp: new Date().toLocaleTimeString()
        }]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            handleCommand(input);
            setInput('');
        }
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div className={`w-full h-fulll mx-auto min-h-screen ${isDark ? 'dark' : ''}`}>
            <div className={`rounded-lg border shadow-sm ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
                <div className={`flex items-center justify-between px-4 py-2 border-b ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="text-sm opacity-70">portfolio.exe</div>
                </div>

                <ScrollArea className="h-[600px] p-4 font-mono">
                    {history.map((item, i) => (
                        <div key={i} className="mb-4">
                            <div className="flex items-center">
                                <span className="text-yellow-700">visitor@Fonyuygita</span>
                                <span className="text-gray-400">:</span>
                                <span className="text-blue-400">~$</span>
                                <span className={`ml-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{item.command}</span>
                                <span className="ml-2 text-gray-500 text-sm">[{item.timestamp}]</span>
                            </div>
                            <div className="mt-2 ml-4">{item.output}</div>
                        </div>
                    ))}

                    <form onSubmit={handleSubmit} className="flex items-center">
                        <span className="text-green-400">visitor@portfolio</span>
                        <span className="text-gray-400">:</span>
                        <span className="text-blue-400">~$</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className={`flex-1 ml-2 bg-transparent border-none outline-none ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                            autoFocus
                        />
                    </form>
                </ScrollArea>
            </div>
        </div>
    );
};

export default TerminalPortfolio;
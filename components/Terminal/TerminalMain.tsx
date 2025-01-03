import React, { useEffect } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Terminal } from 'lucide-react';
type TerminalMainProps = {
    history: Array<{ type: string; content: string }>;
    input: string;
    isDarkMode: boolean;
    setInput: (value: string) => void;
    handleSubmit: (e: React.FormEvent) => void;
    scrollAreaRef: React.RefObject<HTMLDivElement>;
    nextCommand: string | null; // Next command to type
};

const TerminalMain: React.FC<TerminalMainProps> = ({
    history,
    input,
    isDarkMode,
    setInput,
    handleSubmit,
    scrollAreaRef,
    nextCommand,
}) => {
    // Scroll to the bottom of the terminal whenever the history changes
    useEffect(() => {
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
        }
    }, [history]);

    return (
        <Card className={`min-h-[80vh] ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
            {/* Terminal Header */}
            <CardHeader className="pb-3">
                <CardTitle className='text-white font-sans font-bolder font-3xl flex items-center justify-center'>
                    <Terminal />
                    GitashLearn Terminal</CardTitle>
                <CardDescription className='text-gray-300 flex items-center justify-center'>
                    Interactive terminal learning environment - Type 'help' for commands
                </CardDescription>
            </CardHeader>

            {/* Terminal Content */}
            <CardContent>
                <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} rounded-lg overflow-hidden`}>
                    {/* Scrollable Terminal Area */}
                    <ScrollArea
                        ref={scrollAreaRef}
                        className="h-[calc(80vh-8rem)] p-4 font-mono text-sm"
                    >
                        {/* Render Command History */}
                        {history.map((entry, index) => (
                            <div key={index} className={`mb-2 ${getEntryStyle(entry.type, isDarkMode)}`}>
                                {entry.type === 'input' ? `> ${entry.content}` : entry.content}
                            </div>
                        ))}

                        {/* Input Area */}
                        <form onSubmit={handleSubmit} className="flex items-center mt-4">
                            <span className="text-blue-400 text-lg">{'>'}</span>
                            <div className="flex-1 flex items-center">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type a command..."
                                    className={`flex-1 bg-black/35 text-lg border-none outline-none text-blue-400 ml-2 p-1 ${isDarkMode ? 'bg-transparent' : ''
                                        }`}
                                    autoFocus
                                />
                                {/* Blinking Cursor */}
                                <span
                                    className={`blinking-cursor ml-1 ${isDarkMode ? 'text-blue-400' : 'text-gray-800'
                                        }`}
                                >
                                    |
                                </span>
                            </div>
                        </form>

                        {/* Next Command Display */}
                        {nextCommand && (
                            <div
                                className={`mt-6 p-3 rounded-lg ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-800'
                                    }`}
                            >
                                <p className="font-bold">
                                    Next command: <span className="text-blue-400">{nextCommand}</span>
                                </p>
                                <p className="text-sm mt-2">Follow the instructions to proceed.</p>
                            </div>
                        )}
                    </ScrollArea>
                </div>
            </CardContent>
        </Card>
    );
};

// Determine the style for each entry type
const getEntryStyle = (type: string, isDarkMode: boolean): string => {
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

export default TerminalMain;

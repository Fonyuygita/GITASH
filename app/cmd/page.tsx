"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Command, Info, Sun, Moon } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { terminalSteps, type CommandStep } from '@/bigData';
// import { terminalSteps, type CommandStep } from './terminalSteps';

// Type definitions
type HistoryEntry = {
    type: 'input' | 'output' | 'info' | 'error' | 'success';
    content: string;
    timestamp: Date;
};

type Emojis = {
    welcome: string;
    success: string;
    error: string;
    hint: string;
    complete: string;
    learning: string;
    command: string;
    next: string;
    celebration: string;
    progress: string;
};

const TerminalLearning = () => {
    // State declarations
    const [currentTool, setCurrentTool] = useState<string>('');
    const [input, setInput] = useState<string>('');
    const [history, setHistory] = useState<HistoryEntry[]>([]);
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

    // Refs
    const inputRef = useRef<HTMLInputElement>(null);
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    // Constants
    //     const welcomeArt = `
    //    _____ _ _            _    _                          
    //   / ____(_) |          | |  | |                         
    //  | |  __ _| |_ __ _ ___| |__| |   __ _ __ _ _ __ _ __  
    //  | | |_ | | __/ _\` / __|  __  |  / _\` / _\` | '__| '_ \\ 
    //  | |__| | | || (_| \\__ \\ |  | | | (_| (_| | |  | | | |
    //   \\_____|_|\\__\\__,_|___/_|  |_|  \\__,_,__,_|_|  |_| |_|
    //   `;

    const welcomeArt = `
  ▄████  ██▓▄▄▄█████▓ ▄▄▄        ██████  ██░ ██ 
 ██▒ ▀█▒▓██▒▓  ██▒ ▓▒▒████▄    ▒██    ▒ ▓██░ ██▒
▒██░▄▄▄░▒██▒▒ ▓██░ ▒░▒██  ▀█▄  ░ ▓██▄   ▒██▀▀██░
░▓█  ██▓░██░░ ▓██▓ ░ ░██▄▄▄▄██   ▒   ██▒░▓█ ░██ 
░▒▓███▀▒░██░  ▒██▒ ░  ▓█   ▓██▒▒██████▒▒░▓█▒░██▓
 ░▒   ▒ ░▓    ▒ ░░    ▒▒   ▓▒█░▒ ▒▓▒ ▒ ░ ▒ ░░▒░▒
  ░   ░  ▒ ░    ░      ▒   ▒▒ ░░ ░▒  ░ ░ ▒ ░▒░ ░
░ ░   ░  ▒ ░  ░        ░   ▒   ░  ░  ░   ░  ░░ ░
      ░  ░                 ░  ░      ░   ░  ░  ░

MASTER THE COMMAND LINE BY HAVING FUN...
Type 'start' to begin your journey`;


    const emojis: Emojis = {
        welcome: '👋',
        success: '✨',
        error: '❌',
        hint: '💡',
        complete: '🎉',
        learning: '📚',
        command: '⌨️',
        next: '➡️',
        celebration: '🎊',
        progress: '🚀',
    };

    // Helper functions
    const addToHistory = (content: string, type: HistoryEntry['type'] = 'output'): void => {
        setHistory(prev => [...prev, { type, content, timestamp: new Date() }]);
    };

    const scrollToBottom = (): void => {
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
        }
    };

    const getCurrentStepInfo = (): CommandStep | undefined => {
        return currentTool ? terminalSteps[currentTool]?.steps[currentStep] : undefined;
    };

    const handleCommand = (cmd: string): void => {
        const trimmedCmd = cmd.trim().toLowerCase();

        // Handle global commands
        if (trimmedCmd === 'clear') {
            setHistory([]);
            return;
        }

        if (trimmedCmd === 'help') {
            if (!currentTool) {
                addToHistory(`${emojis.hint} Available commands:
${emojis.command} select <tool>: Choose a terminal to learn (${Object.keys(terminalSteps).join(', ')})
${emojis.command} help: Show this help message
${emojis.command} clear: Clear the terminal
${emojis.command} exit: Exit current learning mode`, 'info');
            } else {
                const toolInfo = terminalSteps[currentTool];
                const currentStepInfo = getCurrentStepInfo();
                if (currentStepInfo) {
                    addToHistory(`${emojis.learning} Currently learning: ${toolInfo.name}
${emojis.progress} Current step: ${currentStepInfo.command}
${emojis.hint} ${currentStepInfo.explanation}

${emojis.command} Available commands:
- Type the suggested command to proceed
- help: Show this help message
- clear: Clear the terminal
- exit: Exit current learning mode`, 'info');
                }
            }
            return;
        }

        if (trimmedCmd === 'exit') {
            if (currentTool) {
                setCurrentTool('');
                setCurrentStep(0);
                addToHistory(`${emojis.success} Exited learning mode. Type "help" to see available commands.`, 'info');
            }
            return;
        }

        if (trimmedCmd.startsWith('select ')) {
            const tool = trimmedCmd.split(' ')[1];
            if (terminalSteps[tool]) {
                setCurrentTool(tool);
                setCurrentStep(0);
                const toolInfo = terminalSteps[tool];
                addToHistory(`${emojis.success} Switched to ${toolInfo.name} learning mode.`, 'info');
                addToHistory(`${emojis.learning} ${toolInfo.description}`, 'info');
                addToHistory(`${emojis.next} First step: ${toolInfo.steps[0].command}`, 'info');
                addToHistory(`${emojis.hint} ${toolInfo.steps[0].explanation}`, 'info');
            } else {
                addToHistory(`${emojis.error} Invalid tool selected. Available tools: ${Object.keys(terminalSteps).join(', ')}`, 'error');
            }
            return;
        }

        // Handle learning mode commands
        if (currentTool) {
            const stepInfo = getCurrentStepInfo();
            if (!stepInfo) {
                addToHistory(`${emojis.celebration} Congratulations! You've completed all steps for this tool!`, 'success');
                return;
            }

            if (trimmedCmd.startsWith(stepInfo.command)) {
                addToHistory(`${emojis.success} Correct! Great job!`, 'success');
                addToHistory(`${emojis.hint} ${stepInfo.explanation}`, 'info');

                if (stepInfo.examples) {
                    addToHistory(`${emojis.learning} Examples:`, 'info');
                    stepInfo.examples.forEach(example =>
                        addToHistory(`  ${emojis.command} ${example}`, 'info')
                    );
                }

                if (stepInfo.additionalNotes) {
                    addToHistory(`${emojis.hint} Note: ${stepInfo.additionalNotes}`, 'info');
                }

                const nextStep = currentStep + 1;
                if (nextStep < terminalSteps[currentTool].steps.length) {
                    setCurrentStep(nextStep);
                    addToHistory(`${emojis.next} Next step: ${terminalSteps[currentTool].steps[nextStep].nextHint}`, 'info');
                } else {
                    addToHistory(`${emojis.celebration} Amazing work! You've completed all steps for this tool! ${emojis.celebration}`, 'success');
                    addToHistory(`${emojis.hint} Type "exit" to choose another tool or "help" for more options.`, 'info');
                }
            } else {
                addToHistory(`${emojis.error} Not quite right. Try '${stepInfo.command}'`, 'error');
                addToHistory(`${emojis.hint} ${stepInfo.nextHint}`, 'info');
            }
            return;
        }

        addToHistory(`${emojis.error} Command not recognized. Type "help" for available commands.`, 'error');
    };

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        if (!input.trim()) return;

        addToHistory(input, 'input');
        handleCommand(input);
        setInput('');
    };

    // Effects
    useEffect(() => {
        scrollToBottom();
    }, [history]);

    useEffect(() => {
        inputRef.current?.focus();

        // Show welcome message
        addToHistory(welcomeArt, 'info');
        addToHistory(`${emojis.welcome} Welcome to GitashLearn Terminal Learning Experience!`, 'info');
        addToHistory(`${emojis.hint} Type "help" to see available commands or click on a tool below to begin.`, 'info');
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    // The rest of your JSX remains the same as in the previous version
    // ... (JSX code from the previous version)

    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} p-4 transition-colors`}>
            {/* ... (Previous JSX remains the same) ... */}

            <div className="max-w-7xl mx-auto space-y-4">
                <div className="flex justify-end mb-4">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                    >
                        {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                    {/* Main terminal area - takes up 3 columns on large screens */}
                    <div className="lg:col-span-3">
                        <Card className={`min-h-[80vh] ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
                            <CardHeader className="pb-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Terminal className="w-5 h-5" />
                                        <CardTitle className={isDarkMode ? 'text-white' : 'text-gray-900'}>
                                            GitashLearn Terminal
                                        </CardTitle>
                                    </div>
                                    {currentTool && (
                                        <div className="flex items-center gap-2">
                                            <Badge variant="secondary">
                                                {emojis.learning} Learning: {terminalSteps[currentTool].name}
                                            </Badge>
                                            <Badge variant="outline">
                                                {emojis.progress} Step {currentStep + 1}/{terminalSteps[currentTool].steps.length}
                                            </Badge>
                                        </div>
                                    )}
                                </div>
                                <CardDescription className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                                    Interactive terminal learning environment - Type 'help' for commands
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} rounded-lg overflow-hidden border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                    <ScrollArea
                                        className="h-[calc(80vh-8rem)] p-4 font-mono text-sm"
                                        ref={scrollAreaRef}
                                    >
                                        {history.map((entry, i) => (
                                            <div
                                                key={i}
                                                className={`mb-2 text-lg ${entry.type === 'input' ? 'text-blue-400' :
                                                    entry.type === 'error' ? 'text-red-400' :
                                                        entry.type === 'success' ? 'text-green-400' :
                                                            entry.type === 'info' ? (isDarkMode ? 'text-gray-400' : 'text-gray-600') :
                                                                'text-green-400'
                                                    }`}
                                            >
                                                {entry.type === 'input' ? `> ${entry.content}` : entry.content}
                                            </div>
                                        ))}
                                        <form onSubmit={handleSubmit} className="flex items-center">
                                            <span className="text-blue-400 text-lg">{'>'}</span>
                                            <input
                                                ref={inputRef}
                                                type="text"
                                                value={input}
                                                onChange={(e) => setInput(e.target.value)}
                                                className={`flex-1 text-lg border-none outline-none text-blue-400 ml-2 p-1 ${isDarkMode ? 'bg-transparent' : 'bg-transparent'}`}
                                                autoFocus
                                            />
                                        </form>
                                    </ScrollArea>
                                </div>
                            </CardContent>
                        </Card>

                        {currentTool && getCurrentStepInfo() && (
                            <Alert className="mt-4">
                                <Info className="w-4 h-4 text-green-400 font-bold" />
                                <AlertDescription className='text-green-400 font-bold'>
                                    {emojis.command} Current step:
                                    <span className='text-red-600 font-extrabold px-4'>
                                        {getCurrentStepInfo()?.command}

                                    </span>

                                    <br />
                                    {emojis.hint} {getCurrentStepInfo()?.nextHint}
                                </AlertDescription>
                            </Alert>
                        )}
                    </div>

                    {/* Terminal selection sidebar - takes up 1 column on large screens */}
                    <div className="lg:col-span-1 space-y-4">
                        {Object.entries(terminalSteps).map(([id, tool]) => (
                            <Card
                                key={id}
                                className={`cursor-pointer transition-colors ${isDarkMode
                                    ? 'bg-gray-800 border-gray-700 hover:bg-gray-700'
                                    : 'bg-white hover:bg-gray-100'
                                    } ${currentTool === id ? 'ring-2 ring-blue-500' : ''}`}
                                onClick={() => handleCommand(`select ${id}`)}
                            >
                                <CardHeader>
                                    <CardTitle className={`flex items-center gap-2 text-base ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                        <Command className="w-4 h-4" />
                                        {tool.name}
                                    </CardTitle>
                                    <CardDescription className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                                        {tool.description}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TerminalLearning;
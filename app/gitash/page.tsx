"use client";

import React, { useState, useEffect, useRef } from 'react';
import TerminalMain from '@/components/Terminal/TerminalMain';
import TerminalSidebar from '@/components/Terminal/TerminalSidebar';
import ThemeSwitcher from '@/components/ThemeSwitched/ThemeSwitcher';
import NextCommandCard from '@/components/NextCommand';
import { terminalSteps } from '@/bigData';
import { emojis } from '@/constants/emojies';
import { welcomeArt } from '@/constants/welcome';
// import { addToHistory, clearHistory } from '@/utils/historyUtils';
import { toggleDarkMode } from '@/utils/themeUtils';
import { parseCommand, isGlobalCommand, scrollToBottom } from '@/utils/terminalUtils';
import { HistoryEntry } from '@/types';
import { addToHistory, clearHistory } from '@/utils/historyUtils';
// import { addToHistory, clearHistory } from '@/utils/HistoryUtils';
const GridBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="relative w-full h-full">
                {/* Horizontal lines */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={`h-${i}`}
                        className="absolute w-full h-px bg-gray-700/20"
                        style={{ top: `${(i + 1) * 5}%` }}
                    />
                ))}

                {/* Vertical lines */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={`v-${i}`}
                        className="absolute top-0 bottom-0 w-px bg-gray-700/20"
                        style={{ left: `${(i + 1) * 5}%` }}
                    />
                ))}
            </div>
        </div>
    );
};

const TerminalLearning = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<HistoryEntry[]>([]);
    const [currentTool, setCurrentTool] = useState<string>('');
    const [currentStep, setCurrentStep] = useState<number>(0);
    const scrollAreaRef = useRef<HTMLDivElement | null>(null);

    const handleCommand = (cmd: string): void | string => {
        const trimmedCmd = parseCommand(cmd);

        if (trimmedCmd === 'clear') {
            clearHistory(setHistory);
            return;
        }




        if (trimmedCmd === 'help') {
            addToHistory(
                history,
                setHistory,
                `${emojis.hint} Available commands:
${emojis.command} select <tool>: Choose a terminal to learn (${Object.keys(terminalSteps).join(' | ')})
${emojis.command} help: Show this help message
${emojis.command} clear: Clear the terminal
${emojis.command} exit: Exit current learning mode`,
                'info'
            );
            return;
        }

        if (trimmedCmd.startsWith('select ')) {
            const toolName = trimmedCmd.split(' ')[1];
            handleSelectTool(toolName);
            return;
        }

        if (isGlobalCommand(trimmedCmd)) {
            addToHistory(history, setHistory, `Global command executed: ${trimmedCmd}`, 'info');
            return;
        }

        if (currentTool) {
            const steps = terminalSteps[currentTool]?.steps || [];
            const currentStepInfo = steps[currentStep];

            // if command is valid

            if (currentStepInfo && trimmedCmd.startsWith(currentStepInfo.command)) {
                addToHistory(history, setHistory, `${emojis.success} Correct! You executed: ${currentStepInfo.command}`, 'success');
                addToHistory(history, setHistory, `${emojis.hint} ${currentStepInfo.nextHint}`, 'info');
                addToHistory(history, setHistory, `${emojis.progress} ${currentStepInfo.explanation}`, 'info');

                if (currentStep < steps.length - 1) {
                    setCurrentStep(currentStep + 1);
                } else {
                    //  TERMINAL GAME COMPLETION
                    addToHistory(history, setHistory, `${emojis.celebration} You have completed all steps for ${terminalSteps[currentTool]?.name}!`, 'success');
                }
                return;
            }

            //  COMMAND IS INVALID

            addToHistory(history, setHistory, `${emojis.error} Invalid command for ${terminalSteps[currentTool]?.name}.`, 'error');
            return;
        }

        addToHistory(history, setHistory, `${emojis.error} Unknown command: ${trimmedCmd}`, 'error');
    };

    const handleSelectTool = (toolName: string): void => {
        // check is tool is indeed in the terminalSteps
        if (terminalSteps[toolName]) {
            setCurrentTool(toolName);
            setCurrentStep(0);
            addToHistory(history, setHistory, `${emojis.success} Switched to ${terminalSteps[toolName].name} learning mode.`, 'info');
            addToHistory(history, setHistory, `${emojis.learning} ${terminalSteps[toolName].description}`, 'info');
            // {terminalSteps[toolName].description}`, 'info');
        } else {
            addToHistory(history, setHistory, `${emojis.error} Unknown tool: ${toolName}`, 'error');
        }
    };

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        if (!input.trim()) return;

        addToHistory(history, setHistory, input, 'input');
        handleCommand(input);
        setInput('');
    };

    useEffect(() => {
        scrollToBottom(scrollAreaRef);
    }, [history]);

    useEffect(() => {
        addToHistory(history, setHistory, welcomeArt, 'info');
        addToHistory(history, setHistory, `${emojis.welcome} Welcome to the terminal learning experience!`, 'info');
        addToHistory(history, setHistory, `${emojis.hint} Type "help" to see available commands or select a tool to start learning.`, 'info');
    }, []);

    const currentStepInfo = currentTool ? terminalSteps[currentTool]?.steps[currentStep] : null;

    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} p-4 overflow-hidden`}>
            <GridBackground />
            <div className="flex justify-end mb-4">
                <ThemeSwitcher
                    isDarkMode={isDarkMode}
                    toggleDarkMode={() => toggleDarkMode(isDarkMode, setIsDarkMode)}
                />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <div className="lg:col-span-3">
                    <TerminalMain
                        history={history}
                        input={input}
                        isDarkMode={isDarkMode}
                        setInput={setInput}
                        handleSubmit={handleSubmit}
                        scrollAreaRef={scrollAreaRef}
                        nextCommand={currentStepInfo?.command || null}
                    />
                </div>
                <div>
                    <TerminalSidebar
                        tools={terminalSteps}
                        currentTool={currentTool}
                        handleSelectTool={handleSelectTool}
                        isDarkMode={isDarkMode}
                    />
                </div>
            </div>
            <NextCommandCard
                nextCommand={currentStepInfo?.command || null}
                explanation={currentStepInfo?.explanation || null}
                isDarkMode={isDarkMode}
            />
        </div>
    );
};

export default TerminalLearning;

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

type TerminalSidebarProps = {
    tools: Record<string, { name: string; description: string }>;
    currentTool: string;
    handleSelectTool: (toolId: string) => void;
    isDarkMode: boolean;
};

const TerminalSidebar: React.FC<TerminalSidebarProps> = ({
    tools,
    currentTool,
    handleSelectTool,
    isDarkMode,
}) => {
    return (
        <div className="space-y-4">
            {Object.entries(tools).map(([id, tool]) => (
                <Card
                    key={id}
                    className={`cursor-pointer text-white transition-colors  border-4 border-green-400 ${isDarkMode
                        ? 'bg-gray-800 text-white hover:bg-gray-700'
                        : 'bg-white text-black  hover:bg-gray-100'
                        } ${currentTool === id ? '' : ''}`}
                    onClick={() => handleSelectTool(id)}
                >
                    <CardHeader>
                        <CardTitle className="text-base flex items-center gap-2 text-blue-500">
                            {tool.name}
                        </CardTitle>
                        <CardDescription>
                            {tool.description}
                        </CardDescription>
                    </CardHeader>
                </Card>
            ))}
        </div>
    );
};

export default TerminalSidebar;

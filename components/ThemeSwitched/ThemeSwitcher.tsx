import React from 'react';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';

type ThemeSwitcherProps = {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
};

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ isDarkMode, toggleDarkMode }) => (
    <Button variant="outline" size="icon" onClick={toggleDarkMode} className={isDarkMode ? 'text-white' : 'text-gray-900'}>
        {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
);

export default ThemeSwitcher;

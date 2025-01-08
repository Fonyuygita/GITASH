import { RefObject } from "react";

// Scroll to the bottom of the scroll area
export const scrollToBottom = (
  scrollAreaRef: RefObject<HTMLDivElement>
): void => {
  if (scrollAreaRef.current) {
    scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
  }
};

// Normalize command formats to a standardized format (e.g., 'get-childitem')
const normalizeCommand = (command: string): string => {
  return command
    .trim()
    .toLowerCase()
    .replace(/_/g, "-")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase();
};

// Parse and normalize the command
export const parseCommand = (command: string): string => {
  return normalizeCommand(command);
};

// Check if a command is global (like 'clear', 'help', 'exit')
export const isGlobalCommand = (command: string): boolean => {
  const globalCommands = ["clear", "help", "exit"];
  return globalCommands.includes(command);
};

// Example usage
// const command = "Get-ChildItem";
// const normalizedCommand = parseCommand(command);

import { RefObject } from "react";

export const scrollToBottom = (
  scrollAreaRef: RefObject<HTMLDivElement>
): void => {
  if (scrollAreaRef.current) {
    scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
  }
};

export const parseCommand = (command: string): string => {
  return command.trim().toLowerCase();
};

export const isGlobalCommand = (command: string): boolean => {
  const globalCommands = ["clear", "help", "exit"];
  return globalCommands.includes(command);
};

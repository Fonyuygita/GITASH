import { HistoryEntry } from "@/types";

export const addToHistory = (
  history: HistoryEntry[],
  setHistory: React.Dispatch<React.SetStateAction<HistoryEntry[]>>,
  content: string,
  type: HistoryEntry["type"] = "output"
): void => {
  setHistory((prev) => [...prev, { type, content, timestamp: new Date() }]);
};

export const clearHistory = (
  setHistory: React.Dispatch<React.SetStateAction<HistoryEntry[]>>
): void => {
  setHistory([]);
};

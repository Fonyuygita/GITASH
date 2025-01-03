export interface Author {
  _id: string;
  name: string;
  avatar: string;
  verified?: boolean;
}

export interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  description: string;
  category: string;
  views: number;
  author: Author;
  imageUrl?: string;
}

// Type definitions
export type HistoryEntry = {
  type: "input" | "output" | "info" | "error" | "success";
  content: string;
  timestamp: Date;
};

export type Emojis = {
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

export type CommandStep = {
  command: string;
  explanation: string;
  nextHint: string;
  examples?: string[];
  additionalNotes?: string;
};

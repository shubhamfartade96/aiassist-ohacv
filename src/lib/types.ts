import type { ReactNode } from 'react';

export interface Message {
  id: string;
  role: 'user' | 'bot' | 'system';
  content: ReactNode;
  name?: string;
  avatarUrl?: string;
}

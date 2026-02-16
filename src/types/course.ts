export interface Step {
  id: number;
  title: string;
  concept: string;
  mission: string;
  hint?: string;
  code?: string;
}

export interface Course {
  id: number;
  title: string;
  emoji: string;
  level: 'level1' | 'level2' | 'level3' | 'level4' | 'side';
  description: string;
  steps: Step[];
  estimatedTime: string;
  reward: string;
}

export interface LevelInfo {
  emoji: string;
  label: string;
  color: string;
  description: string;
}

export interface Step {
  id: number;
  title: string;
  concept: string;      // 📚 개념 설명
  mission: string;      // 🎯 미션
  hint?: string;        // 💡 힌트
  code?: string;        // 코드 예시
}

export interface Course {
  id: number;
  title: string;
  emoji: string;
  level: 'beginner' | 'basic' | 'intermediate' | 'advanced';
  description: string;
  steps: Step[];
  estimatedTime: string;
}

export type CourseLevel = 'beginner' | 'basic' | 'intermediate' | 'advanced';

export interface CourseProgress {
  [courseId: number]: {
    currentStep: number;
    completed: boolean;
  };
}

export interface LevelInfo {
  emoji: string;
  label: string;
  color: string;
}
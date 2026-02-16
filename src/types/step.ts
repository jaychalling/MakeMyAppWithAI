export interface Step {
  id: number;
  title: string;
  description: string;
  mission: string;
  hints: string[];
  code?: string;
  expectedResult?: string;
}
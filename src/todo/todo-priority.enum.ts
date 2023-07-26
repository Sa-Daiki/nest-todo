export const TodoPriority = {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
} as const;
export type TodoPriority = typeof TodoPriority[keyof typeof TodoPriority];

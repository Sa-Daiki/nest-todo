export const TodoStatus = {
  OPEN: 'OPEN',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
} as const;
export type TodoStatus = typeof TodoStatus[keyof typeof TodoStatus];

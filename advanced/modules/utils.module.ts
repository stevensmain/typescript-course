export const PI = 3.14;

export const generateId = () => Math.floor(Math.random() * 100);

export interface User {
  id: number;
  name: string;
}

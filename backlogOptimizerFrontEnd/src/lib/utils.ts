import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sanitizeText(value: string): string {
  return value.replace(/[^a-zA-Z0-9\s.,!?-]/g, "").trim();
}

export function sanitizeNumber(value: string): number {
  const num = parseFloat(value);
  return isNaN(num) ? 0 : num;
}
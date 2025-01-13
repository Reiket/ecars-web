import {TOKEN_KEY} from './constants';

export const getJwt = (): string | null => localStorage.getItem(TOKEN_KEY);
export const writeJwt = (jwt: string): void => localStorage.setItem(TOKEN_KEY, jwt);
export const removeJwt = (): void => localStorage.removeItem(TOKEN_KEY);
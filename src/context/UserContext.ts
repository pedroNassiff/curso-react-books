import { createContext } from 'react'

interface Context {
    user?: {
        id?: number;
        nombre?: string;
    },
    setUser?: any;
}

export const UserContext = createContext<Context>({/* estado inicial*/})
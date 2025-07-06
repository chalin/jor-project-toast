import React from 'react';

import { type Variant } from '../Toast';

export interface ToastData {
  id: string;
  variant: Variant;
  message: string;
}

interface ContextType {
  toasts: ToastData[];
  addToast: (toast: Omit<ToastData, 'id'>) => void;
  dismissToast: (id: string) => void;
}

const Context = React.createContext<ContextType | undefined>(undefined);

const generateId = () => crypto.randomUUID();

const MOCK_TOAST_DATA: ToastData[] = [
  { id: '1', variant: 'notice', message: 'Example notice toast' },
  { id: '2', variant: 'error', message: 'Example error toast' },
];
interface ProviderProps {
  children: React.ReactNode;
}

export function Provider({ children }: ProviderProps): React.ReactElement {
  const [toasts, setToasts] = React.useState<ToastData[]>(MOCK_TOAST_DATA);

  const addToast = (toast: Omit<ToastData, 'id'>) => {
    const newToast: ToastData = {
      ...toast,
      id: generateId(),
    };
    setToasts((_) => [..._, newToast]);
  };

  const dismissToast = (id: string) => {
    setToasts((_) => _.filter((toast) => toast.id !== id));
  };

  const value: ContextType = {
    toasts,
    addToast,
    dismissToast,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useToastShelf(): ContextType {
  const context = React.useContext(Context);
  if (context === undefined) {
    throw new Error('useToastShelf must be used within a ToastShelfContext');
  }
  return context;
}

export default Provider;

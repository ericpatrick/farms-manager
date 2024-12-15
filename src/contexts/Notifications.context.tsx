import React, { createContext, useState, ReactNode } from 'react';
import { Snackbar } from '@mui/material';

export interface NotificationsContextProps {
  showNotification: (message: string) => void;
}

export const NotificationsContext = createContext<NotificationsContextProps | undefined>(undefined);

export const NotificationsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [message, setMessage] = useState('');

  const showNotification = (message: string) => {
    setMessage(message);
  };

  const handleClose = () => {
    setMessage('');
  };

  return (
    <NotificationsContext.Provider value={{ showNotification }}>
      {children}
      <Snackbar
        open={!!message}
        message={message}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      ></Snackbar>
    </NotificationsContext.Provider>
  );
};

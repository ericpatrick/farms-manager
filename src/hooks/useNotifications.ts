import { useContext } from 'react';
import { NotificationsContext, NotificationsContextProps } from '../contexts/Notifications.context';

export const useNotifications = (): NotificationsContextProps => {
  const context = useContext(NotificationsContext);
  if (!context) {
    throw new Error('useSnackbar must be used within a SnackbarProvider');
  }
  return context;
};

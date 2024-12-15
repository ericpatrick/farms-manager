import { useState } from 'react';
import { ConfirmationDialog } from '../../../components/ConfirmationDialog';
import { FarmType } from '../types/Farm.type';
import { useDeleteFarm } from '../hooks/useDeleteFarm';
import { useNotifications } from '../../../hooks/useNotifications';

type FarmDeleteConfirmationProps = {
  farm?: FarmType;
  onConfirmation: (confirmed: boolean) => void;
};

export function FarmDeleteConfirmation({ farm, onConfirmation }: FarmDeleteConfirmationProps) {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const { deleteFarm } = useDeleteFarm();
  const { showNotification } = useNotifications();

  if (farm && !openDialog) {
    setDialogMessage(`Are you sure you want to delete ${farm.farmName}`);
    setOpenDialog(true);
  }

  const handleClose = async (confirmed: boolean) => {
    const close = () => {
      setOpenDialog(false);
      onConfirmation(confirmed);
    };

    if (confirmed) {
      try {
        await deleteFarm(farm?.id ?? '');
        close();
      } catch (error) {
        console.error(error);
        showNotification('Something Wrong happened during farm removal. Please, retry it later');
      }
    } else {
      close();
    }
  };

  return <ConfirmationDialog title="Delete Farm" message={dialogMessage} open={openDialog} handleClose={handleClose} />;
}

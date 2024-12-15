import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useState } from 'react';

type ConfirmationDialogProps = {
  open: boolean;
};

export function ConfirmationDialog({ open }: ConfirmationDialogProps) {
  const [openState, setOpenState] = useState(false);

  const handleClickOpen = () => {
    setOpenState(true);
  };

  const handleClose = () => {
    setOpenState(false);
  };

  if (open) {
    handleClickOpen();
  }

  return (
    <Dialog
      open={openState}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous location data to Google, even when no
          apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleClose} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}

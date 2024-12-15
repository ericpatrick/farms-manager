import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

type ConfirmationDialogProps = {
  title: string;
  message: string;
  open: boolean;
  handleClose: (confirmed: boolean) => void;
};

export function ConfirmationDialog({ title, message, open, handleClose }: ConfirmationDialogProps) {
  const handleDialogClose = (confirmed = false) => {
    handleClose(confirmed);
  };

  return (
    <Dialog open={open} onClose={() => handleDialogClose()}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleDialogClose()}>Cancel</Button>
        <Button onClick={() => handleDialogClose(true)}>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
}

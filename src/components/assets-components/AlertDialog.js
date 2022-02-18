import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';

const AlertDialog = ({ open, handleClose, handleRequestSend }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id='alert-dialog-title'>
        {'Do you want to delete a task'}
      </DialogTitle>

      <DialogActions>
        <Button onClick={handleRequestSend}>Yes</Button>
        <Button onClick={handleClose} autoFocus>
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;

import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import { constantsText } from '../../constants/constants';
const AlertDialog = ({ open, handleClose, handleRequestSend }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id='alert-dialog-title'>
        {constantsText.deleteTaskMsg}
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

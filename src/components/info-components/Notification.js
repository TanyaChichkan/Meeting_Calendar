import { useState, useEffect } from 'react';
import { Snackbar } from '@mui/material';
import { Alert } from '@mui/material';
import { constantsText } from '../../constants/constants';
import { constantsNumbers } from '../../constants/constants';

const Notification = ({ error, message, severity }) => {
  const [openErrorMsg, setOpenErrorMsg] = useState(false);

  useEffect(() => setOpenErrorMsg(true), [error]);

  const handleCloseErrorMsg = (_, reason) => {
    if (reason === constantsText.clickaway) {
      return;
    }

    setOpenErrorMsg(false);
  };

  return (
    <Snackbar
      open={openErrorMsg}
      autoHideDuration={constantsNumbers.delay}
      onClose={handleCloseErrorMsg}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      sx={{ width: '32%' }}
      style={{ right: '1%', top: '15%' }}
    >
      <Alert severity={severity} sx={{ width: '100%' }}>
        {severity === 'error' ? `Something went wrong. ${error}!!!` : message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;

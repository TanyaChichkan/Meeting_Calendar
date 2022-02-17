import { Alert } from '@mui/material';

const Notification = ({ message, warningText }) => {
  return (
    <>
      <Alert severity='warning' style={{ marginBottom: '20px' }}>
        {warningText} — <strong>{message}</strong>
      </Alert>
    </>
  );
};

export default Notification;

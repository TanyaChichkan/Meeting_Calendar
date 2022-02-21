import { Alert } from '@mui/material';

const Notification = ({ message, severity }) => {
  return (
    <Alert severity={severity} style={{ marginBottom: '20px' }}>
      <strong>{message}</strong>
    </Alert>
  );
};

export default Notification;

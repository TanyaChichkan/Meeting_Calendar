import { Popover } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

const CustomPopover = ({ anchorEl, handleClose, children }) => {
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <div style={{ padding: '20px' }}>
        <IconButton
          color='default'
          style={{ position: 'absolute', right: 0, top: 0 }}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        {children}
      </div>
    </Popover>
  );
};

export default CustomPopover;

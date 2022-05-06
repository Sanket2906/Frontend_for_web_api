import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DeleteDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} style={{
                borderRadius: 6,
                padding: "5px",
                border: '1px solid skyblue'}}>
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{backgroundColor:"#2D4250", color:"white"}}>
          {"Delete Records ?"}
        </DialogTitle>
        <DialogContent style={{backgroundColor:"#2D4250"}}>
          <DialogContentText id="alert-dialog-description" style={{color:"white"}}>
           Are you sure you want to delete these record[s] ?
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{backgroundColor:"#2D4250", color:"white"}}>
          <Button onClick={handleClose } style={{color:"white"}}>Cancel</Button>
          <Button onClick={handleClose} style={{color:"white"}} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

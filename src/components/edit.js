import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog1() {
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
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{backgroundColor:"#2D4250", color:"white"}}>Edit</DialogTitle>
        <DialogContent style={{backgroundColor:"#2D4250"}}>

          <TextField
          style={{color:"white !important"}}
            autoFocus
            margin="dense"
            maxRows={4}
            id="invoice_currency"
            label="invoice_currency"
            type="text"
            // fullWidth
            variant="standard"
          />
          <TextField
          style={{marginLeft:"10px"}}
          sx={{color:"white"}}
            autoFocus
            margin="dense"
            maxRows={4}
            id="cust_payment_terms"
            label="cust_payment_terms"
            type="text"
            // fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions style={{backgroundColor:"#2D4250"}}>
          <Button onClick={handleClose} style={{width: '49%', border: '1px solid #2d4250', backgroundColor: '#2d4250', color: 'white'}}>Cancel</Button>
          <Button onClick={handleClose} style={{width: '49%', border: '1px solid #2d4250', backgroundColor: '#2d4250', color: 'white'}}>Edit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

export function DialogPopUp({open, handle, error}) {



    return(
        <div>
            
            <Dialog
              open={open}
              onClose={handle}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Ошибка при выполнении действия"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Ошибка при {error} 
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handle} autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
        </div>
    )
}
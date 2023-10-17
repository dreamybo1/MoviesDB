import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { actionToken, cancelToken, pageTypes, sendEmail } from "../Pages/LoginStore/LoginStore";
import { useState } from "react";


function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

export function LoginDialog({open, handle}) {
    const dispatch = useDispatch()
    const [token, setToken] = useState(null)
    const [email, setEmail] = useState(null)
    const [updater, setUpdater] = useState(false)
    const pageTypeNow = useSelector(state=>state.pageType)

    


        return(
            
            <div key={pageTypeNow} className="MainDivSendEmail">
                <Paper className="PaperSendEmail">
                    <Dialog className="DivSendEmail" open={open}  >  

                    {
                    pageTypeNow === pageTypes.TOKEN_PAGE

                    ?
                    <>
                        <DialogTitle className="TitleSendEmail">
                            <Typography>
                                Введите токен
                            </Typography>
                        </DialogTitle>
                        <DialogContent className="ContentSendEmail">
                            <TextField key={"token"} value={token} onChange={(e)=>{setToken(e.target.value)}} variant="outlined" label={"токен"}>

                            </TextField>
                        </DialogContent>
                        <DialogActions className="ActionsSendEmail">
                            <Button onClick={()=>{
                                dispatch(cancelToken())
                                setUpdater(!updater)
                            }}>
                                <Typography>
                                    Отмена
                                </Typography>
                            </Button>

                                    <Button onClick={()=>{
                                        dispatch(actionToken(token))
                                        
                                        setUpdater(!updater)
                                        handle()
                                    }}>
                                        <Typography>
                                            Ок   
                                        </Typography>
                                    </Button>

                        </DialogActions>
                    </>
                    :
                    <>
                        <DialogTitle className="TitleSendEmail">
                            <Typography>
                                Запросить токен
                            </Typography>
                        </DialogTitle>
                        <DialogContent className="ContentSendEmail">
                            <TextField key={"email"} value={email} onChange={(e)=>{setEmail(e.target.value)}} variant="outlined" label={"почта"}> 
                            </TextField>
                        </DialogContent>
                        <DialogActions className="ActionsSendEmail">
                            <Button onClick={handle}>
                                <Typography>
                                    Отмена
                                </Typography>
                            </Button>
                            <Button onClick={
                                ()=>{
                                    if(validateEmail(email)){
                                        console.log(pageTypeNow)
                                        dispatch(sendEmail(email))
                                        setUpdater(!updater)
                                    }
                                }
                            }>
                                <Typography>
                                    Отправить   
                                </Typography>
                            </Button>
                        </DialogActions>
                    </>

                    }
                        
                    </Dialog>
                </Paper>
            </div>
       
        )
    

    
}




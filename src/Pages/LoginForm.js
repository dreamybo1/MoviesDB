import { Button, DialogActions, DialogContent, DialogTitle, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { emailState, sentState } from "../Components/Constants/stateConsts";
import { Link } from "react-router-dom";



export function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }


export function LoginForm (){
    const[email, setEmail] = useState(emailState)
    const[sent,setSent] = useState(sentState)


    if(sent){
        return(
        <div key={sent} className="MainDivSendEmail">
            <Paper className="PaperSendEmail">
                <div className="DivSendEmail">
                    <DialogTitle className="TitleSendEmail">
                        <Typography>
                            Введите токен
                        </Typography>
                    </DialogTitle>
                    <DialogContent className="ContentSendEmail">
                        <TextField  variant="outlined" label={"токен"}>

                        </TextField>
                    </DialogContent>
                    <DialogActions className="ActionsSendEmail">
                        <Button onClick={()=>{
                            setSent(sentState)
                        }}>
                            <Typography>
                                Отмена
                            </Typography>
                        </Button>
                            <Link to={"/"}>
                                <Button onClick={()=>{
                                    localStorage.setItem("loged", true)
                                }}>
                                    <Typography>
                                        Ок   
                                    </Typography>
                                </Button>
                            </Link>
                    </DialogActions>
                </div>
            </Paper>
        </div>
        )
    }

    return(
        <div key={sentState} className="MainDivSendEmail">
            <Paper className="PaperSendEmail">
                <div className="DivSendEmail">
                    <DialogTitle className="TitleSendEmail">
                        <Typography>
                            Запросить токен
                        </Typography>
                    </DialogTitle>
                    <DialogContent className="ContentSendEmail">
                        <TextField value={email} onChange={(e)=>{setEmail(e.target.value)}} variant="outlined" label={"почта"}>

                        </TextField>
                    </DialogContent>
                    <DialogActions className="ActionsSendEmail">
                        <Button >
                            <Typography>
                                Отмена
                            </Typography>
                        </Button>
                        <Button onClick={
                            ()=>{
                                if(validateEmail(email)){
                                    setSent(true)
                                    setEmail(emailState)
                                }
                            }
                        }>
                            <Typography>
                                Отправить   
                            </Typography>
                        </Button>
                    </DialogActions>
                </div>
            </Paper>
        </div>
    )
}
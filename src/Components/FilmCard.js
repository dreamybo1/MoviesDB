import { Card } from "@mui/material"
import {Paper} from "@mui/material"
import {CardMedia} from "@mui/material"
import {CardHeader} from "@mui/material"
import {IconButton} from "@mui/material"
import { Star, StarOutline } from "@mui/icons-material"
import { Typography } from "@mui/material/"
import { useState } from "react"
import { DialogPopUp } from "./DialogError"
import { useDispatch, useSelector } from "react-redux"
import { clickedIdSetter, favMoviesSetter } from "../Pages/LoginStore/LoginStore"
import { favMoviesFetch } from "../Pages/LoginStore/Thunks"





export function FilmCard ({id,fav,accountId, childrenPic,onClick, childrenName, childrenRate, cliked}){
    const dispatch = useDispatch()

    const favMovies = useSelector(state=>state.favMovies)
    const [open, setOpen] = useState(false);
    const [errorFetch, setErrorFetch] = useState("")


  
              const handleClickOpen = () => {
                setOpen(true);
              };
  
              const handleClose = () => {
                setOpen(false);
              };


    return(
        
      <>
      <DialogPopUp open={open} handle={handleClose} error={errorFetch}/>

        <div id={id} onClick={()=>{localStorage.setItem('id',id);dispatch(clickedIdSetter((id)))}} className='divCard'>
            <Card className='filmCard'>
    
            <Paper className='paperCard'>
                <div className='divCardMedia'>
                <CardMedia image={"https://image.tmdb.org/t/p/w500"+ childrenPic} className='cardMedia'/>
                <CardHeader 
                action={
                    <>
                        <IconButton 
                        className='cardIconButton'
                        onClick={(e)=>{
                            e.stopPropagation()
                            e.preventDefault()
                            
                            if(favMovies.includes(id)){
                                dispatch(favMoviesSetter((favMovies.filter(el => el !== id))))
                                fetch(`https://api.themoviedb.org/3/account/${accountId}/favorite`, 
                                    {
                                        method: 'POST',
                                        headers: {
                                            accept: 'application/json',
                                            'content-type': 'application/json',
                                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTMwNjgxOThkZmU0Zjk5Y2RiZTZlNmI2MGU0MGU0NSIsInN1YiI6IjY0OTFhZjE5YzJmZjNkMDBhZDAzYzM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yasYFK7QmsGhulW2aFY9e8-qlyhcgSQ1t3l9N5iQeMc'
                                        },
                                        body: JSON.stringify({ "media_type": "movie", "media_id": id, "favorite": false })
                                    })
                                .then((response) => response.json())
                                .then((json) => console.log(json))
                                .then(
                                    setTimeout(()=>{
                                        dispatch(favMoviesFetch(accountId))
                                    }, 1000)
                                    
                                    
                                    
                                    
                                    
                                    )
                                .catch(err => {
                                    console.error(err)
                                    setErrorFetch("удалении из избранных")
                                    handleClickOpen()
                                    dispatch(favMoviesFetch(accountId))
                                    
                                  });
                                // setFavour(!favour)
                                
                            }else{
                                dispatch( favMoviesSetter( ([...favMovies, id]) ))
                                fetch(`https://api.themoviedb.org/3/account/${accountId}/favorite`, 
                                    {
                                        method: 'POST',
                                        headers: {
                                            accept: 'application/json',
                                            'content-type': 'application/json',
                                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTMwNjgxOThkZmU0Zjk5Y2RiZTZlNmI2MGU0MGU0NSIsInN1YiI6IjY0OTFhZjE5YzJmZjNkMDBhZDAzYzM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yasYFK7QmsGhulW2aFY9e8-qlyhcgSQ1t3l9N5iQeMc'
                                        },
                                        body: JSON.stringify({ "media_type": "movie", "media_id": id, "favorite": true })
                                    })
                                .then((response) => response.json())
                                .then((json) => console.log(json))
                                .then(
                                    
                                    setTimeout(()=>{
                                        dispatch(favMoviesFetch(accountId))
                                    }, 1000)
                                )
                                .catch(err => {
                                    console.error(err)
                                    setErrorFetch("добавлении в избранные")
                                    handleClickOpen()
                                    dispatch(favMoviesFetch(accountId))
                                  });
                                  
                                // setFavour(!favour)
                            }
                        }}
                        >
                        {favMovies.includes(id)
                        ?
                        <Star
                            sx={{
                            color:"yellow",
                            width: 24,
                            height: 24
                            }} />
                        :
                        <StarOutline
                            sx={{
                            width: 24,
                            height: 24
                            }} />
                        
                        
                        }
                        
                        </IconButton>
                    </>
                }
                
                title={
                    <>
                    <div className='contentCard'>
                        <Typography fontSize={"medium"} variant='h5'>
                        {childrenName}
                        </Typography>
                        
                    </div>
                    
                    </>
                } 
                subheader={
                    <>
                        <Typography>
                        {childrenRate}
                        </Typography>
                    </>
                }
                
                className='cardHeader'>
                    
                </CardHeader>
                </div>
            </Paper>
    
            </Card>
        </div>
      </>
  )
  
  
    
  }
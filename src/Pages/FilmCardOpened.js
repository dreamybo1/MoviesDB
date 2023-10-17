
import { DetailsItem } from '../Components/DetailsItem';
import { AppBar } from '@mui/material';
import { Paper } from '@mui/material/';
import { Toolbar } from '@mui/material/';
import { Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import { AccountCircle, ArrowBack, Star, StarOutline } from '@mui/icons-material';
import { Stack } from '@mui/material/'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { movieCreditsObjectState, movieDetailsObjectState } from '../Components/Constants/stateConsts';
import { Link } from 'react-router-dom';
import { DialogPopUp } from '../Components/DialogError';
import { useDispatch, useSelector } from 'react-redux';
import { clickedIdSetter, favMoviesSetter, movieCreditsSetter, movieDetailsSetter } from './LoginStore/LoginStore';
import { accountIdFetch, favMoviesFetch, movieCreditsFetch, movieDetailsFetch } from './LoginStore/Thunks';






export function FilmCardOpened (){
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const [errorFetch, setErrorFetch] = useState("")

            const handleClickOpen = () => {
              setOpen(true);
            };

            const handleClose = () => {
              setOpen(false);
            };



    let id = useSelector(state=>state.clickedId)
    const detailsObject = useSelector(state=>state.movieDetails)
    const creditsObject = useSelector(state=>state.movieCredits)
    const accountId = useSelector(state=>state.accountId)
    const favMovies = useSelector(state=>state.favMovies)
  
    useEffect(()=>{
      dispatch(movieDetailsFetch(id))
      dispatch(movieCreditsFetch(id))
      dispatch(accountIdFetch())
      dispatch(favMoviesFetch(accountId))

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[accountId,id])


    
      if(Object.keys(detailsObject).length !== 0 && Object.keys(creditsObject).length !== 0 ){
        return(
          <>
            
            


              <DialogPopUp open={open} handle={handleClose} error={errorFetch}/>




            <AppBar id='AppBar' position='static' color='primary'>
              <Paper id='PaperHeader' elevation={4}>
                <Toolbar id='ToolbarHeader'>
                  <div id='leftSide'>
                      <Typography id='TypographyHeader' variant='body1'>
                        {detailsObject.title}
                      </Typography>
                  </div>
                    
      
                  <Stack id='StackHeader' direction={'row'} spacing={0}>
                    <IconButton id='IconButtonHeader'>
                      <AccountCircle id='AccountCircleHeader'/>
                    </IconButton>
                  </Stack>
                  
                </Toolbar>
              </Paper>
            </AppBar>
            <main className='mainElement'>
              <poster className='poster'>
                {detailsObject.poster_path && <img alt="loading" src={`https://image.tmdb.org/t/p/w500${detailsObject.poster_path}`} className='imgPoster'/>}
              </poster>
              <div_details className='dibDetails'>
      
                <title_details className='titleDetails'>
                  <Typography variant='h3'>
                    {detailsObject.title}
                  </Typography>
                  <IconButton onClick={(e)=>{
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






                            // if(favMovies.includes(+id)){
                            //     // dispatch(favMoviesSetter(([])))
                            //     fetch(`https://api.themoviedb.org/3/account/${accountId}/favorite`, 
                            //         {
                            //             method: 'POST',
                            //             headers: {
                            //                 accept: 'application/json',
                            //                 'content-type': 'application/json',
                            //                 Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTMwNjgxOThkZmU0Zjk5Y2RiZTZlNmI2MGU0MGU0NSIsInN1YiI6IjY0OTFhZjE5YzJmZjNkMDBhZDAzYzM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yasYFK7QmsGhulW2aFY9e8-qlyhcgSQ1t3l9N5iQeMc'
                            //             },
                            //             body: JSON.stringify({ "media_type": "movie", "media_id": id, "favorite": false })
                            //         })
                            //     .then((response) => response.json())
                            //     .then((json) => console.log(json))
                            //     .catch(err => {
                            //       console.error(err)
                            //       setErrorFetch("удалении из избранных")
                            //       handleClickOpen()
                            //       fetch(`https://api.themoviedb.org/3/account/${accountId}/favorite/movies`, options)
                            //       .then(response => response.json())
                            //       .then(response => dispatch(favMoviesSetter((response.results.map(el=>el.id)))))
                            //       .catch(err => console.error(err));
                                  
                            //     });
                                
                            //     // setUpdater(!updater)
                                
                            // }else{
                            //     // dispatch(favMoviesSetter(([...favMovies, id])))
                            //     fetch(`https://api.themoviedb.org/3/account/${accountId}/favorite`, 
                            //         {
                            //             method: 'POST',
                            //             headers: {
                            //                 accept: 'application/json',
                            //                 'content-type': 'application/json',
                            //                 Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTMwNjgxOThkZmU0Zjk5Y2RiZTZlNmI2MGU0MGU0NSIsInN1YiI6IjY0OTFhZjE5YzJmZjNkMDBhZDAzYzM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yasYFK7QmsGhulW2aFY9e8-qlyhcgSQ1t3l9N5iQeMc'
                            //             },
                            //             body: JSON.stringify({ "media_type": "movie", "media_id": id, "favorite": true })
                            //         })
                            //     .then((response) => response.json())
                            //     .then((json) => console.log(json))
                            //     .catch(err => {
                            //       console.error(err)
                            //       setErrorFetch("добавлении в избранные")
                            //       handleClickOpen()
                            //       fetch(`https://api.themoviedb.org/3/account/${accountId}/favorite/movies`, options)
                            //       .then(response => response.json())
                            //       .then(response => dispatch(favMoviesSetter((response.results.map(el=>el.id)))))
                            //       .catch(err => console.error(err));
                            //     });
                                

                            //     // setUpdater(!updater)
                            // }
                        }}>
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
                </title_details>
      
                <controls className='controlsDetails'>
                  <Link to={"/MoviesDB"}>
                    <IconButton onClick={()=>{
                      dispatch( movieCreditsSetter((movieCreditsObjectState)))
                      dispatch(movieDetailsSetter(movieDetailsObjectState))
                      dispatch(clickedIdSetter(null))
                    }} >
                      <ArrowBack/>
                    </IconButton>
                  </Link>
                </controls>
                
                <cast className='castDetails'>
                  
                  {creditsObject.cast.map(el=>(
                    <Typography variant='h6'>
                        {el.name ?? "Нет данных"}
                    </Typography>
                  )).slice(0,4)}
    
                </cast>
                <details_details className='detailsDetails'>
                  <Typography variant='h4'>
                    Детали
                  </Typography>
                  <DetailsItem  firstChild={'Страна'} secondChild={(detailsObject.production_countries[0] ?? "Нет данных").name ?? "Нет данных" }/>
                  <DetailsItem  firstChild={'Дата релиза'} secondChild={(detailsObject.release_date ?? "Нет данных").split("-").reverse().join(".") ?? "Нет данных"}/>
                  <DetailsItem  firstChild={'Жанр'} secondChild={(detailsObject.genres ?? "Нет данных").map(el =>el.name ).join(", ") ?? "Нет данных"}/>
                  <DetailsItem  firstChild={'Бюджет'} secondChild={(detailsObject.budget === 0)?"Нет данных":(detailsObject.budget+" $") ?? "Нет данных"}/>
                  <DetailsItem  firstChild={'Время'} secondChild={(detailsObject.runtime ?? "Нет данных") + " мин." ?? "Нет данных"}/>
                </details_details>
              </div_details>
            </main>
      
          </>
        )
      }else{
        return(
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <img  alt='loading...'  src='https://media.tenor.com/n1GNGQYlVJ8AAAAi/kakaotalk-emoticon.gif'/>
          </div>
          
        )
      }
        

    
  }
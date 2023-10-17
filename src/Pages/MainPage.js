/* eslint-disable react-hooks/exhaustive-deps */

import '../App.css';
import { pageState,sliderState,sortState,maxPages, searchValueState, adultState, token, getCookie } from '../Components/Constants/stateConsts';
import { RangeSlider } from '../Components/RangeSlider';
import { CheckboxesTags } from '../Components/CheckboxesTags';
import { FilmCard } from '../Components/FilmCard';
import { AppBar, Select, Pagination,MenuItem,FormControl,InputLabel,Paper,Toolbar,Typography,IconButton,Stack, Autocomplete, TextField, Dialog } from '@mui/material';
import { AccountCircle,Close, ExitToApp, NoAdultContent } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as React from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { LoginDialog } from '../Components/LoginDialog';
import { Provider, useDispatch, useSelector, useStore } from 'react-redux';
import { adultValueSetter, cancelToken, filmsArrSetter, genresSetter, pageSetter, pagesCountSetter, searchValueSetter, sliderSetter, sortTypeSetter } from './LoginStore/LoginStore';
import { accountIdFetch, allGenresFetch, favMoviesFetch, searchFetch, sortMoviesFetch } from './LoginStore/Thunks';


const Wrapper = () => {
  return (
    <Provider store={useStore()}> 
      <MainPage /> 
    </Provider>
  )
}

export function MainPage (){
  const store = useStore()
  const dispatch = useDispatch()
  
  const [values, setValues] = useState(sliderState)
  const allGenres = useSelector(state=>state.allGenres)
  const sort = useSelector(state =>state.sortType)
  const page = useSelector(state=>state.page)
  const filmsArr = useSelector(state=>state.filmsArr)  
  const clickedId = useSelector(state=>state.clickedId)
  const accountId = useSelector(state=>state.accountId)
  const favMovies = useSelector(state=>state.favMovies)
  const searchValue = useSelector(state=>state.searchValue)
  const searchArray = useSelector(state=>state.searchArray)
  const adult = useSelector(state=>state.adult)
  const pagesValue = useSelector(state=>state.pagesCount)
  const [open, setOpen] = useState(false)
  const [updater, setUpdater] = useState(false)



  useEffect(()=>{
    if(searchValue === ""){
        dispatch( pagesCountSetter( (maxPages)))
      }
    if(searchValue.trim() !== ""){
    dispatch(searchFetch(searchValue, adult, page))
    }
    
  },[adult,searchValue,page])


  useEffect(()=>{
    if(searchValue.trim() === "" || searchValue === null){
      dispatch(allGenresFetch())
      dispatch(accountIdFetch())
      dispatch(favMoviesFetch(accountId))
      dispatch(sortMoviesFetch(sort,page,maxPages))
      console.log(favMovies)
    }   
  },[page,searchValue,sort,clickedId,values])

  useEffect(()=>{
    dispatch(sliderSetter(arrOfYears(values[0],values[1])))
  },[values])

  return (
      <>
        

      {
      !(getCookie("token") === token) 

      ?
      
      <LoginDialog open={open} handle={()=>{setOpen(false)}}/>

      :

      <Paper className='PaperSendEmail'>
        <Dialog onClick={()=>{setOpen(false)}} open={open} className='DivSendEmail'>
          <IconButton onClick={()=>{dispatch(cancelToken());setUpdater(!updater)}}>
            <Typography>ВЫХОД</Typography><ExitToApp/>
          </IconButton>
        </Dialog>
      </Paper>
      }



        <AppBar id='AppBar' position='static' color='primary'>
        
          <Paper id='PaperHeader' elevation={4}>
            <Toolbar id='ToolbarHeader'>
              <div id='leftSide'>
                  <Typography id='TypographyHeader' variant='body1'>
                    Фильмы
                  </Typography>
              </div>
                

              <Stack id='StackHeader' direction={'row'} spacing={0}>

                    <IconButton id='IconButtonHeader' onClick={()=>{setOpen(true);console.log(store.getState())}}>
                      <AccountCircle id='AccountCircleHeader'/>
                    </IconButton>

              </Stack>
              
            </Toolbar>
          </Paper>
        </AppBar>
       
        <main className='mainElement'>

            {
            !(getCookie("token") === token) 
            ?
            <Typography sx={{alignSelf:"center"}} variant='h1'>
                Please log in
              </Typography>
            :
            


          <>
          <div id='filtersElement'>
                      <Paper id='mainPaper' elevation={4}>
                          <div id='frame1'>
                              <Typography id='mainTypography1' variant='h6'>
                                  Фильтры
                              </Typography>
                              <IconButton onClick={() => {
                                  dispatch( sortTypeSetter( (sortState)));
                                  setValues(sliderState);
                                  dispatch(pageSetter( (pageState)));
                                  dispatch(searchValueSetter( (searchValueState) ) )
                                  dispatch( adultValueSetter((adultState)))
                                  dispatch( pagesCountSetter( (maxPages)))
                                  dispatch( genresSetter([]))
                                } }>
                                  <Close />
                              </IconButton>
                          </div>
                          <div className='searchInput'>

                            <Autocomplete
                                    renderOption={(props, option, { selected }) => (
        
                                        <li 
                                        
                                         {...props}
                                         onClick={()=>{console.log(option);dispatch(searchValueSetter( (option) ) )}}
                                         >
                                          
                                          {option}
                                        </li>
                                      )}
                                    value={searchValue}
                                    freeSolo
                                    id="free-solo-2-demo"
                                    disableClearable
                                    fullWidth
                                    options={[...new Set(searchArray.map((option) => option.title))]}
                                    renderInput={(params) => (
                                    <TextField
                                        
                                        value={searchValue}
                                        onChange={(e)=>{
                                            dispatch(searchValueSetter( (e.target.value) ) )
                                        }}
                                        {...params}
                                        label="Название фильма"
                                        InputProps={{
                                        ...params.InputProps,
                                        type: 'search',
                                        }}
                                    />
                                    
                                    )}
                                    
                                />
                                <IconButton
                                sx={{
                                    alignSelf:"center"
                                }}
                                onClick={()=>{
                                    // return color
                                    dispatch( adultValueSetter((!adult)))

                                }}
                                color={adult?"default":"primary"}


                                >
                                    <NoAdultContent/>
                                </IconButton>


                          </div>
                          <FormControl id='formControlSelect' fullWidth>
                              <InputLabel id="inputLabelSort">Сортировать по:</InputLabel>
                              <Select
                                  value={sort}
                                  onChange={(event, newValue) => {
                                      if(searchValue === ""){
                                        dispatch(pageSetter( (pageState)));
                                        dispatch(sortTypeSetter( (newValue.props.value)));
                                        console.log(sort);
                                        dispatch( filmsArrSetter( [] ))
                                      }
                                      
                                    } }

                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  label="Сортировать по:"
                                  sx={{ width: 300 }}

                              >
                                  <MenuItem value={'Популярные по убыванию'}>Популярные по убыванию</MenuItem>
                                  <MenuItem value={'Популярные по возрастанию'}>Популярные по возрастанию</MenuItem>
                                  <MenuItem value={'По рейтингу по убыванию'}>По рейтингу по убыванию</MenuItem>
                                  <MenuItem value={'По рейтингу по возрастанию'}>По рейтингу по возрастанию</MenuItem>
                              </Select>
                          </FormControl>
                          <Typography id='releaseYear' variant='body1'>Год релиза:</Typography>
                          <div id='slider'>
                              <RangeSlider value={values} setValue={setValues} />
                          </div>

                          <CheckboxesTags id={"auto"} arr={allGenres}></CheckboxesTags>         
                          <Pagination
                              page={page}
                              onChange={(event, page) => {
                                  dispatch(pageSetter( (page)));
                                  dispatch( filmsArrSetter( [] ))
                              } }
                              sx={{
                                  position: "absolute",
                                  display: "flex",
                                  width: "298px",
                                  padding: "24px 6px",
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  gap: '6px',
                                  bottom: 10
                              }}
                              size='medium'
                              count={pagesValue}
                              defaultPage={pageState}
                              siblingCount={0} />

                      </Paper>

            </div>
               <div id='film_grid'>
                        {
                        filmsArr.length === 0 &&
                           <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                              <img alt='loading...' src='https://media.tenor.com/n1GNGQYlVJ8AAAAi/kakaotalk-emoticon.gif' />
                          </div>
                        }

                       {
                       filmsArr.map(el => (
                         <Link to={`movie/${el.id}`}>
                              <FilmCard id={el.id} accountId={accountId} fav={favMovies.includes(el.id)} key={el.id} childrenPic={el.backdrop_path} childrenName={el.title}    childrenRate={el.vote_average} />
                          </Link>
                       ))
                       }
                </div>
        </>
}


        </main>
        


      </>
  );
}


export function arrOfYears(firstValue, lastValue){
  const arr = []
  for (let i = firstValue; i <= lastValue; i++) {
    arr.push(i)
    
  }
  return arr
}

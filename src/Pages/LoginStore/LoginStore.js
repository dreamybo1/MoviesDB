import { act } from "react-dom/test-utils"
import { deleteCookie, setCookie } from "../../Components/Constants/stateConsts"
import { createSlice } from "@reduxjs/toolkit"






export const SEND_TOKEN_TO_EMAIL = "SEND_TOKEN_TO_EMAIL"
export const USE_TOKEN_FROM_EMAIL = "USE_TOKEN_FROM_EMAIL"
export const CANCEL_TOKEN = "CANCEL_TOKEN"
export const SET_PAGE_TYPE = "SET_PAGE_TYPE"
export const SET_SLIDER_ARRAY = "SET_SLIDER_ARRAY"
export const SET_GENRES_ARRAY = "SET_GENRES_ARRAY"
export const SET_PAGE_VALUE = "SET_PAGE_VALUE"
export const SET_PAGES_COUNT = "SET_PAGES_COUNT"
export const SET_SORT_TYPE = "SET_SORT_TYPE"
export const SET_SEARCH_VALUE = "SET_SEARCH_VALUE"
export const SET_SEARCH_ARRAY = "SET_SEARCH_ARRAY"
export const SET_FILMS_ARRAY = "SET_FILMS_ARRAY"
export const SET_ADULT_VALUE = "SET_ADULT_VALUE"
export const SET_ACCOUNT_ID = "SET_ACCOUNT_ID"
export const SET_FAV_MOVIES_ARRAY = "SET_FAV_MOVIES_ARRAY"
export const SET_ALL_GENRES_ARRAY = "SET_ALL_GENRES_ARRAY"
export const SET_CLICKED_ID = "SET_CLICKED_ID"
export const SET_MOVIE_DETAILS_OBJECT = "SET_MOVIE_DETAILS_OBJECT"
export const SET_MOVIE_CREDITS_OBJECT = "SET_MOVIE_CREDITS_OBJECT"




export const pageTypes ={
    EMAIL_PAGE: "EMAIL_PAGE",
    TOKEN_PAGE:"TOKEN_PAGE"
}

export const initialState = {
    email: null,
    token: null,
    pageType: pageTypes.EMAIL_PAGE,
    years:[],
    genres:[],
    page:1,
    pagesCount: 500,
    sortType:"Популярные по убыванию",
    searchValue:"",
    searchArray:[],
    filmsArr:[],
    adult:true,
    accountId:null,
    favMovies:[],
    allGenres:[],
    clickedId:null,
    movieDetails:{},
    movieCredits:{}
}



// export function pagesCountSetter (pagesCount){
//     return {type: SET_PAGES_COUNT, pagesCount}
// }


// export function sendEmail (email){
//     return {type: SEND_TOKEN_TO_EMAIL, email}
// }

// export function actionToken(token){
//     return {type: USE_TOKEN_FROM_EMAIL, token}
// }


// export function cancelToken (){
//     return {type: CANCEL_TOKEN}
// }

// export function sliderSetter (years){
//     return  {type:SET_SLIDER_ARRAY, years}
// }

// export function genresSetter (genres){
//     return {type:SET_GENRES_ARRAY, genres}
// }

// export function sortTypeSetter (sortType){
//     return {type:SET_SORT_TYPE, sortType}
// }

// export function searchValueSetter (searchValue){
//     return {type: SET_SEARCH_VALUE, searchValue}
// }

// export function searchArraySetter (searchArray){
//     return {type: SET_SEARCH_ARRAY, searchArray }
// }

// export function filmsArrSetter (filmsArr){
//     return {type: SET_FILMS_ARRAY, filmsArr}
// }
// export function adultValueSetter (adultValue){
//     return {type: SET_ADULT_VALUE, adultValue}
// }

// export function accountIdSetter (accountId){
//     return {type: SET_ACCOUNT_ID, accountId}
// }

// export function favMoviesSetter (favMovies){
//     return {type: SET_FAV_MOVIES_ARRAY, favMovies}
// }

// export function allGenresSetter (allGenres){
//     return {type: SET_ALL_GENRES_ARRAY, allGenres}
// }

// export function clickedIdSetter (clickedId){
//     return {type: SET_CLICKED_ID, clickedId}
// }
// export function movieDetailsSetter (movieDetails){
//     return {type: SET_MOVIE_DETAILS_OBJECT, movieDetails}
// }
// export function movieCreditsSetter (movieCredits){
//     return {type: SET_MOVIE_CREDITS_OBJECT, movieCredits}
// }

// export function login (state = initialState, action){
    
//     switch(action.type){
//         case SEND_TOKEN_TO_EMAIL:
//             return Object.assign({}, state, {
//                 pageType: pageTypes.TOKEN_PAGE,
//                 email: action.email
//             })
//         case USE_TOKEN_FROM_EMAIL:
//             setCookie("token", action.token, {"max-age":100000})
//             return Object.assign({}, state, {
//                 pageType: pageTypes.TOKEN_PAGE,
//                 token: action.token 
//             })
//         case CANCEL_TOKEN:
//             setCookie("token", null, {"max-age":-1})
//             return Object.assign({}, state,{
//                 pageType: pageTypes.EMAIL_PAGE,
//                 email:null,
//                 token:null
//             })
//         case SET_SLIDER_ARRAY:
//             return Object.assign({}, state, {
//                 years: action.years
//             })
//         case SET_GENRES_ARRAY:
//             return Object.assign({}, state, {
//                 genres: action.genres
//             })
//         case SET_PAGE_VALUE:
//             return Object.assign({}, state, {
//                 page: action.page
//             })
//         case SET_PAGES_COUNT:
//             return Object.assign({}, state, {
//                 pagesCount: action.pagesCount
//             })
//         case SET_SORT_TYPE:
//             return Object.assign({}, state, {
//                 sortType:action.sortType
//             })
//         case SET_SEARCH_VALUE:
//             return Object.assign({}, state, {
//                 searchValue:action.searchValue
//             })
//         case SET_SEARCH_ARRAY:
//             return Object.assign({}, state, {
//                 searchArray:action.searchArray
//             })
//         case SET_FILMS_ARRAY:
//             return Object.assign({}, state, {
//                 filmsArr:action.filmsArr
//             })
//         case SET_ADULT_VALUE:
//             return Object.assign({}, state, {
//                 adult:action.adultValue
//             })
//         case SET_ACCOUNT_ID:
//             return Object.assign({}, state, {
//                 accountId:action.accountId
//             })
//         case SET_FAV_MOVIES_ARRAY:
//             return Object.assign({}, state, {
//                 favMovies:action.favMovies
//             })
//         case SET_ALL_GENRES_ARRAY:
//             return Object.assign({}, state, {
//                 allGenres:action.allGenres
//             })
//         case SET_CLICKED_ID:
//             return Object.assign({}, state, {
//                 clickedId:action.clickedId
//             })
//         case SET_MOVIE_DETAILS_OBJECT:
//             return Object.assign({}, state, {
//                 movieDetails:action.movieDetails
//             })
//         case SET_MOVIE_CREDITS_OBJECT:
//             return Object.assign({}, state, {
//                 movieCredits:action.movieCredits
//             })
//         default:
//             return state
//     }
// }


export const loginSlice = createSlice({
    name:"mainSlice",
    initialState: initialState,
    reducers:{
        pagesCountSetter(state, action){
            state.pagesCount = action.payload
        },
        pageSetter(state,action){
            state.page = action.payload
        },
        sendEmail(state, action){
            state.pageType = pageTypes.TOKEN_PAGE;
            state.email = action.payload
        },
        actionToken(state, action){
            setCookie("token", action.payload, {"max-age":100000})
            state.pageType = pageTypes.TOKEN_PAGE;
            state.token = action.payload
        },
        cancelToken(state){
            setCookie("token", null, {"max-age":-1})
            state.pageType = pageTypes.EMAIL_PAGE;
            state.email = null;
            state.token = null
        },
        sliderSetter(state,action){
            state.years = action.payload
        },
        genresSetter(state,action){
            state.genres = action.payload
        },
        sortTypeSetter(state,action){
            state.sortType = action.payload
        },
        searchValueSetter(state,action){
            state.searchValue = action.payload
        },
        searchArraySetter(state, action){
            state.searchArray = action.payload
        },
        filmsArrSetter(state, action){
            state.filmsArr = action.payload
        },
        adultValueSetter(state, action){
            state.adult = action.payload
        },
        accountIdSetter(state,action){
            state.accountId = action.payload
        },
        favMoviesSetter(state,action){
            state.favMovies = action.payload
        },
        allGenresSetter(state,action){
            state.allGenres = action.payload
        },
        clickedIdSetter(state, action){
            state.clickedId = action.payload
        },
        movieDetailsSetter(state,action){
            state.movieDetails = action.payload
        },
        movieCreditsSetter(state,action){
            state.movieCredits = action.payload
        }
        

    }
})

export default loginSlice.reducer
export const {pagesCountSetter, pageSetter, sendEmail,actionToken,cancelToken,sliderSetter,genresSetter,sortTypeSetter,searchValueSetter,searchArraySetter,filmsArrSetter,adultValueSetter,accountIdSetter,favMoviesSetter,allGenresSetter,clickedIdSetter,movieCreditsSetter,movieDetailsSetter} = loginSlice.actions
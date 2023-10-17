/* eslint-disable default-case */
import { options } from "../../Components/Constants/stateConsts"
import { accountIdSetter, allGenresSetter, favMoviesSetter, filmsArrSetter, movieCreditsSetter, movieDetailsSetter, pagesCountSetter, searchArraySetter } from "./LoginStore"

export function searchFetch (searchValue, adultValue, pageValue){
    return function(dispatch){
        fetch(`https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=${adultValue}&language=ru-RU&page=${pageValue}`, options)
        .then(response => response.json())
        .then(response => {
    
            
            console.log(response)
            dispatch(pagesCountSetter( (response.total_pages) )) 
            dispatch( searchArraySetter( (response.results)))
            dispatch( filmsArrSetter( (response.results)))            
            
            // setSearchArray()
        })
    }
}

export function accountIdFetch (){
    return function(dispatch){
        fetch('https://api.themoviedb.org/3/account/account_id', options)
        .then(response => response.json())
        .then(response => dispatch( accountIdSetter( (response.id))))
        .catch(err => console.error(err));
    }
}


export function favMoviesFetch (accountId){
    return function(dispatch){
        fetch(`https://api.themoviedb.org/3/account/${accountId}/favorite/movies`, options)
        .then(response => response.json())
        .then(response => dispatch(favMoviesSetter((response.results.map(el=>el.id)))))
        .then(console.log("FETCHED"))
        .catch(err => console.error(err));
    }
}
export function allGenresFetch (){
    return function(dispatch){
        fetch('https://api.themoviedb.org/3/genre/movie/list?language=ru', options)
        .then(response => response.json())
        .then(response => dispatch( allGenresSetter( (response.genres))))
        .catch(err => console.error(err));
    }
}
export function movieDetailsFetch (id){
    return function(dispatch){
        fetch(`https://api.themoviedb.org/3/movie/${id}?language=ru-RU`, options)
        .then(response => response.json())
        .then(response => dispatch( movieDetailsSetter((response))))
        .catch(err => console.error(err));
    }
}
export function movieCreditsFetch (id){
    return function(dispatch){
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=ru-RU`, options)
        .then(response => response.json()) 
        .then(response => dispatch( movieCreditsSetter( (response))))
        .catch(err => console.error(err));
    }
}
export function sortMoviesFetch (sort, page, maxPages){
    return function(dispatch){
        switch(sort){
            case "Популярные по убыванию":
              fetch(`https://api.themoviedb.org/3/movie/popular?language=ru-RU&page=${page}`, options)
              .then(response =>response.json() )
              .then(response => dispatch( filmsArrSetter( (response.results.sort((a,b) => b.popularity-a.popularity))) ) ) //.filter(el=> store.getState().years.includes( +(el.release_date.split("-")[0]) )   )
              .catch(err => console.error(err));
              break;
            case "По рейтингу по убыванию":
              fetch(`https://api.themoviedb.org/3/movie/top_rated?language=ru-RU&page=${page}`, options)
              .then(response =>response.json() )
              .then(response => dispatch( filmsArrSetter( (response.results.sort((a,b) => b.vote_average-a.vote_average))) ) )
              .catch(err => console.error(err));
              break;
            case "Популярные по возрастанию":
              fetch(`https://api.themoviedb.org/3/movie/popular?language=ru-RU&page=${(maxPages+1)-page}`, options)
              .then(response =>response.json() )
              .then(response => dispatch( filmsArrSetter( (response.results.sort((a,b) => a.popularity-b.popularity))) ))
              .catch(err => console.error(err));
              break;
            case "По рейтингу по возрастанию":
              fetch(`https://api.themoviedb.org/3/movie/top_rated?language=ru-RU&page=${(maxPages+1)-page}`, options)
              .then(response =>response.json() )
              .then(response => dispatch( filmsArrSetter( (response.results.sort((a,b) => a.vote_average-b.vote_average))) ))
              .catch(err => console.error(err));
              break
          }
    }
}





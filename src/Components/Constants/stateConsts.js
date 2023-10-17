/* eslint-disable no-useless-escape */
const initialState = []
const sliderState = [1950, 2023]
const sortState = "Популярные по убыванию"
const pageState = 1
const filmsArrState = []
const maxPages = 500
const clikedIdState = null
const movieDetailsObjectState = {}
const movieCreditsObjectState = {}
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTMwNjgxOThkZmU0Zjk5Y2RiZTZlNmI2MGU0MGU0NSIsInN1YiI6IjY0OTFhZjE5YzJmZjNkMDBhZDAzYzM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yasYFK7QmsGhulW2aFY9e8-qlyhcgSQ1t3l9N5iQeMc"
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`
  }
};
const emailState = ""
const sentState = false
const accountIdState = null
const favMoviesState = []
const searchValueState = ""
const searchArrayState = []
const adultState = true

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {

  options = {
    path: '/',
    // при необходимости добавьте другие значения по умолчанию
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

// Пример использования:
setCookie('user', 'John', {secure: true, 'max-age': 3600});

function deleteCookie(name) {
  setCookie(name, "", {
    'max-age': -1
  })
}

export {accountIdState,getCookie,deleteCookie,setCookie, token,adultState,searchArrayState,searchValueState,favMoviesState,sentState, initialState, sliderState, sortState, pageState, filmsArrState, maxPages, clikedIdState,movieCreditsObjectState,movieDetailsObjectState, options, emailState}
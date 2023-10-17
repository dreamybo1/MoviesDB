
import './App.css';
import { FilmCardOpened } from './Pages/FilmCardOpened';
import * as React from "react";
import {
  HashRouter,
  createBrowserRouter} from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { MainPage } from './Pages/MainPage';
import { RouterProvider } from 'react-router-dom';
import { LoginForm } from './Pages/LoginForm';
import ErrorPage from './Pages/Error';
import { loginSlice } from './Pages/LoginStore/LoginStore';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';


const logger = createLogger()



export const store = configureStore({
  reducer:loginSlice.reducer,
  middleware: (getDefaultMuddleware)=> getDefaultMuddleware().concat(logger)
})


const router = createBrowserRouter([
  {
    path: "MoviesDB",
    element: <MainPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "MoviesDB/login",
    element:<LoginForm/>
    },
  {
    path: "MoviesDB/movie/:id",
    element: <FilmCardOpened/> ,
    errorElement: <ErrorPage />
  }
]);














function App() {
return(

    <Provider store={store}>
			<div className="App">
				<RouterProvider router={router} />
			</div>
    </Provider>

)
}

export default App;












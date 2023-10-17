import React from 'react'
import {render} from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../App'

const AllProviders = ({children}) => {
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}

const customRender = (ui, options) =>  render(ui, {wrapper: AllProviders, ...options})




export * from '@testing-library/react'
export {customRender as render}

  

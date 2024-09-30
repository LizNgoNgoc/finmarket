import {configureStore} from '@reduxjs/toolkit'
import regFormSlice from './RegFormSlice'

export const store = configureStore({
    reducer: {
        regForm: regFormSlice,
    }
})

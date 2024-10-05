import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    form : {
        phone: '',
        email: '',
        password: '',
        confirm: '',
    }
}

export const regFormSlice = createSlice ({
    name: 'redForm',
    initialState,
    reducers: {
        setForm: (state, action) => {
            state.form = action.payload
        }
    }
})

export const {setForm} = regFormSlice.actions

export default regFormSlice.reducer




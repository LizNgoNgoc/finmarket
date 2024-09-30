import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    form : {
        phone: '',
        email: '',
        password: '',
    }
}

export const regFormSlice = createSlice ({
    name: 'redForm',
    initialState,
    reducers: {
        setForm: (state, action) => {
            state.form = {...state.form, [action.target.name] : action.target.value}
        }
    }
})

export const {setForm} = regFormSlice.actions

export default regFormSlice.reducer




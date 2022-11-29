import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../configureStore.tsx'

interface UserState {
    userName : string,
    userId : string,
    userPw : string,
}

const initialState: UserState = {
    userName: '',
    userId:'',
    userPw:''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        userNameReducer: (state, action: PayloadAction<string>) => {
            state.userName = action.payload
        },
        userIdReducer: (state, action: PayloadAction<string>) => {
            state.userId = action.payload
        },
        userPwReducer: (state, action: PayloadAction<string>) => {
            state.userPw = action.payload
        },
    },
})

export const {userNameReducer, userIdReducer, userPwReducer} = userSlice.actions

export default userSlice.reducer
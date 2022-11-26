import { createSlice } from '@reduxjs/toolkit'
import {signup, logIn, logOut, loadUser} from '../../actions/user'

export interface UserState {
    email: string,
    password: string,
    userId?: number
    userName?: string,
    isLoggedIn?: boolean,
    logInError?: any,
    signupError?: any,
    signupDone?: boolean,
    isLoading?: boolean,
}

const initialState: UserState = {
    email:'',
    password:'',
    userId: 0,
    userName:'',
    isLoggedIn: false,
    logInError: '',
    signupError: '',
    signupDone: false,
    isLoading: false,
}

const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(signup.pending, () => {
            console.log('pending');
        }),
        builder.addCase(signup.fulfilled, (state, action) => {
            console.log(action.payload);
            state.signupDone = true;
        }),
        builder.addCase(signup.rejected, (state, action) => {
            state.signupError = action.payload;
        }),
        builder.addCase(logIn.pending, (state) => {
            state.isLoggedIn = true;
        })
        builder.addCase(logIn.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.email = action.payload.email;
            state.userId = action.payload.userId;
        })
        builder.addCase(logIn.rejected, (state, action) => {
            state.isLoading = false;
            state.logInError = action.payload;
        })
        builder.addCase(logOut.pending, () => {
        })
        builder.addCase(logOut.fulfilled, (state) => {
            state.isLoggedIn = false;
        })
        builder.addCase(logOut.rejected, () => {})
        builder.addCase(loadUser.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(loadUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.email = action.payload.email;
            state.userId = action.payload.userId;
        })
        builder.addCase(loadUser.rejected, (state) => {
            state.isLoading = false;
        })
    }
})

export const selectUser = (state: { user: { name: string } }) => state.user;
export default usersSlice.reducer
    

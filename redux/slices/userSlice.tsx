import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3030'
axios.defaults.withCredentials = true;

export interface UserState {
    userData : {
        userName : string,
        userEmail : string,
        userPw : string,
    }
    isLoggedIn: boolean,
    logInError: any,
    signupError: any,
    signupDone: boolean,
    isLoading: boolean,
}

const initialState: UserState = {
    userData : {
        userName: '',
        userEmail:'',
        userPw:'',
    },
    isLoggedIn: false,
    logInError: '',
    signupError: '',
    signupDone: false,
    isLoading: false,
}

export const signup = createAsyncThunk(
    '/signup2',
    async (input: object, {rejectWithValue}) => {
        try {
            const reponse = await axios.post('/signup2', input)
            return reponse.data
        } catch (error: any) {
            console.log(error);
            return rejectWithValue(error.response.data)
        }
    }
)

export const login = createAsyncThunk(
    '/login',
    async (input: object, {rejectWithValue}) => {
        try {
            const reponse = await axios.post('/login', input)
            return reponse.data
        } catch (error: any) {
            console.log(error);
            return rejectWithValue(error.response.data)
        }
    }
)

export const logout = createAsyncThunk('/logout', async () => {
    const response = await axios.post('/logout');
    return response.data;
});

export const userSlice = createSlice({
    name: 'user',  // name은 Slice와 맞고, 기억되기 쉬운걸로 지어주자.
    initialState,
    reducers:{},
    extraReducers: (builder) => {  // builder .addCase는 타입 추론에 용이
        //회원가입
        builder.addCase(signup.pending, (state, action) => {
            console.log('pending');
        }),
        builder.addCase(signup.fulfilled, (state, action) => {
            console.log(action.payload);
        }),
        builder.addCase(signup.rejected, (state, action) => {
            console.log('rejected');
            state.signupError = action.payload
        })
        //로그인
        builder.addCase(login.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.userData.userEmail = action.payload.email;
            state.userData.userName = action.payload.name;
        })
        builder.addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.logInError = action.payload;
        })
        //로그아웃
        builder.addCase(logout.pending, (state, action) => {})
        builder.addCase(logout.fulfilled, (state, action) => {
            state.isLoggedIn = false;
        })
        builder.addCase(logout.rejected, (state, action) => {})
    }

})

export default userSlice.reducer

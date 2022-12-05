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
    loading?: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: UserState = {
    userData : {
        userName: '',
        userEmail:'',
        userPw:'',
    },
    loading: 'idle'
}

export const signup = createAsyncThunk(
    '/signup',
    async (input: object, {rejectWithValue}) => {
        try {
            const reponse = await axios.post('/signup', input)
            return reponse.data
        } catch (error: any) {
            console.log(error);
            return rejectWithValue(error.response.data)
        }
    }
)


export const userSlice = createSlice({
    name: 'user',  // name은 Slice와 맞고, 기억되기 쉬운걸로 지어주자.
    initialState,
    reducers:{},
    extraReducers: (builder) => {  // builder .addCase는 타입 추론에 용이
        builder.addCase(signup.pending, (state, action) => {
            console.log('pending');
        }),
        builder.addCase(signup.fulfilled, (state, action) => {
            console.log(action.payload);
        }),
        builder.addCase(signup.rejected, (state, action) => {
            console.log('rejected');
        })
    }
})

export default userSlice.reducer

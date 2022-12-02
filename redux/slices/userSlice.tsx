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

export const signup: any = createAsyncThunk(
    '/signup',
    async (user, {rejectWithValue}) => {
        try {
            const reponse = await axios.post('/', user)
            return reponse.data.json()
        } catch (error: any) {
            console.log(error);
            return rejectWithValue(error.response.data)
        }
    }
)


// const fetchUserById = createAsyncThunk(
//     'users/fetchById',
//     // if you type your function argument here
//     async (userId: number) => {
//       const response = await axios.post(`https://reqres.in/api/users/${userId}`)
//       return (await response.json())
//     }
//   )

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

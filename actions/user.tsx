import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { UserState } from '../slices/loginSlice/user' 

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.withCredentials = true;

//회원가입
export const signup = createAsyncThunk(
    'user/singup',
    async (data: UserState, {rejectWithValue}) => {
        try {
            const responde = await axios.post('/signup', data);
            return responde.data;
        } catch (error: any) {
            console.log(error);
            return rejectWithValue(error.responde.data);
        }
    }
);

//로그인
export const logIn = createAsyncThunk(
    '/user/logIn',
    async (data: UserState, { rejectWithValue }) => {
      try {
        const response = await axios.post('/login', data);
        return response.data;
      } catch (error: any) {
        console.log(error);
        return rejectWithValue(error.response.data);
      }
    }
);

// 로그아웃
export const logOut = createAsyncThunk('/user/logOut', async () => {
    const response = await axios.post('/logout');
    return response.data;
});


// 로그인 상태 불러오기
export const loadUser = createAsyncThunk('/user/load', async () => {
    const response = await axios.get('/user');
    console.log(response.data);
    return response.data;
});
  
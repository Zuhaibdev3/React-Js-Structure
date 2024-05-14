import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import cookies from '../../../utils/cookie';
import Service from '../../../services/auth.service';
import { toast } from "react-toastify";
import Auth from '../../../services/auth.service';

const initialState = {
    user: cookies.get("user") ? cookies.get("user") : {},
    status: 'idle',
};

export const LoginAuth = createAsyncThunk('/auth/login', async (body, { dispatch, getState }) => {
    dispatch(slice.actions.handleStatus('pending'))
    try {
        // const response = await Auth.login(body)
        await new Promise(resolve => setTimeout(resolve, 1000));
        cookies.set("user", JSON.stringify(body), { path: "/" })
        dispatch(slice.actions.handleStatus('success'));
        toast.success("Login Successfully")
        return body

    } catch (error) {

        dispatch(slice.actions.handleStatus('error'));
        toast.error("Something Went Wrong")

    }
});

export const LogoutAuth = createAsyncThunk('/auth/logout', async (body, { dispatch, getState }) => {
    dispatch(slice.actions.handleStatus('pending'));
    try {

        await new Promise(resolve => setTimeout(resolve, 1000));

        if (body === true) {
            cookies.remove("user", { path: "/" });
            dispatch(slice.actions.handleStatus('success'));
            toast.success("Signout Successfully")
            return body;
        }

        else {
            dispatch(slice.actions.handleStatus('error'));
            toast.error("Something Went Wrong")
            return false
        }

    } catch (error) {
        dispatch(slice.actions.handleStatus('error'));
        console.log("Something Went Wrong");
    }

});




export const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        handleStatus: (state, action) => {
            state.status = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder.addCase(LoginAuth.fulfilled, (state, action) => {
            state.user = action.payload || {};
        });
        builder.addCase(LogoutAuth.fulfilled, (state, action) => {
            if (action?.payload === true) {
                state.user = {};
            }
            else {
                toast.error("Something Went Wrong")
            }
        });

    },

});

export const { handleStatus } = slice.actions;

export default slice.reducer;

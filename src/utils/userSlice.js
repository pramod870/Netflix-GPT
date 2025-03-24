import { createSlice } from "@reduxjs/toolkit";

const userSlice =  createSlice({
    name:'user',
    initialState: {
        userId: null,
        profile_picture:"",
        email: "",
        isAuthenticated: false,
    },
    reducers:{
        addUser: (state, action) =>{
  
            state.userId = action.payload.userId;
            state.email = action.payload.email;
            state.profile_picture = action.payload.profile_picture;
            state.isAuthenticated = true;
        },
        removeUser:(state, action) =>{
            state.userId = null;
            state.email = "";
            state.profile_picture = null;
            state.isAuthenticated = false;
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
        },
    },
});


export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
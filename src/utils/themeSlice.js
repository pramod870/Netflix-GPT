import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name:"theme",

    initialState:{
        darkMode: localStorage.getItem("theme") === "dark"
    },

    reducers:{
        toggleDarkMode:(state) =>{
            state.darkMode = !state.darkMode;
            localStorage.setItem("theme", state.darkMode ? "dark":"light");
        },
    },
});

export const {toggleDarkMode} = themeSlice.actions;

export default themeSlice.reducer;
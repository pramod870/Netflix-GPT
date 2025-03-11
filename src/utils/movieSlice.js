import { createSlice } from "@reduxjs/toolkit";



const movieSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null
    },

    reducers:{
        addNowPlayingMovies:(state, action) =>{
            state.nowPlayingMovies = action.payload;
        },

        addPopularMovies:(state, action) =>{
            state.addPopularMovies = action.payload;
        },


        topRatedMovies:(state, action) =>{
            state.topRatedMovies = action.payload;
        },

        upComingMovies:(state, action) =>{
            state.upComingMovies = action.payload;
        },



        addTrailerVideo:(state, action) =>{
            state.addTrailerVideo = action.payload;

        }
    }
});


export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, topRatedMovies, upComingMovies} = movieSlice.actions;
export default movieSlice.reducer;
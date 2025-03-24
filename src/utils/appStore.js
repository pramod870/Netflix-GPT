import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import configReducer from "./appConfigSlice";
import themeReducer from "./themeSlice";

const appStore = configureStore (
    {
        reducer: {
            user: userReducer,
            movies:moviesReducer,
            gpt:gptReducer,
            config:configReducer,
            theme:themeReducer,
        }
    }
);

export default appStore;
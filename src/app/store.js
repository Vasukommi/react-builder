import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./slices/sidebarSlice.js";
import canvasSlice from "./slices/canvasSlice.js";

export default configureStore({
    reducer: {
        sidebarSlice: sidebarSlice,
        canvasSlice: canvasSlice
    }
})
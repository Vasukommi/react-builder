import { createSlice } from "@reduxjs/toolkit";


export const canvasSlice = createSlice({
    name: 'canvasStore',
    initialState: {
        activeElementId: '',
        canvasElements: []
    },
    reducers: {
        addElement: (state, action) => {
            state.canvasElements = [...state.canvasElements, action.payload]
        },
        setActiveElementId: (state, action) => {
            debugger
            state.activeElementId = action.payload
        }
    }
})

export const { addElement } = canvasSlice.actions

export default canvasSlice.reducer
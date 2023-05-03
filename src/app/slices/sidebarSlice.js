import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid'

export const sidebarSlice = createSlice({
    name: 'sidebarStore',
    initialState: {
        sidebarElements: [
            {
                elementId: 1,
                type: 'html',
                component: {
                    type: 'div',
                    content: 'DIV CONTAINER'
                }
            },
            {
                elementId: 2,
                type: 'html',
                component: {
                    type: 'h1',
                    content: 'H1 CONTAINER'
                }
            },
            {
                elementId: 3,
                type: 'html',
                component: {
                    type: 'p',
                    content: 'P CONTAINER'
                }
            },
            {
                elementId: 4,
                type: 'html',
                component: {
                    type: 'span',
                    content: 'SPAN CONTAINER'
                }
            },
            {
                elementId: 5,
                type: 'html',
                component: {
                    type: 'image',
                    content: 'IMAGE CONTAINER'
                }
            }
        ]
    },
    reducers: {}
})

export default sidebarSlice.reducer
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid'

export const sidebarSlice = createSlice({
    name: 'sidebarStore',
    initialState: {
        sidebarElements: [
            {
                type: 'html',
                component: {
                    type: 'div',
                    content: 'DIV CONTAINER'
                }
            },
            {
                type: 'html',
                component: {
                    type: 'h1',
                    content: 'H1 CONTAINER'
                }
            },
            {
               
                type: 'html',
                component: {
                    type: 'p',
                    content: 'P CONTAINER'
                }
            },
            {
               
                type: 'html',
                component: {
                    type: 'span',
                    content: 'SPAN CONTAINER'
                }
            },
            {
               
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
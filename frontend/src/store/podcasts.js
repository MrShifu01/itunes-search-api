import { createSlice } from "@reduxjs/toolkit";

const podcastsSlice = createSlice({
    name: "podcasts",

    initialState: {
        podcastsArray: []
    },

    reducers: {
        addPodcasts: (state, action) => {
            state.podcastsArray.push(action.payload)
        },

        removePodcasts: (state, action) => {
            state.podcastsArray.splice(action.payload, 1) 
        },

        resetPodcasts: (state) => {
            state.podcastsArray = []
        }
    }
})

export const {addPodcasts, removePodcasts, resetPodcasts} = podcastsSlice.actions

export default podcastsSlice.reducer
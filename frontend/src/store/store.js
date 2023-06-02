import { configureStore } from "@reduxjs/toolkit";
import resultsReducer from './results'
import musicReducer from './music'
import moviesReducer from './movies'
import podcastsReducer from './podcasts'
import musicvideosReducer from './musicvideos'
import ebooksReducer from './ebooks'
import audiobooksReducer from './audiobooks'
import tvshowsReducer from './tvshows'
import softwareReducer from './software'
import mediaReducer from './media'
import pageReducer from './page'

export default configureStore ({
    reducer: {
        results: resultsReducer,
        music: musicReducer,
        movies: moviesReducer,
        musicvideos: musicvideosReducer,
        podcasts: podcastsReducer,
        audiobooks: audiobooksReducer,
        ebooks: ebooksReducer,
        tvshows: tvshowsReducer,
        software: softwareReducer,
        page: pageReducer,
        media: mediaReducer
    }
})
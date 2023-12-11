import { configureStore } from '@reduxjs/toolkit';
import { songsReducer, addSong, removeSong } from './slices/songsSlice';
import { moviesReducer, addMovie, removeMovie } from './slices/moviesSlice';
import { reset } from './actions';

const store = configureStore({
    reducer: {
        songs: songsReducer,
        movies: moviesReducer,
    }
});

// console.log(songsSlice.actions.addSong());

// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// store.dispatch(
//     songsSlice.actions.addSong('New Song!!!')
// );

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));

export { store, addSong, removeSong, addMovie, removeMovie, reset };
import { configureStore, createSlice } from '@reduxjs/toolkit';

const songsSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        addSong(state, action) {
            state.push(action.payload);
        },
        removeSong(state, action) {
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        }
    }
});

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer
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

export { store };
export const { addSong, removeSong } = songsSlice.actions;
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  contents: [],
  favorite: [],
  isLoading: false,
  error: null,
};
export const fetchContent = createAsyncThunk(
  'content/fetchContent',
  async () => {
    const res = await axios.get('https://rickandmortyapi.com/api/episode');
    const data = res.data.results;
    console.log('fetch axios', data);
    return data;
  },
);
export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const favoriteIndex = state.favorite.findIndex(
        currentFavorite => currentFavorite.id === action.payload.id,
      );

      if (favoriteIndex === -1) {
        state.favorite.push(action.payload);
      }

      if (state.favorite.length >= 10) {
        alert('Favori sınırı aşıldı!');
        state.favorite.shift();
      }
    },
    removeFromFavorites: (state, action) => {
      state.favorite = state.favorite.filter(
        item => item.id !== action.payload.id,
      );
    },
  },

  extraReducers: builder => {
    builder.addCase(fetchContent.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contents = action.payload;
    });
    builder.addCase(fetchContent.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});
export const {addToFavorites, removeFromFavorites} = contentSlice.actions;
export default contentSlice.reducer;

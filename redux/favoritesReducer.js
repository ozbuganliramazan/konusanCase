import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  contents: [],
  isLoading: false,
  error: null,
};

export const fetchContent = createAsyncThunk(
  'content/fetchContent',
  async () => {
    const res = await axios.get('https://rickandmortyapi.com/api/episode');
    const data = res.data.results;
    console.log(data);
    return data;
  },
);

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      if (state.contents.length < 10) {
        state.contents.push(action.payload);
      }
    },

    removeFromFavorites: (state, action) => {
      state.contents = state.contents.filter(
        content => content.id !== action.payload.id,
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
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const {addToFavorites, removeFromFavorites} = contentSlice.actions;
export default contentSlice.reducer;

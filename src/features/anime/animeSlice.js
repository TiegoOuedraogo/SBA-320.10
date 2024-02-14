import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAnime } from '../../api/animeApi';


// Async thunk for fetching anime
export const fetchAnimes = createAsyncThunk(
  'anime/fetchAnimes',
  async (searchTerm, thunkAPI) => {
    try {
      const response = await fetchAnime(searchTerm);
      return response.data; 
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to fetch anime');
    }
  }
);

const animeSlice = createSlice({
  name: 'anime',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnimes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAnimes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchAnimes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default animeSlice.reducer;

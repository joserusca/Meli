import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  item: null,
  searchResult: null,
  status: 'idle',
};

export const getItem = createAsyncThunk(
  'meli/getItem',
  async (id) => {
    const response = await fetch('http://localhost:8081/api/items/' + id);
    const item = await response.json();
    //console.log(item);
    return item;
  }
);

export const searchItems = createAsyncThunk(
  'meli/searchItems',
  async (value) => {
    console.log("Redux searching: " + value);
    const response = await fetch('http://localhost:8081/api/items?q=' + value)
    const results = await response.json();
    return results;
  }
)

export const meliSlice = createSlice({
  name: 'meli',
  initialState,
  reducers: {
    setActiveProduct: (state, action) => {   
      state.item += action.payload;
     },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getItem.pending, (state) => {
        state.status = 'loading';
        console.log("Loading");
      })
      .addCase(getItem.fulfilled, (state, action) => {
        state.status = 'idle';
        state.item = action.payload;
        console.log("idle");
        //console.log(action.payload);
      })
      .addCase(searchItems.pending, (state) => {
        state.status = 'loading';
        console.log("Loading search");
      })
      .addCase(searchItems.fulfilled, (state, action) => {
        state.status = 'idle';
        state.searchResult = action.payload;
        console.log("idle search");
        // console.log(action.payload);
      });
  },
});

export const { setActiveProduct } = meliSlice.actions;

export const selectItem = (state) => state.meli.item;
export const searchResult = (state) => state.meli.searchResult;
export const status = (state) => state.meli.status;

export default meliSlice.reducer;

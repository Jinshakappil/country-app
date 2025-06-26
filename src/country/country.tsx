
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// Define the Country type
export interface Country {
  name: string;
  region: string;
  flag: string;
}

// Define the state type
interface CountriesState {
  all: Country[];
  filtered: Country[];
  page: number;
  loading: boolean;
}

// Initial state with type
const initialState: CountriesState = {
  all: [],
  filtered: [],
  page: 1,
  loading: false,
};

// Async thunk to fetch countries
export const fetchCountries = createAsyncThunk<Country[]>(
  'countries/fetchCountries',
  async () => {
    const res = await fetch('https://restcountries.com/v2/all?fields=name,region,flag');
    return await res.json();
  }
);

// Create the slice
const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    filterByRegion: (state, action: PayloadAction<string>) => {
      const region = action.payload;
      state.filtered = region === 'All'
        ? state.all
        : state.all.filter((c) => c.region === region);
      state.page = 1;
    },
    loadMore: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCountries.fulfilled, (state, action: PayloadAction<Country[]>) => {
        state.loading = false;
        state.all = action.payload;
        state.filtered = action.payload;
        state.page = 1;
      })
      .addCase(fetchCountries.rejected, (state) => {
        state.loading = false;
      });
  }
});

export const { filterByRegion, loadMore } = countriesSlice.actions;
export default countriesSlice.reducer;

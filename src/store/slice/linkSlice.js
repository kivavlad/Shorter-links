import { API_BASE_URL } from "../../config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createShortLink = createAsyncThunk(
    'links/createShortLink',
    async (url) => {
        const response = await fetch(`${API_BASE_URL}/links/create?url=${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-goo-api-token': `${process.env.REACT_APP_API_TOKEN}`
            }
        })

        return await response.json();
    }
)

const initialState = {
    items: [],
    loading: 'idle',
}

const linkSlice = createSlice({
    name: 'links',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(createShortLink.pending, (state) => {
                state.loading = 'loading';
            })
            .addCase(createShortLink.rejected, (state) => {
                state.loading = 'rejected';
            })
            .addCase(createShortLink.fulfilled, (state, action) => {
                state.items.push(action.payload);
                state.loading = 'idle';
            })
    }
});

export const selectLoading = state => state.links.loading;
export const selectLinks = state => state.links.items;
export default linkSlice.reducer;
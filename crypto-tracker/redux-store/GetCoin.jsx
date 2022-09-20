import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	coins: [],
	isLoading:true,
};

//for first 30 coins
const coinURL =
	'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=true&price_change_percentage=7d';


export const getCoins = createAsyncThunk('getCoin', async () => {
	try {
		const response = await axios(coinURL);
		const data = response.data;
		return data;
		
	} catch (err) {
		console.log(err);
	}
});


const coinSlice = createSlice({
	name: 'coin',
	initialState,
	extraReducers: {
		[getCoins.pending]: (state) => {
			state.isLoading = true;
		},
		[getCoins.fulfilled]: (state,action) => {
			state.isLoading = false;
			state.coins = action.payload;
		},
		[getCoins.rejected]: (state) => {
			state.isLoading = false;
		},
	},
});

export default coinSlice.reducer;

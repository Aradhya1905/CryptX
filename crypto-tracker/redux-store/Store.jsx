import { configureStore } from "@reduxjs/toolkit";
import coinReducer from './GetCoin'

export const store = configureStore({
	reducer: {
		coin : coinReducer
	}
})



import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authSlice } from './slices/authSlice';
import mainApi from './services/mainApi';

import { tableSlice } from './slices/tableSlice';
import { TOKEN_NAME } from '@/lib/constant';

// import { routeSlice, tableSlice, cartSlice, authSlice } from '@/components/library/store';

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		table: tableSlice.reducer,
		[mainApi.reducerPath]: mainApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(mainApi.middleware),
});

store.subscribe(() => {
	const state = store.getState();
	if (typeof window !== 'undefined') {
		if (state.auth.token) {
			localStorage.setItem(TOKEN_NAME, state.auth.token);
		} else {
			localStorage.removeItem(TOKEN_NAME);
		}
	}
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

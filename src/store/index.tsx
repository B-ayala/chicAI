import { configureStore } from '@reduxjs/toolkit';

import notificationsReducer from '../features/Notifications/notificationsSlice';
import productReducer from '../features/Product/productSlice';

const store = configureStore({
  reducer: {
    product: productReducer,
    notifications: notificationsReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

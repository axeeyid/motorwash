// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './admin/features/userSlice';  // Sesuaikan dengan path userSlice Anda

const store = configureStore({
  reducer: {
    user: userReducer, // Menambahkan reducer user ke store
    // Tambahkan reducer lainnya jika diperlukan
  },
});

export default store;

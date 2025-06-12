import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// Helper function untuk mendapatkan data user dan token dari localStorage
const getInitialUser = () => {
  const userString = localStorage.getItem('user');
  if (!userString) return null;
  try {
    return JSON.parse(userString);
  } catch (error) {
    console.error('Error parsing user from localStorage:', error);
    toast.error('Gagal memuat data pengguna');
    return null;
  }
};

const initialState = {
  user: getInitialUser(), // Inisialisasi dengan data user dari localStorage jika ada
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = action.payload.data;
      state.user = user;
      try {
        // Menyimpan user ke localStorage
        localStorage.setItem('user', JSON.stringify(user));
        // Simpan token jika ada
        if (action.payload.token) {
          localStorage.setItem('token', action.payload.token);
        }
        toast.success('Login berhasil');
      } catch (error) {
        console.error('Error saving user to localStorage:', error);
        toast.error('Login gagal, coba lagi.');
      }
    },
    registerUser: (state, action) => {
      const user = action.payload.data;
      state.user = user;
      try {
        // Menyimpan user ke localStorage
        localStorage.setItem('user', JSON.stringify(user));
        // Simpan token jika ada
        if (action.payload.token) {
          localStorage.setItem('token', action.payload.token);
        }
        toast.success('Registrasi berhasil');
      } catch (error) {
        console.error('Error saving user to localStorage:', error);
        toast.error('Registrasi gagal, coba lagi.');
      }
    },
    logoutUser: (state) => {
      state.user = null;
      try {
        localStorage.removeItem('user'); // Menghapus data user dari localStorage
        localStorage.removeItem('token'); // Menghapus token dari localStorage
        toast.success('Logout berhasil');
      } catch (error) {
        console.error('Error removing user from localStorage:', error);
        toast.error('Logout gagal, coba lagi.');
      }
    },
  },
});

export const { loginUser, registerUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;

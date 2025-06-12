import React, { createContext, useContext, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, logoutUser as reduxLogoutUser } from '../features/userSlice';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';

// Membuat konteks autentikasi
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Untuk menunggu status autentikasi

    // Cek status login saat komponen dipasang
    useEffect(() => {
        const fetchUser = () => {
            const userString = localStorage.getItem('user');
            const token = localStorage.getItem('token'); // Jika menggunakan token

            if (userString && token) {
                try {
                    const storedUser = JSON.parse(userString);
                    setUser(storedUser);
                    dispatch(loginUser({ data: storedUser })); // Update Redux store
                } catch (error) {
                    console.error('Error parsing user from localStorage:', error);
                    toast.error('Error loading user data.');
                }
            }
            setLoading(false); // Menandakan bahwa pengecekan sudah selesai
        };

        fetchUser();
    }, [dispatch]);

    // Fungsi untuk login
    const login = (userData, token) => {
        if (!userData || !token) {
            toast.error('Data pengguna atau token tidak valid.');
            return;
        }

        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('token', token); // Simpan token untuk autentikasi di API
        dispatch(loginUser({ data: userData })); // Update Redux store
        toast.success('Login berhasil');
    };

    // Fungsi untuk logout
    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token'); // Hapus token dari localStorage
        dispatch(reduxLogoutUser()); // Update Redux store
        toast.success('Logout berhasil');
    };

    // Jangan menampilkan apapun jika masih loading
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <ClipLoader size={50} color="#36d7b7" />
            </div>
        );  // Menampilkan spinner saat loading
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook untuk menggunakan AuthContext
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

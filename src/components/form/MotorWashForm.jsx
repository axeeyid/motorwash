import React, { useState } from 'react';
import customAPI from '../../api.js';

const MotorWashForm = () => {
  const [formData, setFormData] = useState({
    jenisCuci: '',
    harga: '',
    kategoriMotor: '',
  });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await customAPI.post('/order/motorwashes', formData);
      setMessage('Motor wash berhasil ditambahkan.');
      setFormData({
        jenisCuci: '',
        harga: '',
        kategoriMotor: '',
      });
    } catch (error) {
      setError('Terjadi kesalahan saat menambahkan motor wash.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center bg-gray-50 p-4 rounded-md text-teal-600">
      <h2 className="text-3xl font-bold text-center mb-4 text-teal-600">Tambah Layanan Cuci Motor</h2>

      {error && <div className="bg-red-500 text-white p-2 mb-4 text-center">{error}</div>}
      {message && <div className="bg-green-500 text-white p-2 mb-4 text-center">{message}</div>}

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto w-full space-y-6 bg-white p-8 rounded-lg shadow-lg">
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <div className="flex-1">
            <label className="block text-gray-700">Jenis Cuci</label>
            <input
              type="text"
              name="jenisCuci"
              value={formData.jenisCuci}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Masukkan jenis cuci"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700">Harga</label>
            <input
              type="number"
              name="harga"
              value={formData.harga}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Masukkan harga"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700">Kategori Motor</label>
          <select
            name="kategoriMotor"
            value={formData.kategoriMotor}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          >
            <option value="">Pilih Kategori Motor</option>
            <option value="Matic">Matic</option>
            <option value="Sport">Sport</option>
            <option value="Cruiser">Cruiser</option>
            <option value="Adventure">Adventure</option>
            <option value="Crossover">Crossover</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-2 bg-teal-600 text-white font-bold rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isLoading}
        >
          {isLoading ? 'Sedang Menambahkan...' : 'Tambah Layanan'}
        </button>
      </form>
    </div>
  );
};

export default MotorWashForm;

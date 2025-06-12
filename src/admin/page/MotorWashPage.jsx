import React, { useEffect, useState } from 'react';
import customAPI from '../../api.js'
import { toast } from 'react-toastify'; // Untuk memberi notifikasi toast

const MotorWashPage = () => {
  const [motorWashes, setMotorWashes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editForm, setEditForm] = useState({ id: '', jenisCuci: '', harga: '' });

  // Mengambil data layanan cuci motor dari API
  useEffect(() => {
    const fetchMotorWashes = async () => {
      try {
        const response = await customAPI.get('/wash/motorwashes');
        setMotorWashes(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching motor washes:', error);
        toast.error('Gagal mengambil data layanan cuci motor');
        setLoading(false);
      }
    };

    fetchMotorWashes();
  }, []);

  // Fungsi untuk menghapus layanan cuci motor
  const handleDelete = async (id) => {
    try {
      await customAPI.delete(`/wash/motorwashes/${id}`);
      setMotorWashes(motorWashes.filter((motorWash) => motorWash._id !== id));
      toast.success('Layanan cuci motor berhasil dihapus');
    } catch (error) {
      console.error('Error deleting motor wash:', error);
      toast.error('Gagal menghapus layanan cuci motor');
    }
  };

  // Fungsi untuk memperbarui layanan cuci motor
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const updatedMotorWash = await customAPI.put(`/wash/motorwashes/${editForm.id}`, {
        jenisCuci: editForm.jenisCuci,
        harga: editForm.harga,
      });

      setMotorWashes(
        motorWashes.map((motorWash) =>
          motorWash._id === editForm.id ? updatedMotorWash.data : motorWash
        )
      );
      setEditForm({ id: '', jenisCuci: '', harga: '' });
      toast.success('Layanan cuci motor berhasil diperbarui');
    } catch (error) {
      console.error('Error updating motor wash:', error);
      toast.error('Gagal memperbarui layanan cuci motor');
    }
  };

  return (
    <div className="min-h-screen bg-teal-50 py-12 px-4 rounded-md">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-teal-600 mb-6">Daftar Layanan Cuci Motor</h1>

        {/* Form Update Layanan */}
        {editForm.id && (
          <div className="mb-8 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Edit Layanan Cuci Motor</h2>
            <form onSubmit={handleUpdate}>
              <div className="mb-4">
                <label htmlFor="jenisCuci" className="block text-sm font-medium text-gray-700">
                  Jenis Cuci
                </label>
                <input
                  type="text"
                  id="jenisCuci"
                  name="jenisCuci"
                  value={editForm.jenisCuci}
                  onChange={(e) => setEditForm({ ...editForm, jenisCuci: e.target.value })}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="harga" className="block text-sm font-medium text-gray-700">
                  Harga
                </label>
                <input
                  type="number"
                  id="harga"
                  name="harga"
                  value={editForm.harga}
                  onChange={(e) => setEditForm({ ...editForm, harga: e.target.value })}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-2 rounded-md"
              >
                Update Layanan
              </button>
            </form>
          </div>
        )}

        {/* Daftar Layanan Cuci Motor */}
        {loading ? (
          <p className="text-lg text-teal-500">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {motorWashes.map((motorWash) => (
              <div key={motorWash._id} className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-2xl font-semibold text-teal-600 mb-4">{motorWash.jenisCuci}</h4>
                <p className="text-lg mb-4">Harga: Rp {motorWash.harga}</p>
                <div className="flex justify-between">
                  <button
                    className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700"
                    onClick={() => setEditForm({ id: motorWash._id, jenisCuci: motorWash.jenisCuci, harga: motorWash.harga })}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
                    onClick={() => handleDelete(motorWash._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MotorWashPage;

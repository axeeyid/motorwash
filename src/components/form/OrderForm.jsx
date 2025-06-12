import { useState, useEffect } from 'react';
import customAPI from '../../api.js';

const OrderForm = () => {
  const [jenisCuci, setJenisCuci] = useState('');
  const [harga, setHarga] = useState('');
  const [kategoriMotor, setKategoriMotor] = useState('');
  const [motorWashId, setMotorWashId] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentLink, setPaymentLink] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [error, setError] = useState('');
  const [orderCreated, setOrderCreated] = useState(false);
  const [motorWashes, setMotorWashes] = useState([]); // State to store motor wash data

  // Function to fetch motor wash options from API
  const fetchMotorWashes = async () => {
    try {
      const response = await customAPI.get('/wash/motorwashes'); // Endpoint untuk mengambil data motor wash
      setMotorWashes(response.data); // Menyimpan data motor washes dari API
    } catch (err) {
      setError('Gagal memuat daftar motor wash');
    }
  };

  // Call fetchMotorWashes when component mounts
  useEffect(() => {
    fetchMotorWashes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!jenisCuci || !harga || !kategoriMotor || !motorWashId || !paymentMethod) {
      setError('Semua field harus diisi!');
      return;
    }

    try {
      // Mengirim data ke backend
      const response = await customAPI.post('/order/create-order', {
        jenisCuci,
        harga,
        kategoriMotor,
        motorWashId,
        paymentMethod,
      });

      if (response.status === 201) {
        setOrderCreated(true);
        setPaymentLink(response.data.order.paymentLink);
        setQrCode(response.data.order.qrCode);
      }
    } catch (error) {
      setError('Gagal membuat order, coba lagi.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50 px-4 rounded-md text-teal-600">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl">
        <h1 className="text-2xl font-semibold text=teal-600 mb-6 text-center">Buat Order Cuci Motor</h1>
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
        {orderCreated ? (
          <div>
            <p className="text-lg text-green-600 mb-4 text-center">Order berhasil dibuat!</p>
            <p>Payment Link: <a href={paymentLink} className="text-teal-600">{paymentLink}</a></p>
            <div className="mt-4 flex justify-center">
              <img src={qrCode} alt="QR Code" className="w-48 h-48" />
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-teal-600">Jenis Cuci</label>
              <input
                type="text"
                value={jenisCuci}
                onChange={(e) => setJenisCuci(e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-teal-600">Harga</label>
              <input
                type="number"
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-teal-600">Kategori Motor</label>
              <select
                value={kategoriMotor}
                onChange={(e) => setKategoriMotor(e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              >
                <option value="">Pilih Kategori</option>
                <option value="Matic">Matic</option>
                <option value="Sport">Sport</option>
                <option value="Cruiser">Cruiser</option>
                <option value="Adventure">Adventure</option>
                <option value="Crossover">Crossover</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-teal-600">Motor Wash ID</label>
              <select
                value={motorWashId}
                onChange={(e) => setMotorWashId(e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              >
                <option value="">Pilih Motor Wash</option>
                {motorWashes.length > 0 ? (
                  motorWashes.map((motorWash) => (
                    <option key={motorWash._id} value={motorWash._id}>
                      {motorWash.jenisCuci} - IDR {motorWash.harga}
                    </option>
                  ))
                ) : (
                  <option value="">Loading Motor Wash...</option>
                )}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-teal-600">Metode Pembayaran</label>
              <input
                type="text"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
            >
              Buat Order
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default OrderForm;

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function BookingNota() {
  const { state } = useLocation(); // data booking dari navigate
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      // kalau akses langsung tanpa data, redirect ke booking
      navigate("/");
    }
  }, [state]);

  if (!state) return null;

  const { name, phone, service, date, time, paymentMethod, price } = state;

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-md w-full border border-gray-300 p-6 rounded-lg shadow-md print:shadow-none print:border-none print:max-w-full">
        <h2 className="text-2xl font-bold text-teal-600 mb-4">Nota Booking</h2>
        <div className="space-y-2 text-gray-700">
          <p><strong>Nama:</strong> {name}</p>
          <p><strong>No. Telepon:</strong> {phone}</p>
          <p><strong>Layanan:</strong> {service}</p>
          <p><strong>Tanggal:</strong> {date}</p>
          <p><strong>Waktu:</strong> {time}</p>
          <p><strong>Metode Pembayaran:</strong> {paymentMethod}</p>
          <p><strong>Total Harga:</strong> Rp {price.toLocaleString("id-ID")}</p>
        </div>

        <div className="mt-6 flex gap-4 print:hidden">
          <button
            onClick={() => window.print()}
            className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition"
          >
            Cetak Nota
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition"
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
}

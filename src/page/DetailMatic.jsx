import { Link } from "react-router-dom";

export default function MaticServiceDetail() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-teal-700 mb-4">Detail Layanan: Cuci Motor Matic</h1>
        <p className="text-gray-700 text-lg mb-6">
          Motor Anda akan kembali bersih, kinclong, dan wangi! Pilih paket cuci motor sesuai kebutuhan Anda.
          Kami menggunakan perlengkapan khusus untuk motor matic agar hasil lebih optimal dan aman.
        </p>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-teal-600 mb-2">Pilihan Paket:</h2>
          <ul className="space-y-3 text-gray-800">
            <li>
              <span className="font-semibold text-teal-600">• Cuci Reguler:</span> Rp15.000
              <p className="text-sm text-gray-500 ml-4">Pembersihan standar bagian luar motor.</p>
            </li>
            <li>
              <span className="font-semibold text-teal-600">• Cuci + Semir Ban:</span> Rp20.000
              <p className="text-sm text-gray-500 ml-4">Cuci lengkap + semir ban agar tampilan lebih mengkilap.</p>
            </li>
            <li>
              <span className="font-semibold text-teal-600">• Cuci Detailing:</span> Rp30.000
              <p className="text-sm text-gray-500 ml-4">Pembersihan mendalam, termasuk bagian sulit dan finishing akhir.</p>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-teal-600 mb-2">Keunggulan Kami:</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Pengerjaan cepat dan rapi oleh tim berpengalaman</li>
            <li>Air bertekanan tinggi dan sabun khusus motor matic</li>
            <li>Gratis semir ban untuk setiap 5x cuci</li>
            <li>Area tunggu nyaman dengan Wi-Fi</li>
          </ul>
        </div>

        <div className="flex justify-between items-center">
          <Link to="/" className="text-teal-600 hover:underline">
            ← Kembali ke Daftar Layanan
          </Link>
          <Link
            to="/bookingpage"
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded transition duration-200"
          >
            Booking Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
}

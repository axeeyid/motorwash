import { Link } from "react-router-dom";

export default function SportServiceDetail() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-teal-700 mb-4">Detail Layanan: Cuci Motor Sport</h1>
        <p className="text-gray-700 text-lg mb-6">
          Didesain khusus untuk motor sport kesayangan Anda. Kami memberikan perawatan menyeluruh 
          dengan alat dan teknik profesional agar motor tetap bersih, terawat, dan tampil gagah di jalanan.
        </p>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-teal-600 mb-2">Pilihan Paket:</h2>
          <ul className="space-y-3 text-gray-800">
            <li>
              <span className="font-semibold text-teal-600">• Cuci Standar:</span> Rp20.000
              <p className="text-sm text-gray-500 ml-4">Cuci bagian luar motor menggunakan sabun khusus motor sport.</p>
            </li>
            <li>
              <span className="font-semibold text-teal-600">• Cuci + Semir Ban:</span> Rp25.000
              <p className="text-sm text-gray-500 ml-4">Cuci lengkap + semir ban untuk tampilan lebih mengkilap dan sporty.</p>
            </li>
            <li>
              <span className="font-semibold text-teal-600">• Cuci Detailing Premium:</span> Rp40.000
              <p className="text-sm text-gray-500 ml-4">Pembersihan detail termasuk semir bodi dan mesin ringan.</p>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-teal-600 mb-2">Kenapa Pilih Kami?</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Sabun khusus motor sport yang aman untuk cat dan fairing</li>
            <li>Tim berpengalaman dalam merawat motor besar & racing</li>
            <li>Alat bertekanan tinggi untuk hasil maksimal</li>
            <li>Area servis bersih dan nyaman</li>
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

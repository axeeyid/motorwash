import { Link } from "react-router-dom";

export default function CruiserServiceDetail() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-teal-700 mb-4">
          Detail Layanan: Cuci Motor Cruiser
        </h1>

        <p className="text-gray-700 text-lg mb-6">
          Layanan eksklusif untuk motor cruiser Anda — kami memahami keistimewaan setiap detail. 
          Dari kebersihan menyeluruh hingga kilauan chrome, kami hadirkan perawatan premium.
        </p>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-teal-600 mb-2">Pilihan Paket:</h2>
          <ul className="space-y-4 text-gray-800">
            <li>
              <span className="font-semibold text-teal-600">• Cuci Premium:</span> Rp35.000
              <p className="text-sm text-gray-500 ml-4">
                Cuci menyeluruh dengan sabun khusus & alat aman untuk bodi cruiser.
              </p>
            </li>
            <li>
              <span className="font-semibold text-teal-600">• Cuci + Semir Chrome:</span> Rp45.000
              <p className="text-sm text-gray-500 ml-4">
                Menonjolkan bagian chrome motor dengan semir khusus anti-karat.
              </p>
            </li>
            <li>
              <span className="font-semibold text-teal-600">• Detailing Full Body:</span> Rp60.000
              <p className="text-sm text-gray-500 ml-4">
                Semir chrome, velg, bodi, dan mesin ringan untuk tampilan maksimal.
              </p>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-teal-600 mb-2">Kenapa Pilih Layanan Ini?</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Produk perawatan khusus untuk motor cruiser dan moge</li>
            <li>Teknik detailing menyeluruh oleh staf berpengalaman</li>
            <li>Hasil mengkilap dan bersih tanpa merusak lapisan asli motor</li>
            <li>Privasi dan kenyamanan pelanggan diutamakan</li>
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

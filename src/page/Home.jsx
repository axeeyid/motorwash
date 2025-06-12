import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/cuci2.jpg"; // Ganti dengan path gambar Anda

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative text-white text-center py-16 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Semi-transparent overlay */}

        <div className="relative max-w-5xl mx-auto px-4 z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white text-shadow">
            Layanan Cuci Motor Terbaik, Cepat, dan Terpercaya
          </h2>
          <p className="text-lg mb-6 text-teal-100 text-shadow">
            Nikmati layanan cuci motor terbaik dengan harga terjangkau di sekitar Anda.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 bg-teal-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-12 text-teal-600">Layanan Kami</h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
  <h4 className="text-2xl font-bold mb-2 text-teal-700">Cuci Motor matic</h4>
  <p className="text-gray-700 mb-4">
    Motor Anda akan kembali bersih, kinclong, dan wangi! Pilih paket cuci motor sesuai kebutuhan Anda:
  </p>

  <ul className="mb-4 space-y-2 text-gray-800">
    <li>
      <span className="font-semibold text-teal-600">• Cuci Reguler:</span> Rp15.000
    </li>
    <li>
      <span className="font-semibold text-teal-600">• Cuci + Semir Ban:</span> Rp20.000
    </li>
    <li>
      <span className="font-semibold text-teal-600">• Cuci Detailing:</span> Rp30.000
      <span className="text-sm text-gray-500 ml-1">(Detail bagian sulit & finishing khusus)</span>
    </li>
  </ul>

  <Link to="detailmatic" className="inline-block text-white bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded transition duration-200">
    Lihat Detail Layanan
  </Link>
</div>


            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
  <h4 className="text-2xl font-bold mb-2 text-teal-700">Cuci Motor Sport</h4>
  <p className="text-gray-700 mb-4">
    Didesain khusus untuk motor sport kesayangan Anda. Kami memberikan perawatan menyeluruh dengan alat dan teknik profesional.
  </p>

  <ul className="mb-4 space-y-2 text-gray-800">
    <li>
      <span className="font-semibold text-teal-600">• Cuci Standar:</span> Rp20.000
    </li>
    <li>
      <span className="font-semibold text-teal-600">• Cuci + Semir Ban:</span> Rp25.000
    </li>
    <li>
      <span className="font-semibold text-teal-600">• Cuci Detailing Premium:</span> Rp40.000
      <span className="text-sm text-gray-500 ml-1">(Pembersihan detail + semir bodi & mesin ringan)</span>
    </li>
  </ul>

  <Link to="detailsport" className="inline-block text-white bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded transition duration-200">
    Lihat Detail Layanan
  </Link>
</div>


            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
  <h4 className="text-2xl font-bold mb-2 text-teal-700">Cuci Motor Cruiser</h4>
  <p className="text-gray-700 mb-4">
    Layanan eksklusif untuk motor cruiser dengan perhatian ekstra pada detail, kebersihan, dan tampilan mewah motor Anda.
  </p>

  <ul className="mb-4 space-y-2 text-gray-800">
    <li>
      <span className="font-semibold text-teal-600">• Cuci Premium:</span> Rp35.000
    </li>
    <li>
      <span className="font-semibold text-teal-600">• Cuci + Semir Chrome:</span> Rp45.000
    </li>
    <li>
      <span className="font-semibold text-teal-600">• Detailing Full Body:</span> Rp60.000
      <span className="text-sm text-gray-500 ml-1">(Semir chrome, bodi, velg, mesin ringan)</span>
    </li>
  </ul>

  <Link to="detailpremium" className="inline-block text-white bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded transition duration-200">
    Lihat Detail Layanan
  </Link>
</div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Testimoni Pelanggan</h3>
          <div className="flex justify-center space-x-8">
            <div className="bg-white text-teal-600 p-6 rounded-lg shadow-lg max-w-xs">
              <p className="italic mb-4">
                "Layanan cuci motor sangat cepat dan memuaskan! Motor saya terlihat seperti baru lagi."
              </p>
              <p className="font-semibold">- Alex</p>
            </div>
            <div className="bg-white text-teal-600 p-6 rounded-lg shadow-lg max-w-xs">
              <p className="italic mb-4">
                "Motor saya selalu bersih dan terawat, sangat puas dengan pelayanan MotorWash."
              </p>
              <p className="font-semibold">- Maria</p>
            </div>
            <div className="bg-white text-teal-600 p-6 rounded-lg shadow-lg max-w-xs">
              <p className="italic mb-4">
                "Harga terjangkau dan hasil cuciannya luar biasa, saya pasti akan kembali."
              </p>
              <p className="font-semibold">- Jonny</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

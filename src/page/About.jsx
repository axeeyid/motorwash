export default function AboutPage() {
    return (
      <div className="min-h-screen bg-gray-50 px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-teal-700 mb-4">Tentang Kami</h1>
          <p className="text-gray-600 text-lg">
            Kami adalah layanan cuci motor modern dengan komitmen menjaga kendaraan Anda tetap bersih dan terawat.
          </p>
  
          <div className="mt-10 grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-teal-500">
              <h3 className="text-xl font-semibold text-teal-700">💡 Visi</h3>
              <p className="mt-2 text-gray-600">
                Menjadi layanan cuci motor terbaik dengan kualitas premium dan layanan cepat.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-teal-500">
              <h3 className="text-xl font-semibold text-teal-700">🎯 Misi</h3>
              <p className="mt-2 text-gray-600">
                Memberikan layanan cuci motor yang ramah lingkungan, efisien, dan terjangkau.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
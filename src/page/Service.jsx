export default function ServicePage() {
    const services = [
      { name: "Cuci Matic - Reguler", price: 15000, desc: "Pencucian cepat & bersih untuk motor matic harian." },
      { name: "Cuci Matic + Semir Ban", price: 20000, desc: "Plus kilap ban agar motor tampil segar." },
      { name: "Cuci Sport - Detailing Premium", price: 30000, desc: "Detailing premium untuk motor sport kesayangan Anda." },
      { name: "Cuci Cruiser - Full Body Detailing", price: 40000, desc: "Paket lengkap untuk motor besar & cruiser." },
    ];
  
    return (
      <div className="min-h-screen bg-gray-50 px-6 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-teal-700 mb-4">Layanan Kami</h1>
          <p className="text-gray-600 mb-10 text-lg">
            Kami menyediakan berbagai layanan cuci motor sesuai dengan jenis kendaraan Anda.
          </p>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-teal-500 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-teal-700">{service.name}</h3>
                <p className="mt-2 text-gray-600">{service.desc}</p>
                <p className="mt-4 text-teal-600 font-bold text-lg">
                  Rp {service.price.toLocaleString("id-ID")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
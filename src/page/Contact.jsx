export default function ContactPage() {
    return (
      <div className="min-h-screen bg-gray-50 px-6 py-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-bold text-teal-700 mb-4">Hubungi Kami</h1>
            <p className="text-gray-600 text-lg mb-6">
              Kami siap menjawab pertanyaan Anda seputar layanan kami. Jangan ragu untuk menghubungi!
            </p>
  
            <ul className="space-y-4 text-gray-700 text-base">
              <li><strong>📍 Alamat:</strong> Jl. Bersih No.123, Bandung</li>
              <li><strong>📞 Telepon:</strong> 0812-3456-7890</li>
              <li><strong>✉️ Email:</strong> info@cucimotorbandung.com</li>
            </ul>
          </div>
  
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-64 md:h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!..."
              allowFullScreen=""
              loading="lazy"
              title="Lokasi Kami"
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
  
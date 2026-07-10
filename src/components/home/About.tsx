const About = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Tentang COST</h2>
          <p className="section-subtitle">
            Kami adalah wadah bagi siswa yang ingin mengembangkan potensi di bidang sains dan
            teknologi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card-md">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-secondary-500">Visi</h3>
            <p className="text-gray-600">
              Menjadi komunitas terdepan dalam pengembangan inovasi sains dan teknologi di
              lingkungan sekolah.
            </p>
          </div>

          <div className="card-md">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-secondary-500">Misi</h3>
            <p className="text-gray-600">
              Memberikan platform pembelajaran interaktif dan mengembangkan kreativitas serta
              inovasi siswa.
            </p>
          </div>

          <div className="card-md">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🌟</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-secondary-500">Nilai</h3>
            <p className="text-gray-600">
              Integritas, kolaborasi, inovasi, dan dedikasi dalam setiap kegiatan kami.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

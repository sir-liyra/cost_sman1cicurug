import Link from 'next/link';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="section bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-20 md:pt-32">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-600 px-4 py-2 rounded-full mb-6">
              <Sparkles size={18} />
              <span className="text-sm font-semibold">Selamat Datang</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-secondary-500 mb-6 leading-tight">
              Club of Science <span className="text-primary-500">&</span> Technology
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-md">
              Bergabunglah dengan komunitas inovator dan pemimpin masa depan. Kami berkomitmen
              untuk mengembangkan minat siswa di bidang sains dan teknologi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/events" className="btn btn-primary">
                Jelajahi Kegiatan
              </Link>
              <Link href="/about" className="btn btn-outline">
                Pelajari Lebih Lanjut
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full h-96 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-3xl shadow-2xl flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-8xl mb-4">∞</div>
                <p className="text-2xl font-bold">COST</p>
                <p className="text-sm mt-2 opacity-90">Innovation Never Stops</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

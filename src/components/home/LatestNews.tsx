import Link from 'next/link';
import { Clock, User } from 'lucide-react';

const LatestNews = () => {
  const articles = [
    {
      id: 1,
      title: 'Tips Belajar Programming untuk Pemula',
      excerpt: 'Panduan lengkap untuk memulai perjalanan programming Anda...',
      author: 'Admin COST',
      date: '10 Agustus 2024',
      category: 'Tutorial',
    },
    {
      id: 2,
      title: 'Tren Teknologi 2024 yang Harus Diketahui',
      excerpt: 'Berbagai teknologi terbaru yang sedang berkembang pesat...',
      author: 'Admin COST',
      date: '8 Agustus 2024',
      category: 'Berita',
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Berita & Artikel Terbaru</h2>
          <p className="section-subtitle">Ikuti perkembangan terbaru dari COST</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {articles.map((article) => (
            <article key={article.id} className="card-md group hover:shadow-xl transition">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                  {article.category}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary-500 group-hover:text-primary-500 transition">
                {article.title}
              </h3>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{article.date}</span>
                </div>
              </div>
              <Link
                href={`/blog/${article.id}`}
                className="mt-4 inline-block text-primary-500 hover:text-primary-600 font-semibold"
              >
                Baca Selengkapnya →
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog" className="btn btn-secondary">
            Baca Semua Artikel
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;

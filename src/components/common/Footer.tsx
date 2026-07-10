import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-500 text-white mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">COST</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Club of Science and Technology SMAN 1 Cicurug adalah ekskul yang fokus pada
              pengembangan skill di bidang teknologi dan sains.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-200 hover:text-primary-300 transition">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-200 hover:text-primary-300 transition">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-200 hover:text-primary-300 transition">
                  Kegiatan
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-200 hover:text-primary-300 transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <span className="text-gray-200">cost@sman1cicurug.sch.id</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <span className="text-gray-200">+62 262-XXXX-XXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5" />
                <span className="text-gray-200">SMAN 1 Cicurug, Sukabumi</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Ikuti Kami</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-primary-500 p-3 rounded-full hover:bg-primary-600 transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-primary-500 p-3 rounded-full hover:bg-primary-600 transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-primary-500 p-3 rounded-full hover:bg-primary-600 transition"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-400 pt-8">
          <p className="text-center text-gray-200 text-sm">
            &copy; {currentYear} COST SMAN 1 Cicurug. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Link from 'next/link';
import { Calendar, MapPin, Users } from 'lucide-react';

const FeaturedEvents = () => {
  const events = [
    {
      id: 1,
      title: 'Workshop Web Development',
      date: '15 Agustus 2024',
      location: 'Lab Komputer',
      participants: 45,
      category: 'Workshop',
    },
    {
      id: 2,
      title: 'Kompetisi Robotika',
      date: '22 Agustus 2024',
      location: 'Aula Sekolah',
      participants: 30,
      category: 'Kompetisi',
    },
    {
      id: 3,
      title: 'Seminar Artificial Intelligence',
      date: '29 Agustus 2024',
      location: 'Ruang Aula',
      participants: 60,
      category: 'Seminar',
    },
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Kegiatan Terbaru</h2>
          <p className="section-subtitle">Jangan lewatkan kegiatan menarik kami</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {events.map((event) => (
            <div key={event.id} className="card-md group hover:shadow-xl transition">
              <div className="mb-4">
                <span className="inline-block bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                  {event.category}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-secondary-500 group-hover:text-primary-500 transition">
                {event.title}
              </h3>
              <div className="space-y-3 text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-primary-500" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-primary-500" />
                  <span className="text-sm">{event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-primary-500" />
                  <span className="text-sm">{event.participants} Peserta</span>
                </div>
              </div>
              <Link href={`/events/${event.id}`} className="btn btn-primary w-full text-center">
                Lihat Detail
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/events" className="btn btn-secondary">
            Lihat Semua Kegiatan
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;

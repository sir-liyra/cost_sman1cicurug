import Hero from '@/components/home/Hero';
import FeaturedEvents from '@/components/home/FeaturedEvents';
import About from '@/components/home/About';
import LatestNews from '@/components/home/LatestNews';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedEvents />
      <LatestNews />
    </>
  );
}

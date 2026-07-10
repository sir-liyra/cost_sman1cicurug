import type { Metadata } from 'next';
import { Providers } from '@/components/providers';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'COST - Club of Science and Technology',
  description: 'Website resmi ekskul Club of Science and Technology SMAN 1 Cicurug',
  keywords: ['COST', 'Science', 'Technology', 'SMAN 1 Cicurug', 'Club'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white text-gray-900">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Sidebar from '@/components/ui/sidebar';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Robert Santos',
  description: 'Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased font-inter container mx-auto`}
      >
        <div className="grid grid-cols-[30%_1fr] justify-center h-screen pt-4">
          <Sidebar />
          <main className="h-full lg:pl-11">{children}</main>
        </div>
      </body>
    </html>
  );
}

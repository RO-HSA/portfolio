import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Sidebar from '@/components/sidebar';
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
      <body className={`${inter.variable} antialiased font-inter pt-4`}>
        <div>
          <div className="grid grid-cols-[30%,70%] container max-w-[1024px] mx-auto h-screen">
            <div>
              <Sidebar />
            </div>
            <main className="h-full pb-11">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}

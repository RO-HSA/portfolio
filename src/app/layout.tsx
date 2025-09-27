import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { Inter } from 'next/font/google';

import Sidebar from '@/components/sidebar';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
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
        <NextIntlClientProvider>
          <div>
            <div className="grid grid-cols-[30%,70%] container max-w-[1024px] mx-auto h-screen">
              <div>
                <Sidebar />
              </div>
              <main className="h-full pb-11">{children}</main>
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { Inter } from 'next/font/google';

import Navigation from '@/components/navigation';
import './globals.css';
import { cn } from '@/lib/utils';

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
            <div
              className={cn(
                'flex p-5 relative',
                'lg:grid lg:grid-cols-[30%,70%] lg:p-0 container lg:mx-auto max-w-[1024px] h-screen',
              )}
            >
              <Navigation>
                <main className="h-full pb-11">{children}</main>
              </Navigation>
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

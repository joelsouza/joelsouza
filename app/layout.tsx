import { Metadata } from 'next';
import Script from 'next/script'
import '../assets/global.scss';
import { Roboto, Montserrat } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['100', '400', '700'],
});

export const metadata: Metadata = {
  title: 'Joel Souza',
  description: "Hi, I'm Joel, a passionate and interdisciplinary software engineer from Brazil",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', '${process.env.GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <body>
        <main className={`${roboto.className} ${montserrat.variable}`}>
          {children}
        </main>
      </body>
    </html>
  )
}

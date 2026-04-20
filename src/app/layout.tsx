import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google';

import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});
const outfit = Outfit({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const BASE_URL = 'https://www.vinayakoverseasservices.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'New Adarsh Manpower Consultant | MEA Approved Global Manpower Recruitment',
    template: '%s | New Adarsh Manpower Consultant',
  },
  description:
    'New Adarsh Manpower Consultant is an MEA-approved, Government of India licensed overseas manpower recruitment agency. We connect skilled Indian professionals with trusted international employers across Gulf, Middle East, Asia & Europe.',
  keywords: [
    'overseas recruitment India',
    'manpower agency India',
    'MEA approved recruitment',
    'overseas jobs India',
    'gulf recruitment agency',
    'international manpower consultancy',
    'New Adarsh Manpower Consultant',
    'overseas staffing India',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: BASE_URL,
    siteName: 'New Adarsh Manpower Consultant',
    title: 'New Adarsh Manpower Consultant | MEA Approved Global Manpower Recruitment',
    description:
      'Connecting skilled Indian talent with trusted international employers. MEA Registered | 100% Legal Recruitment | Global Placements.',
    images: [
      {
        url: '/images/hero_city_buildings.png',
        width: 1200,
        height: 630,
        alt: 'New Adarsh Manpower Consultant — Global Recruitment',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Adarsh Manpower Consultant | Global Manpower Recruitment',
    description:
      'MEA approved overseas recruitment agency. Connecting skilled Indian professionals with global employers.',
    images: ['/images/hero_city_buildings.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'New Adarsh Manpower Consultant',
  alternateName: 'amc',
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.jpeg`,
  description:
    'MEA approved overseas manpower recruitment agency connecting skilled Indian professionals with international employers across Gulf, Middle East, Asia and Europe.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ramnath Deoria Basement and Ground Floor Near Kali Mandir, Deoria Sadar R.S Deoria',
    addressLocality: 'Deoria',
    addressRegion: 'Uttar Pradesh',
    postalCode: '174303',
    addressCountry: 'IN',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-8957721120',
      contactType: 'customer service',
      availableLanguage: ['Hindi', 'English'],
    },
  ],
  email: 'newadarshmanpowerconsultant@gmail.com',
  foundingDate: '2014',
  numberOfEmployees: '10-50',
  sameAs: [
    'https://www.facebook.com/vinayakoverseasservices',
    'https://www.linkedin.com/company/vinayakoverseasservices',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${plusJakarta.variable} ${outfit.variable} font-sans antialiased bg-[#F8FAFC] text-slate-800`}
      >
        {children}
      </body>
    </html>
  );
}

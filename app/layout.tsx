import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Buzzi Odontologia | Clínica Odontológica em Curitiba",
  description:
    "Clínica odontológica em Curitiba especializada em implantes, estética dental e ortodontia com atendimento humanizado.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {/* Google Tag Manager */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WL5TTGXW');
            `,
          }}
        />

         {/* Google Tag Manager */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WL5TTGXW');
            `,
          }}
        />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WL5TTGXW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>


        {/* HEADER */}
        <header className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md">
          <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
            <a href="/" className="flex items-center">
              <Image
                src="/logo-buzzi3.png"
                alt="Buzzi Odontologia - Clínica Odontológica em Curitiba"
                width={220}
                height={100}
                priority
              />
            </a>

            <div className="flex gap-6 items-center">
              
                href="/"
                className="relative text-sm font-medium
                text-white/90
                hover:text-teal-400
                transition
                after:content-['']
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0 after:bg-teal-400
                after:transition-all after:duration-300
                hover:after:w-full"
              >
                Início
              </a>
              
                href="/sobre"
                className="relative text-sm font-medium
                text-white/90
                hover:text-teal-400
                transition
                after:content-['']
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0 after:bg-teal-400
                after:transition-all after:duration-300
                hover:after:w-full"
              >
                Sobre
              </a>
              
                href="/tratamentos/implantes"
                className="relative text-sm font-medium
                text-white/90
                hover:text-teal-400
                transition
                after:content-['']
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0 after:bg-teal-400
                after:transition-all after:duration-300
                hover:after:w-full"
              >
                Implantes
              </a>
              
                href="/tratamentos/estetica"
                className="relative text-sm font-medium
                text-white/90
                hover:text-teal-400
                transition
                after:content-['']
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0 after:bg-teal-400
                after:transition-all after:duration-300
                hover:after:w-full"
              >
                Estética Dental
              </a>
              
                href="/tratamentos/ortodontia"
                className="relative text-sm font-medium
                text-white/90
                hover:text-teal-400
                transition
                after:content-['']
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0 after:bg-teal-400
                after:transition-all after:duration-300
                hover:after:w-full"
              >
                Ortodontia
              </a>
              
                href="https://wa.me/5541995244522"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-teal-600 hover:bg-teal-700 transition-colors duration-200 text-white px-4 py-2 rounded-md text-lg"
              >
                Agendar
              </a>
            </div>
          </nav>
        </header>

        {children}

        {/* FOOTER */}
        <footer className="border-t mt-20 py-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Buzzi Odontologia
        </footer>

        <SpeedInsights />

        {/* SEO LOCAL */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: "Buzzi Odontologia",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rua Maestro Francisco Antonello, 697",
                addressLocality: "Curitiba",
                addressRegion: "PR",
                addressCountry: "BR",
              },
              telephone: "+5541995244522",
            }),
          }}
        />
      </body>
    </html>
  );
}

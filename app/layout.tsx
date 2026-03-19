import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

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
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-buzzi3.png"
                alt="Buzzi Odontologia - Clínica Odontológica em Curitiba"
                width={220}
                height={100}
                priority
              />
            </Link>

            <div className="flex gap-6 items-center">
              <Link
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
              </Link>

              <Link
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
              </Link>

              <Link
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
              </Link>

              <Link
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
              </Link>

              <Link
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
              </Link>

              <Link
                href="https://wa.me/5541995244522?text=Ol%C3%A1%21%20Vim%20pelo%20an%C3%BAncio.%20Podem%20me%20ajudar%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-teal-600 hover:bg-teal-700 transition-colors duration-200 text-white px-4 py-2 rounded-md text-lg"
              >
                Agendar
              </Link>
            </div>
          </nav>
        </header>

        {children}

        {/* FOOTER */}
        <Footer />

        {/* WHATSAPP FLUTUANTE */}
        <WhatsAppFloat />

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

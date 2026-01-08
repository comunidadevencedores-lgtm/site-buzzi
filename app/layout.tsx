import Image from "next/image";
import "./globals.css";
import Link from "next/link";


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
            <a
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
<a
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
<a
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
<a
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
  Estética
</a>
<a
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
<a
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

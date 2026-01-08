import Image from "next/image";

export default function Ortodontia() {
  return (
    <>
      {/* HERO FULL WIDTH */}
      <section className="relative w-screen h-[85vh] pt-[80px]">
        <Image
          src="/tratamentos/ortodontia.jpg"
          alt="Ortodontia em Curitiba - Buzzi Odontologia"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-white">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-semibold mb-4">
                Ortodontia em Curitiba
              </h1>
              <p className="text-lg text-gray-200">
                Alinhamento dental com conforto, estética e eficiência.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold mb-4">
          Tratamentos ortodônticos
        </h2>

        <p className="text-gray-700 mb-10">
          A ortodontia é responsável por corrigir o posicionamento dos dentes
          e da mordida, promovendo saúde bucal, estética e melhor função
          mastigatória. Cada caso é avaliado individualmente para definir o
          melhor tipo de tratamento.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Tipos de aparelhos
        </h2>

        <ul className="grid md:grid-cols-2 gap-4 text-gray-700 mb-16">
          <li>✔ Aparelhos convencionais</li>
          <li>✔ Aparelhos estéticos</li>
          <li>✔ Correção da mordida</li>
          <li>✔ Planejamento individualizado</li>
        </ul>

        {/* DIFERENCIAIS */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="border rounded-xl p-6 hover:shadow transition">
            <h3 className="font-semibold mb-2">Acompanhamento Contínuo</h3>
            <p className="text-sm text-gray-600">
              Monitoramento constante da evolução do tratamento.
            </p>
          </div>

          <div className="border rounded-xl p-6 hover:shadow transition">
            <h3 className="font-semibold mb-2">Conforto no Tratamento</h3>
            <p className="text-sm text-gray-600">
              Técnicas modernas para uma experiência mais confortável.
            </p>
          </div>

          <div className="border rounded-xl p-6 hover:shadow transition">
            <h3 className="font-semibold mb-2">Resultados Eficientes</h3>
            <p className="text-sm text-gray-600">
              Alinhamento funcional e estético dos dentes.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-teal-600 text-white rounded-xl p-10 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Comece seu tratamento ortodôntico
          </h2>

          <p className="mb-6">
            Alinhe seu sorriso com acompanhamento profissional e segurança.
          </p>

          <a
            href="https://wa.me/5541995244522"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-teal-700 px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition"
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";

export default function Implantes() {
  return (
    <>
      {/* HERO FULL WIDTH */}
      <section className="relative w-screen h-[85vh] pt-[80px]">
        <Image
          src="/tratamentos/img4.jpg"
          alt="Implantes Dentários em Curitiba - Buzzi Odontologia"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />

        {/* Conteúdo */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <div className="max-w-xl text-white">
              <h1 className="text-4xl md:text-5xl font-semibold mb-4">
                Implantes Dentários em Curitiba
              </h1>

              <p className="text-lg text-gray-200">
                Segurança, estética e conforto com planejamento individualizado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold mb-4">
          O que é o implante dentário?
        </h2>

        <p className="text-gray-700 mb-10">
          O implante dentário é um pino de titânio inserido no osso que substitui
          a raiz do dente perdido, permitindo a fixação de uma prótese com
          aparência natural, segurança e excelente função mastigatória.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Para quem é indicado?
        </h2>

        <ul className="grid md:grid-cols-2 gap-4 text-gray-700 mb-16">
          <li>✔ Pessoas que perderam um ou mais dentes</li>
          <li>✔ Quem utiliza prótese móvel e busca mais conforto</li>
          <li>✔ Recuperação estética e mastigatória</li>
          <li>✔ Solução definitiva e duradoura</li>
        </ul>

        {/* BLOCOS DE DIFERENCIAIS */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="border rounded-xl p-6 hover:shadow transition">
            <h3 className="font-semibold mb-2">Atendimento Humanizado</h3>
            <p className="text-sm text-gray-600">
              Cuidado próximo, explicativo e personalizado em todas as etapas.
            </p>
          </div>

          <div className="border rounded-xl p-6 hover:shadow transition">
            <h3 className="font-semibold mb-2">Planejamento Seguro</h3>
            <p className="text-sm text-gray-600">
              Avaliação criteriosa com tecnologia moderna e precisão.
            </p>
          </div>

          <div className="border rounded-xl p-6 hover:shadow transition">
            <h3 className="font-semibold mb-2">Resultados Naturais</h3>
            <p className="text-sm text-gray-600">
              Estética, conforto e funcionalidade em equilíbrio.
            </p>
          </div>
        </div>

        {/* IMAGEM + TEXTO */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <img
            src="/tratamentos/img2.jpg"
            alt="Implantes dentários na Buzzi Odontologia em Curitiba"
            className="rounded-xl shadow"
          />

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Por que fazer implantes na Buzzi Odontologia?
            </h2>

            <p className="text-gray-700 mb-6">
              Na Buzzi Odontologia, cada tratamento é planejado de forma
              individualizada, com tecnologia moderna, responsabilidade técnica
              especializada e acompanhamento completo.
            </p>

            <ul className="text-gray-700 space-y-2">
              <li>✔ Profissionais qualificados</li>
              <li>✔ Localização estratégica em Curitiba</li>
              <li>✔ Acompanhamento em todas as etapas</li>
            </ul>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="bg-teal-600 text-white rounded-xl p-10 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Agende sua avaliação para implantes
          </h2>

          <p className="mb-6">
            Descubra a melhor solução para recuperar seu sorriso com segurança.
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

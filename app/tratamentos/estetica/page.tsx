import Image from "next/image";

export default function Estetica() {
  return (
    <>
      {/* HERO FULL WIDTH */}
      <section className="relative w-screen h-[85vh] pt-[80px]">
        <Image
          src="/tratamentos/estetica.jpg"
          alt="Odontologia Estética em Curitiba - Buzzi Odontologia"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-white">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-semibold mb-4">
                Odontologia Estética em Curitiba
              </h1>
              <p className="text-lg text-gray-200">
                Harmonia, naturalidade e confiança para o seu sorriso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold mb-4">
          O que é odontologia estética?
        </h2>

        <p className="text-gray-700 mb-10">
          A odontologia estética reúne procedimentos que visam melhorar a
          aparência do sorriso, respeitando a saúde bucal e a naturalidade.
          Cada tratamento é planejado de forma individualizada, considerando
          formato do rosto, dentes e expectativas do paciente.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Tratamentos estéticos realizados
        </h2>

        <ul className="grid md:grid-cols-2 gap-4 text-gray-700 mb-16">
          <li>✔ Clareamento dental</li>
          <li>✔ Facetas e lentes de contato dental</li>
          <li>✔ Restaurações estéticas</li>
          <li>✔ Reabilitação do sorriso</li>
        </ul>

        {/* DIFERENCIAIS */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="border rounded-xl p-6 hover:shadow transition">
            <h3 className="font-semibold mb-2">Planejamento Personalizado</h3>
            <p className="text-sm text-gray-600">
              Avaliação detalhada para alcançar resultados naturais.
            </p>
          </div>

          <div className="border rounded-xl p-6 hover:shadow transition">
            <h3 className="font-semibold mb-2">Tecnologia Moderna</h3>
            <p className="text-sm text-gray-600">
              Materiais e técnicas atuais para máxima segurança.
            </p>
          </div>

          <div className="border rounded-xl p-6 hover:shadow transition">
            <h3 className="font-semibold mb-2">Resultados Naturais</h3>
            <p className="text-sm text-gray-600">
              Estética em equilíbrio com a saúde bucal.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-teal-600 text-white rounded-xl p-10 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Transforme seu sorriso
          </h2>

          <p className="mb-6">
            Agende uma avaliação estética e descubra a melhor solução para você.
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

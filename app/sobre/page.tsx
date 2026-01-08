import Image from "next/image";

export default function Sobre() {
  return (
    <>
      {/* HERO FULL WIDTH */}
      <section className="relative w-screen h-[70vh] pt-[80px]">
        <Image
          src="/sobre/clinica.jpg"
          alt="Buzzi Odontologia em Curitiba"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Conteúdo */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-white">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-semibold mb-4">
                Clínica Odontológica em Curitiba
              </h1>
              <p className="text-lg text-gray-200">
                Cuidando do seu sorriso com excelência, carinho e atendimento
                humanizado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold mb-4">
          Sobre a Buzzi Odontologia
        </h2>

        <p className="text-gray-700 mb-6">
          A Buzzi Odontologia é uma clínica odontológica localizada no bairro
          Fanny, em Curitiba, especializada em tratamentos completos com foco
          na saúde bucal, estética e qualidade de vida. Nosso compromisso é
          oferecer um atendimento humanizado, seguro e transparente, respeitando
          as necessidades individuais de cada paciente.
        </p>

        <p className="text-gray-700 mb-12">
          Unimos experiência clínica, tecnologia moderna e planejamento
          personalizado para proporcionar conforto, confiança e resultados
          naturais em todas as etapas do tratamento.
        </p>

        {/* BLOCO DA DOUTORA */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <Image
            src="/sobre/dra-fernanda.jpg"
            alt="Dra. Fernanda Buzzi - Cirurgiã-Dentista em Curitiba"
            width={500}
            height={500}
            className="rounded-xl shadow"
          />

          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Dra. Fernanda Buzzi
            </h3>
            <p className="text-teal-600 mb-4">
              CRO/PR 17042
            </p>

            <p className="text-gray-700 mb-4">
              Cirurgiã-dentista formada pela Universidade Tuiuti do Paraná,
              com especialização em Ortodontia e ampla experiência em
              Implantodontia, Próteses Odontológicas e Cirurgias Orais.
            </p>

            <p className="text-gray-700">
              Atua com dedicação e responsabilidade técnica, sempre priorizando
              segurança, conforto e excelência nos resultados, oferecendo um
              atendimento próximo e acolhedor.
            </p>
          </div>
        </div>

        {/* VALORES */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="border rounded-xl p-6 hover:shadow transition">
            <h4 className="font-semibold mb-2">Atendimento Humanizado</h4>
            <p className="text-sm text-gray-600">
              Respeito, empatia e atenção em cada consulta e procedimento.
            </p>
          </div>

          <div className="border rounded-xl p-6 hover:shadow transition">
            <h4 className="font-semibold mb-2">Tecnologia Moderna</h4>
            <p className="text-sm text-gray-600">
              Equipamentos atuais para diagnósticos precisos e tratamentos
              seguros.
            </p>
          </div>

          <div className="border rounded-xl p-6 hover:shadow transition">
            <h4 className="font-semibold mb-2">Resultados Naturais</h4>
            <p className="text-sm text-gray-600">
              Estética e funcionalidade em equilíbrio para o seu sorriso.
            </p>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="bg-teal-600 text-white rounded-xl p-10 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Agende sua avaliação
          </h2>

          <p className="mb-6">
            Conheça a Buzzi Odontologia e descubra um novo padrão de atendimento
            odontológico em Curitiba.
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

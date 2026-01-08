import EquipeSlider from "@/components/EquipeSlider";

export default function Home() {
  return (
    <>
      {/* HERO FULL WIDTH */}
      <section
        className="relative h-[85vh] w-screen flex items-center"
        style={{
          backgroundImage: "url('/fachada1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

        <div className="relative w-full">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-xl text-white">
              <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
                Implantes, Estética e Ortodontia em Curitiba
                <br />
                com Atendimento Humanizado
              </h1>

              <p className="text-gray-200 mb-8 text-lg">
                Tratamentos odontológicos completos com foco em conforto,
                segurança e resultados naturais. Planejamento individualizado
                para cada paciente.
              </p>

              <a
                href="https://wa.me/5541995244522"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-md text-lg transition"
              >
                Agendar avaliação pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

  
      {/* DIVISOR VISUAL AZUL (AJUSTADO) */}
<div className="relative -mb-16">
  <svg
    viewBox="0 0 1440 60"
    className="block w-full"
    preserveAspectRatio="none"
  >
    <path
      d="M0,30 C240,50 480,10 720,20 960,30 1200,40 1440,25 L1440,0 L0,0 Z"
      fill="#0f766e" /* teal-700 */
    />
  </svg>
</div>


      {/* EQUIPE */}
      <EquipeSlider />
{/* DIVISOR ENTRE TÍTULO E CONTEÚDO (CORRETO) */}


<div className="flex justify-center mb-8">
  <div className="h-[3px] w-28 rounded-full bg-teal-600"></div>
</div>




<section
  className="relative min-h-[70vh] flex items-center"
  style={{
    backgroundImage: "url('/clinica-interna2.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/45"></div>

  <div className="relative z-10 w-full">
    <div className="max-w-6xl mx-auto px-6">
      <div className="max-w-xl text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight">
          Clínica Odontológica em Curitiba com Atendimento Humanizado
        </h2>

        <p className="text-white/90 mb-4">
          A Buzzi Odontologia é referência em tratamentos odontológicos completos,
          unindo tecnologia, experiência clínica e um atendimento totalmente humanizado.
        </p>

        <p className="text-white/80">
          Nosso foco é proporcionar conforto, segurança e resultados naturais,
          respeitando as necessidades individuais de cada paciente.
        </p>
      </div>
    </div>
  </div>
</section>





   {/* TRATAMENTOS */}
<section className="py-8 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">

    {/* TÍTULO */}
    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
      Tratamentos <span className="text-teal-600">Odontológicos</span>
    </h2>

    <p className="text-gray-600 max-w-2xl mb-12">
      Planejamento preciso e tecnologia avançada para devolver função,
      estética e segurança ao sorriso.
    </p>

    {/* GRID */}
    <div className="grid md:grid-cols-3 gap-6">
      {[
        {
          titulo: "Implantes Dentários",
          texto:
            "Reposição segura e duradoura de dentes perdidos, com planejamento digital e resultados naturais.",
        },
        {
          titulo: "Ortodontia",
          texto:
            "Correção do alinhamento dental e da mordida, unindo estética, função e saúde bucal.",
        },
        {
          titulo: "Odontologia Estética",
          texto:
            "Tratamentos personalizados para harmonizar o sorriso com naturalidade e equilíbrio.",
        },
        {
          titulo: "Odontologia Preventiva",
          texto:
            "Acompanhamento contínuo para manter a saúde bucal e prevenir problemas futuros.",
        },
        {
          titulo: "Prótese Dentária",
          texto:
            "Reabilitação funcional e estética para devolver conforto, mastigação e segurança.",
        },
        {
          titulo: "Cirurgia Oral",
          texto:
            "Procedimentos realizados com precisão, segurança e cuidado em cada etapa.",
        },
        {
          titulo: "Odontopediatria",
          texto:
            "Atendimento humanizado para crianças, criando uma relação positiva com o cuidado.",
        },
        {
          titulo: "Reabilitação Oral",
          texto:
            "Tratamentos completos para recuperar função, estética e qualidade de vida.",
        },
      ].map((item) => (
        <div
          key={item.titulo}
          className="bg-white rounded-xl p-6 border border-gray-200
                     hover:border-teal-600 hover:shadow-md transition"
        >
          <h3 className="font-semibold text-lg mb-2">
            {item.titulo}
          </h3>

          <p className="text-sm text-gray-600">
            {item.texto}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


<section className="py-20 bg-teal-700 text-white">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
    
    <div>
      <h3 className="text-xl font-semibold mb-2">Atendimento Humanizado</h3>
      <p className="text-sm opacity-90">
        Cuidado individual e atenção total a cada paciente.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">Tecnologia Moderna</h3>
      <p className="text-sm opacity-90">
        Equipamentos atuais para diagnósticos precisos.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">Resultados Naturais</h3>
      <p className="text-sm opacity-90">
        Estética e funcionalidade em equilíbrio.
      </p>
    </div>

  </div>
</section>
{/* DEPOIMENTOS */}
<section className="py-4 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    
    {/* TÍTULO */}
    <h2 className="text-3xl font-semibold text-center text-teal-600 mb-4">
      Depoimentos
    </h2>

    <p className="text-center text-gray-600 mb-16">
      Veja o que nossos pacientes dizem sobre nosso atendimento no Google
    </p>

    <div className="grid md:grid-cols-3 gap-10 items-start">

      {/* NOTA GOOGLE */}
      <div className="text-center md:text-left">
        <h3 className="text-2xl font-semibold mb-2">Excelente</h3>

        <div className="flex justify-center md:justify-start mb-2">
          {"★★★★★".split("").map((star, i) => (
            <span key={i} className="text-yellow-400 text-2xl">
              ★
            </span>
          ))}
        </div>

        <p className="text-sm text-gray-600 mb-4">
          Com base em <strong>111 avaliações</strong>
        </p>

        <img
          src="/google-logo.png"
          alt="Avaliações Google"
          className="mx-auto md:mx-0 w-28"
        />
      </div>

      {/* DEPOIMENTOS */}
      <div className="md:col-span-2 grid md:grid-cols-3 gap-6">

        {[
          {
            nome: "Katia",
            texto: "Dra. Fernanda muito profissional e extremamente qualificada.",
          },
          {
            nome: "Claudineia Souza",
            texto:
              "Ótimo atendimento, além de proporcionar um trabalho excelente.",
          },
          {
            nome: "Maria Roussenq",
            texto: "Dentistas muito profissionais e atenciosos.",
          },
        ].map((item) => (
          <div
            key={item.nome}
            className="border rounded-xl p-6 shadow-sm hover:shadow transition"
          >
            <div className="flex mb-2">
              {"★★★★★".split("").map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm">
                  ★
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-700 mb-4">
              “{item.texto}”
            </p>

            <strong className="text-sm">{item.nome}</strong>
          </div>
        ))}
      </div>
    </div>

    {/* CTA */}
    <div className="text-center mt-16">
      <a
        href="https://www.google.com/search?q=Buzzi+Odontologia+Curitiba"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-md font-medium transition"
      >
        Faça sua avaliação no Google
      </a>
    </div>
  </div>
</section>



{/* LOCALIZAÇÃO */}
<section className="w-full bg-teal-700">
  
  {/* TÍTULO */}
  <div className="max-w-6xl mx-auto px-6 py-12 text-center">
    <h2 className="text-3xl font-semibold text-white">
      Nossa localização
    </h2>
  </div>

  {/* MAPA */}
  <div className="w-full h-[500px]">
    <iframe
      src="https://www.google.com/maps?q=Rua%20Maestro%20Francisco%20Antonello,%20697%20-%20Fanny,%20Curitiba%20-%20PR&output=embed"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>

</section>



    </>
  );
}

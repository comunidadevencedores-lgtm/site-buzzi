
import EquipeSlider from "@/components/EquipeSlider";


const equipe = [
  {
    nome: "Dra. Fernanda Buzzi (CEO)",
    cro: "CRO-PR 17042",
    areas: [
      "Implantes Dentários",
      "Ortodontia (Aparelhos)",
      "Próteses Complexas",
      "Cirurgias Gerais",
    ],
    foto: "/dra-1.jpg",
  },
  {
    nome: "Dra. Roberta Veiga",
    cro: "",
    areas: [
      "Próteses em geral",
      "Endodontia (Tratamento de Canal)",
      "Clínica Geral (Restaurações, Limpezas)",
    ],
    foto: "/dra-2.jpg",
  },
  {
    nome: "Recepcionista",
    cro: "",
    areas: [
      "Atendimento humanizado",
      "Agendamentos",
      "Suporte ao paciente",
    ],
    foto: "/recepcao.jpg",
  },
];

export default function EquipeSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % equipe.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const pessoa = equipe[index];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-16">Nossa Equipe</h2>

        <div className="flex justify-center transition-all duration-700">
          <div className="flex items-center gap-10 max-w-3xl">
            <img
              src={pessoa.foto}
              alt={pessoa.nome}
              className="w-40 h-40 rounded-full object-cover shadow"
            />

            <div className="text-left">
              <h3 className="text-xl font-semibold">{pessoa.nome}</h3>

              {pessoa.cro && (
                <p className="text-sm text-teal-600 mb-2">{pessoa.cro}</p>
              )}

              <p className="font-medium mt-2">Áreas de Foco:</p>

              <ul className="mt-2 space-y-1 text-gray-700 text-sm">
                {pessoa.areas.map((area) => (
                  <li key={area}>▪️ {area}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

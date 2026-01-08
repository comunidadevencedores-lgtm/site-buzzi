"use client";

import { useEffect, useState } from "react";

const equipe = [
  {
    nome: "Dra. Fernanda Buzzi (CEO)",
    cargo: "CRO-PR 17042",
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
    cargo: "Cirurgiã-Dentista",
    areas: [
      "Próteses em geral",
      "Endodontia (Tratamento de Canal)",
      "Clínica Geral (Restaurações, Limpezas)",
    ],
    foto: "/dra-2.jpg",
  },
  {
    nome: "Tatiane Bomfim",
    cargo: "Recepcionista",
    areas: [
      "Agendamento de consultas",
      "Agendamento de procedimentos e cirurgias",
      "Atendimento humanizado com gentileza e cordialidade",
    ],
    foto: "/tatiane.jpg",
  },
];

export default function EquipeSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % equipe.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const pessoa = equipe[index];

  return (
    <section className="py-5 bg-white">
      <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-14">
  <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
    Nossa <span className="text-teal-600">Equipe</span>
  </h2>

  <div className="mx-auto mt-3 h-[3px] w-16 rounded-full bg-teal-600"></div>
</div>


        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl w-full transition-all duration-700 animate-fade">
            {/* FOTO */}
            <img
              src={pessoa.foto}
              alt={pessoa.nome}
              className="w-48 h-48 rounded-full object-cover shadow-lg"
            />

            {/* TEXTO */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-1">
                {pessoa.nome}
              </h3>

              <p className="text-sm text-teal-600 mb-4">
                {pessoa.cargo}
              </p>

              <p className="font-medium mb-2">Áreas de atuação:</p>

              <ul className="space-y-1 text-gray-700 text-sm">
                {pessoa.areas.map((area) => (
                  <li key={area}>▪ {area}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

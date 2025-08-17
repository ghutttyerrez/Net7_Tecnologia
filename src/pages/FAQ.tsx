import SEO from "@components/SEO";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      q: "Como funciona a instalação?",
      a: "Após a contratação, nossa equipe agenda a instalação no melhor dia e horário para você. Em média, concluímos em até 48 horas nas áreas com cobertura.",
    },
    {
      q: "Tenho fidelidade?",
      a: "Sim o plano residencial tem fidelidade mínima de 12 meses. Em caso de cancelamento antecipado, é cobrada uma taxa proporcional ao período restante.",
    },
    {
      q: "Qual velocidade eu recebo no Wi‑Fi?",
      a: "A velocidade via Wi‑Fi pode variar por distância, interferência e número de dispositivos conectados. Para medir a taxa máxima do plano, prefira cabo de rede (Gigabit) em um equipamento compatível.",
    },
    {
      q: "O roteador está incluso?",
      a: "Sim, fornecemos um roteador Wi‑Fi compatível com o plano contratado. Também oferecemos opções de upgrade para cobertura ampliada, como Wi‑Fi Mesh.",
    },
    {
      q: "Como solicitar suporte?",
      a: "Você pode falar com nosso time pelo WhatsApp, telefone ou abrir um chamado pelo app Minha Net7. Nosso atendimento é humano e ágil.",
    },
    {
      q: "Como emitir a segunda via da fatura?",
      a: "Acesse o app Minha Net7 para consultar histórico e emitir a 2ª via. Se preferir, solicite pelo WhatsApp que enviamos o boleto atualizado.",
    },
    {
      q: "Quais formas de pagamento são aceitas?",
      a: "Aceitamos boleto, Pix e cartão (débito/crédito, conforme disponibilidade). Para débito automático, fale com nosso comercial.",
    },
    {
      q: "Como funciona o Indique e Ganhe?",
      a: "Indique amigos e familiares. Quando a instalação for concluída, vocês recebem benefícios conforme a campanha vigente. Veja detalhes na página Indique e Ganhe.",
    },
    {
      q: "Posso levar meu plano ao me mudar?",
      a: "Sim. Verificamos cobertura no novo endereço e, havendo disponibilidade, agendamos a reinstalação sem burocracia.",
    },
  ];

  return (
    <div className="bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
      <SEO
        title="FAQ"
        description="Perguntas frequentes sobre planos, instalação, suporte e pagamentos."
      />

      <section className="section">
        <div className="container max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-white">
            Perguntas frequentes
          </h1>
          <p className="mt-3 text-neutral-700 dark:text-white/80">
            Reunimos as dúvidas mais comuns sobre nossos serviços. Se precisar
            de ajuda, fale com a gente pelo WhatsApp.
          </p>

          <div className="mt-8 space-y-3">
            {faqs.map((item, i) => (
              <details
                key={i}
                open={openIndex === i}
                className="group open:bg-white/60 rounded-lg border border-neutral-200 bg-white dark:bg-white/5 dark:border-white/10 dark:open:bg-white/10 transition-colors"
              >
                <summary
                  className="list-none cursor-pointer select-none p-4 md:p-5 flex items-start gap-3"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenIndex((prev) => (prev === i ? null : i));
                  }}
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-300">
                    {i + 1}
                  </span>
                  <span className="text-base md:text-lg font-medium text-neutral-900 dark:text-white">
                    {item.q}
                  </span>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5 -mt-2 text-neutral-700 dark:text-white/80">
                  {item.a}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-neutral-200 bg-white p-5 text-neutral-800 dark:border-white/10 dark:bg-white/5 dark:text-white/80">
            Precisa de algo mais específico? Nosso time responde rápido:
            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href="https://wa.me/55679993259746"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-green-500 px-4 py-2 font-medium text-white hover:bg-green-600"
              >
                Falar no WhatsApp
              </a>
              <a
                href="mailto:suporte@net7.com"
                className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-4 py-2 font-medium text-white hover:bg-neutral-800 dark:bg-white/10 dark:hover:bg-white/20"
              >
                suporte@net7.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

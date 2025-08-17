import { motion } from "framer-motion";

export default function Suporte() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-3xl font-semibold text-neutral-900 dark:text-white">
          Suporte
        </h1>
        <p className="mt-2 text-neutral-700 dark:text-white/80">
          Canais oficiais de atendimento da Net7 Tecnologia.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="rounded-2xl border p-6 bg-white border-neutral-200 hover:border-neutral-300 hover:shadow-md transition-colors dark:border-white/10 dark:bg-white/5"
          >
            <h3 className="text-xl font-medium text-neutral-900 dark:text-white">
              WhatsApp
            </h3>
            <p className="mt-2 text-neutral-700 dark:text-white/80">
              Atendimento rápido com nossa equipe.
            </p>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-md bg-emerald-500 px-4 py-2 font-medium text-white hover:bg-emerald-600"
            >
              Abrir WhatsApp
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="rounded-2xl border p-6 bg-white border-neutral-200 hover:border-neutral-300 hover:shadow-md transition-colors dark:border-white/10 dark:bg-white/5"
          >
            <h3 className="text-xl font-medium text-neutral-900 dark:text-white">
              Telefone
            </h3>
            <p className="mt-2 text-neutral-700 dark:text-white/80">
              (67) 99325-9746
            </p>
            <p className="text-neutral-500 dark:text-white/60 text-base">
              Seg a Sex - 08h às 18h • Plantão 24/7
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="rounded-2xl border p-6 bg-white border-neutral-200 hover:border-neutral-300 hover:shadow-md transition-colors dark:border-white/10 dark:bg-white/5"
          >
            <h3 className="text-xl font-medium text-neutral-900 dark:text-white">
              E‑mail
            </h3>
            <p className="mt-2 text-neutral-700 dark:text-white/80">
              suporte@net7.com
            </p>
            <a
              href="mailto:suporte@link.com"
              className="mt-4 inline-flex rounded-md border px-4 py-2 font-medium border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              Enviar mensagem
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

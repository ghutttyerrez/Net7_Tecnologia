import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="container py-10 text-base text-neutral-600 dark:text-white/70">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-8">
          <div className="w-full md:w-auto">
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="Net7 Tecnologia"
                className="h-6 w-6 rounded object-contain"
                draggable={false}
              />
              <span className="font-semibold text-neutral-900 dark:text-white">
                Net7 Tecnologia
              </span>
            </div>
            <p className="mt-3 max-w-xl break-words">
              Conectando você ao que importa. Internet rápida, estável e com
              suporte de verdade.
            </p>
          </div>
          <div className="w-full md:w-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="min-w-0">
              <p className="text-neutral-900 dark:text-white mb-2">Contato</p>
              <ul className="space-y-1 text-sm md:text-base break-words">
                <li>
                  WhatsApp:{" "}
                  <a
                    href="https://wa.me/55679993259746"
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-neutral-900 dark:hover:text-white transition-colors"
                    aria-label="Abrir conversa no WhatsApp"
                  >
                    (67) 999325-9746
                  </a>
                </li>
                <li>
                  Suporte:{" "}
                  <a
                    href="mailto:suporte@net7.com"
                    className="underline hover:text-neutral-900 dark:hover:text-white"
                  >
                    suporte@net7.com
                  </a>
                </li>
                <li>
                  Comercial:{" "}
                  <a
                    href="mailto:vendas@net7.com"
                    className="underline hover:text-neutral-900 dark:hover:text-white"
                  >
                    vendas@net7.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="min-w-0">
              <p className="text-neutral-900 dark:text-white mb-2">Endereço</p>
              <p className="break-words">
                Rua Sergipe, 311 - Sala 02 - Centro
                <br />
                Sidrolândia - MS
              </p>
            </div>
          </div>
        </div>
        <p className="mt-8 text-sm">
          © {new Date().getFullYear()} Net7 Tecnologia. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}

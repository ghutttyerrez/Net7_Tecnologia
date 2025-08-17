import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroParticles from "@components/HeroParticles";
import SEO from "@components/SEO";
import ReviewImage from "@components/ReviewImage";

export default function Home() {
  // Modo estático: usa imagens de reviews no /public e não consome API
  const USE_STATIC_REVIEWS = true;
  const [reviews, setReviews] = useState<{
    rating?: number;
    user_ratings_total?: number;
    url?: string;
    reviews: Array<{
      author_name: string;
      rating: number;
      text: string;
      relative_time_description?: string;
    }>;
  } | null>(null);
  const [reviewsError, setReviewsError] = useState<string | null>(null);
  const [reviewTick, setReviewTick] = useState(0);
  const [reviewsPaused, setReviewsPaused] = useState(false);

  useEffect(() => {
    if (USE_STATIC_REVIEWS) return; // pular busca quando usando imagens
    let cancelled = false;
    fetch("/api/reviews")
      .then(async (r) => {
        if (!r.ok)
          throw new Error(
            (await r.json()).error || "Erro ao buscar avaliações"
          );
        return r.json();
      })
      .then((data) => {
        if (!cancelled) setReviews(data);
      })
      .catch((e) => {
        if (!cancelled)
          setReviewsError(e?.message || "Não foi possível carregar avaliações");
      });
    return () => {
      cancelled = true;
    };
  }, [USE_STATIC_REVIEWS]);

  // Rotação automática dos cards (carrossel) a cada 5s
  useEffect(() => {
    if (USE_STATIC_REVIEWS) return; // sem rotação quando estático
    if (!reviews?.reviews?.length || reviewsPaused) return;
    const id = setInterval(() => {
      setReviewTick((t) => (t + 1) % reviews.reviews.length);
    }, 5000);
    return () => clearInterval(id);
  }, [reviews?.reviews?.length, reviewsPaused, USE_STATIC_REVIEWS]);

  // Rotação automática para o modo estático (imagens)
  useEffect(() => {
    if (!USE_STATIC_REVIEWS || reviewsPaused) return;
    const staticReviewNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // números das reviews disponíveis
    const len = staticReviewNumbers.length;
    if (len <= 1) return;
    const id = setInterval(() => {
      setReviewTick((t) => (t + 1) % len);
    }, 4000);
    return () => clearInterval(id);
  }, [USE_STATIC_REVIEWS, reviewsPaused]);
  return (
    <div className="bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
      <SEO
        title="Início"
        description="Internet rápida e estável com suporte humano. Conheça os planos da Link Internet."
      />
      <section className="relative overflow-hidden section">
        <HeroParticles />
        <div className="absolute inset-0 z-[-1]">
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-brand-500/20 dark:bg-brand-500/30 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-cyan-500/10 dark:bg-cyan-500/20 blur-3xl" />
        </div>
        <div className="relative z-10 container grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center rounded-full border border-neutral-300 dark:border-white/10 bg-neutral-100/80 dark:bg-white/5 px-3 py-1 text-sm text-neutral-600 dark:text-white/80">
              Internet de verdade • Suporte humano
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-neutral-900 dark:text-white">
              Conexão ultrarrápida e estável para sua casa e empresa
            </h1>
            <p className="mt-4 text-neutral-600 dark:text-white/80 max-w-xl">
              Planos de internet com velocidade real, Wi‑Fi Premium e suporte
              24/7. Sem letras miúdas.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/planos"
                className="inline-flex items-center rounded-md bg-green-500 px-5 py-3 font-medium text-white hover:bg-green-700 cursor-pointer transition-colors"
              >
                Ver planos
              </Link>
              <a
                href="#contato"
                className="inline-flex items-center rounded-md border border-neutral-300 dark:border-white/10 bg-neutral-100/80 dark:bg-white/5 px-5 py-3 font-medium text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-white/10 cursor-pointer transition-colors"
              >
                Falar com especialista
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="aspect-[4/3] md:aspect-video rounded-2xl border border-neutral-300 dark:border-white/10 bg-neutral-100 dark:bg-black relative overflow-hidden"
          >
            {/* Widget de teste de velocidade */}
            {/* Preferencialmente use o Speedtest Custom da Ookla, se você tiver a URL do seu tenant:
                Exemplo: src="https://SEU-DOMINIO.speedtestcustom.com"
                Caso não tenha, so continue usando o OpenSpeedTest como alternativa. */}
            <div className="absolute inset-0 [backface-visibility:hidden] will-change-transform">
              <iframe
                src="https://openspeedtest.com/speedtest"
                title="Teste de velocidade da internet"
                className="h-full w-full border-0"
                allow="autoplay; fullscreen; picture-in-picture"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-white"
          >
            Por que escolher a Net7 Tecnologia?
          </motion.h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Fibra 100% óptica",
                desc: "Velocidade e estabilidade superiores com baixa latência.",
              },
              {
                title: "Suporte local 24/7",
                desc: "Atendimento por gente de verdade, quando você precisar.",
              },
              {
                title: "Wi‑Fi Premium",
                desc: "Cobertura completa e tecnologia de ponta nos roteadores.",
              },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl border border-neutral-200 bg-white p-6 cursor-pointer transform-gpu transition-shadow duration-200 hover:shadow-lg hover:border-neutral-300 hover:bg-neutral-50 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10"
              >
                <div className="h-10 w-10 rounded bg-brand-500/20 dark:bg-brand-500/40" />
                <h3 className="mt-4 text-xl font-medium text-neutral-900 dark:text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-neutral-600 dark:text-white/70">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Avaliações do Google */}
      <section className="section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-white"
          >
            O que falam sobre a Net7 Tecnologia
          </motion.h2>

          {USE_STATIC_REVIEWS ? (
            <>
              <div
                className="mt-6 grid md:grid-cols-3 gap-6"
                onMouseEnter={() => setReviewsPaused(true)}
                onMouseLeave={() => setReviewsPaused(false)}
              >
                {Array.from({ length: 3 }).map((_, colIdx) => {
                  const staticReviewNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                  const len = staticReviewNumbers.length;
                  if (!len) return null;
                  const idx = (reviewTick + colIdx) % len;
                  const reviewNumber = staticReviewNumbers[idx];
                  return (
                    <motion.div
                      key={`review-col-${colIdx}`} // Key estável por coluna
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      animate={{ opacity: 1 }}
                      whileHover={{ scale: 1.02 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: colIdx * 0.05,
                        scale: { duration: 0.3, ease: "easeOut" }, // Animação mais suave para hover
                        opacity: { duration: 0.5 },
                      }}
                      className="review-card review-card-motion rounded-xl border border-neutral-200 bg-white overflow-hidden transform-gpu transition-all duration-300 hover:shadow-lg hover:border-neutral-300 hover:bg-neutral-50 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10"
                    >
                      <a
                        href="https://www.google.com/maps"
                        target="_blank"
                        rel="noreferrer"
                        className="block review-image-container"
                      >
                        <ReviewImage
                          key={`img-${reviewNumber}`} // Key específica para a imagem
                          reviewNumber={reviewNumber}
                          alt={`Avaliação do Google ${reviewNumber}`}
                          className="review-image"
                        />
                      </a>
                      <div className="p-4">
                        <a
                          href="https://www.google.com/maps"
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm underline text-neutral-700 hover:text-neutral-900 dark:text-white/80 dark:hover:text-white transition-colors duration-200"
                        >
                          Ver mais no Google
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              <div className="mt-4 flex justify-center gap-2">
                {Array.from({ length: 9 }).map((_, i) => {
                  const len = 9;
                  const active = ((reviewTick % len) + len) % len;
                  return (
                    <button
                      key={i}
                      aria-label={`Ir para imagem ${i + 1}`}
                      onClick={() => setReviewTick(i)}
                      className={`h-2.5 w-2.5 rounded-full transition-colors ${
                        i === active
                          ? "bg-neutral-900 dark:bg-white"
                          : "bg-neutral-400/50 hover:bg-neutral-600/50 dark:bg-white/30 dark:hover:bg-white/50"
                      }`}
                    />
                  );
                })}
              </div>
            </>
          ) : reviews ? (
            <>
              <p className="mt-2 text-white/80">
                Nota geral {reviews.rating?.toFixed?.(1) ?? "-"} de{" "}
                {reviews.user_ratings_total ?? "-"} avaliações
              </p>
              <div
                className="mt-6 grid md:grid-cols-3 gap-6"
                onMouseEnter={() => setReviewsPaused(true)}
                onMouseLeave={() => setReviewsPaused(false)}
              >
                {Array.from({ length: 3 }).map((_, colIdx) => {
                  const total = reviews.reviews?.length || 0;
                  const idx = total ? (reviewTick + colIdx) % total : 0;
                  const rv = total ? reviews.reviews[idx] : undefined;
                  if (!rv) return null;
                  return (
                    <motion.blockquote
                      key={`${rv.author_name}-${idx}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      animate={{ opacity: 1 }}
                      whileHover={{ scale: 1.02 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: colIdx * 0.05 }}
                      className="rounded-xl border border-neutral-200 bg-white p-5 transform-gpu transition-shadow duration-200 hover:shadow-lg hover:border-neutral-300 hover:bg-neutral-50 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-medium text-neutral-900 dark:text-white/90">
                          {rv.author_name}
                        </p>
                        <span className="text-sm text-neutral-500 dark:text-white/60">
                          {rv.relative_time_description ?? ""}
                        </span>
                      </div>
                      <div
                        className="mt-2 text-amber-400"
                        aria-label={`Avaliação ${rv.rating} de 5`}
                      >
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <span key={idx}>{idx < rv.rating ? "★" : "☆"}</span>
                        ))}
                      </div>
                      <p className="mt-3 text-neutral-700 dark:text-white/80 line-clamp-4">
                        {rv.text}
                      </p>
                      <div className="mt-4">
                        <a
                          href={
                            reviews.url ||
                            "https://www.google.com/maps/dir//R.+Sergipe,+311+-+Sala+02+-+Centro,+Sidrol%C3%A2ndia+-+MS,+79170-000/@-20.9298762,-55.0437952,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9487af4009df0e9f:0xac807507f7688fac!2m2!1d-54.9613935!2d-20.929896?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
                          }
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm underline text-neutral-700 hover:text-neutral-900 dark:text-white/80 dark:hover:text-white"
                        >
                          Ver mais no Google
                        </a>
                      </div>
                    </motion.blockquote>
                  );
                })}
              </div>
              <p className="mt-4 text-sm text-neutral-500 dark:text-white/60">
                Fonte: Google Reviews. Exibindo amostra pública.
              </p>
            </>
          ) : reviewsError ? (
            <>
              <div className="mt-6 grid md:grid-cols-3 gap-6">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-neutral-200 bg-neutral-100 p-6 animate-pulse dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="h-4 w-2/3 bg-neutral-300 rounded dark:bg-white/10" />
                    <div className="mt-2 h-4 w-1/3 bg-neutral-300 rounded dark:bg-white/10" />
                    <div className="mt-4 h-16 bg-neutral-300 rounded dark:bg-white/10" />
                  </div>
                ))}
              </div>
              <p className="mt-3 text-sm text-neutral-500 dark:text-white/60">
                Não foi possível carregar as avaliações agora. Dica: configure
                <span className="mx-1 font-mono">GOOGLE_PLACES_API_KEY</span> e
                <span className="mx-1 font-mono">GOOGLE_PLACE_ID</span> no
                backend para ativar esta seção.
              </p>
            </>
          ) : (
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-neutral-200 bg-neutral-100 p-6 animate-pulse dark:border-white/10 dark:bg-white/5"
                >
                  <div className="h-4 w-2/3 bg-neutral-300 rounded dark:bg-white/10" />
                  <div className="mt-2 h-4 w-1/3 bg-neutral-300 rounded dark:bg-white/10" />
                  <div className="mt-4 h-16 bg-neutral-300 rounded dark:bg-white/10" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section" id="contato">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-white">
              Fale com a gente
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-white/80">
              Tire dúvidas sobre planos, cobertura e instalação. Nosso time
              responde rápido pelo WhatsApp.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-md bg-emerald-500 px-5 py-3 font-medium hover:bg-emerald-600"
              >
                WhatsApp Comercial
              </a>
              <Link
                to="/suporte"
                className="inline-flex items-center rounded-md border px-5 py-3 font-medium border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                Suporte
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
            <form
              action="mailto:vendas@link.com"
              method="post"
              className="grid gap-4"
            >
              <input
                className="rounded-md px-4 py-3 outline-none border bg-white border-neutral-300 text-neutral-900 placeholder-neutral-500 dark:bg-black/40 dark:border-white/10 dark:text-white dark:placeholder-white/50"
                placeholder="Seu nome"
                required
              />
              <input
                className="rounded-md px-4 py-3 outline-none border bg-white border-neutral-300 text-neutral-900 placeholder-neutral-500 dark:bg-black/40 dark:border-white/10 dark:text-white dark:placeholder-white/50"
                placeholder="Seu telefone"
                required
              />
              <textarea
                className="rounded-md px-4 py-3 outline-none border bg-white border-neutral-300 text-neutral-900 placeholder-neutral-500 dark:bg-black/40 dark:border-white/10 dark:text-white dark:placeholder-white/50"
                placeholder="Como podemos ajudar?"
                rows={4}
              />
              <button className="rounded-md bg-brand-500 px-5 py-3 font-medium hover:bg-brand-600">
                Enviar
              </button>
              <p className="text-sm text-neutral-500 dark:text-white/60">
                Em breve: envio para nosso sistema com protocolo.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function EchoProjectPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-8 md:py-10">
        <Link href="/" className="text-xs text-emerald-300 hover:underline">
          ← Back to portfolio
        </Link>

        <header className="mt-4">
          <h1 className="text-2xl font-semibold tracking-tight">
            ECHO – AI-Based Hearing Health Application
          </h1>
          <p className="mt-1 text-sm text-emerald-300">
            T-Hub Incubated · WSA Mentored · Game-Based Audiometry
          </p>
        </header>

        <section className="mt-4 text-sm text-slate-200">
          <p>
            ECHO is an AI-powered hearing health platform that uses interactive
            Unity mini-games to run calibrated audiometry tests and generate
            clinician-friendly reports.
          </p>
        </section>

        {/* Screenshots */}
        <section className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
            <Image
              src="/projects/echo-1.png"
              alt="ECHO game-based test screen"
              width={800}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
            <Image
              src="/projects/echo-2.png"
              alt="ECHO results / report UI"
              width={800}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Key Contributions
          </h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
            <li>
              Engineered Unity-powered game mechanics that form the core of the
              3-level audiometry test flow.
            </li>
            <li>
              Implemented air-conduction test logic, signal/data handling, and
              ML-driven diagnostic analysis.
            </li>
            <li>
              Built backend workflows for result storage and automated report
              generation.
            </li>
          </ul>
        </section>

        <section className="mt-6 flex flex-wrap gap-4 text-xs">
          <div>
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Tech Stack
            </h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {["Unity", "C#", "Python", "Machine Learning", "REST APIs"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full bg-slate-800 px-2.5 py-1 text-[0.7rem]"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>
          {/* add real GitHub link if you have it */}
          {/* <Link ...>View on GitHub ↗</Link> */}
        </section>
      </div>
    </main>
  );
}

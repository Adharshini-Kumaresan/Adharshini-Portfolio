import Image from "next/image";
import Link from "next/link";

export default function PabrcProjectPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100">
            <div className="mx-auto max-w-4xl px-4 py-8 md:py-10">
                <Link href="/" className="text-xs text-emerald-300 hover:underline">
                    ← Back to portfolio
                </Link>

                <header className="mt-4">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        PABRC-DT – Predictive Ride Comfort Digital Twin
                    </h1>
                    <p className="mt-1 text-sm text-emerald-300">
                        Vehicle Dynamics · Human Biodynamics · Comfort Modeling
                    </p>
                </header>

                <section className="mt-4 text-sm text-slate-200">
                    <p>
                        PABRC-DT is a predictive ride comfort engine that combines 7-DOF
                        vehicle dynamics with 10-DOF human biodynamics to estimate comfort
                        levels in passive suspension vehicles.
                    </p>
                </section>

                <section className="mt-6">
                    <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                        Key Contributions
                    </h2>
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                        <li>
                            Implemented core comfort index calculations using coupled vehicle–
                            human models.
                        </li>
                        <li>
                            Developed ML-based road profile classification from simulated and
                            processed signals.
                        </li>
                        <li>
                            Explored digital twin concepts for future real-time comfort
                            prediction and suspension tuning.
                        </li>
                    </ul>
                </section>

                <section className="mt-6 flex flex-wrap gap-4 text-xs">
                    <div>
                        <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-400">
                            Tech Stack
                        </h3>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                            {["Python", "Machine Learning", "Simulation", "Signal Processing"].map(
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
                </section>
            </div>
        </main>
    );
}

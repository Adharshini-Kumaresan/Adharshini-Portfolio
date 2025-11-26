"use client";

import Link from "next/link";

const LINKS = {
  email: "mailto:kcadharshini@gmail.com",
  github: "https://github.com/Adharshini-Kumaresan",
  linkedin: "https://www.linkedin.com/in/adharshini-kumaresan/",
  kaggle: "https://www.kaggle.com/adharshinikumar",
  resume: "/Adharshini-Resume.pdf", // put your PDF into /public with this name
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100">
      <div className="mx-auto max-w-5xl px-4 py-10 md:py-14">
        {/* NAV / HERO */}
        <header className="flex flex-col gap-4 border-b border-slate-800 pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">
              Adharshini K
            </h1>
            <p className="mt-1 text-sm text-slate-300">
              Software Engineering Student · AI/ML &amp; Full-Stack Developer ·
              T-Hub Incubated Innovator
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Madurai, Tamil Nadu · English, Tamil
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs md:text-sm">
            <Link
              href={LINKS.resume}
              className="rounded-full border border-emerald-400 px-4 py-1.5 text-emerald-300 hover:bg-emerald-400 hover:text-slate-950 transition"
            >
              Download Resume
            </Link>
            <Link
              href={LINKS.github}
              className="rounded-full border border-slate-600 px-3 py-1.5 hover:bg-slate-800"
            >
              GitHub
            </Link>
            <Link
              href={LINKS.linkedin}
              className="rounded-full border border-slate-600 px-3 py-1.5 hover:bg-slate-800"
            >
              LinkedIn
            </Link>
            <Link
              href={LINKS.kaggle}
              className="rounded-full border border-slate-600 px-3 py-1.5 hover:bg-slate-800"
            >
              Kaggle
            </Link>
          </div>
        </header>

        {/* SUMMARY + QUICK FACTS */}
        <section className="mt-6 grid gap-6 md:grid-cols-[3fr,2fr] md:items-start">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Summary
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              Computer Science Engineering student with multi-disciplinary
              expertise across full-stack development, AI/ML engineering, game
              development, and geospatial analytics. Skilled in building scalable
              systems, REST API integrations, and interactive applications using
              Java, Python, JavaScript, and modern frameworks. Experienced in
              delivering end-to-end products—from architecture and UI/UX to ML
              pipelines and backend workflows—across healthtech, mobility,
              disaster management, and emerging technology domains. Strong
              problem-solver with a track record of rapid prototyping,
              cross-functional collaboration, and developing real-world,
              user-centered solutions.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-xs text-slate-300">
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Quick Facts
            </h3>
            <ul className="mt-2 space-y-1.5">
              <li>🎓 B.E CSE · PSNA · CGPA 8.02</li>
              <li>🏥 ECHO hearing-health platform · T-Hub &amp; WSA mentored</li>
              <li>🚗 Predictive ride comfort digital twin (PABRC-DT)</li>
              <li>🌊 CoastalVision · Coastal flood &amp; erosion analytics</li>
              <li>🕹 Unity × Google Play Game Dev Cohort · Top 500 India</li>
            </ul>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Experience
          </h2>
          <div className="mt-4 space-y-5">
            <ExperienceCard
              title="Incubation Mentee – HealthTech & AI (Product Lead)"
              org="T-Hub Innovation Hub & WSA Audiology"
              time="Jun 2025 – Present · Hyderabad, Telangana"
              bullets={[
                "Selected by T-Hub and WSA Audiology (140+ year hearing-technology leader) to lead AI-based hearing-health assessment development.",
                "Collaborate with clinicians and domain experts to refine audiometry accuracy, user flow, and overall test reliability.",
                "Present prototypes, technical architecture, and user insights during structured incubation reviews.",
              ]}
            />
            <ExperienceCard
              title="Founder & Lead AI/Software Developer"
              org="Evara Innovations"
              time="Jan 2025 – Present · Madurai, Tamil Nadu"
              bullets={[
                "Founded a multi-project initiative building AI-driven solutions in healthtech, mobility, and geospatial intelligence.",
                "Manage full product lifecycle including research, UI/UX, architecture, ML model development, testing, and deployment using Agile practices.",
                "Deliver rapid prototypes for national innovation challenges under tight timelines and evolving requirements.",
              ]}
            />
          </div>
        </section>

        {/* PROJECTS */}
        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Projects
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <ProjectCard
              title="ECHO – AI-Based Hearing Health Application"
              subtitle="T-Hub Incubated · WSA Mentored · HealthTech"
              bullets={[
                "Engineered core game-based audiometry tests in Unity, designing interactive mechanics that form the heart of ECHO’s hearing assessment logic.",
                "Built a 3-level air-conduction test flow with custom logic, ML-driven diagnostic analysis, and automated report generation.",
                "Developed end-to-end architecture including UI/UX flow, data handling pipelines, and backend result storage.",
              ]}
              stack="Unity, C#, Python, ML, REST APIs"
              href="/projects/echo"
            />

            <ProjectCard
              title="PABRC-DT – Predictive Ride Comfort Digital Twin"
              subtitle="Digital Twin · Vehicle & Human Dynamics"
              bullets={[
                "Developed a predictive comfort engine integrating 7-DOF vehicle dynamics with 10-DOF human biodynamics modelling.",
                "Designed ML-based road profile classification and real-time comfort prediction modules.",
              ]}
              stack="Python, ML, Simulation, Signal Processing"
              href="/projects/pabrc-dt"
            />

            <ProjectCard
              title="CoastalVision – Coastal Flood & Erosion Prediction"
              subtitle="Geospatial Intelligence · Climate Risk"
              bullets={[
                "Implemented geospatial analysis using ArcGIS to model coastal hazard prediction and risk assessment.",
                "Developed ML models for shoreline movement tracking, flood zone mapping, and erosion risk detection.",
              ]}
              stack="ArcGIS, Python, ML, Spatial Analytics"
              href="/projects/coastalvision"
            />

            <ProjectCard
              title="Unity × Google Play Game Development Cohort"
              subtitle="Game Development · Interactive Systems"
              bullets={[
                "Selected for Unity × Google Play Game Development Cohort (Top 500 in India).",
                "Built gameplay prototypes focusing on core mechanics, responsiveness, and player experience.",
              ]}
              stack="Unity, C#, Game Design"
              href="/projects/unity-game"
            />

          </div>
        </section>

        {/* SKILLS */}
        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Skills
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <SkillGroup
              label="Programming Languages"
              items={["Java", "Python", "JavaScript", "C#"]}
            />
            <SkillGroup
              label="Software Engineering"
              items={[
                "Object-Oriented Programming (OOP)",
                "Data Structures & Algorithms (DSA)",
                "Agile/Scrum",
                "System & API Design",
                "Rapid Prototyping",
                "Problem Solving",
              ]}
            />
            <SkillGroup
              label="Web & App Development"
              items={[
                "React.js",
                "HTML",
                "CSS",
                "Tailwind CSS",
                "REST APIs",
                "Full-Stack Architecture",
              ]}
            />
            <SkillGroup
              label="AI, ML & Data Intelligence"
              items={[
                "Machine Learning",
                "Deep Learning",
                "TensorFlow",
                "Scikit-Learn",
                "Predictive Modeling",
                "Data Preprocessing",
                "Signal Processing",
                "Model Evaluation",
              ]}
            />
            <SkillGroup
              label="Cloud & DevOps"
              items={[
                "Google Cloud Platform (GCP)",
                "Git",
                "GitHub",
                "Docker",
                "CI/CD",
              ]}
            />
            <SkillGroup
              label="Geospatial & Tools"
              items={[
                "ArcGIS",
                "Spatial Data Analysis",
                "Geospatial Visualization",
                "VS Code",
                "Unity",
                "Postman",
                "Jupyter Notebook",
                "Figma (UI/UX)",
              ]}
            />
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Achievements
          </h2>
          <p className="mt-3 text-sm text-slate-200">
            Selected for Unity × Google Play Game Development Cohort (Top 500
            India), Shortlisted for YUKTI National Innovation Challenge 2025,
            State-Level SpellBee Champion (National-Level Qualifier), HackXtreme
            2025 Winner, Ignitia 2025 Winner, 24-Hour Hackathon Winner, TECHgium®
            2025 Round-2 Qualifier.
          </p>
        </section>

        {/* EDUCATION & CONTACT */}
        <section className="mt-10 grid gap-6 border-t border-slate-800 pt-6 md:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Education
            </h2>
            <div className="mt-3 text-sm text-slate-200">
              <p className="font-medium">
                PSNA College of Engineering and Technology
              </p>
              <p>B.E – Computer Science and Engineering</p>
              <p>CGPA: 8.02 · 2023 – 2027</p>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Contact
            </h2>
            <div className="mt-3 space-y-1 text-sm text-slate-200">
              <p>
                Email:{" "}
                <Link
                  href={LINKS.email}
                  className="text-emerald-300 hover:underline"
                >
                  kcadharshini@gmail.com
                </Link>
              </p>
              <p>
                LinkedIn:{" "}
                <Link
                  href={LINKS.linkedin}
                  className="text-emerald-300 hover:underline"
                >
                  linkedin.com/in/adharshini-kumaresan
                </Link>
              </p>
              <p>
                GitHub:{" "}
                <Link
                  href={LINKS.github}
                  className="text-emerald-300 hover:underline"
                >
                  github.com/Adharshini-Kumaresan
                </Link>
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-8 border-t border-slate-900 pt-4 text-xs text-slate-500">
          Built by Adharshini K · {new Date().getFullYear()}
        </footer>
      </div>
    </main>
  );
}

type ExperienceProps = {
  title: string;
  org: string;
  time: string;
  bullets: string[];
};

function ExperienceCard({ title, org, time, bullets }: ExperienceProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
      <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
        <div>
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="text-xs text-slate-300">{org}</p>
        </div>
        <p className="text-[0.7rem] text-slate-400">{time}</p>
      </div>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-slate-200">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

type ProjectProps = {
  title: string;
  subtitle: string;
  bullets: string[];
  stack: string;
};

function ProjectCard({ title, subtitle, bullets, stack }: ProjectProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
      <div>
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-xs text-slate-300">{subtitle}</p>
      </div>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-slate-200">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <p className="mt-3 text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
        {stack}
      </p>
    </div>
  );
}

type SkillGroupProps = {
  label: string;
  items: string[];
};

function SkillGroup({ label, items }: SkillGroupProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
        {label}
      </h3>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-800 px-2.5 py-1 text-[0.7rem] text-slate-100"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

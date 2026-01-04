import { ArrowRight, Brain, Database, Cpu } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-neutral-950 text-neutral-100 min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-32">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
          AI Systems Built for Real-World Complexity
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-neutral-300">
          intelligencecore designs and deploys production-grade AI and data
          systems for organizations operating in complex, high-stakes
          environments.
        </p>
        <div className="mt-10 flex gap-4">
          <a
            href="#contact"
            className="rounded-xl bg-white text-neutral-900 px-6 py-3 font-medium flex items-center gap-2"
          >
            Book a Consultation <ArrowRight size={18} />
          </a>
          <a
            href="#capabilities"
            className="rounded-xl border border-neutral-700 px-6 py-3 text-neutral-200"
          >
            Capabilities
          </a>
        </div>
      </section>

      <section className="border-y border-neutral-800 py-8 text-center text-neutral-400">
        Engineering standards inspired by CERN & MIT
      </section>

      <section
        id="capabilities"
        className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-3 gap-8"
      >
        <Card
          icon={<Brain />}
          title="AI Knowledge Systems"
          text="Private RAG-based assistants trained on your internal data."
        />
        <Card
          icon={<Database />}
          title="Data Platforms"
          text="Scalable, reliable data pipelines ready for analytics and AI."
        />
        <Card
          icon={<Cpu />}
          title="Predictive Intelligence"
          text="Anomaly detection and forecasting for early risk detection."
        />
      </section>
    </main>
  );
}

function Card({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-xl border border-neutral-800 p-8 bg-neutral-900">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="mt-3 text-neutral-400">{text}</p>
    </div>
  );
}


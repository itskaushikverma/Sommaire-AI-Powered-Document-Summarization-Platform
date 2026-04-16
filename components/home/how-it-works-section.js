import { BrainCircuit, FileOutput, FileText, MoveRight } from 'lucide-react';
import { MotionH2, MotionH3, MotionDiv } from '../common/motion-wrapper';

const steps = [
  {
    icon: <FileText size={64} strokeWidth={1.5} />,
    label: 'Upload your PDF',
    description: 'Simply drag and drop your PDF document or click to upload',
  },
  {
    icon: <BrainCircuit size={64} strokeWidth={1.5} />,
    label: 'AI Analysis ✨',
    description: 'Our advanced AI processes and analyzes your document instantly',
  },
  {
    icon: <FileOutput size={64} strokeWidth={1.5} />,
    label: 'Get Summary',
    description: 'Receive a clear, concise summary of your document',
  },
];

export default function HowitworksSection() {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            className="relative left-[calc(50%-3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-br from-emerald-500 via-teal-500 to-cyan-500 opacity-20 sm:left-[calc(40%-30rem)] sm:w-[40.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className="mb-16 text-center">
          <MotionH2
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-xl font-bold text-rose-500 uppercase"
          >
            How it works
          </MotionH2>
          <MotionH3
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-3xl font-bold"
          >
            Transform any PDF into an easy-to-digest summary in three simple steps
          </MotionH3>
        </div>

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, idx) => (
            <MotionDiv
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative flex items-stretch"
              key={idx}
            >
              <StepItem {...step} />
              {idx < steps.length - 1 && (
                <MotionDiv
                  viewport={{ once: true }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 + 0.3 }}
                  className="absolute top-1/2 -right-4 z-10 hidden -translate-y-1/2 transform md:block"
                >
                  <MoveRight size={32} strokeWidth={1} className="text-rose-400" />
                </MotionDiv>
              )}
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepItem({ icon, label, description }) {
  return (
    <div className="group relative w-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs transition-colors hover:border-rose-500/50">
      <div className="flex h-full flex-col gap-4">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-linear-to-br from-rose-500/10 to-transparent transition-colors group-hover:from-rose-500/20">
          <div className="text-rose-500">{icon}</div>
        </div>
        <div className="flex flex-1 flex-col justify-between gap-1">
          <h4 className="text-center text-xl font-bold">{label}</h4>
          <p className="text-center text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

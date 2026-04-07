interface Step {
  number: number;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  steps: Step[];
}

const ProcessSection = ({ steps }: ProcessSectionProps) => (
  <section className="py-20 px-6 bg-muted/50">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold uppercase tracking-wider text-secondary">How It Works</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Our Process</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div key={step.number} className="bg-card rounded-xl p-6 shadow-card relative">
            <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-bold text-sm mb-4">
              {step.number}
            </div>
            <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;

export const ContentBefore = () => (
  <div className="p-5 bg-muted/50 space-y-3">
    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Original Draft</div>
    <div className="bg-card rounded-lg p-4 border border-border">
      <p className="text-sm text-muted-foreground leading-relaxed">
        "We sell good software that helps businesses do stuff better. Our product has many features and
        is used by lots of companies. If you want to make your work easier you should try our tool.
        Contact us to learn more about what we do and how we can help you."
      </p>
    </div>
    <div className="flex gap-2">
      <span className="text-xs bg-before px-2 py-1 rounded text-before-accent">❌ Vague</span>
      <span className="text-xs bg-before px-2 py-1 rounded text-before-accent">❌ No hook</span>
      <span className="text-xs bg-before px-2 py-1 rounded text-before-accent">❌ Generic</span>
    </div>
  </div>
);

export const ContentAfter = () => (
  <div className="p-5 space-y-4">
    <div className="text-xs font-semibold text-after-accent uppercase tracking-wider">AI-Enhanced Versions</div>
    
    <div className="bg-card rounded-lg p-4 border border-after-accent/20">
      <span className="text-xs bg-accent px-2 py-0.5 rounded-full text-accent-foreground font-medium">Formal</span>
      <p className="text-sm text-foreground mt-2 leading-relaxed">
        "Our enterprise-grade platform empowers organizations to optimize operational efficiency,
        reducing workflow bottlenecks by up to 40%. Trusted by 500+ businesses worldwide."
      </p>
    </div>

    <div className="bg-card rounded-lg p-4 border border-after-accent/20">
      <span className="text-xs bg-secondary/20 px-2 py-0.5 rounded-full text-secondary font-medium">Persuasive</span>
      <p className="text-sm text-foreground mt-2 leading-relaxed">
        "Stop losing 10+ hours a week on manual tasks. Join 500+ companies that have transformed
        their productivity with our intelligent automation platform. Start your free trial today."
      </p>
    </div>

    <div className="bg-card rounded-lg p-4 border border-after-accent/20">
      <span className="text-xs bg-primary/10 px-2 py-0.5 rounded-full text-primary font-medium">Simplified</span>
      <p className="text-sm text-foreground mt-2 leading-relaxed">
        "Work smarter, not harder. Our tool automates repetitive tasks so you can focus on what
        matters most — growing your business."
      </p>
    </div>
  </div>
);

const beforeNotes = [
  "found some tool online - competitor maybe?",
  "https://sometool.com - looks interesting",
  "john mentioned a CRM yesterday check it",
  "AI tool for email?? look up later",
  "there was a blog post about automation...",
  "pricing page - screenshot somewhere",
];

const afterData = [
  { name: "HubSpot CRM", category: "CRM", description: "All-in-one CRM platform for sales, marketing & service", link: "hubspot.com", rating: "⭐⭐⭐⭐⭐" },
  { name: "Jasper AI", category: "AI Writing", description: "AI content generation for marketing teams", link: "jasper.ai", rating: "⭐⭐⭐⭐" },
  { name: "Zapier", category: "Automation", description: "Workflow automation connecting 5000+ apps", link: "zapier.com", rating: "⭐⭐⭐⭐⭐" },
  { name: "Mailchimp", category: "Email", description: "Email marketing & automation platform", link: "mailchimp.com", rating: "⭐⭐⭐⭐" },
  { name: "Monday.com", category: "Project Mgmt", description: "Visual project management & team collaboration", link: "monday.com", rating: "⭐⭐⭐⭐" },
];

export const ResearchBefore = () => (
  <div className="p-4 space-y-2 bg-muted/50">
    <div className="text-xs font-mono text-muted-foreground mb-3">📝 notes.txt</div>
    {beforeNotes.map((note, i) => (
      <div key={i} className="text-xs text-muted-foreground font-mono pl-2 border-l-2 border-before-accent/40 py-1">
        {note}
      </div>
    ))}
  </div>
);

export const ResearchAfter = () => (
  <div className="overflow-x-auto">
    <table className="w-full text-left">
      <thead>
        <tr className="bg-after/60">
          {["Tool", "Category", "Description", "Rating"].map((h) => (
            <th key={h} className="px-3 py-2 text-xs font-semibold text-after-accent border border-after-accent/20">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {afterData.map((row, i) => (
          <tr key={i} className="hover:bg-after/20 transition-colors">
            <td className="px-3 py-2 text-xs font-medium text-foreground border border-after-accent/20">{row.name}</td>
            <td className="px-3 py-2 border border-after-accent/20">
              <span className="text-xs bg-accent px-2 py-0.5 rounded-full text-accent-foreground">{row.category}</span>
            </td>
            <td className="px-3 py-2 text-xs text-muted-foreground border border-after-accent/20">{row.description}</td>
            <td className="px-3 py-2 text-xs border border-after-accent/20">{row.rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

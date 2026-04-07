import { Circle, CheckCircle2, Clock, AlertTriangle } from "lucide-react";

const beforeTasks = [
  "call john about the project",
  "send email",
  "update website maybe?",
  "meeting notes from last week",
  "fix that bug",
  "order supplies",
  "review document",
  "follow up with client",
];

const afterTasks = [
  { task: "Fix checkout bug", priority: "High", status: "Done", category: "Development", icon: <CheckCircle2 className="h-4 w-4 text-after-accent" /> },
  { task: "Call John — Project Scope", priority: "High", status: "Done", category: "Communication", icon: <CheckCircle2 className="h-4 w-4 text-after-accent" /> },
  { task: "Send Q4 report to client", priority: "High", status: "In Progress", category: "Reports", icon: <Clock className="h-4 w-4 text-warning" /> },
  { task: "Review NDA document", priority: "Medium", status: "In Progress", category: "Legal", icon: <Clock className="h-4 w-4 text-warning" /> },
  { task: "Update landing page copy", priority: "Medium", status: "To Do", category: "Marketing", icon: <Circle className="h-4 w-4 text-muted-foreground" /> },
  { task: "Order office supplies", priority: "Low", status: "To Do", category: "Operations", icon: <Circle className="h-4 w-4 text-muted-foreground" /> },
];

const priorityColor: Record<string, string> = {
  High: "bg-before text-before-accent",
  Medium: "bg-accent text-accent-foreground",
  Low: "bg-muted text-muted-foreground",
};

export const TaskBefore = () => (
  <div className="p-4 space-y-2 bg-muted/50">
    <div className="text-xs font-mono text-muted-foreground mb-2">📋 to-do.txt</div>
    {beforeTasks.map((t, i) => (
      <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
        <span className="text-muted-foreground">-</span>
        <span>{t}</span>
      </div>
    ))}
  </div>
);

export const TaskAfter = () => (
  <div className="divide-y divide-after-accent/10">
    {afterTasks.map((t, i) => (
      <div key={i} className="flex items-center gap-3 px-4 py-3">
        {t.icon}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-medium text-foreground">{t.task}</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${priorityColor[t.priority]}`}>{t.priority}</span>
            <span className="text-[10px] text-muted-foreground">{t.category}</span>
          </div>
        </div>
        <span className={`text-[10px] font-medium ${t.status === "Done" ? "text-after-accent" : t.status === "In Progress" ? "text-warning" : "text-muted-foreground"}`}>
          {t.status}
        </span>
      </div>
    ))}
  </div>
);

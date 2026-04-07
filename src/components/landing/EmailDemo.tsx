import { Mail, AlertCircle, HelpCircle, ShieldAlert } from "lucide-react";

const beforeEmails = [
  { from: "Mike T.", subject: "URGENT!! Need help with order", time: "2h ago" },
  { from: "Newsletter", subject: "50% OFF everything!!!", time: "3h ago" },
  { from: "Sarah K.", subject: "Question about pricing", time: "5h ago" },
  { from: "Promo", subject: "You won a free iPhone!!", time: "6h ago" },
  { from: "Client A", subject: "Invoice #4521 attached", time: "8h ago" },
  { from: "HR Dept", subject: "Team meeting tomorrow", time: "1d ago" },
  { from: "David L.", subject: "Re: Project update needed", time: "1d ago" },
];

const afterEmails = [
  { from: "Mike T.", subject: "URGENT!! Need help with order", tag: "Support", tagColor: "bg-before text-before-accent", icon: <AlertCircle className="h-3 w-3" />, response: "Drafted priority response" },
  { from: "Sarah K.", subject: "Question about pricing", tag: "Inquiry", tagColor: "bg-accent text-accent-foreground", icon: <HelpCircle className="h-3 w-3" />, response: "Sent pricing sheet" },
  { from: "Client A", subject: "Invoice #4521 attached", tag: "Billing", tagColor: "bg-secondary/20 text-secondary", icon: <Mail className="h-3 w-3" />, response: "Filed & confirmed receipt" },
  { from: "David L.", subject: "Re: Project update needed", tag: "Follow-up", tagColor: "bg-accent text-accent-foreground", icon: <Mail className="h-3 w-3" />, response: "Scheduled callback" },
];

const spamFiltered = [
  { from: "Newsletter", subject: "50% OFF everything!!!" },
  { from: "Promo", subject: "You won a free iPhone!!" },
];

export const EmailBefore = () => (
  <div className="divide-y divide-border">
    {beforeEmails.map((e, i) => (
      <div key={i} className="flex items-center gap-3 px-4 py-3 hover:bg-muted/50">
        <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-foreground">{e.from}</span>
            <span className="text-xs text-muted-foreground">{e.time}</span>
          </div>
          <p className="text-xs text-muted-foreground truncate">{e.subject}</p>
        </div>
      </div>
    ))}
  </div>
);

export const EmailAfter = () => (
  <div>
    <div className="divide-y divide-after-accent/10">
      {afterEmails.map((e, i) => (
        <div key={i} className="flex items-center gap-3 px-4 py-3">
          <div className="shrink-0">{e.icon}</div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-medium text-foreground">{e.from}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${e.tagColor}`}>{e.tag}</span>
            </div>
            <p className="text-xs text-muted-foreground truncate">{e.subject}</p>
            <p className="text-[10px] text-after-accent mt-0.5">✓ {e.response}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="border-t border-border px-4 py-2 bg-muted/30">
      <div className="flex items-center gap-1 text-[10px] text-muted-foreground mb-1">
        <ShieldAlert className="h-3 w-3" /> Filtered as Spam ({spamFiltered.length})
      </div>
      {spamFiltered.map((e, i) => (
        <p key={i} className="text-[10px] text-muted-foreground line-through pl-4">{e.from}: {e.subject}</p>
      ))}
    </div>
  </div>
);

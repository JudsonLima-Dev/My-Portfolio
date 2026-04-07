const beforeData = [
  ["John doe", "johndoe@email", "new york", "2024/1/5", ""],
  ["JANE SMITH", "jane.smith@gmail.com", "los angeles", "", "Gold"],
  ["bob wilson", "", "chicago, IL", "01-15-2024", "silver"],
  ["john doe", "johndoe@email", "New York", "2024-01-05", "Bronze"],
  ["Alice Brown", "alice", "SF", "Jan 2024", "gold"],
  ["", "unknown@test.com", "", "2024", ""],
];

const afterData = [
  ["Alice Brown", "alice.brown@email.com", "San Francisco, CA", "2024-01-10", "Gold"],
  ["Bob Wilson", "bob.wilson@email.com", "Chicago, IL", "2024-01-15", "Silver"],
  ["Jane Smith", "jane.smith@gmail.com", "Los Angeles, CA", "2024-01-08", "Gold"],
  ["John Doe", "john.doe@email.com", "New York, NY", "2024-01-05", "Bronze"],
];

const headers = ["Name", "Email", "Location", "Date", "Tier"];

const CellBefore = ({ value }: { value: string }) => (
  <td className={`px-3 py-2 text-xs border border-border ${!value ? "bg-before/50" : ""}`}>
    {value || <span className="text-before-accent italic">empty</span>}
  </td>
);

const CellAfter = ({ value }: { value: string }) => (
  <td className="px-3 py-2 text-xs border border-after-accent/20">{value}</td>
);

export const SpreadsheetBefore = () => (
  <div className="overflow-x-auto">
    <table className="w-full text-left">
      <thead>
        <tr className="bg-muted">
          {headers.map((h) => (
            <th key={h} className="px-3 py-2 text-xs font-semibold text-muted-foreground border border-border">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {beforeData.map((row, i) => (
          <tr key={i} className={i === 3 ? "bg-before/30" : ""}>
            {row.map((cell, j) => <CellBefore key={j} value={cell} />)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const SpreadsheetAfter = () => (
  <div className="overflow-x-auto">
    <table className="w-full text-left">
      <thead>
        <tr className="bg-after/60">
          {headers.map((h) => (
            <th key={h} className="px-3 py-2 text-xs font-semibold text-after-accent border border-after-accent/20">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {afterData.map((row, i) => (
          <tr key={i} className="hover:bg-after/20 transition-colors">
            {row.map((cell, j) => <CellAfter key={j} value={cell} />)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

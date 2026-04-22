import { useMemo, useState } from "react";
import {
  Field,
  ToolShell,
  formatCurrency,
  inputClass,
} from "@/components/ToolShell";
import { findTool } from "@/data/tools";

type ExpenseRow = { id: number; label: string; amount: string };

const DEFAULT_ROWS: ExpenseRow[] = [
  { id: 1, label: "Rent / workspace", amount: "" },
  { id: 2, label: "Software & subscriptions", amount: "" },
  { id: 3, label: "Marketing", amount: "" },
  { id: 4, label: "Supplies", amount: "" },
  { id: 5, label: "Contractors / payroll", amount: "" },
];

export default function BudgetTool() {
  const [income, setIncome] = useState("");
  const [rows, setRows] = useState<ExpenseRow[]>(DEFAULT_ROWS);

  const updateRow = (id: number, key: keyof ExpenseRow, value: string) => {
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [key]: value } : r)),
    );
  };

  const addRow = () => {
    setRows((prev) => [...prev, { id: Date.now(), label: "", amount: "" }]);
  };

  const removeRow = (id: number) => {
    setRows((prev) => prev.filter((r) => r.id !== id));
  };

  const totals = useMemo(() => {
    const incomeNum = parseFloat(income) || 0;
    const totalExpenses = rows.reduce(
      (sum, r) => sum + (parseFloat(r.amount) || 0),
      0,
    );
    const remaining = incomeNum - totalExpenses;
    const margin = incomeNum > 0 ? (remaining / incomeNum) * 100 : 0;
    return { incomeNum, totalExpenses, remaining, margin };
  }, [income, rows]);

  return (
    <ToolShell
      title="Budgeting Tool"
      description="Enter your monthly income and expenses below. Totals update automatically."
      relatedSlugs={findTool("budget")?.relatedSlugs}
      toolSlug="budget"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-sm font-medium uppercase tracking-widest text-slate-500 mb-3">
            Income
          </h2>
          <Field label="Monthly income">
            <input
              type="number"
              min="0"
              step="0.01"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              placeholder="0.00"
              className={inputClass}
            />
          </Field>
        </section>

        <section>
          <h2 className="text-sm font-medium uppercase tracking-widest text-slate-500 mb-3">
            Expenses
          </h2>
          <div className="space-y-3">
            {rows.map((r) => (
              <div key={r.id} className="flex gap-2 items-start">
                <input
                  type="text"
                  value={r.label}
                  onChange={(e) => updateRow(r.id, "label", e.target.value)}
                  placeholder="Category or description"
                  className={`${inputClass} flex-1`}
                />
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={r.amount}
                  onChange={(e) => updateRow(r.id, "amount", e.target.value)}
                  placeholder="0.00"
                  className={`${inputClass} w-32`}
                />
                <button
                  type="button"
                  onClick={() => removeRow(r.id)}
                  className="px-2 py-2 text-sm text-slate-400 hover:text-slate-700"
                  aria-label="Remove row"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={addRow}
            className="mt-3 text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            + Add expense
          </button>
        </section>

        <section className="rounded-lg border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-sm font-medium uppercase tracking-widest text-slate-500 mb-4">
            Summary
          </h2>
          <dl className="space-y-3">
            <Row label="Total income" value={formatCurrency(totals.incomeNum)} />
            <Row
              label="Total expenses"
              value={formatCurrency(totals.totalExpenses)}
            />
            <Row
              label="Remaining profit"
              value={formatCurrency(totals.remaining)}
              emphasis
              negative={totals.remaining < 0}
            />
            <Row
              label="Savings margin"
              value={`${totals.margin.toFixed(1)}%`}
              negative={totals.margin < 0}
            />
          </dl>
        </section>
      </div>
    </ToolShell>
  );
}

function Row({
  label,
  value,
  emphasis,
  negative,
}: {
  label: string;
  value: string;
  emphasis?: boolean;
  negative?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between border-b border-slate-200 last:border-0 pb-2 last:pb-0">
      <dt className="text-sm text-slate-600">{label}</dt>
      <dd
        className={`tabular-nums ${
          emphasis ? "text-lg font-semibold" : "text-sm font-medium"
        } ${negative ? "text-red-600" : "text-slate-900"}`}
      >
        {value}
      </dd>
    </div>
  );
}

import { useMemo, useState } from "react";
import {
  Field,
  ToolShell,
  formatCurrency,
  inputClass,
} from "@/components/ToolShell";
import { findTool } from "@/data/tools";

type Category = "operations" | "marketing" | "supplies" | "other";

type Expense = {
  id: number;
  name: string;
  amount: number;
  category: Category;
};

const CATEGORIES: { value: Category; label: string }[] = [
  { value: "operations", label: "Operations" },
  { value: "marketing", label: "Marketing" },
  { value: "supplies", label: "Supplies" },
  { value: "other", label: "Other" },
];

export default function ExpensesTool() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState<Category>("operations");
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const add = () => {
    const amt = parseFloat(amount);
    if (!name.trim() || !isFinite(amt) || amt <= 0) return;
    setExpenses((prev) => [
      ...prev,
      { id: Date.now(), name: name.trim(), amount: amt, category },
    ]);
    setName("");
    setAmount("");
  };

  const remove = (id: number) =>
    setExpenses((prev) => prev.filter((e) => e.id !== id));

  const totals = useMemo(() => {
    const byCat: Record<Category, number> = {
      operations: 0,
      marketing: 0,
      supplies: 0,
      other: 0,
    };
    for (const e of expenses) byCat[e.category] += e.amount;
    const grand = expenses.reduce((s, e) => s + e.amount, 0);
    return { byCat, grand };
  }, [expenses]);

  return (
    <ToolShell
      title="Expense Categorizer"
      description="Add expenses one at a time. Totals by category update as you add them."
      relatedSlugs={findTool("expenses")?.relatedSlugs}
    >
      <div className="space-y-8">
        <section className="rounded-lg border border-slate-200 p-5">
          <h2 className="text-sm font-medium uppercase tracking-widest text-slate-500 mb-4">
            Add an expense
          </h2>
          <div className="grid sm:grid-cols-[1fr_140px_180px_auto] gap-3 items-end">
            <Field label="Expense name">
              <input
                className={inputClass}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Web hosting"
                onKeyDown={(e) => e.key === "Enter" && add()}
              />
            </Field>
            <Field label="Amount">
              <input
                type="number"
                min="0"
                step="0.01"
                className={inputClass}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                onKeyDown={(e) => e.key === "Enter" && add()}
              />
            </Field>
            <Field label="Category">
              <select
                className={inputClass}
                value={category}
                onChange={(e) => setCategory(e.target.value as Category)}
              >
                {CATEGORIES.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
            </Field>
            <button
              type="button"
              onClick={add}
              className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
            >
              Add
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-sm font-medium uppercase tracking-widest text-slate-500 mb-3">
            Category totals
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {CATEGORIES.map((c) => (
              <div
                key={c.value}
                className="rounded-md border border-slate-200 p-4"
              >
                <p className="text-xs text-slate-500">{c.label}</p>
                <p className="mt-1 font-semibold tabular-nums text-slate-900">
                  {formatCurrency(totals.byCat[c.value])}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-md border border-slate-200 bg-slate-50 p-4 flex items-baseline justify-between">
            <span className="text-sm font-medium text-slate-600">
              Total expenses
            </span>
            <span className="text-lg font-semibold tabular-nums text-slate-900">
              {formatCurrency(totals.grand)}
            </span>
          </div>
        </section>

        <section>
          <h2 className="text-sm font-medium uppercase tracking-widest text-slate-500 mb-3">
            All expenses
          </h2>
          {expenses.length === 0 ? (
            <p className="text-sm text-slate-500">
              No expenses yet. Add your first one above.
            </p>
          ) : (
            <table className="w-full text-sm border-t border-slate-200">
              <thead>
                <tr className="text-left text-xs uppercase tracking-widest text-slate-500">
                  <th className="py-2 font-medium">Name</th>
                  <th className="py-2 font-medium">Category</th>
                  <th className="py-2 font-medium text-right">Amount</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {expenses.map((e) => (
                  <tr key={e.id} className="border-b border-slate-200">
                    <td className="py-2 text-slate-800">{e.name}</td>
                    <td className="py-2 text-slate-600 capitalize">
                      {e.category}
                    </td>
                    <td className="py-2 text-right tabular-nums text-slate-800">
                      {formatCurrency(e.amount)}
                    </td>
                    <td className="py-2 text-right">
                      <button
                        type="button"
                        onClick={() => remove(e.id)}
                        className="text-slate-400 hover:text-slate-700 px-2"
                        aria-label="Remove"
                      >
                        &times;
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </div>
    </ToolShell>
  );
}

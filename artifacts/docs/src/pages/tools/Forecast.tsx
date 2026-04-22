import { useMemo, useState } from "react";
import {
  Field,
  ToolShell,
  formatCurrency,
  inputClass,
} from "@/components/ToolShell";
import { findTool } from "@/data/tools";

export default function ForecastTool() {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [months, setMonths] = useState("6");

  const data = useMemo(() => {
    const incomeNum = parseFloat(income) || 0;
    const expensesNum = parseFloat(expenses) || 0;
    const monthsNum = Math.max(1, Math.min(36, parseInt(months) || 1));
    const monthly = incomeNum - expensesNum;

    const rows = [] as { month: number; cumulative: number }[];
    let running = 0;
    for (let m = 1; m <= monthsNum; m++) {
      running += monthly;
      rows.push({ month: m, cumulative: running });
    }
    return {
      incomeNum,
      expensesNum,
      monthly,
      monthsNum,
      rows,
      total: running,
    };
  }, [income, expenses, months]);

  return (
    <ToolShell
      title="Cash Flow Forecast"
      description="Estimate where you'll be in a few months. Enter your expected monthly income and expenses below."
      relatedSlugs={findTool("forecast")?.relatedSlugs}
    >
      <div className="space-y-8">
        <section className="grid sm:grid-cols-3 gap-4">
          <Field label="Expected monthly income">
            <input
              type="number"
              min="0"
              step="0.01"
              className={inputClass}
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              placeholder="0.00"
            />
          </Field>
          <Field label="Expected monthly expenses">
            <input
              type="number"
              min="0"
              step="0.01"
              className={inputClass}
              value={expenses}
              onChange={(e) => setExpenses(e.target.value)}
              placeholder="0.00"
            />
          </Field>
          <Field label="Months to forecast" hint="Between 1 and 36">
            <input
              type="number"
              min="1"
              max="36"
              step="1"
              className={inputClass}
              value={months}
              onChange={(e) => setMonths(e.target.value)}
            />
          </Field>
        </section>

        <section className="rounded-lg border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-sm font-medium uppercase tracking-widest text-slate-500 mb-4">
            At a glance
          </h2>
          <dl className="grid sm:grid-cols-3 gap-4">
            <Stat label="Monthly profit / loss" value={formatCurrency(data.monthly)} negative={data.monthly < 0} />
            <Stat
              label={`Total over ${data.monthsNum} month${data.monthsNum === 1 ? "" : "s"}`}
              value={formatCurrency(data.total)}
              negative={data.total < 0}
            />
            <Stat
              label="Status"
              value={
                data.monthly > 0
                  ? "Profitable"
                  : data.monthly < 0
                    ? "Losing money"
                    : "Breaking even"
              }
              negative={data.monthly < 0}
            />
          </dl>
        </section>

        <section>
          <h2 className="text-sm font-medium uppercase tracking-widest text-slate-500 mb-3">
            Monthly summary
          </h2>
          <table className="w-full text-sm border-t border-slate-200">
            <thead>
              <tr className="text-left text-xs uppercase tracking-widest text-slate-500">
                <th className="py-2 font-medium">Month</th>
                <th className="py-2 font-medium text-right">Net this month</th>
                <th className="py-2 font-medium text-right">Cumulative</th>
              </tr>
            </thead>
            <tbody>
              {data.rows.map((r) => (
                <tr key={r.month} className="border-b border-slate-200">
                  <td className="py-2 text-slate-700">Month {r.month}</td>
                  <td
                    className={`py-2 text-right tabular-nums ${
                      data.monthly < 0 ? "text-red-600" : "text-slate-800"
                    }`}
                  >
                    {formatCurrency(data.monthly)}
                  </td>
                  <td
                    className={`py-2 text-right tabular-nums font-medium ${
                      r.cumulative < 0 ? "text-red-600" : "text-slate-900"
                    }`}
                  >
                    {formatCurrency(r.cumulative)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </ToolShell>
  );
}

function Stat({
  label,
  value,
  negative,
}: {
  label: string;
  value: string;
  negative?: boolean;
}) {
  return (
    <div>
      <p className="text-xs text-slate-500">{label}</p>
      <p
        className={`mt-1 text-lg font-semibold tabular-nums ${
          negative ? "text-red-600" : "text-slate-900"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

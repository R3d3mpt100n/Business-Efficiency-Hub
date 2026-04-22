import { useMemo, useState } from "react";
import {
  Field,
  ToolShell,
  formatCurrency,
  inputClass,
} from "@/components/ToolShell";
import { findTool } from "@/data/tools";

type LineItem = { id: number; description: string; amount: string };

export default function InvoiceTool() {
  const today = new Date().toISOString().slice(0, 10);

  const [businessName, setBusinessName] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("0001");
  const [date, setDate] = useState(today);
  const [notes, setNotes] = useState("");
  const [items, setItems] = useState<LineItem[]>([
    { id: 1, description: "", amount: "" },
  ]);

  const updateItem = (id: number, key: keyof LineItem, value: string) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, [key]: value } : i)),
    );
  };
  const addItem = () =>
    setItems((prev) => [
      ...prev,
      { id: Date.now(), description: "", amount: "" },
    ]);
  const removeItem = (id: number) =>
    setItems((prev) => prev.filter((i) => i.id !== id));

  const total = useMemo(
    () => items.reduce((sum, i) => sum + (parseFloat(i.amount) || 0), 0),
    [items],
  );

  const handlePrint = () => window.print();

  return (
    <ToolShell
      title="Invoice Generator"
      description="Fill in the details below. The preview updates as you type. Use 'Print / Save as PDF' to export."
      relatedSlugs={findTool("invoice")?.relatedSlugs}
      toolSlug="invoice"
    >
      <div className="grid lg:grid-cols-2 gap-8 print:grid-cols-1">
        <div className="space-y-5 print:hidden">
          <Field label="Your business name">
            <input
              className={inputClass}
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="Acme Co."
            />
          </Field>
          <Field label="Your business address (optional)">
            <textarea
              className={inputClass}
              rows={2}
              value={businessAddress}
              onChange={(e) => setBusinessAddress(e.target.value)}
              placeholder="Street, city, etc."
            />
          </Field>
          <Field label="Client name">
            <input
              className={inputClass}
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="Client name or company"
            />
          </Field>
          <Field label="Client address (optional)">
            <textarea
              className={inputClass}
              rows={2}
              value={clientAddress}
              onChange={(e) => setClientAddress(e.target.value)}
            />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Invoice #">
              <input
                className={inputClass}
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
              />
            </Field>
            <Field label="Date">
              <input
                type="date"
                className={inputClass}
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Field>
          </div>

          <div>
            <span className="block text-sm font-medium text-slate-700 mb-1.5">
              Line items
            </span>
            <div className="space-y-2">
              {items.map((i) => (
                <div key={i.id} className="flex gap-2">
                  <input
                    className={`${inputClass} flex-1`}
                    placeholder="Service or product description"
                    value={i.description}
                    onChange={(e) =>
                      updateItem(i.id, "description", e.target.value)
                    }
                  />
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    className={`${inputClass} w-28`}
                    placeholder="0.00"
                    value={i.amount}
                    onChange={(e) => updateItem(i.id, "amount", e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => removeItem(i.id)}
                    className="px-2 text-slate-400 hover:text-slate-700"
                    aria-label="Remove line"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={addItem}
              className="mt-3 text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              + Add line item
            </button>
          </div>

          <Field label="Notes (optional)">
            <textarea
              className={inputClass}
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Payment terms, thank-you note, etc."
            />
          </Field>

          <button
            type="button"
            onClick={handlePrint}
            className="w-full inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
          >
            Print / Save as PDF
          </button>
        </div>

        <div className="print:col-span-2">
          <div className="invoice-preview rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-start justify-between mb-8">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
                  Invoice
                </p>
                <p className="mt-1 text-2xl font-semibold text-slate-900">
                  #{invoiceNumber || "—"}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Date
                </p>
                <p className="mt-1 text-sm text-slate-700">{date || "—"}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">
                  From
                </p>
                <p className="font-medium text-slate-900">
                  {businessName || "Your business"}
                </p>
                {businessAddress && (
                  <p className="text-sm text-slate-600 whitespace-pre-line">
                    {businessAddress}
                  </p>
                )}
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">
                  Bill to
                </p>
                <p className="font-medium text-slate-900">
                  {clientName || "Client name"}
                </p>
                {clientAddress && (
                  <p className="text-sm text-slate-600 whitespace-pre-line">
                    {clientAddress}
                  </p>
                )}
              </div>
            </div>

            <table className="w-full text-sm mb-6">
              <thead>
                <tr className="border-b border-slate-300 text-left text-xs uppercase tracking-widest text-slate-500">
                  <th className="py-2 font-medium">Description</th>
                  <th className="py-2 font-medium text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {items.map((i) => (
                  <tr key={i.id} className="border-b border-slate-200">
                    <td className="py-3 text-slate-800">
                      {i.description || "—"}
                    </td>
                    <td className="py-3 text-right tabular-nums text-slate-800">
                      {formatCurrency(parseFloat(i.amount) || 0)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td className="pt-4 text-right font-medium text-slate-700">
                    Total
                  </td>
                  <td className="pt-4 text-right text-lg font-semibold tabular-nums text-slate-900">
                    {formatCurrency(total)}
                  </td>
                </tr>
              </tfoot>
            </table>

            {notes && (
              <div className="mt-6 pt-4 border-t border-slate-200">
                <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">
                  Notes
                </p>
                <p className="text-sm text-slate-700 whitespace-pre-line">
                  {notes}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </ToolShell>
  );
}

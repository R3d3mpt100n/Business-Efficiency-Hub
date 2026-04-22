import { useRoute, Link } from "wouter";
import BudgetTool from "./Budget";
import InvoiceTool from "./Invoice";
import ExpensesTool from "./Expenses";
import ForecastTool from "./Forecast";

export default function ToolRouter() {
  const [, params] = useRoute("/tools/:slug");
  const slug = params?.slug;

  switch (slug) {
    case "budget":
      return <BudgetTool />;
    case "invoice":
      return <InvoiceTool />;
    case "expenses":
      return <ExpensesTool />;
    case "forecast":
      return <ForecastTool />;
    default:
      return (
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h1 className="text-2xl font-semibold text-slate-900">Tool not found</h1>
          <Link
            href="/tools"
            className="inline-block mt-6 text-sm font-medium text-slate-900 underline"
          >
            Back to tools
          </Link>
        </div>
      );
  }
}
